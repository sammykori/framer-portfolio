"use server"
import { Resend } from "resend"
import { z } from "zod"
import { getPost } from "@/lib/blog"

type CommentState = {
    status: "idle" | "success" | "error"
    message: string
    // Echoed back so the form keeps what was typed after an error
    values?: { name: string; email: string; comment: string }
}

const commentSchema = z.object({
    slug: z.string().min(1),
    name: z.string().trim().min(1, "Please add your name.").max(100),
    email: z.email("Please enter a valid email address."),
    comment: z
        .string()
        .trim()
        .min(5, "Your comment is a little short.")
        .max(5000, "Please keep comments under 5000 characters."),
    // Honeypot: hidden from people, filled in by most spam bots
    website: z.string().max(0).optional(),
})

async function sendComment(
    _prev: CommentState,
    formData: FormData
): Promise<CommentState> {
    const parsed = commentSchema.safeParse(Object.fromEntries(formData))
    const values = {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        comment: String(formData.get("comment") ?? ""),
    }

    if (!parsed.success) {
        const issue = parsed.error.issues[0]
        // Pretend bots succeeded so they don't retry
        if (issue.path[0] === "website") {
            return { status: "success", message: "Thanks for your comment!" }
        }
        return { status: "error", message: issue.message, values }
    }

    const { slug, name, email, comment } = parsed.data
    const post = getPost(slug)
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.COMMENT_EMAIL_TO

    if (!post) {
        return {
            status: "error",
            message: "That post no longer exists.",
            values,
        }
    }
    if (!apiKey || !to) {
        console.error("RESEND_API_KEY or COMMENT_EMAIL_TO is not set")
        return {
            status: "error",
            message: "Comments are unavailable right now. Please try later.",
            values,
        }
    }

    const { error } = await new Resend(apiKey).emails.send({
        from: process.env.COMMENT_EMAIL_FROM ?? "Blog <onboarding@resend.dev>",
        to,
        replyTo: email,
        subject: `New comment on "${post.title}" from ${name}`,
        text: [
            `Post: ${post.title}`,
            `From: ${name} <${email}>`,
            "",
            comment,
        ].join("\n"),
    })

    if (error) {
        console.error("Failed to send comment email", error)
        return {
            status: "error",
            message:
                "Something went wrong sending your comment. Please try again.",
            values,
        }
    }

    return {
        status: "success",
        message: "Thanks for your comment! I'll read it and reply by email.",
    }
}

export { sendComment }
export type { CommentState }

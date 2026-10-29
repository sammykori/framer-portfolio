"use client"
import { useActionState } from "react"
import { Icon } from "@iconify/react"
import { sendComment, type CommentState } from "@/app/blog/actions"

const initialState: CommentState = { status: "idle", message: "" }

const inputClass =
    "w-full bg-transparent border border-orange-600 px-4 py-3 text-lg placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors"

function CommentForm({ slug }: { slug: string }) {
    const [state, formAction, pending] = useActionState(
        sendComment,
        initialState
    )

    if (state.status === "success") {
        return (
            <p
                role="status"
                className="border border-orange-600 p-6 text-lg flex items-center gap-3"
            >
                <Icon icon="mdi:check" className="text-orange-600 shrink-0" />
                {state.message}
            </p>
        )
    }

    return (
        <form action={formAction} className="flex flex-col gap-4">
            <input type="hidden" name="slug" value={slug} />
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                    <span className="text-xs tracking-widest text-gray-600">
                        NAME
                    </span>
                    <input
                        name="name"
                        required
                        maxLength={100}
                        autoComplete="name"
                        defaultValue={state.values?.name}
                        className={inputClass}
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-xs tracking-widest text-gray-600">
                        EMAIL
                    </span>
                    <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        defaultValue={state.values?.email}
                        className={inputClass}
                    />
                </label>
            </div>
            <label className="flex flex-col gap-2">
                <span className="text-xs tracking-widest text-gray-600">
                    COMMENT
                </span>
                <textarea
                    name="comment"
                    required
                    minLength={5}
                    maxLength={5000}
                    rows={6}
                    defaultValue={state.values?.comment}
                    className={`${inputClass} resize-y`}
                />
            </label>
            {state.status === "error" && (
                <p role="alert" className="text-red-700">
                    {state.message}
                </p>
            )}
            <div>
                <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex items-center gap-2 border border-black bg-black text-orange-100 px-6 py-3 hover:bg-orange-600 hover:border-orange-600 transition-colors disabled:opacity-60 disabled:cursor-wait"
                >
                    {pending ? "SENDING..." : "SEND COMMENT"}
                    <Icon icon="mdi:arrow-right" />
                </button>
            </div>
        </form>
    )
}

export default CommentForm

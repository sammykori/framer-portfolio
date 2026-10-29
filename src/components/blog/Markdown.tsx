import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import Image from "next/image"

const components: Components = {
    h2: ({ children }) => (
        <h2 className="text-2xl md:text-3xl font-bold pt-4">{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-xl md:text-2xl font-bold pt-2">{children}</h3>
    ),
    p: ({ children }) => <p>{children}</p>,
    a: ({ href, children }) => (
        <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="underline decoration-orange-600 underline-offset-4 hover:text-orange-600 transition-colors"
        >
            {children}
        </a>
    ),
    ul: ({ children }) => (
        <ul className="flex flex-col [&>li]:relative [&>li]:border-b [&>li]:border-orange-600/40 [&>li]:py-3 [&>li]:pl-8 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-orange-600 [&>li]:before:content-['→']">
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal ml-6 flex flex-col gap-2">{children}</ol>
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-orange-600 pl-6 text-xl md:text-2xl font-bold">
            {children}
        </blockquote>
    ),
    hr: () => <hr className="border-orange-600/40 my-4" />,
    code: ({ children }) => (
        <code className="bg-orange-200 px-1.5 py-0.5 text-base">
            {children}
        </code>
    ),
    img: ({ src, alt }) =>
        typeof src === "string" ? (
            <span className="block border border-orange-600 p-2">
                <Image
                    src={src}
                    alt={alt ?? ""}
                    width={0}
                    height={0}
                    sizes="(min-width: 896px) 896px, 100vw"
                    className="w-full h-auto bg-orange-200"
                />
            </span>
        ) : null,
}

function Markdown({ content }: { content: string }) {
    return (
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-800">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default Markdown

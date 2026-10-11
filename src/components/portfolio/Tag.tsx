type TagProps = {
    children: React.ReactNode
    variant?: "outline" | "solid"
}

function Tag({ children, variant = "outline" }: TagProps) {
    return (
        <span
            className={`inline-block whitespace-nowrap px-2 py-0.5 text-xs md:text-sm border ${
                variant === "solid"
                    ? "bg-orange-600 border-orange-600 text-orange-50"
                    : "border-orange-600 text-orange-700"
            }`}
        >
            {children}
        </span>
    )
}

export default Tag

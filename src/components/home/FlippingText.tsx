import { motion, type MotionValue } from "motion/react"

type FlippingTextProps = {
    children: React.ReactNode
    textOpacity: MotionValue<number>
    textRotate: MotionValue<number>
}

function FlippingText({
    children,
    textOpacity,
    textRotate,
}: FlippingTextProps) {
    return (
        <motion.h1
            style={{
                opacity: textOpacity,
                rotateX: textRotate,
                transformOrigin: "top",
            }}
            className="absolute block whitespace-nowrap"
        >
            {children}
        </motion.h1>
    )
}

export default FlippingText

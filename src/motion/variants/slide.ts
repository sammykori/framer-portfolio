import { transition } from "../transitions"
import { MotionVariants } from "../types"

export const slideUp: MotionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transition.base,
    },
    exit: {
        opacity: 0,
        y: 24,
        transition: transition.fast,
    },
}

export const slideDown = {
    hidden: { opacity: 0, y: -24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transition.base,
    },
}

import { ease } from "./easing"

export const transition = {
    fast: {
        duration: 0.2,
        ease: ease.smooth,
    },
    base: {
        duration: 0.4,
        ease: ease.smooth,
    },
    slow: {
        duration: 0.7,
        ease: ease.smooth,
    },
}

import { transition } from "../transitions"

export const fade = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: transition.base,
    },
    exit: {
        opacity: 0,
        transition: transition.fast,
    },
}

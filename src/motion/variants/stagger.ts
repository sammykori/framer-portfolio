export const staggerParent = {
    hidden: {},
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
}
export const staggerChildY = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}
export const staggerChildX = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
}

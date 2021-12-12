export const pageAnim = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.55 }
    }
}

export const titleAnim = {
    hidden: { y: 200 },
    show: {
        y: 0,
        transition: { duration: 1.2 }
    }
}

export const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } }
}
export const photoAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: { scale: 1, opacity: 1, ease: 'easeIn', transition: { duration: 1.2 } }
}
export const lineAnim = {
    hidden: { width: '0%', transition: { duration: 1.2 } },
    show: { width: '100%', transition: { duration: 1.2 } },
}

export const slowFade = {
    hidden: { opacity: 0, transition: { duration: 1.2, ease: 'easeOut' } },
    show: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
}
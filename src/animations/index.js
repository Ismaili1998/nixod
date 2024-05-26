import { easeOut } from "framer-motion";

export const scaleInOut = (index) => ({
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.85 },
    transition: { delay: index + 0.3, ease: easeOut },
});

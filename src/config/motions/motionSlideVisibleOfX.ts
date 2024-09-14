export function motionSlideVisibleOfX(x: string) {
    return {
        initial: {
            x: x, // Use the provided x value
            opacity: 0, // Initially invisible
        },
        enter: {
            x: '0%', // Move to the final position
            opacity: 1, // Fully visible
            transition: {
                duration: 1000, // Duration in seconds
                ease: 'ease-out', // Easing function
            },
        },
    };
}



export const motionCover = {
    initial: {
        opacity: 1,
        y: 10,
        'box-shadow': '0px 0px 10px #b74b4b',
    },
    enter: {

        opacity: 2,
        y: 0,
        'box-shadow': '10px 10px 20px rgba(255, 0, 0, 1)',
        transition: {
            delay: 1000,
            duration: 1500, // Duration in seconds
            repeat: Infinity, // Infinite repeat
            repeatType: 'reverse', // Reverse the animation back and forth
        },
    },
};

export const motionSlideVisibleLeft = {
    initial: {
        x: '-100%', // Start off-screen to the left
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
}


// motion-config.ts





export const motionPopSlowly2 = {
    initial: {
        opacity: 0, // Initially invisible
        y: 100, // Start off-screen (bottom)
        scale: 1, // Initial scale
    },
    enter: {
        opacity: 1, // Fully visible
        y: 0, // Move to the final position
        scale: 1, // Final scale
        transition: {
            duration: 1200, // Duration in seconds
            delay: 200, // Delay in seconds
            ease: 'ease-out', // Easing function
        },
    },
    variants: {
        custom: {
            scale: 2, // Scale factor for custom variant
        },
    },

}

export function motionPopSlowly(initialOfY: number, duration: number, delay: number) {
    return {
        initial: {
            opacity: 0, // Initially invisible
            y: initialOfY, // Start off-screen (bottom)
            scale: 1, // Initial scale
        },
        enter: {
            opacity: 1, // Fully visible
            y: 0, // Move to the final position
            scale: 1, // Final scale
            transition: {
                duration: duration, // Duration in seconds
                delay: delay, // Delay in seconds
                ease: 'ease-out', // Easing function
            },
        },
        visible: {
            opacity: 1, // Fully visible
            y: 0, // Move to the final position
            scale: 1, // Final scale
            transition: {
                duration: duration, // Duration in seconds
                delay: delay, // Delay in seconds
                ease: 'ease-out', // Easing function
            },
        },
        variants: {
            custom: {
                scale: 2, // Scale factor for custom variant
            },
        },
    };
}




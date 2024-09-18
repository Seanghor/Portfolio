

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

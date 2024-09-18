
// export function motionSlideVisibleOfX(x: string) {
//   return {
//     initial: {
//       x: x === 'left' ? '-100%' : '100%', // Slide from left or right based on input
//       opacity: 0, // Initially invisible
//     },
//     enter: {
//       x: '0%', // Final position (on-screen)
//       opacity: 1, // Fully visible
//       transition: {
//         duration: 1, // Duration of the animation in seconds
//         delay: 0, // No delay
//         ease: 'ease-out', // Easing function
//       },
//     },
//     exit: {
//       x: x === 'left' ? '-100%' : '100%', // Slide out to left or right based on input
//       opacity: 0, // Invisible when exiting
//       transition: {
//         duration: 1, // Duration of the exit animation
//         ease: 'ease-in', // Easing function for exit
//       },
//     },
//   };
// }

export function motionSlideVisibleOfX(x: string) {
  return {
      initial: {
          x: x, // Start position
          opacity: 0, // Initially invisible
      },
      enter: {
          x: '0%', // Final position
          opacity: 1, // Fully visible
          transition: {
              duration: 1000, // Duration in seconds
              ease: 'ease-out', // Easing function
          },

      },
      visble:{
        opacity:1,
        x:100,
        transition:{
          duration:1000,
          ease:'ease-out'
        }
      }
   
  };
}
  
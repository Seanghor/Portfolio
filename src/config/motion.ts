export default {
    mounted(el:any, binding:any) {
      const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the element is visible
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When element enters the viewport, trigger the motion
            binding.value(); // Call the animation or motion function
          }
        });
      }, options);
  
      observer.observe(el);
    }
  };
  
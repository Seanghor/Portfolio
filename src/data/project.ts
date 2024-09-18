import type { projectType } from "@/types/project.dto";
import { Technologies } from "./icon";

export const projectsData: projectType[] = [
    {
        id: 1,
        code: "01",
        title: "CamboShoe",
        role: "Frontend Developer",
        date: "July 08 ,2021",
        type: "vuejs",
        short_desc:
            "CamboShoe is a dynamic web application  designed to cater to footwear enthusiasts",
        description: `
        CamboShoe is a dynamic web application crafted with VueJS, Vuex, NuxtJS, and Vuetify. Designed to cater to footwear enthusiasts, it offers a wide array of shoe options, complete with detailed descriptions for each product. Customers have the convenience of making purchases using their PayPal accounts. Beyond shopping, CamboShoe also features a blog section that delves into the latest fashion trends, providing users with a comprehensive platform for both shopping and fashion insights.
      
        This web application serves as the culmination of my final project, where I have taken on the roles of both frontend and backend developer.s
       
    `,
        imageUrl: "/public/projects/camboshoe/poster.png",
        gitHubRepo: "https://github.com/Seanghor/Vue-crash-course",
        demo: "",

        // technologies: [
        //     Technologies.vuejs,
        //     Technologies.nuxtjs,
        //     Technologies.vuetify,
        //     Technologies.vuex,
        // ],
        technologies: [
            {
                name: "ReactJS",
                icon: Technologies.nextjs,
            },
            {
                name: "NextJS",
                icon: Technologies.nextjs,
            },
            {
                name: "NodeJS",
                icon: Technologies.javascript,
            }
        ],

        screenshots: [
            "/public/project/camboshoe/pic1.jpg",
            "/public/project/camboshoe/pic2.jpg",
            "/public/project/camboshoe/pic3.jpg",
            "/public/project/camboshoe/pic4.jpg",
            "/public/project/camboshoe/pic5.jpg",
            "/public/project/camboshoe/pic6.jpg",
            "/public/project/camboshoe/pic7.jpg",
            "/public/project/camboshoe/pic8.jpg",
            "/public/project/camboshoe/pic9.jpg",
            "/public/project/camboshoe/pic10.jpg",
            "/public/project/camboshoe/pic11.jpg",
        ],
    },

    {
        id: 2,
        code: "02",
        title: "KIT Point Management System V6",
        role: "Backend Developer",
        date: "July 08 ,2021",
        type: "vuejs",
        short_desc:
            "  KIT Point Management System  is an internship reporting system",
        description: `
            KIT Point Management System  is an internship reporting system designed for students in KIT to log their hours, track their performance, and access internship information, while enabling administrators to monitor student activities during their internships.
          
            This application was created as an internal project during my internship, where I was engaged as a Frontend developer. I've developed several features for KPMS and am currently in
            the process of migrating the system to a new technology to
            enhance its functionality and performance.
            
           
        `,
        imageUrl: "/public/projects/kpms/poster.jpg",
        gitHubRepo: "https://github.com/Seanghor/Vue-crash-course",
        demo: "",

        // technologies: [
        //     Technologies.nuxtjs,
        //     Technologies.tailwindcss,
        //     Technologies.javascript,
        //     Technologies.vuex,

        // ],
        technologies: [
            {
                name: "ReactJS",
                icon: Technologies.nextjs,
            },
            {
                name: "NextJS",
                icon: Technologies.nextjs,
            },
            {
                name: "NodeJS",
                icon: Technologies.javascript,
            }
        ],

        screenshots: [
            "/public/project/kpms/pic1.jpg",
            "/public/project/kpms/pic2.jpg",
            "/public/project/kpms/pic3.jpg",
            "/public/project/kpms/pic4.jpg",
            "/public/project/kpms/pic5.jpg",
            "/public/project/kpms/pic6.jpg",
            "/public/project/kpms/pic7.jpg",
            "/public/project/kpms/pic8.jpg",
        ],
    },

    {
        id: 3,
        code: "03",
        title: "Shuttle Bus",
        role: "Frontend Developer",
        date: "July 08 ,2021",
        type: "reactjs",
        short_desc:
            "Shuttle Bus is designed to simplify transportation for students and staff",
        description: `
        Shuttle Bus is designed to simplify transportation for students and staff, offering a booking system for shuttle services between locations, alongside administrative tools for efficient transportation schedule management.

        This application was created as an internal project during my internship, where I was engaged as a Frontend developer. Together with my team, I was involved in the maintenance of the system, focusing on enhancing and migrating both the user and admin interfaces to be more user-friendly and efficient. In addition to these improvements, we were tasked with integrating new features to meet evolving requirements, showcasing our collective effort to refine and advance the system's capabilities.
           
        `,
        imageUrl: "/public/projects/shuttlebus/poster.png",
        gitHubRepo: "https://github.com/Seanghor/Vue-crash-course",
        demo: "",

        // technologies: [
        //     Technologies.nextjs,
        //     Technologies.tailwindcss,
        //     Technologies.typescript,
        // ],
        technologies: [
            {
                name: "ReactJS",
                icon: Technologies.nextjs,
            },
            {
                name: "NextJS",
                icon: Technologies.nextjs,
            },
            {
                name: "NodeJS",
                icon: Technologies.javascript,
            }
        ],

        screenshots: [
            "/public/project/shuttlebus/pic1.jpg",
            "/public/project/shuttlebus/pic2.jpg",
            "/public/project/shuttlebus/pic3.jpg",
            "/public/project/shuttlebus/pic4.jpg",
            "/public/project/shuttlebus/pic5.jpg",
            "/public/project/shuttlebus/pic6.jpg",
            "/public/project/shuttlebus/pic7.jpg",
            "/public/project/shuttlebus/pic8.jpg",
            "/public/project/shuttlebus/pic9.jpg",
            "/public/project/shuttlebus/pic10.jpg",
            "/public/project/shuttlebus/pic11.jpg",

        ],
    },


    {
        id: 4,
        code: "04",
        title: "Engineernest",
        role: "Fullstack Developer",
        date: "July 08 ,2021",
        type: "reactjs",
        short_desc:
            "Engineernest is designed to help engineers find good job opportunities and startups",
        description: `
        Engineernest is designed to help engineers find good job opportunities and startups hire skilled workers without overspending. This platform makes it easier for both groups to connect and meet their needs. 
    
              
        This application was created as a client project during my internship, where my role was primarily that of a Frontend developer. In addition to my development duties, I also contributed to the UX/UI aspect of the project, assisting my team in designing user-friendly and aesthetically pleasing interfaces.
      
            `,
        imageUrl: "/public/projects/engineernest/poster.jpg",
        gitHubRepo: "https://github.com/Seanghor/Vue-crash-course",
        demo: "",
        technologies: [
            {
                name: "ReactJS",
                icon: Technologies.nextjs,
            },
            {
                name: "NextJS",
                icon: Technologies.nextjs,
            },
            {
                name: "NodeJS",
                icon: Technologies.javascript,
            }
        ],



        screenshots: [
            "/public/project/engineernest/pic1.jpg",
            "/public/project/engineernest/pic2.jpg",
            "/public/project/engineernest/pic3.jpg",
            "/public/project/engineernest/pic4.jpg",
            "/public/project/engineernest/pic5.jpg",
            "/public/project/engineernest/pic6.jpg",
            "/public/project/engineernest/pic7.jpg",
            "/public/project/engineernest/pic8.jpg",
        ],
    },
];

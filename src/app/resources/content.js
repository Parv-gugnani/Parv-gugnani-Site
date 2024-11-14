import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Parv',
    lastName:  'Gugnani',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/India', 
    languages: ['Hindi', 'English']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>Join my newsletter for insights on Web Development, creative engineering, and the latest in frameworks like Next.js and Node.js!</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Parv-gugnani',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/parv-gugnani/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/parv_developer',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:parv18788@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full Stack Developer</>,
    subline: <>I'm Parv, a Full Stack Developer with a passion for <InlineCode>Next.js</InlineCode> and backend technologies.<br/> I love building impactful projects and experimenting with new tech stacks 🚀.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/parv7/'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Parv is an India-based full-stack developer with a passion for building responsive, scalable web applications. Skilled in React, Node.js, and MongoDB, his work focuses on creating seamless user experiences and efficient solutions. Parv enjoys exploring new technologies and crafting applications that merge creativity with functionality.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'MillionNeuron',
                timeframe: 'April 2022 - Jun 2022',
                role: 'Game Developer Intern',
                achievements: [
                    <>Collaborated with the development team to create an educational game using Blueprints and C++, enhancing students' learning experience through practical application.</>,
                    <>Contributed to the development of showcase demos for investors, demonstrating the game's potential and value proposition.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'MillionNeuron',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Intellichains',
                timeframe: 'October 2021 - December 2021',
                role: 'VFX / Graphic Designer',
                achievements: [
                    <>Produced engaging game trailers for upcoming releases as a VFX artist, leveraging industry-standard software to create high-quality visuals.</>,
                    <>Designed professional marketing materials, including PDFs, designs, and business cards, as part of the graphic design team.</>
                ],
                images: []
            },
            {
                company: 'Digital Fruition',
                timeframe: 'August 2021 - September 2021',
                role: 'Graphic Design Intern',
                achievements: [
                    <>Developed visually compelling social media content to increase brand engagement.</>,
                    <>Created over 600 posts for the company's social media, significantly boosting online presence.</>
                ],
                images: []
            },
            {
                company: 'Nirmal Sanstha',
                timeframe: 'July 2021',
                role: 'Volunteer Graphic Designer',
                achievements: [
                    <>Designed informative posters for the NGO's social media handles to raise awareness about their initiatives and activities.</>
                ],
                images: []
            }
        ]        
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Sdvm',
                description: <>Class XII | 8 CGPA | 2023</>,
            },
            {
                name: 'IGNOU',
                description: <>B.C.A., Computer Applications | 7 CGPA | 2023 - 2026</>,
            },
            {
                name: 'Scaler',
                description: <>PG Diploma, Software Engineering | 7 CGPA | 2024 - 2025</>,
            }
        ]    
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical Skills',
        skills: [
            {
                title: 'React.js',
                description: <>Proficient in building dynamic, responsive UIs with React.js for web applications.</>,
                images: []
            },
            {
                title: 'Node.js',
                description: <>Experienced in backend development with Node.js, creating REST APIs and handling server-side logic.</>,
                images: []
            },
            {
                title: 'JavaScript (ES5/ES6)',
                description: <>Skilled in JavaScript, with a strong understanding of ES6+ features for modern web development.</>,
                images: []
            },
            {
                title: 'MongoDB',
                description: <>Hands-on experience with MongoDB for efficient data management and schema design in full-stack applications.</>,
                images: []
            },
            {
                title: 'TypeScript',
                description: <>Experienced in TypeScript for building robust, scalable applications with type safety.</>,
                images: []
            },
            {
                title: 'TailwindCSS',
                description: <>Skilled in TailwindCSS for rapid, responsive UI design with utility-first CSS.</>,
                images: []
            },
            {
                title: 'Express.js',
                description: <>Experienced in Express.js for developing RESTful APIs and managing backend infrastructure.</>,
                images: []
            },
            {
                title: 'MySQL',
                description: <>Knowledgeable in MySQL for relational database management and efficient query design.</>,
                images: []
            },
            {
                title: 'Redux',
                description: <>Experienced with Redux for state management in complex React applications.</>,
                images: []
            },
            {
                title: 'Prisma ORM',
                description: <>Skilled in Prisma ORM for database management and schema modeling with TypeScript integration.</>,
                images: []
            }
        ]
    }
    
    //         {
    //             title: 'Next.js',
    //             description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
    //             images: [
    //                 {
    //                     src: '/images/projects/project-01/cover-04.jpg',
    //                     alt: 'Project image',
    //                     width: 16,
    //                     height: 9
    //                 },
    //             ]
    //         }
    //     ]
    // }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
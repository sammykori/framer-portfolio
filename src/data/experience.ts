import { image } from "motion/react-client"

const experienceData = [
    {
        company: "Cinolla Software (A.K.A Beetleweb Ltd)",
        role: "Senior Frontend Developer",
        duration: "Jan, 2025 - Jan, 2026",
        responsibilities: [
            "Architected and led the frontend developmentof the 'Instructor App' translating complex Figma prototypes into a production-ready, mobile-responsive interface.",
            "Engineered secure authentication flows and integrated cloud services, ensuring robust user data protection and seamless system scalability.",
            "Modernized legacy architecture by rebuilding core component libraries, resulting in improved maintainability and faster feature release cycle.",
            "Defined UI/UX Brand Guidelines within Figma and implemented them as a reusable, modular component library to ensure design consistency across all platforms.",
        ],
        imageUrl: "/cinolla.svg",
    },
    {
        company: "Quantum Marketing (Europe) Ltd",
        role: "Full Stack Developer",
        duration: "Dec, 2022 - Dec, 2024",
        responsibilities: [
            "Designed and developed secure and high-quality code for responsive web and mobile applications using Next.js, TypeScript, React Native, and backend technologies. ",
            "Built a bridge between Frontend and DevOps by managing containerized environments (Docker) and automating deployment pipelines for high-traffic client apps.",
            "Developed internal workflow automation tools that reduced manual data entry and improved cross-departmental efficiency.",
            "Ensured 99.9% operational stability by implementing Test-Driven Development (TDD) and monitoring performance metrics for cloud-deployed applications.",
        ],
        imageUrl: "/quantum.jpg",
    },
    {
        company: "Casting Africa",
        role: "Co-Founder & Senior Frontend Developer",
        duration: "Jul, 2021 - Nov, 2022",
        responsibilities: [
            "Spearheaded the technical roadmap and frontend architecture for a multi-national talent portal, successfully scaling the platform to serve users across five countries.",
            "Directed a distributed team of developers through all phases of the SDLC, managing sprint planning and code reviews to ensure high-quality, timely delivery.",
            "Designed scalable frontend architectures that integrated seamlessly with complex backend APIs, ensuring low latency and a smooth user experience for creators and agents.",
            "Balanced hands-on technical execution with high-level business strategy, translating stakeholder requirements into actionable engineering tasks.",
        ],
        imageUrl: "/ca.png",
    },
    {
        company: "National Communications Authority (NCA)",
        role: "National Service Personnel",
        duration: "Sept. 2019 - Aug. 2020",
        responsibilities: [
            "Developed a specialized web application to geographically map communication towers across Ghana, improving national infrastructure tracking.",
            "Designed and implemented a secure licensing database to manage and track authorizations issued by the NCA.",
            "Contributed technical insights during regulatory and license meetings, bridging the gap between policy and technical implementation.",
            "Streamlined internal reporting workflows by digitizing paper-based records into a searchable, web-based platform.",
        ],
        imageUrl: "/nca.png",
    },
]

const educationData = [
    {
        institution: "Bournemouth University",
        degree: "Master of Cybersecurity and Human Factors (With Merit)",
        duration: "2021 - 2023",
        image: "/bu.png",
    },
    {
        institution: "Lancaster University Ghana",
        degree: "Bachelor of Science in Computer Science (First Class Honors)",
        duration: "2015 - 2019",
        image: "/lug.jpg",
    },
    {
        institution: "Tema Secondary School",
        degree: "WASSCE: General Science",
        duration: "2012 - 2015",
        image: "/tss.webp",
    },
]

export { experienceData, educationData }

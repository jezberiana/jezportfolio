import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Jezrelle Cris',
    lastName: 'Beriana',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Engineer & Art Director',
    avatar: '/images/avatar.jpg',
    languages: ['English', 'Cebuano', 'Tagalog', 'Ilonggo'] // Updated languages to reflect your background
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally share thoughts on design, technology, and the intersection of creativity, advocacy, and engineering.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/jezberiana',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/jezberiana/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/jezberiana',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:beriana.jezrelle14@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software engineer, designer, and advocate</>,
    subline: <>Hi, I'm Jezrelle! I lead projects like <InlineCode>BUDDLE</InlineCode> and empower creative solutions. I craft impactful user experiences and explore tech's potential to drive social change.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, a ${person.role} from Cagayan de Oro, Philippines.`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/jezberiana',
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Jezrelle Cris Beriana is a design engineer with a passion for blending technology, advocacy, and creativity. Her work spans mobile app development, graphic design, and fostering inclusive tech communities.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'BUDDLE',
                timeframe: '2023 - Present',
                role: 'CEO and Lead Developer',
                achievements: [
                    <>Developing features to enhance user engagement, aiming to increase accessibility and adoption.</>,
                    <>Early testing has demonstrated significant potential for boosting academic performance through personalized support.</>
                ],
                images: []
            },
            {
                company: 'FAESO',
                timeframe: '2023 - 2024',
                role: 'Public Relations Officer',
                achievements: [
                    <>Orchestrated events that emphasized inclusivity and student empowerment, garnering significant student participation.</>,
                    <>Led design initiatives to enhance the organization's brand identity.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'University of Science and Technology of Southern Philippines (USTP)',
                description: <>Pursuing a degree in Computer Science.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical skills',
        skills: [
            {
                title: 'Frontend Development',
                description: <>Building cross-platform apps using React Native and TypeScript for modern user experiences.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'BUDDLE App Development',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Graphic Design',
                description: <>Expertise in creating compelling visuals using tools like Adobe Suite and Figma.</>,
                images: []
            }
        ]
    }
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
}
export { person, social, newsletter, home, about, work };
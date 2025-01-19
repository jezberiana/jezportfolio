import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: 'Jezrelle Cris',
  lastName: 'Beriana',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Software Engineer & Art Director',
  avatar: '/images/avatar.jpg',
  languages: ['English', 'Cebuano', 'Tagalog', 'Ilonggo'], // Reflecting your background
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally share thoughts on design, technology, and the intersection of creativity, advocacy, and engineering.</>,
};

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
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer, designer, and advocate</>,
  subline: <>Hi, I'm Jezrelle! I lead projects like <InlineCode>BUDDLE</InlineCode> and empower creative solutions. I craft impactful user experiences and explore tech's potential to drive social change.</>,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/jezberiana",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jezrelle Cris Beriana is a dedicated Software Engineer and Art Director who bridges the gap
        between technology and creativity. Her passion lies in crafting user-centric solutions and 
        leveraging technology to drive meaningful impact in society.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Buddle",
        timeframe: "2024 - Present",
        role: "CEO & Project Lead",
        achievements: [
          <>
            Spearheaded the development of Buddle, a React Native-based tutorial booking platform,
            fostering educational growth within SCITC.
          </>,
          <>
            Managed cross-functional teams and ensured alignment between design, technology, and user
            needs, resulting in a platform that is both efficient and impactful.
          </>,
        ],
        images: [],
      },
      {
        company: "FAESO",
        timeframe: "2023 - Present",
        role: "Public Relations Officer",
        achievements: [
          <>
            Led the design and execution of creative campaigns, enhancing the organization's presence
            and fostering engagement among students and stakeholders.
          </>,
          <>
            Initiated innovative communication strategies, aligning them with advocacy goals such as
            peace and security awareness.
          </>,
        ],
        images: [],
      },
      {
        company: "SCITC",
        timeframe: "2023 - Present",
        role: "Graphic Designer & Head of Academic Affairs",
        achievements: [
          <>
            Oversaw the design and branding of institutional campaigns and programs, ensuring a
            consistent and appealing visual identity.
          </>,
          <>
            Conceptualized and organized academic initiatives that empower students to excel in
            technology and creativity.
          </>,
        ],
        images: [],
      },
      {
        company: "UDA",
        timeframe: "2023 - Present",
        role: "Art Director in Graphic Design",
        achievements: [
          <>
            Directed the visual aspects of multiple high-profile projects, establishing cohesive and
            impactful designs that resonate with diverse audiences.
          </>,
          <>
            Collaborated with multidisciplinary teams to push the boundaries of creativity while
            maintaining functional designs.
          </>,
        ],
        images: [],
      },
      {
        company: "GSDC-USTP",
        timeframe: "2023 - 2024",
        role: "Graphic Designer",
        achievements: [
          <>
            Delivered compelling visual content for organizational initiatives, contributing to the
            overall success of events and campaigns.
          </>,
          <>
            Strengthened the organization's branding by producing high-quality digital assets and
            innovative designs.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Science and Technology of Southern Philippines (USTP)",
        description: <>Currently pursuing a degree in Computer Science while actively participating in leadership roles and technical projects.</>,
      },
      {
        name: "Southern Christian College (SCC)",
        description: <>Completed Senior High School under the STEM strand, laying the foundation for a strong background in science, technology, engineering, and mathematics.</>,
      },
      {
        name: "Independent Learning",
        description: <>Continuously enhancing skills in React Native, design systems, and project management through self-study and certifications.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Building next-gen apps with Next.js + Once UI + Supabase.</>,
        images: [],
      },
      {
        title: "React Native",
        description: <>Expertise in developing mobile applications with React Native and TypeScript.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
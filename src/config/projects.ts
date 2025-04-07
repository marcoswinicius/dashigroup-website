import { Project } from '@/types/project';

export type ProjectCategory = 'ALL WORKS' | 'REINFORCEMENT DETAILING Civil' | 'STEEL FIXING' | 'GROUNDWORK AND FALSEWORK';

export const projects: Project[] = [
    {
        id: 1,
        title: "Data Center",
        slug: "data-center",
        image: "/images/data-science.jpg",
        shortDescription: "A high-tech hub rising with precision-engineered rebar solutions. Under construction.",
        detailedDescription: "The Data Center project is a state-of-the-art facility designed to meet the demands of tomorrow's digital world. At its core is our expertise in installing reinforcing bars (rebars) to ensure unyielding structural integrity. Working hand-in-hand with the design and engineering teams, we interpret intricate rebar placement drawings and specifications, using approved tools and materials to deliver precision at every step. This seamless coordination ensures a robust framework that supports the facility's advanced infrastructure. Currently under construction, this project showcases Dashi Group's ability to tackle high-stakes builds with technical mastery and collaborative efficiency.",
        services: ["REINFORCEMENT DETAILING", "STEEL FIXING"],
        status: "Under Construction"
    },
    {
        id: 2,
        title: "Panorama St. Paul's",
        slug: "panorama-st-pauls",
        image: "/images/panorama-st-paul.png",
        shortDescription: "A modern office tower in London's heart, delivered on time after 92 weeks.",
        detailedDescription: "Located at 81 Newgate Street, Panorama St. Paul's is a contemporary commercial office building rising in one of London's busiest urban hubs. This project demanded innovative solutions to integrate new sections with the existing structure—a challenge our team met head-on. Central to the build was the meticulous installation of reinforcing bars (rebars), providing strength and continuity across the design. Embracing sustainable practices, we minimized environmental impact while prioritizing the safety of workers and the public. Completed in 92 weeks, Panorama St. Paul's stands as a testament to our ability to deliver complex projects on time, meeting every milestone with precision and quality.",
        services: ["STEEL FIXING"],
        status: "Completed"
    },
    {
        id: 3,
        title: "Ashley Road",
        slug: "ashley-road",
        image: "/images/ahsley-road.jpg",
        shortDescription: "Nine residential blocks in North London, blending complexity with durability. Under construction.",
        detailedDescription: "Ashley Road is a bold residential development in North London, featuring nine blocks ranging from 4 to 13 storeys. The project's intricate foundation design—complete with complex ground beams and pile caps—required exceptional precision in rebar placement, especially to connect the structures to their balconies. Our team's expertise ensured every detail was executed flawlessly, laying the groundwork for safe, durable, and welcoming homes. Currently under construction, Ashley Road reflects Dashi Group's dedication to blending technical skill with a vision for modern living, creating residences that stand strong for generations.",
        services: ["STEEL FIXING"],
        status: "Under Construction"
    },
    {
        id: 4,
        title: "Lombard Square",
        slug: "lombard-square",
        image: "/images/lombard-square.jpg",
        shortDescription: "Innovative living with green design, completed in 79 weeks.",
        detailedDescription: "Lombard Square redefines residential development by merging innovative architecture with sustainable principles. This project navigated a web of complexities—transfer beams, slabs, RC columns, and core walls—demanding precise rebar installation and prefabrication. Our team coordinated closely with construction and lifting crews, adhering to strict safety standards while delivering high-quality results. Completed in 79 weeks as planned, Lombard Square exemplifies our ability to turn ambitious designs into reality. With a focus on green living and structural excellence, this development sets a new benchmark for urban residential spaces.",
        services: ["STEEL FIXING"],
        status: "Completed"
    },
] as const; 
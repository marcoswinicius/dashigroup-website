import { Service } from '@/types/service';

export const services: Service[] = [
    {
        id: 1,
        title: "Reinforcement Detailing Civil Engineering & Consulting",
        slug: "reinforcement-detailing",
        image: "/images/reinforce-ment-detailing.jpg",
        shortDescription: "Cutting-edge RC detailing powered by the latest 2D and 3D software, tailored for complex projects.",
        detailedDescription: "As an experienced construction company, Dashi Group can provide comprehensive reinforced concrete (RC) detailing services by using 2D and 3D latest software for a wide range of complex projects – from large-scale commercial infrastructure to residential developments. By integrating the 3D reinforcement details, we can ensure seamless coordination across all architectural, structural, and MEP components. By visualizing the reinforcement in the context of the full building model, you can better assess constructability, identify potential installation challenges, and develop more efficient construction sequencing and methods. Drawing on over two decades of hands-on experience across diverse structural applications, the Dashi team has developed deep expertise in RC design and detailing. By anticipating construction challenges early in the design phase, Dashi’s team can optimise and implement on-site RC detailing. This proactive approach helps clients avoid costly delays, rework, and cost escalation during the build process."
    },
    {
        id: 2,
        title: "Steel Fixing",
        slug: "steel-fixing",
        image: "/images/steel-fixing.jpg",
        shortDescription: "Precision-driven steel fixing delivered by a skilled, cohesive team committed to safety, quality, and timeliness.",
        detailedDescription: "Our team of experienced professional steel fixers is dedicated to ensuring your construction project is completed to the highest safety and quality standards, on time, and within cost projection.\n\nOur multidisciplinary team works together cohesively to ensure that every aspect of your project is executed with precision and excellence.Each professional brings unique skills and knowledge to the table, creating a positive working environment where expertise is shared.They will place rebar according to the reinforcement detail design and design specifications, ensuring optimal reinforcement."
    },
    {
        id: 3,
        title: "Groundwork & Falsework",
        slug: "groundwork-falsework",
        image: "/images/groundwork-falsework.jpg",
        shortDescription: "Robust, versatile solutions that lay the foundation for success and support every phase of construction.",
        detailedDescription: "Dashi Group prides itself on using the most up-to-date and efficient groundwork systems available in the industry. By utilising a method renowned for its strength, durability, and versatility. Our expertise in this area ensures that we deliver robust structural frameworks that form the backbone of various buildings (commercial and residential) and infrastructures. This includes assessing the project site by testing the soil and preparing the ground for construction, managing foundational work, bulk excavation, earthwork, cutting piles and drainage."
    }
] as const;

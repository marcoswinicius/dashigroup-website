export interface BannerSlide {
  id: number;
  image: string;
  title: string;
  title_two: string;
  subtitle: string;
  button_link: string;
  button_name: string;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: '/images/construction-banner.jpg',
    title: 'Excellence in',
    title_two: 'Everything We Do',
    subtitle: 'We partner with our clients to transform visions intolasting legacies, creating projects that empower communities and shape a brighter future.',

    button_link: "/about",
    button_name: "About Us"
  },
  {
    id: 2,
    image: '/images/group-engineers-banner.jpg',
    title: 'What',
    title_two: 'We Do',
    subtitle: 'We deliver innovative construction solutions, specializing in reinforced concrete frameworks, steel fixing, and RC detailing, ensuring every project meets the highest standards of quality and efficiency.',
    button_link: "/services",
    button_name: "Our services"
  },
  {
    id: 3,
    image: '/images/building.jpg',
    title: 'Dashi Group:',
    title_two: 'Precision & Expertise',
    subtitle: 'With over two decades of expertise, we craft sustainable, high-profile projects that anticipate challenges, optimize designs, and leave a lasting impact on the world around us.',
    button_link: "/projects",
    button_name: "Our Projects"
  },
];

export const SLIDE_DURATION = 5000;
export interface BannerSlide {
  id: number;
  image: string;
  title: string;
  title_two: string;
  subtitle: string;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: '/images/construction-banner.jpg',
    title: 'Excellence in',
    title_two:'Everything We Do',
    subtitle: 'We partner with our clients to transform visions intolasting legacies, creating projects that empower communities and shape a brighter future.',
  },
  {
    id: 2,
    image: '/images/group-engineers-banner.jpg',
    title: 'What',
    title_two:'We Do',
    subtitle: 'We deliver innovative construction solutions, specializing in reinforced concrete frameworks, steel fixing, and RC detailing, ensuring every project meets the highest standards of quality and efficiency.',
  },
  {
    id: 3,
    image: '/images/building.jpg',
    title: 'Building',
    title_two:'The Future',
    subtitle: 'With over two decades of expertise, we craft sustainable, high-profile projects that anticipate challenges, optimize designs, and leave a lasting impact on the world around us.',
  },
];

export const SLIDE_DURATION = 5000; // 5 segundos por slide 
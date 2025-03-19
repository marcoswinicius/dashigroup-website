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
    title: 'Lorem',
    title_two:'Ipsum',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec condimentum felis. Proin mollis in lectus sed ultricies. Integer ac ullamcorper dui.',
  },
  {
    id: 3,
    image: '/images/construction-people.jpg',
    title: 'Just',
    title_two:'Do It',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec condimentum felis. Proin mollis in lectus sed ultricies. Integer ac ullamcorper dui.',
  },
];

export const SLIDE_DURATION = 5000; // 5 segundos por slide 
export interface Project {
    id: number;
    title: string;
    slug?: string;
    image: string;
    shortDescription?: string;
    detailedDescription: string;
    services?: string[];
    status?: 'Completed' | 'Under Construction';
    category?: string;
    link?: string;
} 
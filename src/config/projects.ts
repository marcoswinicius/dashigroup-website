export type ProjectCategory = 'ALL WORKS' | 'REINFORCEMENT DETAILING Civil' | 'STEEL FIXING' | 'GROUNDWORK AND FALSEWORK';

export interface Project {
    id: number;
    title: string;
    image: string;
    category: ProjectCategory;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Projeto de Reforço Estrutural',
        image: '/images/construction-people.jpg',
        category: 'REINFORCEMENT DETAILING Civil',
        link: '/projects/reinforcement-1'
    },
    {
        id: 2,
        title: 'Instalação de Aço Estrutural',
        image: '/images/construction-people.jpg',
        category: 'STEEL FIXING',
        link: '/projects/steel-1'
    },
    {
        id: 3,
        title: 'Fundação e Estrutura Temporária',
        image: '/images/construction-people.jpg',
        category: 'GROUNDWORK AND FALSEWORK',
        link: '/projects/groundwork-1'
    },
    {
        id: 4,
        title: 'Projeto de Reforço Estrutural 2',
        image: '/images/construction-people.jpg',
        category: 'REINFORCEMENT DETAILING Civil',
        link: '/projects/reinforcement-2'
    },
    {
        id: 5,
        title: 'Instalação de Aço Estrutural 2',
        image: '/images/construction-people.jpg',
        category: 'STEEL FIXING',
        link: '/projects/steel-2'
    },
    {
        id: 6,
        title: 'Fundação e Estrutura Temporária 2',
        image: '/images/construction-people.jpg',
        category: 'GROUNDWORK AND FALSEWORK',
        link: '/projects/groundwork-2'
    }
]; 
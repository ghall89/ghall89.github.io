import HomeSection from '../components/sections/HomeSection.astro';
import AboutSection from '../components/sections/AboutSection.astro';
import SkillSection from '../components/sections/SkillSection.astro';
import ProjectsSection from '../components/sections/ProjectsSection.astro';
import ContactSection from '../components/sections/ContactSection.astro';
import FooterSection from '../components/sections/FooterSection.astro';

export interface Section {
	Component: (p: Record<string, any>) => any;
	key: string;
	icon?: string;
	greenBackdrop: boolean;
}

export const sections: Section[] = [
	{
		Component: HomeSection,
		key: 'home',
		icon: 'nav/house-solid',
		greenBackdrop: false,
	},
	{
		Component: AboutSection,
		key: 'about',
		icon: 'nav/circle-info-solid',
		greenBackdrop: true,
	},
	{
		Component: SkillSection,
		key: 'skills',
		icon: 'nav/wrench-solid',
		greenBackdrop: false,
	},
	{
		Component: ProjectsSection,
		key: 'projects',
		icon: 'nav/briefcase-solid',
		greenBackdrop: false,
	},
	// {
	// 	Component: ContactSection,
	// 	key: 'contact',
	// 	icon: 'nav/envelope-solid',
	// 	greenBackdrop: false,
	// },
	{
		Component: FooterSection,
		key: 'footer',
		greenBackdrop: false,
	},
];

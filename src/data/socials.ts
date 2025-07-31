export interface SocialButtonProps {
	name: string;
	icon: string;
	href: string;
	delay?: string;
}

export const socials: SocialButtonProps[] = [
	{
		name: 'GitHub',
		icon: 'social/github',
		href: 'https://github.com/ghall89',
		delay: 'motion-delay-500',
	},
	{
		name: 'LinkedIn',
		icon: 'social/linkedin',
		href: 'https://www.linkedin.com/in/ghalldev/',
		delay: 'motion-delay-700',
	},
];

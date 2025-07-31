export interface Skill {
	label: string;
	icon: string;
}

export interface SkillList {
	[key: string]: Skill[];
}

export const skills: SkillList = {
	'Front-End': [
		{ label: 'NextJS', icon: 'nextjs' },
		{ label: 'React', icon: 'react' },
		{ label: 'Astro', icon: 'astrojs' },
		{ label: 'Material UI', icon: 'material-ui' },
		{ label: 'Tailwind CSS', icon: 'tailwind' },
	],
	'Back-End': [
		{ label: 'PostgreSQL', icon: 'postgresql' },
		{ label: 'Prisma', icon: 'prisma' },
		{ label: 'Drizzle', icon: 'drizzle' },
		{ label: 'Node', icon: 'nodejs' },
		{ label: 'Express', icon: 'express' },
	],
	Languages: [
		{ label: 'JavaScript', icon: 'javascript' },
		{ label: 'TypeScript', icon: 'typescript' },
		{ label: 'Swift', icon: 'swift' },
	],
};

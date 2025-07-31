export interface Project {
	name: string;
	github: string;
	summary: string;
	skills: string[];
}

export const projects: Project[] = [
	{
		name: 'bgg-client',
		github: 'https://github.com/ghall89/bgg-client',
		summary:
			'A Node.js package to call the BoardGameGeek.com API and convert the response from XML to JSON.',
		skills: ['TypeScript', 'Rest API'],
	},
	{
		name: 'AutoDock',
		github: 'https://github.com/ghall89/autodock',
		summary:
			'A utility for automatically hiding and showing the MacOS Dock based on connected display size. ',
		skills: ['Swift', 'SwiftUI'],
	},
];

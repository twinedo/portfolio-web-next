export interface IProject {
	bucket: string;
	description: string;
	display: string;
	id: string;
	key: string;
	link_appstore: string;
	link_playstore: string;
	link_website: string;
	name: string;
	platform: 'mobile' | 'website';
	tag: string;
	year: number;
}

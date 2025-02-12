import { writable } from 'svelte/store';

export let navBar = writable('📚 대학교 배경화면 다운받기 🧑‍🎓');
export type univs =
	| 'seoul'
	| 'yonsei'
	| 'korea'
	| 'sogang'
	| 'sungkyunkwan'
	| 'hanyang'
	| 'chungang'
	| 'kyunghee'
	| 'hufs'
	| 'uos'
	| 'postech'
	| 'kaist';
export type Bg = {
	lightPhone: string;
	lightTab: string;
	darkPhone: string;
	darkTab: string;
	koreanName: string;
};

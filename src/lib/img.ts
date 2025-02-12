import type { Component } from 'svelte';

type Bg = {
	lightPhone: string;
	lightTab: string;
	darkPhone: string;
	darkTab: string;
	koreanName: string;
};

export const backgrounds: {
	seoul: Bg;
	korea: Bg;
	yonsei: Bg;
	sogang: Bg;
	sungkyunkwan: Bg;
	hanyang: Bg;
	kaist: Bg;
	postech: Bg;
	chungang: Bg;
	kyunghee: Bg;
	hufs: Bg;
	uos: Bg;
} = {
	seoul: {
		lightPhone: 'https://i.ibb.co/hxG7CcPn/Frame-44.png',
		lightTab: 'https://i.ibb.co/LT3sc3G/Frame-52.png',
		darkPhone: 'https://i.ibb.co/p6bKhbwd/Frame-36.png',
		darkTab: 'https://i.ibb.co/C51333pX/Frame-60.png',
		koreanName: '서울대학교'
	},
	korea: {
		lightPhone: 'https://i.ibb.co/yBXcQ3zN/Frame-48.png',
		lightTab: 'https://i.ibb.co/spfY6XXH/Frame-56.png',
		darkPhone: 'https://i.ibb.co/m5t04r4q/Frame-40.png',
		darkTab: 'https://i.ibb.co/PzczSVHm/Frame-64.png',
		koreanName: '고려대학교'
	},
	yonsei: {
		lightPhone: 'https://i.ibb.co/svC5yFpG/Frame-50.png',
		lightTab: 'https://i.ibb.co/rfQWF43k/Frame-58.png',
		darkPhone: 'https://i.ibb.co/XkM1qCCy/Frame-42.png',
		darkTab: 'https://i.ibb.co/nNjP2brx/Frame-66.png',
		koreanName: '연세대학교'
	},
	sogang: {
		lightPhone: 'https://i.ibb.co/DfwhXddN/Frame-51.png',
		lightTab: 'https://i.ibb.co/ZRDDmpRv/Frame-59.png',
		darkPhone: 'https://i.ibb.co/gbt1QpmH/Frame-43.png',
		darkTab: 'https://i.ibb.co/cSC4Z42C/Frame-67.png',
		koreanName: '서강대학교'
	},
	sungkyunkwan: {
		lightPhone: 'https://i.ibb.co/svgm98S2/Frame-49.png',
		lightTab: 'https://i.ibb.co/t5MgQvL/Frame-57.png',
		darkPhone: 'https://i.ibb.co/s9ynVRcQ/Frame-41.png',
		darkTab: 'https://i.ibb.co/9krWd0L5/Frame-65.png',
		koreanName: '성균관대학교'
	},
	hanyang: {
		lightPhone: 'https://i.ibb.co/yn8NcFKY/Frame-45.png',
		lightTab: 'https://i.ibb.co/Kp07fGwG/Frame-53.png',
		darkPhone: 'https://i.ibb.co/n8zXd5w7/Frame-37.png',
		darkTab: 'https://i.ibb.co/yFQncxBr/Frame-61.png',
		koreanName: '한양대학교'
	},
	kaist: {
		lightPhone: 'https://i.ibb.co/xKRYWq33/Frame-46.png',
		lightTab: 'https://i.ibb.co/6Rp3NtYK/Frame-54.png',
		darkPhone: 'https://i.ibb.co/3yZPVhRj/Frame-38.png',
		darkTab: 'https://i.ibb.co/359QcBnY/Frame-62.png',
		koreanName: '카이스트'
	},
	postech: {
		lightPhone: 'https://i.ibb.co/YGSwtwm/Frame-47.png',
		lightTab: 'https://i.ibb.co/WWtP75PB/Frame-55.png',
		darkPhone: 'https://i.ibb.co/TBFvZJjQ/Frame-39.png',
		darkTab: 'https://i.ibb.co/DgHTthNR/Frame-63.png',
		koreanName: '포스텍'
	},
	chungang: {
		lightPhone: 'https://i.ibb.co/XrScrBbb/Frame-39.png',
		lightTab: 'https://i.ibb.co/rJKmZpr/Frame-42.png',
		darkPhone: 'https://i.ibb.co/gbTrvpL4/Frame-36.png',
		darkTab: 'https://i.ibb.co/Lz9Cr6kT/Frame-45.png',
		koreanName: '중앙대학교'
	},
	kyunghee: {
		lightPhone: 'https://i.ibb.co/V0DS1TP2/Frame-40.png',
		lightTab: 'https://i.ibb.co/Qgn3VRS/Frame-43.png',
		darkPhone: 'https://i.ibb.co/8nZHhhTk/Frame-37.png',
		darkTab: 'https://i.ibb.co/ym7NjHTk/Frame-46.png',
		koreanName: '경희대학교'
	},
	hufs: {
		lightPhone: 'https://i.ibb.co/7NC56f18/Frame-41.png',
		lightTab: 'https://i.ibb.co/QWskDKC/Frame-44.png',
		darkPhone: 'https://i.ibb.co/TMVwK9mV/Frame-38.png',
		darkTab: 'https://i.ibb.co/CKdpDDP0/Frame-47.png',
		koreanName: '한국외국어대학교'
	},
	uos: {
		lightPhone: 'https://i.ibb.co/8g5WWGvG/Frame-49.png',
		lightTab: 'https://i.ibb.co/F4brwr68/Frame-50.png',
		darkPhone: 'https://i.ibb.co/nsJ91gCw/Frame-48.png',
		darkTab: 'https://i.ibb.co/CGXF8Mf/Frame-51.png',
		koreanName: '서울시립대학교'
	}
};

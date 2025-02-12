<script lang="ts">
	import { backgrounds } from '$lib/img';
	import { onMount, type Component } from 'svelte';
	import Seoul from '$lib/assets/seoul.svelte';
	import Yonsei from '$lib/assets/yonsei.svelte';
	import Korea from '$lib/assets/korea.svelte';
	import Sogang from '$lib/assets/sogang.svelte';
	import Sungkyunkwan from '$lib/assets/sungkyunkwan.svelte';
	import Hanyang from '$lib/assets/hanyang.svelte';
	import Chungang from '$lib/assets/chungang.svelte';
	import Kyunghee from '$lib/assets/kyunghee.svelte';
	import Hufs from '$lib/assets/hufs.svelte';
	import Uos from '$lib/assets/uos.svelte';
	import Postech from '$lib/assets/postech.svelte';
	import Kaist from '$lib/assets/kaist.svelte';
	import { navBar, type univs } from '$lib';

	const icons = {
		seoul: Seoul,
		yonsei: Yonsei,
		korea: Korea,
		sogang: Sogang,
		sungkyunkwan: Sungkyunkwan,
		hanyang: Hanyang,
		chungang: Chungang,
		kyunghee: Kyunghee,
		hufs: Hufs,
		uos: Uos,
		postech: Postech,
		kaist: Kaist
	};

	let list: {
		name: string;
		lightPhone: string;
		lightTab: string;
		darkPhone: string;
		darkTab: string;
		koreanName: string;
		icon: Component;
	}[] = $state([]);

	onMount(() => {
		navBar.set('📚 대학교 배경화면 다운받기 🧑‍🎓');
		for (const v of Object.entries(backgrounds)) {
			list.push({ ...v[1], name: v[0], icon: icons[v[0] as univs] });
		}
	});
</script>

<p>Created by Kwon Hojun. 각 학교 마크의 저작권은 해당 학교에 있습니다.</p>

<ul>
	{#each list as univ}
		<a href={'/' + univ.name}>
			<li>
				<univ.icon />
				<p class="univ-name">{univ.koreanName}</p>
			</li>
		</a>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
	}

	li {
		display: flex;
		gap: 12px;
		flex-direction: column;
		align-items: center;
		padding-top: 24px;
		padding-bottom: 24px;
	}

	.univ-name {
		font-size: 18px;
		font-weight: 600;
	}
	p {
		text-align: center;
		color: #aaa;
		margin-bottom: 24px;
	}
</style>

import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
	lang: 'zh-CN',
	title: 'Hero',
	description: '基于 vitepress 的文档模板',
	head: [['link', { rel: 'icon', href: '/logo.svg' }]],
	themeConfig: {
		logo: 'logo.svg',
		lastUpdated: true,
		nav: [
			{
				text: '指南',
				link: '/guide/'
			},
			{
				text: '关于',
				link: '/about/'
			},
			{
				text: 'Gitee',
				link: 'https://github.com/name/repo'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/name/repo'
			}
		]
	},
	vite: {
		plugins: [
			Inspect({
				enabled: false
			}),
			Unocss({
				mode: 'per-module'
			})
		]
	}
})

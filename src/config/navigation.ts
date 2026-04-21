import type { LucideIcon } from 'lucide-react'
import {
	Rocket,
	Monitor,
	FlaskConical,
	BookOpen,
	Library,
	Swords,
	BarChart3,
	Clapperboard,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{
		key: 'release',
		path: '/release',
		icon: Rocket,
		isContentType: true,
	},
	{
		key: 'platform',
		path: '/platform',
		icon: Monitor,
		isContentType: true,
	},
	{
		key: 'demo',
		path: '/demo',
		icon: FlaskConical,
		isContentType: true,
	},
	{
		key: 'guide',
		path: '/guide',
		icon: BookOpen,
		isContentType: true,
	},
	{
		key: 'cards',
		path: '/cards',
		icon: Library,
		isContentType: true,
	},
	{
		key: 'builds',
		path: '/builds',
		icon: Swords,
		isContentType: true,
	},
	{
		key: 'stats',
		path: '/stats',
		icon: BarChart3,
		isContentType: true,
	},
	{
		key: 'media',
		path: '/media',
		icon: Clapperboard,
		isContentType: true,
	},
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['codes', 'build', 'combat', 'guides']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}

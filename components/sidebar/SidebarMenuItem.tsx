'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from '../ui/badge';

interface SidebarMenuItemProps {
	path: string;
	icon: JSX.Element;
	title: string;
	subtitle: string;
	badge?: number;
}

export const SidebarMenuItem = ({ path, icon, title, subtitle, badge }: SidebarMenuItemProps) => {
	const currentPath = usePathname();
	return (
		<Link
			href={path}
			className={`flex items-center gap-3 rounded-lg ${currentPath === path ? 'bg-muted px-3 py-2 text-primary' : 'px-3 py-2 text-muted-foreground'}  transition-all hover:text-primary`}>
			{icon}
			{title}
			{badge !== undefined && (
				<Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
					{badge}
				</Badge>
			)}
		</Link>
	);
};

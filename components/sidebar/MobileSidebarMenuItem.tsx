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

export const MobileSidebarMenuItem = ({
	path,
	icon,
	title,
	subtitle,
	badge,
}: SidebarMenuItemProps) => {
	const currentPath = usePathname();
	return (
		<Link
			href={path}
			className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${currentPath === path ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}>
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

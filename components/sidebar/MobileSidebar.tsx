import {
	LuHome,
	LuLineChart,
	LuPackage,
	LuShoppingCart,
	LuUsers,
	LuCalculator,
	LuPackage2,
} from 'react-icons/lu';

import { SidebarMenuItem } from './SidebarMenuItem';
import { SheetContent } from '../ui/sheet';
import { MobileSidebarMenuItem } from './MobileSidebarMenuItem';
import Link from 'next/link';

const menuItems = [
	{ path: '/', icon: <LuHome className='h-5 w-5' />, title: 'Dashboard', subtitle: '' },
	{ path: '/counter', icon: <LuCalculator className='h-5 w-5' />, title: 'Counter', subtitle: '' },
	{
		path: '/orders',
		icon: <LuShoppingCart className='h-5 w-5' />,
		title: 'Orders',
		subtitle: '',
		badge: 6,
	},
	{ path: '/products', icon: <LuPackage className='h-5 w-5' />, title: 'Products', subtitle: '' },
	{ path: '/customer', icon: <LuUsers className='h-5 w-5' />, title: 'Customers', subtitle: '' },
	{
		path: '/analytics',
		icon: <LuLineChart className='h-5 w-5' />,
		title: 'Analytics',
		subtitle: '',
	},
];

export const MobileSidebar = () => {
	return (
		<SheetContent side='left' className='flex flex-col'>
			<nav className='grid gap-2 text-lg font-medium'>
				<Link href='/' className='flex items-center gap-2 text-lg font-semibold'>
					<LuPackage2 className='h-6 w-6' />
					<span className='sr-only'>Acme Inc</span>
				</Link>
				{menuItems.map((item) => (
					<MobileSidebarMenuItem
						key={item.path}
						path={item.path}
						icon={item.icon}
						title={item.title}
						subtitle={item.subtitle}
						badge={item.badge}
					/>
				))}
			</nav>
		</SheetContent>
	);
};

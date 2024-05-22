import {
	LuHome,
	LuLineChart,
	LuPackage,
	LuShoppingCart,
	LuUsers,
	LuCalculator,
} from 'react-icons/lu';

import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
	{ path: '/', icon: <LuHome className='h-4 w-4' />, title: 'Dashboard', subtitle: '' },
	{ path: '/counter', icon: <LuCalculator className='h-4 w-4' />, title: 'Counter', subtitle: '' },
	{
		path: '/orders',
		icon: <LuShoppingCart className='h-4 w-4' />,
		title: 'Orders',
		subtitle: '',
		badge: 6,
	},
	{ path: '/products', icon: <LuPackage className='h-4 w-4' />, title: 'Products', subtitle: '' },
	{ path: '/customer', icon: <LuUsers className='h-4 w-4' />, title: 'Customers', subtitle: '' },
	{
		path: '/analytics',
		icon: <LuLineChart className='h-4 w-4' />,
		title: 'Analytics',
		subtitle: '',
	},
];

export const Sidebar = () => {
	return (
		<div className='flex-1'>
			<nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
				{menuItems.map((item) => (
					<SidebarMenuItem
						key={item.path}
						path={item.path}
						icon={item.icon}
						title={item.title}
						subtitle={item.subtitle}
						badge={item.badge}
					/>
				))}
			</nav>
		</div>
	);
};

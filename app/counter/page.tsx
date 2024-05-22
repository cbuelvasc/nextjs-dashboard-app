import { Counter } from '@/components/cart/Counter';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Shopping Cart',
	description: 'This is a shopping cart page.'
};

export default function DashboardPage() {
	

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex items-center'>
				<h1 className='text-lg font-semibold md:text-2xl'>Counter</h1>
			</div>
			<div
				className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'
				x-chunk='dashboard-02-chunk-1'>
				<div className='flex flex-col items-center gap-1 text-center'>
					<Counter />
				</div>
			</div>
		</main>
	);
}

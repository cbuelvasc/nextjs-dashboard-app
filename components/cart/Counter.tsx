'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LuMinusCircle, LuPlusCircle, LuTrash2 } from 'react-icons/lu';

interface CounterProps {
	value?: number;
}

export const Counter = ({ value = 10 }: CounterProps) => {
	const [counter, setCounter] = useState(0);

	const handleAdd = () => {
		setCounter(counter + 1);
	};

	const handleSubstract = () => {
		setCounter(counter - 1);
	};

	const handleReset = () => {
		setCounter(value);
	};
    
	return (
		<Card className='sm:col-span-2' x-chunk='dashboard-05-chunk-0'>
			<CardHeader className='pb-3'>
				<CardTitle className='text-8xl'>{counter}</CardTitle>
				<CardDescription className='max-w-lg text-balance leading-relaxed'>
					You can add or remove items from the cart by clicking the buttons below.
				</CardDescription>
			</CardHeader>
			<CardFooter className='flex justify-between'>
				<Button className='py-4' variant='default' size='icon' onClick={() => handleAdd()}>
					<LuPlusCircle className='h-6 w-6' />
				</Button>
				<Button className='py-4' variant='default' size='icon' onClick={() => handleReset()}>
					<LuTrash2 className='h-6 w-6' />
				</Button>
				<Button className='py-4' variant='default' size='icon' onClick={() => handleSubstract()}>
					<LuMinusCircle className='h-6 w-6' />
				</Button>
			</CardFooter>
		</Card>
	);
};

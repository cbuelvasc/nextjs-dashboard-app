import Image from 'next/image';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Pokemon } from '@/interfaces';

interface PokemonCardProps {
	pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
	return (
		<Card key={pokemon.id} className='py-2'>
			<CardHeader className='p-0'>
				<Image
					alt='Pokemon'
					height='225'
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
					width='400'
				/>
			</CardHeader>
			<CardContent className='p-4'>
				<div className='text-xl font-bold'>{pokemon.name}</div>
				<div className='text-sm text-gray-500 dark:text-gray-400'>{pokemon.id}</div>
			</CardContent>
		</Card>
	);
};

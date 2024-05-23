import { SimplePokemon } from '@/interfaces';
import { PokemonCard } from './PokemonCard';

interface PokemonProps {
	pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonProps) => {
	return (
		<div className='mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
};

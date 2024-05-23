
import { PokemonGrid } from '@/components/pokemons/PokemonGrid';
import { PokemonsResponse, SimplePokemon } from '@/interfaces';

const getPokemons = async (limits = 30, offset = 0): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limits}&offset=${offset}`,
	).then((res) => res.json());

	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split('/').at(-2)!,
		name: pokemon.name,
	}));

	return pokemons;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons();

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex items-center'>
				<h1 className='text-lg font-semibold md:text-2xl'>Pokemons List</h1>
			</div>
			<div
				className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'
				x-chunk='dashboard-02-chunk-1'>
				<PokemonGrid pokemons={pokemons} />
			</div>
		</main>
	);
}

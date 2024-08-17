export const fetchPokemonCharactersData = async (endpoint) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${endpoint}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

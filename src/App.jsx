import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import FilterBar from './components/FilterBar';
import StatsCard from './components/StatsCard';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      setError('');

      const characterResponse = await axios.get(
        'https://rickandmortyapi.com/api/character'
      );

      const locationResponse = await axios.get(
        'https://rickandmortyapi.com/api/location'
      );

      setCharacters(characterResponse.data.results);
      setLocations(locationResponse.data.results);
    } catch (err) {
      setError('Failed to fetch API data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || character.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-indigo-600 text-white rounded-3xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold">Rick & Morty Dashboard</h1>
          <p className="mt-2 text-indigo-100">
            React API Integration Project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatsCard title="Total Characters" value={characters.length} />
          <StatsCard title="Total Locations" value={locations.length} />
          <StatsCard
            title="Filtered Results"
            value={filteredCharacters.length}
          />
        </div>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
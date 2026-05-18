export default function CharacterCard({ character }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">
          {character.name}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          Status: <span className="font-semibold">{character.status}</span>
        </p>

        <p className="text-sm text-gray-600">
          Species: <span className="font-semibold">{character.species}</span>
        </p>

        <p className="text-sm text-gray-600">
          Gender: <span className="font-semibold">{character.gender}</span>
        </p>
      </div>
    </div>
  );
}
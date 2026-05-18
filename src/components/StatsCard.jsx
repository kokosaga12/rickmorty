export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-3xl font-bold text-indigo-600 mt-2">
        {value}
      </p>
    </div>
  );
}
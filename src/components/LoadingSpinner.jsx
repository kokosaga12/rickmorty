export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50">
      <div className="w-14 h-14 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 font-medium">Loading data...</p>
    </div>
  );
}
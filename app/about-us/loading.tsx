export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-purple-700 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg text-gray-700">Loading About Us...</p>
      </div>
    </div>
  )
}

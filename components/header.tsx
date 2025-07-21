export function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-10 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-2xl font-bold text-purple-700">
          GetConnect
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="/find-talent" className="text-gray-600 hover:text-purple-700 transition-colors">
            Find Talent
          </a>
          <a href="/find-work" className="text-gray-600 hover:text-purple-700 transition-colors">
            Find Work
          </a>
          <a href="/about-us" className="text-gray-600 hover:text-purple-700 transition-colors">
            About Us
          </a>
          <a href="/contact-us" className="text-gray-600 hover:text-purple-700 transition-colors">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-purple-700 transition-colors">Log In</button>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  )
}

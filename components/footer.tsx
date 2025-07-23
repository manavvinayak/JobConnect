export function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-4">GetConnect</h3>
          <p className="text-sm">Connecting businesses with top-tier freelance talent worldwide.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-4">For Clients</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="/find-talent" className="hover:text-purple-900 transition-colors">
                How to Hire
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-900 transition-colors">
                Post a Job
              </a>
            </li>
            <li>
              <a href="/find-talent" className="hover:text-purple-900 transition-colors">
                Find Talent
              </a>
              
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-4">For Freelancers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/find-work" className="hover:text-purple-900 transition-colors">
                How to Get Work
              </a>
            </li>
            <li>
              <a href="/find-work" className="hover:text-purple-900 transition-colors">
                Find Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-900 transition-colors">
                Create Profile
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about-us" className="hover:text-purple-900 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-900 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-900 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-900 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-purple-900 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} FreelanceConnect. All rights reserved.
      </div>
    </footer>
  )
}


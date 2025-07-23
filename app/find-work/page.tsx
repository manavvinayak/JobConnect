import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Services} from "@/components/services"
import { Search, Lightbulb, Rocket } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Find Work ",
};

export default function FindWorkPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Find Your Next Freelance Opportunity
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover thousands of projects from clients worldwide and grow your freelance career.
          </p>
          <div className="relative max-w-xl mx-auto ">
            <input
              type="text"
              placeholder="Search for jobs (e.g., 'React developer', 'logo design project')"
              className="w-full py-3 pl-12 pr-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How to Get Work on JobConnect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <Lightbulb className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
              <p className="text-gray-600">Showcase your skills, experience, and portfolio to attract clients.</p>
            </div>
            <div className="p-6 rounded-lg">
              <Search className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">2. Find Jobs</h3>
              <p className="text-gray-600">Browse relevant job postings and submit compelling proposals.</p>
            </div>
            <div className="p-6 rounded-lg">
              <Rocket className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">3. Get Hired & Grow</h3>
              <p className="text-gray-600">Start working, deliver great results, and build your reputation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Browse Jobs by Category</h2>
           < Services />
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Job Postings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">React Native Mobile App Development</h3>
              <p className="text-purple-700 mb-2">Fixed Price - Budget: $2,000 - $5,000</p>
              <p className="text-gray-600 text-sm mb-4">
                Seeking an experienced React Native developer to build a cross-platform mobile application for a
                startup.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Posted 2 hours ago</span>
                <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">SEO-Optimized Blog Content Writer</h3>
              <p className="text-purple-700 mb-2">Hourly - $30 - $50/hour</p>
              <p className="text-gray-600 text-sm mb-4">
                Looking for a skilled content writer to produce engaging and SEO-friendly blog posts for a tech company.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Posted 1 day ago</span>
                <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">UI/UX Designer for SaaS Platform</h3>
              <p className="text-purple-700 mb-2">Fixed Price - Budget: $1,500 - $3,000</p>
              <p className="text-gray-600 text-sm mb-4">
                We need a talented UI/UX designer to refine the user experience of our existing SaaS product.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Posted 3 days ago</span>
                <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-700 text-white py-16 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to find your next big project?</h2>
          <p className="text-lg mb-8 opacity-90">Create your free profile and start applying today!</p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Create My Profile
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

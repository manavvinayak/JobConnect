import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Services} from "@/components/services"
import { Search, Briefcase, Users, DollarSign } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JobConnect",
};

export default function FreelancingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Find the perfect freelance services for your business
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Work with talented freelancers from around the world on your terms.
          </p>
          <div className="relative max-w-2xl text-lg mx-auto">
            <input
              type="text"
              placeholder="Search for services (e.g., 'web design', 'content writing')"
              className="w-full py-3 pl-12 pr-4 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <button className="absolute right-13 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white">
                  <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Popular Services</h2>
        <Services/>
      </section>

      <section className="py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <Briefcase className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">1. Post a Job</h3>
              <p className="text-gray-600">Describe your project and what you need. It's free and easy.</p>
            </div>
            <div className="p-6 rounded-lg">
              <Users className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">2. Get Proposals</h3>
              <p className="text-gray-600">Receive proposals from talented freelancers quickly.</p>
            </div>
            <div className="p-6 rounded-lg">
              <DollarSign className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">3. Pay Safely</h3>
              <p className="text-gray-600">Only pay when you're 100% satisfied with the work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Top Freelancers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1664476788423-7899ac87bd7f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Freelancer 1"
                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
              <p className="text-purple-700 mb-2">Senior Web Developer</p>
              <p className="text-gray-600 text-sm">
                Specializing in React and Node.js, delivering high-quality web solutions.
              </p>
              <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
                View Profile
              </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1682437831693-924c14450271?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Freelancer 2"
                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">John Smith</h3>
              <p className="text-purple-700 mb-2">Creative Graphic Designer</p>
              <p className="text-gray-600 text-sm">Bringing ideas to life with stunning visual designs and branding.</p>
              <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
                View Profile
              </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Freelancer 3"
                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Emily White</h3>
              <p className="text-purple-700 mb-2">Expert Content Writer</p>
              <p className="text-gray-600 text-sm">
                Crafting compelling and SEO-friendly content for various industries.
              </p>
              <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-700 text-white py-16 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8 opacity-90">Join our community of talented freelancers and businesses today!</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Find Talent
            </button>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold border border-white hover:bg-purple-500 transition-colors">
              Find Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

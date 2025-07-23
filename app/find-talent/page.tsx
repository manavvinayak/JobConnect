import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"
import { Search, Briefcase, Users, Star, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Find Talent ",
};

export default function FindTalentPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hire Top Freelancers for Your Projects
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Access a global network of skilled professionals ready to bring your ideas to life.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for talent (e.g., 'React developer', 'logo designer')"
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
          <h2 className="text-3xl font-bold text-center mb-12">How to Hire on JobConnect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <Briefcase className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">1. Post Your Project</h3>
              <p className="text-gray-600">Clearly define your project needs and budget. It's quick and free.</p>
            </div>
            <div className="p-6 rounded-lg">
              <Users className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">2. Review Proposals</h3>
              <p className="text-gray-600">Receive tailored proposals from qualified freelancers.</p>
            </div>
            <div className="p-6 rounded-lg">
              <CheckCircle className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">3. Collaborate & Pay</h3>
              <p className="text-gray-600">Work together and release payment only when satisfied.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Browse Talent by Category</h2>
          < Services />
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Freelancers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1670884441229-5e9a711244f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Freelancer 1"
                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
              <p className="text-purple-700 mb-2">Fullstack Developer</p>
              <div className="flex justify-center items-center mb-2">
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <span className="ml-2 text-gray-600">(5.0)</span>
              </div>
              <p className="text-gray-600 text-sm">
                Expert in React, Node.js, and database design. Delivers scalable solutions.
              </p>
              <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
                View Profile
              </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1641260783083-a0af6cf964ca?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Freelancer 2"
                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">David Lee</h3>
              <p className="text-purple-700 mb-2">Brand Identity Designer</p>
              <div className="flex justify-center items-center mb-2">
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500" size={16} />
                <span className="ml-2 text-gray-600">(4.8)</span>
              </div>
              <p className="text-gray-600 text-sm">
                Creates unique and memorable brand identities that resonate with audiences.
              </p>
              <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">
                View Profile
              </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Freelancer 3"
                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Maria Garcia</h3>
              <p className="text-purple-700 mb-2">SEO Content Strategist</p>
              <div className="flex justify-center items-center mb-2">
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <span className="ml-2 text-gray-600">(5.0)</span>
              </div>
              <p className="text-gray-600 text-sm">
                Drives organic traffic with data-driven content strategies and compelling writing.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to find your perfect freelancer?</h2>
          <p className="text-lg mb-8 opacity-90">Post a job today and get proposals from top talent.</p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Post a Job - It's Free!
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

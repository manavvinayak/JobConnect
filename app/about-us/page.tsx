import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Lightbulb, Handshake } from "lucide-react"
import { Metadata} from "next"

export const metadata: Metadata = {
  title: "About Us ",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">About FreelanceConnect</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Our mission is to empower businesses and freelancers worldwide.
          </p>
        </div>
      </section>

      {/* Main Content - Image Left, Text Right */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Team Collaborating"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Our Story & Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FreelanceConnect was founded with a simple yet powerful vision: to bridge the gap between talented
              freelancers and businesses in need of their expertise. We believe that the future of work is flexible,
              global, and driven by skill, not location.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since our inception, we've grown into a vibrant community, facilitating countless successful
              collaborations across various industries. Our platform is designed to be intuitive, secure, and
              supportive, ensuring a seamless experience for both clients and freelancers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to fostering a fair and transparent marketplace where talent is recognized, and
              businesses can find the perfect match for their projects, no matter how big or small.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <Users className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive and collaborative environment for everyone.</p>
            </div>
            <div className="p-6 rounded-lg">
              <Lightbulb className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Continuously improving our platform to meet evolving needs.</p>
            </div>
            <div className="p-6 rounded-lg">
              <Handshake className="mx-auto mb-4 text-purple-700" size={48} />
              <h3 className="text-xl font-semibold mb-2">Trust & Transparency</h3>
              <p className="text-gray-600">Ensuring a secure and honest marketplace for all interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 text-white py-16 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Whether you're looking for talent or seeking work, FreelanceConnect is your platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/find-talent"
              className="bg-white text-purple-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Find Talent
            </a>
            <a
              href="/find-work"
              className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold border border-white hover:bg-purple-500 transition-colors"
            >
              Find Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

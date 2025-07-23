import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact ",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Get in Touch with Us</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            We're here to help! Reach out to us with any questions or feedback.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Inquiry about services"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-purple-700" size={24} />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-600">support@freelanceconnect.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-purple-700" size={24} />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-purple-700" size={24} />
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-gray-600">123 Freelance Ave, Suite 400</p>
                  <p className="text-gray-600">Creative City, CA 90210</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM PST</p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

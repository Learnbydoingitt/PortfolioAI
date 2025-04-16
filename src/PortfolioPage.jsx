import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Doğa Ekin Kıran
        </motion.h1>
        <p className="text-md mt-2">Engineer by diploma, Entrepreneur by spirit.</p>
      </section>

      <section className="py-12 px-6" id="portfolio">
        <h2 className="text-3xl font-semibold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Customer Lead GPT */}
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Customer Lead GPT</h3>
              <img src="/screenshot1.png" alt="Customer Lead GPT Screenshot" className="w-full h-auto rounded-lg mb-3" />
              <p className="text-sm text-gray-700 mb-3">
                This GPT filters out producers of a certain industry by the specified product list in the European Market and retrieves demographic and firm related information. 
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View project →
              </a>
            </CardContent>
          </Card>

          {/* Auction GPT */}
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Auction GPT</h3>
              <img src="/auction_gpt.png" alt="Auction GPT Screenshot" className="w-full h-auto rounded-lg mb-3" />
              <p className="text-sm text-gray-700 mb-3">
                This GPT has been trained to predict bids for specified auctions, compare results, and highlight historical auction data in a structured format.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View project →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6" id="thesis">
        <h2 className="text-3xl font-semibold text-center mb-6">Thesis</h2>
        <div className="text-center">
          <Button className="inline-flex items-center gap-2" variant="outline">
            <FileText className="w-4 h-4" />
            <a href="/thesis.pdf" target="_blank" rel="noopener noreferrer">
              View My Thesis
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-6" id="resume">
        <h2 className="text-3xl font-semibold text-center mb-6">Resume</h2>
        <div className="text-center">
          <Button className="inline-flex items-center gap-2" variant="outline">
            <FileText className="w-4 h-4" />
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View My Resume
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 px-6" id="contact">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:dogaekinkiran@gmail.com" className="hover:text-blue-600">
            <Mail />
          </a>
          <a href="https://linkedin.com/in/dogaekin" target="_blank" className="hover:text-blue-600">
            <Linkedin />
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Doğa Ekin Kıran. All rights reserved.
      </footer>
    </div>
  );
}
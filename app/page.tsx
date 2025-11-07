/**
 * Landing Page
 * 
 * Main entry point for the organ donation management system
 * Displays overview, features, and call-to-action buttons
 */

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, Users, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold text-slate-900">OrganHub</span>
          </div>
          <div className="flex gap-4">
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-red-600 hover:bg-red-700">Register</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Save Lives Through <span className="text-red-600">Organ Donation</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A secure, transparent platform connecting donors and recipients. Register today and become part of a life-saving network.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/auth/register?type=donor">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 gap-2">
                Register as Donor <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/auth/register?type=recipient">
              <Button size="lg" variant="outline" className="gap-2">
                Register as Recipient <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Why Choose OrganHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Secure & Private</h3>
              <p className="text-slate-600">
                Military-grade encryption protects your medical data. HIPAA compliant and fully secure.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast Matching</h3>
              <p className="text-slate-600">
                Advanced algorithms match donors with recipients in real-time for optimal outcomes.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Community Driven</h3>
              <p className="text-slate-600">
                Join thousands of donors and recipients working together to save lives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Register', desc: 'Create your account and verify your identity' },
              { step: 2, title: 'Medical Info', desc: 'Provide your medical history and blood type' },
              { step: 3, title: 'Matching', desc: 'Our system finds compatible matches' },
              { step: 4, title: 'Coordination', desc: 'Medical team coordinates the transplant' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-red-100">Active Donors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p className="text-red-100">Waiting Recipients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <p className="text-red-100">Successful Matches</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join our community and help save lives. Registration takes just 5 minutes.
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Mission</a></li>
                <li><a href="#" className="hover:text-white">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">HIPAA</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@organhub.com</li>
                <li>Phone: 1-800-DONATE</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2025 OrganHub. All rights reserved. Saving lives, one donation at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { positions, getPositionById, getPositionTitle } from '@/lib/positions';
import { Suspense } from 'react';

function ApplicationFormContent() {
  const searchParams = useSearchParams();
  const positionParam = searchParams.get('position') || '';
  const selectedPosition = positionParam ? getPositionById(positionParam) : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Form Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-text mb-2">
                Apply for {positionParam ? getPositionTitle(positionParam) : 'Internship'}
              </h2>
              {selectedPosition && (
                <p className="text-lg text-primary font-medium mb-3">
                  {selectedPosition.description}
                </p>
              )}
              <p className="text-gray-600">
                Fill out the form below to submit your application. We&apos;ll review it and get back to you soon!
              </p>
            </div>

            <form
              action="https://formspree.io/f/mjgklpzp"
              method="POST"
              className="space-y-6"
            >
              {/* Redirect to thank you page after submission */}
              <input
                type="hidden"
                name="_next"
                value={typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : '/thank-you'}
              />

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>

              {/* Position Selection */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position Applying For <span className="text-red-500">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  defaultValue={positionParam}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                >
                  <option value="">Select a position</option>
                  {positions.map((position) => (
                    <option key={position.id} value={position.id}>
                      {position.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Supporting Materials */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume / CV
                  <span className="text-gray-500 text-xs ml-2">(Optional, max 10MB)</span>
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-secondary file:cursor-pointer"
                />
              </div>

              {/* About You */}
              <div>
                <label htmlFor="introduction" className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Introduction <span className="text-red-500">*</span>
                  <span className="text-gray-500 text-xs ml-2">(Max 200 words)</span>
                </label>
                <textarea
                  id="introduction"
                  name="introduction"
                  required
                  rows={5}
                  maxLength={1200}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Tell us about yourself, your interests, and why you're excited about this internship opportunity..."
                />
              </div>

              <div>
                <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-2">
                  References
                  <span className="text-gray-500 text-xs ml-2">(Optional)</span>
                </label>
                <textarea
                  id="references"
                  name="references"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Please provide 2-3 non-related references with contact information (e.g., teachers, mentors, community leaders)"
                />
              </div>

              <div>
                <label htmlFor="compensation" className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Expectation
                  <span className="text-gray-500 text-xs ml-2">(Optional)</span>
                </label>
                <select
                  id="compensation"
                  name="compensation"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                >
                  <option value="">Select range or leave blank</option>
                  <option value="negotiable">Negotiable</option>
                  <option value="20000-30000">20,000 - 30,000 LKR</option>
                  <option value="30000-40000">30,000 - 40,000 LKR</option>
                  <option value="40000-50000">40,000 - 50,000 LKR</option>
                  <option value="50000+">50,000+ LKR</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Submit Application
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to be contacted regarding your application.
              </p>
            </form>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-primary hover:text-secondary font-medium transition-colors"
            >
              ← Back to Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationFormContent />
    </Suspense>
  );
}

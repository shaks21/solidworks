'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CourseNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the course you&apos;re looking for doesn&apos;t exist or has been moved. 
          Please check our available courses below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#courses">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              View All Courses
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="px-6 py-3 rounded-lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

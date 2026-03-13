'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Course } from '@/lib/courses';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Card Header with Icon - Fixed Height */}
      <div className="bg-linear-to-br from-blue-50 to-slate-50 p-5 border-b border-gray-100 shrink-0 h-22">
        <div className="flex items-center gap-4 h-full">
          <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300 shrink-0">
            {course.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors ">
              {course.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                course.level === 'Beginner' 
                  ? 'bg-green-100 text-green-700' 
                  : course.level === 'Intermediate'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {course.level}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body - Fixed Height */}
      <div className="p-5 flex flex-col grow">
        {/* Description - Fixed to 3 lines */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4  ">
          {course.description}
        </p>

        {/* Topics Preview - Fixed height for exactly 3 items */}
        <div className="mb-5 grow h-21">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">What You&apos;ll Learn</p>
          <ul className="space-y-1.5">
            {course.topics.slice(0, 3).map((topic, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600 h-5.5">
                <svg className="w-4 h-4 text-blue-500 mt-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="line-clamp-1">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action - Fixed at bottom */}
        <Link href={`/courses/${course.slug}`} className="block mt-auto">
          <Button className="w-full bg-gray-900 hover:bg-blue-600 text-white font-medium mt-2 py-2.5 rounded-lg transition-colors">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}

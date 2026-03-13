import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import EnquiryForm from '@/components/EnquiryForm';
import { courses } from '@/lib/courses';

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Mechanical Engineer at Dyson',
    image: 'SC',
    content: 'The SolidWorks Essentials course was exactly what I needed to transition into 3D CAD design. The live online format was incredibly convenient, and the flexible timing made it easy to learn while working full-time. Highly recommended!',
    rating: 5
  },
  {
    name: 'Michael Wong',
    role: 'Product Designer at Creative Labs',
    image: 'MW',
    content: 'I took both the Surface Modeling and Advanced Part courses online. The instructors were incredibly knowledgeable and patient. The skills I gained helped me land my dream job in consumer product design.',
    rating: 5
  },
  {
    name: 'Amanda Tan',
    role: 'Manufacturing Engineer at HP',
    image: 'AT',
    content: 'The Sheet Metal Design course was comprehensive and practical. I was able to apply what I learned immediately to my projects at work. The small class size ensured personalized attention even in the online format.',
    rating: 5
  },
  {
    name: 'David Lim',
    role: 'CAD Manager at ST Engineering',
    image: 'DL',
    content: 'We sent our entire team for online training and the results were outstanding. The customized curriculum addressed our specific industry needs. Our productivity has increased significantly since the training.',
    rating: 5
  }
];

// Features data - updated for online training
const features = [
  {
    icon: '👨‍🏫',
    title: 'Expert Instructors',
    description: 'Learn from certified SolidWorks professionals with years of industry experience.'
  },
  {
    icon: '⏰',
    title: 'Flexible Scheduling',
    description: 'Choose from weekday, weekend, or evening sessions to fit your busy schedule.'
  },
  {
    icon: '🎯',
    title: 'Hands-On Training',
    description: 'Practical exercises and real-world projects ensure you gain job-ready skills.'
  },
  {
    icon: '📜',
    title: 'Certification Prep',
    description: 'Prepare for SolidWorks certification exams with targeted practice and guidance.'
  },
  {
    icon: '🌐',
    title: 'Learn from Anywhere',
    description: 'Join live online sessions from the comfort of your home or office, anywhere in the world.'
  },
  {
    icon: '🔄',
    title: 'Post-Training Support',
    description: 'Get continued support and resources even after completing your course.'
  }
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive live online SolidWorks training designed to help you succeed in your engineering career.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From fundamentals to advanced techniques, we offer a complete range of SolidWorks training courses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied professionals who have transformed their careers with our online training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-100">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Master SolidWorks?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Take the first step towards advancing your engineering career. Contact us today to learn more about our live online courses and schedule.
          </p>
          <a href="#enquiry">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
              Get Started Today
            </button>
          </a>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enquire Now
            </h2>
            <p className="text-lg text-gray-600">
              Interested in our courses? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Have questions about our courses or need help choosing the right one for your career goals? 
                Our friendly team is here to help you every step of the way.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {/* Email */}
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:info@solidworkstraining.com" className="text-blue-600 hover:text-blue-700 text-sm">
                  info@solidworkstraining.com
                </a>
              </div>

              {/* Phone */}
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+6512345678" className="text-blue-600 hover:text-blue-700 text-sm">
                  +65 1234 5678
                </a>
              </div>

              {/* Hours */}
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Support Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Fri: 9AM - 6PM<br />
                  Sat: 9AM - 1PM
                </p>
              </div>
            </div>

            {/* Online Training Notice */}
            <div className="mt-12 text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Live Online Training</h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                All our courses are delivered live online, allowing you to learn from anywhere in the world. 
                Join interactive sessions with expert instructors without leaving your home or office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

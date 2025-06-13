import React from 'react';
import hero from './assets/hero.png';
import girl1 from './assets/girl1.svg';
import girl3 from './assets/girl3.svg';
import class1 from './assets/class1.svg';
import class2 from './assets/class2.svg';
import class3 from './assets/class3.svg';
import man from './assets/man.svg';
import events from './assets/events.svg';
import blog1 from './assets/blog1.svg';
import blog2 from './assets/blog2.svg';

import heart from './assets/heart.svg';
import stress from './assets/stress.svg';
import strength from './assets/strength.svg';

import testi1 from './assets/testi1.svg';
import testi2 from './assets/testi2.svg';
import testi3 from './assets/testi3.svg';

import photo1 from './assets/photo1.svg';
import photo2 from './assets/photo2.svg';
import photo3 from './assets/photo3.svg';

import trust1 from './assets/trust1.svg';
import trust2 from './assets/trust2.svg';
import trust3 from './assets/trust3.svg';

import social1 from './assets/social1.svg';
import social2 from './assets/social2.svg';
import social3 from './assets/social3.svg';





 export default  function ZenithYoga(){
  return (
    <div className="font-sans bg-white-50 text-gray-800">
     


      {/* About Us */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black-700">About Us</h2>
        <p className="text-lg text-justify max-w-4xl mx-auto">
          Yoga is a sanctuary for wellness, offering a variety of yoga styles to suit all levels. Our experienced instructors are dedicated to guiding you on your journey to physical and mental well-being.
        </p>
      </div>

      {/* Instructors */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black-600">Meet Our Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instructor 1 */}
            <div className="bg-none p-6 rounded-lg  transition-shadow duration-300 text-center">
              <div className="h-40 w-40 mx-auto rounded-full bg-purple-200 mb-4 flex items-center justify-center text-4xl text-purple-700">
                <img src={girl1} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Miller</h3>
              <p className="text-#4F967A-600">Experienced Hatha and Vinyasa instructor.</p>
            </div>
            
            {/* Instructor 2 */}
            <div className="bg-transparent p-6 rounded-lg transition-shadow duration-300 text-center">
              <div className="h-40 w-40 mx-auto rounded-full  mb-4 flex items-center justify-center text-4xl text-purple-700">
                <img src={man} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">David Chen</h3>
              <p className="text-#4F967A-600">Specializes in Yin and Restorative yoga.</p>
            </div>
            
            {/* Instructor 3 */}
            <div className="bg-transparent p-6 rounded-lg transition-shadow duration-300 text-center">
              <div className="h-40 w-40 mx-auto rounded-full bg-purple-200 mb-4 flex items-center justify-center text-4xl text-purple-700">
                <img src={girl3} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">Emily Carter</h3>
              <p className="text-#4F967A-600">Expert in Ashtanga and Power yoga.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Yoga Programs & Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={class1} alt="" />
            <h3 className="text-xl font-bold mb-4 text-purple-700">In-Studio Classes</h3>
            <p className="text-gray-600">
              Experience the energy of our studio with a variety of classes.
            </p>
          </div>
          
          {/* Program 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
             <img src={class2} alt="" />
            <h3 className="text-xl font-bold mb-4 text-purple-700">Online Yoga</h3>
            <p className="text-gray-600">
              Practice from the comfort of your home with our live online sessions.
            </p>
          </div>
          
          {/* Program 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
             <img src={class3} alt="" />
            <h3 className="text-xl font-bold mb-4 text-purple-700">Yoga Retreats</h3>
            <p className="text-gray-600">
              Immerse yourself in a transformative yoga retreat.
            </p>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Events & Retreats</h2>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
            <img src={events} alt="" />
            <h3 className="text-2xl font-bold mb-4 text-purple-700">Mountain Yoga Retreat</h3>
            <p className="text-lg font-semibold mb-4">August 15-18</p>
            <p className="text-gray-600">
              Join us for a weekend of yoga, meditation, and relaxation in the beautiful mountains.
            </p>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Blog & Wellness Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={blog1} alt="" />
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3">Wellness</span>
            <h3 className="text-xl font-bold mb-3">5 Tips for a Mindful Morning Routine</h3>
            <p className="text-gray-600">
              Start your day with intention and set a positive tone for the rest of your day.
            </p>
          </div>
          
          {/* Blog 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={blog2} alt="" />
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3">Yoga</span>
            <h3 className="text-xl font-bold mb-3">Understanding Different Yoga Styles</h3>
            <p className="text-gray-600">
              Explore the various types of yoga and find the perfect fit for your needs.
            </p>
          </div>
        </div>
      </div>
{/* Photo Gallery */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-light">
          
          <img src={photo1} alt="" />
          <img src={photo2} alt="" />
          <img src={photo3} alt="" />

          
          </div></div>

          {/* Certifications and badges */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Certifications & Trust Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-light">
          
          <img src={trust1} alt="" />
          <img src={trust2} alt="" />
          <img src={trust3} alt="" />

          
          </div></div>
           {/* Social Media Feed */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Social Media Feed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-light">
          
          <img src={social1} alt="" />
          <img src={social2} alt="" />
          <img src={social3} alt="" />

          
          </div></div>


      {/* Schedule */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Ready to Begin Your Yoga Journey?</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <button className="text-purple-700 hover:text-purple-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-xl font-bold">July 2024</h3>
              <button className="text-purple-700 hover:text-purple-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-4 text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <div key={index} className="font-semibold text-gray-500">{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-8 text-center">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div key={day} className={`py-2 ${day === 5 ? 'bg-purple-100 rounded-full' : ''}`}>{day}</div>
              ))}
              {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                <div key={day} className={`py-2 ${day === 12 ? 'bg-purple-100 rounded-full' : ''}`}>{day}</div>
              ))}
              {[15, 16, 17, 18, 19, 20, 21].map((day) => (
                <div key={day} className={`py-2 ${day === 19 ? 'bg-purple-100 rounded-full' : ''}`}>{day}</div>
              ))}
              {[22, 23, 24, 25, 26, 27, 28].map((day) => (
                <div key={day} className={`py-2 ${day === 26 ? 'bg-purple-100 rounded-full' : ''}`}>{day}</div>
              ))}
              {[29, 30, '', '', '', '', ''].map((day, index) => (
                <div key={index} className="py-2">{day}</div>
              ))}
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Time</th>
                    <th className="py-3 px-4 text-left">Class</th>
                    <th className="py-3 px-4 text-left">Instructor</th>
                    <th className="py-3 px-4 text-left">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: '9:00 AM', class: 'Morning Flow', instructor: 'Sarah Miller' },
                    { time: '10:30 AM', class: 'Yin Yoga', instructor: 'David Chen' },
                    { time: '6:00 PM', class: 'Vinyasa Flow', instructor: 'Emily Carter' },
                    { time: '7:30 PM', class: 'Restorative Yoga', instructor: 'David Chen' },
                    { time: '9:00 AM', class: 'Power Yoga', instructor: 'Emily Carter' },
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-purple-50">
                      <td className="py-3 px-4">{item.time}</td>
                      <td className="py-3 px-4">{item.class}</td>
                      <td className="py-3 px-4">{item.instructor}</td>
                      <td className="py-3 px-4">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-md text-sm">
                          Book
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Pricing & Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-bold mb-4 text-purple-700">Drop-In</h3>
            <p className="text-3xl font-bold mb-4">₹500 <span className="text-sm font-normal text-gray-500">per class</span></p>
            <ul className="mb-6 text-left space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Single class access
              </li>
            </ul>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-full">
              Select
            </button>
          </div>
          
          {/* Plan 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center border-2 border-purple-500 transform scale-105">
            <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">POPULAR</div>
            <h3 className="text-xl font-bold mb-4 text-purple-700">Monthly</h3>
            <p className="text-3xl font-bold mb-4">₹1200 <span className="text-sm font-normal text-gray-500">per month</span></p>
            <ul className="mb-6 text-left space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited classes
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Access to online library
              </li>
            </ul>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-full">
              Select
            </button>
          </div>
          
          {/* Plan 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-bold mb-4 text-purple-700">Annual</h3>
            <p className="text-3xl font-bold mb-4">₹12000 <span className="text-sm font-normal text-gray-500">per year</span></p>
            <ul className="mb-6 text-left space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited classes
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Access to online library
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Exclusive workshops
              </li>
            </ul>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-full">
              Select
            </button>
          </div>
        </div>
      </div>
       {/* Contact */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-700">Contact Information</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <address className="not-italic">
                <p className="mb-2">123 Saket Nagar</p>
                <p className="mb-2">Mangrul Road</p>
                <p className="mb-4">Delhi City, ND 451001</p>
                <p className="mb-2"><strong>Email:</strong> uxsubodh@gmail.com</p>
                <p><strong>Phone:</strong> (+91) 7000653949</p>
              </address>
            </div>
          </div>

      {/* Benefits */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Benefits of Yoga</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              
                <img src={heart} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">Improved Flexibility</h3>
              <p className="text-gray-600">Increase your range of motion and reduce injury risk.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <img src={stress} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reduced Stress</h3>
              <p className="text-gray-600">Lower cortisol levels and promote relaxation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <img src={strength} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">Increased Strength</h3>
              <p className="text-gray-600">Build muscle tone and endurance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Olivia Bennett",
              time: "2 months ago",
              text: "Zenith Yoga has transformed my practice. The instructors are knowledgeable and supportive, and the community is welcoming.",
              image: testi1
            },
            {
              name: "Ethan Walker",
              time: "3 months ago",
              text: "I love the variety of classes offered at Zenith Yoga. The online sessions are perfect for my busy schedule.",
              image: testi2
            },
            {
              name: "Sophia Hayes",
              time: "4 months ago",
              text: "The studio is beautiful and peaceful. I always leave feeling refreshed and rejuvenated.",
              image: testi3
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full  flex items-center justify-center text-purple-700 font-bold mr-4">
                  <img src={testimonial.image} alt="" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.time}</p>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Newsletter */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
         
          
          {/* Newsletter */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-700">Stay Updated</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">Subscribe to our newsletter for the latest updates and wellness tips.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};


import heart from './assets/heart.svg';
import stress from './assets/stress.svg';
import strength from './assets/strength.svg';

import testi1 from './assets/testi1.svg';
import testi2 from './assets/testi2.svg';
import testi3 from './assets/testi3.svg';
export default function Benefits(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
             
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

     


     
       </div>
    )
}
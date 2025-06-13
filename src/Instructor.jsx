import React from 'react';
import man from './assets/man.svg';
import girl1 from './assets/girl1.svg';
import girl3 from './assets/girl3.svg';
export default function Instructor(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
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
            
     


      
       </div>
    )
}
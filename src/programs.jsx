import class1 from './assets/class1.svg';
import class2 from './assets/class2.svg';
import class3 from './assets/class3.svg';
export default function Hero(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
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
            </div>
    )
}
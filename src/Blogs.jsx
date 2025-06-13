import blog1 from './assets/blog1.svg';
import blog2 from './assets/blog2.svg';
export default function Blogs(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
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
          </div>
    )
}
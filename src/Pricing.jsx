export default function Pricing(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
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
          </div>
    )
}
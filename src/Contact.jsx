export default function Contact(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
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
    )
}
import events from './assets/events.svg';
export default function Events(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
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
            </div>
    )
}
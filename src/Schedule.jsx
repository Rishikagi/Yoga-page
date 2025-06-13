export default function Schedule(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
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

            </div>
    )
}
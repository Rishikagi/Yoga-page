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


      
     
     
    </div>
  );
};


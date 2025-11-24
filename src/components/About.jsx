import React from 'react';
import { Link } from 'react-router-dom';


const About = () => (
<>
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-600">About Z PRINCESS SAFFRON</h1>
    <p className="text-lg text-gray-700 mb-4">
      Z PRINCESS SAFFRON is dedicated to providing the highest quality saffron to our customers worldwide. Our saffron is sourced from the finest farms and undergoes rigorous quality control to ensure purity and potency.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Our mission is to bring the rich flavors and health benefits of saffron to kitchens everywhere. Whether you're a home cook or a professional chef, Z PRINCESS SAFFRON is your trusted partner for all your saffron needs.
    </p>
    <p className="text-lg text-gray-700">
      Thank you for choosing Z PRINCESS SAFFRON. We look forward to serving you
      and sharing the magic of saffron with you.
    </p>
  </div>
  <img
    src="https://zprincesssaffron.vercel.app/assets/puritynew-CET9Z-FN.jpeg"
    alt="About Z PRINCESS SAFFRON"
    className="w-25 h-auto mt-8 rounded-lg shadow-lg mx-auto block "
  />
  <div className="max-w-4xl mx-auto px-4 py-12">
      <h1>Unmatched Quality and Purity</h1>
  <p>Unmatched Quality and Purity
Our saffron is celebrated for its vibrant color, rich flavor, and notable health benefits.</p>

  </div>
   <img
    src="https://zprincesssaffron.vercel.app/assets/ethical-Bsp52NHM.jpeg"
    alt="About Z PRINCESS SAFFRON"
    className="w-25 h-auto mt-8 rounded-lg shadow-lg mx-auto block "
  />
  <div className="max-w-4xl mx-auto px-4 py-12">
      <h1>Ethical and Sustainable Sourcing</h1>
  <p>We ensure fair compensation and support traditional farming methods while maintaining exceptional quality..</p>

  </div>
  </>

);

export default About;

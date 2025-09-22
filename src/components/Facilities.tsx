import React from 'react';
import { Building2, Microscope, BookOpen, Users, Wifi, Car } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Building2,
      title: "Modern Campus",
      description: "State-of-the-art infrastructure spread across 50 acres with eco-friendly buildings and modern amenities."
    },
    {
      icon: Microscope,
      title: "Advanced Laboratories",
      description: "Well-equipped research labs with latest instruments for homeopathic drug research and analysis."
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Comprehensive collection of over 50,000 books, journals, and digital resources on homeopathy."
    },
    {
      icon: Users,
      title: "Clinical Training",
      description: "On-campus hospital and clinics providing hands-on training with real patient interactions."
    },
    {
      icon: Wifi,
      title: "Smart Classrooms",
      description: "Technology-enabled learning spaces with interactive boards and high-speed internet connectivity."
    },
    {
      icon: Car,
      title: "Campus Amenities",
      description: "Hostel facilities, cafeteria, sports complex, and transportation services for student convenience."
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our campus provides everything students need for academic excellence and personal growth 
            in a conducive learning environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-50 group-hover:bg-blue-100 p-3 rounded-lg w-fit mb-4 transition-colors duration-300">
                <facility.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-emerald-700 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Campus Virtual Tour</h3>
              <p className="text-blue-100 mb-6">
                Take a virtual walk through our beautiful campus and explore our world-class facilities 
                from the comfort of your home.
              </p>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Start Virtual Tour
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Campus aerial view"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
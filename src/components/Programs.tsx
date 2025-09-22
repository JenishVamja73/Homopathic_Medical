import React from 'react';
import { Clock, Users, Award, ArrowRight, BookOpen } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Bachelor of Homoeopathic Medicine & Surgery (BHMS)",
      duration: "5.5 Years",
      students: "100 Seats",
      description: "Comprehensive undergraduate program in homoeopathic medicine covering fundamental principles, materia medica, organon, and clinical practice.",
      highlights: ["Clinical Training", "Hospital Posting", "Internship Program", "Research Projects"],
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Post Graduate Diploma in Homoeopathy",
      duration: "1 Year",
      students: "20 Seats",
      description: "Specialized diploma program for medical graduates seeking expertise in homoeopathic medicine and therapeutics.",
      highlights: ["Advanced Training", "Specialized Subjects", "Clinical Practice", "Research Methodology"],
      image: "https://images.pexels.com/photos/5452273/pexels-photo-5452273.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Certificate Courses in Homoeopathy",
      duration: "6 Months",
      students: "50 Seats",
      description: "Short-term certificate programs for healthcare professionals and interested individuals to learn homoeopathic principles.",
      highlights: ["Flexible Schedule", "Practical Training", "Expert Faculty", "Affordable Fees"],
      image: "https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of homoeopathic medical programs designed to 
            create skilled practitioners and researchers in the field of homoeopathy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Approved
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{program.students}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Program Features:</h4>
                  <ul className="space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-blue-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Affiliated with Monark University</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              All our programs are affiliated with Monark University and recognized by the 
              Central Council of Homoeopathy (CCH), Government of India.
            </p>
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              View Affiliations & Approvals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
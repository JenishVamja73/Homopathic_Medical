import React from 'react';
import { Target, Eye, Heart, Stethoscope, Building, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality Education",
      description: "Committed to providing excellence in homoeopathic medical education with comprehensive curriculum and practical training."
    },
    {
      icon: Eye,
      title: "Holistic Approach",
      description: "Promoting comprehensive healthcare that treats patients as whole individuals, addressing mind, body, and spirit."
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Instilling values of empathy, compassion, and ethical practice in our future homoeopathic physicians."
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "State-of-the-art hospital facilities providing hands-on clinical training and patient care experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our College</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monark Homoeopathic Medical College & Hospital Vahelal is a premier institution 
            dedicated to advancing homoeopathic medical education and healthcare services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Leading Homoeopathic Institution</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As a constituent institute of Monark University, our college has been at the forefront 
                of homoeopathic medical education, combining traditional healing principles with 
                modern medical science and technology.
              </p>
              <p>
                Located in Vahelal, our institution provides a comprehensive learning environment 
                with experienced faculty, modern facilities, and a fully functional hospital that 
                serves the community while providing practical training to our students.
              </p>
              <p>
                We are committed to producing skilled homoeopathic practitioners who understand 
                both the art and science of healing, preparing them to serve society with 
                competence and compassion.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-bold text-2xl text-blue-600">100+</p>
                <p className="text-gray-600 text-sm">Bed Hospital</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="font-bold text-2xl text-orange-600">50+</p>
                <p className="text-gray-600 text-sm">Expert Faculty</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Monark College Campus"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <value.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Calendar, FileText, CheckCircle, Phone, Mail } from 'lucide-react';

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Application Submission",
      description: "Complete online application with required documents and application fee."
    },
    {
      icon: Calendar,
      title: "Entrance Examination",
      description: "Appear for university entrance test or qualify through NEET scores."
    },
    {
      icon: CheckCircle,
      title: "Merit List & Counseling",
      description: "Merit list publication followed by counseling and seat allotment process."
    }
  ];

  const requirements = [
    "Class 12 with Physics, Chemistry, Biology (PCB)",
    "Minimum 50% marks in qualifying examination",
    "Valid NEET score (for BHMS admission)",
    "Age limit: 17-25 years at time of admission",
    "Character certificate from previous institution"
  ];

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions 2024-25</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Begin your journey towards becoming a skilled homeopathic practitioner. 
            Our admission process is designed to identify passionate and dedicated students.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Admission Process</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <step.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Eligibility Criteria</h3>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Important Dates</h4>
              <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Application Start:</span>
                  <span className="font-semibold text-gray-900">March 15, 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Application Deadline:</span>
                  <span className="font-semibold text-gray-900">June 30, 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Entrance Exam:</span>
                  <span className="font-semibold text-gray-900">July 15, 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Results:</span>
                  <span className="font-semibold text-gray-900">August 5, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Admissions?</h3>
          <p className="text-blue-100 mb-6">
            Our admissions team is here to guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-9876543210"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: +91-9876543210</span>
            </a>
            <a
              href="mailto:admissions@monarkuniversity.edu"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email Admissions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
import React from 'react';
import { ArrowRight, Users, Award, BookOpen, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Excellence in
                <span className="text-blue-700 block">Homoeopathic Education</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Monark Homoeopathic Medical College & Hospital Vahelal is committed to providing 
                quality education in homoeopathic medicine, combining traditional healing wisdom 
                with modern medical practices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Admission Open</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 font-semibold">
                Virtual Campus Tour
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">1000+</p>
                  <p className="text-gray-600 text-sm">Students</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-orange-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">20+</p>
                  <p className="text-gray-600 text-sm">Years Excellence</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">NAAC</p>
                  <p className="text-gray-600 text-sm">Accredited</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-orange-400 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical students at Monark College"
                className="rounded-xl w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Constituent Institute</p>
                  <p className="text-gray-600 text-sm">Monark University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
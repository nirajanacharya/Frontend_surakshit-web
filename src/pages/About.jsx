import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-24">
      
    
      <div className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Surakshit Web
            </h1>
            <p className="text-2xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              Protecting users from phishing threats through advanced AI-powered URL detection
            </p>
          </div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
            <div className="w-96 h-96 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>

     
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/50 p-8 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-4">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              At Surakshit Web, we're committed to making the internet a safer place for everyone. 
              Our AI-powered system helps users identify and avoid potentially dangerous phishing websites, 
              protecting their sensitive information and digital identity.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe that everyone deserves to browse the web with confidence and security. 
              Through cutting-edge artificial intelligence and machine learning technologies, 
              we're working to create a more secure digital environment for all users.
            </p>
          </div>
        </div>
      </div>

   
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
       
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-3xl text-white">🔍</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Advanced AI Detection</h3>
              <p className="text-gray-600 leading-relaxed">
                Our system utilizes state-of-the-art AI algorithms to analyze URLs and identify potential phishing threats in real-time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-3xl text-white">⚡</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Real-time Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant feedback on website safety, allowing you to make informed decisions about which links to trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-3xl text-white">🛡️</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">User-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Simple and intuitive interface makes it easy for anyone to protect themselves against online threats.
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Technology</h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Surakshit Web employs sophisticated machine learning models trained on vast datasets 
                of known phishing URLs. Our system analyzes multiple factors including domain age, 
                SSL certificates, URL structure, and website content to provide accurate threat detection.
              </p>
              <div className="bg-white/80 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Key Features:</h3>
                <div className="space-y-4">
                
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-lg text-gray-800">Real-time URL analysis and threat detection</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-lg text-gray-800">Machine learning-powered prediction system</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-lg text-gray-800">Continuous model updates and improvements</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-lg text-gray-800">Browser integration for seamless protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="bg-gradient-to-t from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Browse Safely?
          </h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of users who trust Surakshit Web to protect their online experience.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
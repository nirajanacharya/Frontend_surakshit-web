
import React from "react";

const FeatureSection = () => {
    const features = [
      {
        title: "AI-Powered Detection",
        description: "Advanced machine learning algorithms to identify phishing threats in real-time",
        icon: "🤖"
      },
      {
        title: "Instant Analysis",
        description: "Get immediate feedback on URL safety with our sophisticated scanning system",
        icon: "⚡"
      },
      {
        title: "High Accuracy",
        description: "96% detection rate for identifying malicious websites and phishing attempts",
        icon: "🎯"
      }
    ];
  
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Surakshit Web
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Protecting your digital journey with cutting-edge technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default FeatureSection
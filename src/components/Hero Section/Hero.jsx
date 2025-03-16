const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="space-y-6 sm:space-y-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white">
              Shield Against <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                Phishing Threats
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100/80 max-w-xl mx-auto lg:mx-0">
              Protect yourself with our advanced URL detection system. Stay one
              step ahead of cyber threats with real-time scanning and instant
              results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="https://urlphisingdetection.streamlit.app/"
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Check Your URL
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://images.spiceworks.com/wp-content/uploads/2023/02/20174832/A-symbolic-image-of-the-power-and-ubiquity-of-the-internet..jpg"
              alt="Security Shield"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
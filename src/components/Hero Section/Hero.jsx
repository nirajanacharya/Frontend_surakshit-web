const Hero = () => {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
              Shield Against <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                Phishing Threats
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100/80 max-w-xl mx-auto lg:mx-0">
              Protect yourself with our advanced URL detection system. Stay one
              step ahead of cyber threats with real-time scanning and instant
              results.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-8">
              <a
                href="http://localhost:8501/"
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Check Your URL
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.spiceworks.com/wp-content/uploads/2023/02/20174832/A-symbolic-image-of-the-power-and-ubiquity-of-the-internet..jpg"
              alt="Security Shield"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Hero;
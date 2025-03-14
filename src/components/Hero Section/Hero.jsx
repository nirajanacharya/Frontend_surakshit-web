const Hero = () => {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
       
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/30 blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/30 blur-[150px] animate-pulse" />
          </div>
        </div>
  
       
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-[0.03]" />
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
           
            <div className="space-y-10">
            
              <div className="inline-flex items-center px-4 py-2 space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-400/30 backdrop-blur-xl hover:border-blue-400/50 transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span className="text-blue-300 text-sm font-medium tracking-wide">AI-Powered Protection</span>
              </div>
  
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                  Shield Against
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 animate-gradient">
                  Phishing Threats
                </span>
              </h1>
  
              <p className="text-xl text-blue-100/80 max-w-xl leading-relaxed">
                Protect yourself with our advanced URL detection system. Stay one step ahead of cyber threats with real-time scanning and instant results.
              </p>
  
            
              <div className="flex items-center space-x-8">
                <a 
                  href="https://urlphisingdetection.streamlit.app/"
                  className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:from-blue-500 hover:to-blue-600"
                >
                  Check Your URL
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full duration-500 ease-in-out rounded-xl" />
                </a>
                
               
                <div className="flex items-center space-x-3 text-blue-200/80">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center border border-blue-400/20">
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">96%</span>
                  </div>
                  <span className="text-sm font-medium">Free & Secure</span>
                </div>
              </div>
            </div>
  
            
            <div className="relative lg:block">
              <div className="relative">
                <div className="absolute -inset-4">
                  <div className="w-full h-full opacity-30 blur-lg filter bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.spiceworks.com/wp-content/uploads/2023/02/20174832/A-symbolic-image-of-the-power-and-ubiquity-of-the-internet..jpg" 
                    alt="Security Shield" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
                </div>
              </div>
  
             
              <div className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">96%</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Detection Rate</div>
                    <div className="text-blue-200/70 text-sm">Threats Blocked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
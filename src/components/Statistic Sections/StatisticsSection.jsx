const StatisticsSection = () => {
    const stats = [
      { number: "5 Lakhs", label: "URLs Scanned" },
      { number: "96%", label: "Accuracy Rate" },
      { number: "24/7", label: "Protection" },
     
    ];
  
    return (
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h2 className="text-4xl font-bold text-white mb-2">{stat.number}</h2>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default StatisticsSection
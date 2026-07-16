
import { Link } from 'react-router-dom';

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "12+", label: "Awards Won" },
  { number: "100%", label: "Dermatologist Tested" }
];

const values = [
  {
    title: "Root First",
    desc: "We believe healthy hair starts at the scalp. Every formula is designed to nourish from the root up.",
    icon: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
  },
  {
    title: "Clean Beauty",
    desc: "No parabens, no sulfates, no compromises. Only ingredients that your hair will genuinely love.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
  },
  {
    title: "Science Backed",
    desc: "Developed with leading dermatologists. Every claim is tested, every result is real.",
    icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.12 6.12 0 016.038 7.047l.879-.879a.75.75 0 011.061 0l.879.879a6.12 6.12 0 010 8.647l.001.001a6.12 6.12 0 01-8.647 0l-.879-.879a.75.75 0 010-1.06l.879-.879a6.12 6.12 0 018.647-.001zM12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM21 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H20.25A.75.75 0 0121 12zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-[#f5f3f8] to-[#ede9fe]">
      
      <div className="h-20" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-purple-100 text-purple-700 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[0.95]">
            FROM ROOT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              TO SHINE
            </span>
          </h1>
          <p className="mt-8 text-gray-500 text-lg sm:text-xl leading-relaxed">
            Bolly was born from a simple belief: that everyone deserves hair that feels as good as it looks. 
            We started in a small lab with one mission — eliminate flakes and restore confidence.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white/60 backdrop-blur-sm border-y border-purple-100/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 lg:p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl shadow-purple-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                </div>
                <p className="text-purple-800 font-bold text-lg">Bolly.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
              Our Mission
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              We exist to solve one problem: flaky, unhappy scalps. While other brands focus on masking symptoms, 
              we go straight to the root. Our Clarify formula is the result of 3 years of research and 
              hundreds of formula iterations.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Every bottle is dermatologically tested, cruelty-free, and made with ingredients you can actually pronounce. 
              No shortcuts. No compromises. Just results.
            </p>
            <Link 
              to="/shop"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-all duration-300"
            >
              Explore Products
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              What We Stand For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg shadow-purple-900/5 border border-purple-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              Ready to Transform<br />Your Hair?
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-lg mx-auto">
              Join 50,000+ happy customers who said goodbye to flakes and hello to shine.
            </p>
            <Link 
              to="/shop"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
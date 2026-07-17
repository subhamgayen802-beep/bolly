
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bottleImg from "../assets/bottle.jpg";

const BOTTLE_IMG = bottleImg;

const BollyHero = () => {
  const cardRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    if (!stage || !card) return;

    const handleMove = (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      card.style.transform = `
        perspective(1200px) 
        rotateY(${x * 35}deg) 
        rotateX(${-y * 25}deg) 
        translateZ(60px)
        scale(1.02)
      `;
    };

    const handleLeave = () => {
      card.style.transform = `
        perspective(1200px) 
        rotateY(-10deg) 
        rotateX(0deg) 
        translateZ(0px)
        scale(1)
      `;
    };

    stage.addEventListener('mousemove', handleMove);
    stage.addEventListener('mouseleave', handleLeave);
    return () => {
      stage.removeEventListener('mousemove', handleMove);
      stage.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f6fb] via-[#f0ecf5] to-[#e8e0f0] flex items-center">
      
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-300/15 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-200/10 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-0">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-screen lg:min-h-[90vh]">
          
          {/* ─── LEFT COLUMN ─── */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 space-y-6 pt-8 lg:pt-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-purple-100/50">
              <span className="text-[10px] font-bold tracking-[0.15em] text-gray-800 uppercase">
                From Root
              </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                To Shine
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black text-gray-900 leading-[0.85] tracking-tight">
              KNOCK<br />
              OUT<br />
              FLAKES
            </h1>

            {/* NEW: Subheadline */}
            <p className="text-gray-500 text-base lg:text-lg font-medium leading-relaxed max-w-[280px]">
              Clinically proven formula that eliminates dandruff from the first wash while nourishing your scalp.
            </p>

            {/* NEW: Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-100/50">
                <svg className="w-3.5 h-3.5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">Dermatologist Tested</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-100/50">
                <svg className="w-3.5 h-3.5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">4.9/5 Rating</span>
              </div>
            </div>

            {/* NEW: Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium">
                <span className="text-gray-900 font-bold">50,000+</span> happy customers
              </p>
            </div>
          </div>

          {/* ─── CENTER: 3D Bottle ─── */}
          <div 
            ref={stageRef}
            className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 py-8 lg:py-0 relative"
            style={{ perspective: '1200px' }}
          >
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] border border-purple-300/20 rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
            <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] border border-pink-300/10 rounded-full pointer-events-none" />

            <div 
              ref={cardRef}
              className="relative transition-transform duration-150 ease-out"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: 'perspective(1200px) rotateY(-10deg)',
                animation: 'bottleFloat 6s ease-in-out infinite'
              }}
            >
              <div 
                className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden"
                style={{ 
                  backgroundColor: '#c69d98',
                  boxShadow: `
                    0 50px 100px -20px rgba(30,58,138,0.25), 
                    0 30px 60px -30px rgba(0,0,0,0.3),
                    0 0 0 1px rgba(255,255,255,0.1) inset
                  `
                }}
              >
                <img 
                  src={BOTTLE_IMG}
                  alt="UNOVE Deep Damage Repair Shampoo"
                  className="w-[240px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[420px] h-auto object-contain relative z-10"
                  style={{ filter: 'brightness(1.03) contrast(1.02)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none z-20" />
                <div className="absolute top-[10%] left-[8%] w-[15%] h-[60%] bg-white/10 rounded-full blur-2xl pointer-events-none z-20" />
              </div>

              <div 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-56 h-8 bg-black/20 rounded-[100%] blur-xl"
                style={{ animation: 'shadowPulse 6s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* ─── RIGHT COLUMN ─── */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right order-3 space-y-6">
            
            {/* Description */}
            <p className="text-gray-600 text-lg sm:text-xl lg:text-[1.3rem] leading-relaxed font-medium max-w-[280px]">
              Journey in to the<br />
              <span className="italic font-serif text-gray-900 text-[1.1em]">wonderful</span> world of<br />
              shampoo
            </p>

            {/* NEW: Product Benefits */}
            <div className="flex flex-col gap-3 items-center lg:items-end">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100/50">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span className="text-xs font-bold text-gray-700">Deep Scalp Cleansing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100/50">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span className="text-xs font-bold text-gray-700">48-Hour Freshness</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100/50">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span className="text-xs font-bold text-gray-700">Sulfate-Free Formula</span>
              </div>
            </div>

            {/* NEW: Price Tag */}
            <div className="flex items-center gap-3 justify-center lg:justify-end">
              <span className="text-3xl font-black text-gray-900"></span>
              <span className="text-sm text-gray-400 line-through font-medium">₹1999</span>
              <span className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full uppercase">-24%</span>
            </div>

            {/* CTA Button */}
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-3 group"
            >
              <span className="bg-gray-900 text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-0.5 active:translate-y-0">
                EXPLORE MORE
              </span>
              <span className="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </Link>

            {/* NEW: Guarantee Text */}
            <p className="text-[11px] text-gray-400 font-medium flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              30-Day Money Back Guarantee
            </p>
          </div>

        </div>

        {/* NEW: Bottom Stats Bar */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mt-16 pt-8 border-t border-purple-200/30">
          {[
            { value: '98%', label: 'Saw fewer flakes in 1 week' },
            { value: '500ml', label: 'Long-lasting family size' },
            { value: '0%', label: 'Parabens & sulfates' },
            { value: '100%', label: 'Cruelty-free & vegan' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-black text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bottleFloat {
          0%, 100% { transform: perspective(1200px) rotateY(-10deg) translateY(0px); }
          50% { transform: perspective(1200px) rotateY(-10deg) translateY(-18px); }
        }
        @keyframes shadowPulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 0.25; transform: translateX(-50%) scaleX(0.75); }
        }
      `}</style>
    </section>
  );
};

export default BollyHero;
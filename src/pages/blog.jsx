
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Scalp Care",
    excerpt: "Discover why a healthy scalp is the foundation for beautiful hair and how our Clarify formula works at the root level.",
    category: "Science",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 2,
    title: "5 Signs You Need a Deep Repair Shampoo",
    excerpt: "Is your hair crying out for help? Learn the telltale signs of damaged hair and how UNOVE can restore its natural shine.",
    category: "Hair Care",
    date: "Jul 8, 2026",
    readTime: "4 min read",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    title: "Why We Chose Dermatological Testing",
    excerpt: "Every Bolly product undergoes rigorous testing. Here's what that means for your hair and why it matters.",
    category: "Behind The Scenes",
    date: "Jul 5, 2026",
    readTime: "6 min read",
    color: "from-indigo-500 to-blue-600"
  },
  {
    id: 4,
    title: "The Perfect Hair Routine for Busy People",
    excerpt: "A 10-minute routine that delivers salon-quality results. No complicated steps, just pure hair transformation.",
    category: "Tips",
    date: "Jul 2, 2026",
    readTime: "3 min read",
    color: "from-violet-500 to-purple-600"
  },
  {
    id: 5,
    title: "Understanding Hair Porosity",
    excerpt: "High porosity vs low porosity — knowing your hair type is the first step to choosing the right products.",
    category: "Education",
    date: "Jun 28, 2026",
    readTime: "7 min read",
    color: "from-fuchsia-500 to-pink-600"
  },
  {
    id: 6,
    title: "From Root to Shine: Our Philosophy",
    excerpt: "The story behind Bolly's mission to create hair care that starts at the root and ends with radiant shine.",
    category: "Brand Story",
    date: "Jun 25, 2026",
    readTime: "4 min read",
    color: "from-purple-600 to-indigo-700"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-[#f5f3f8] to-[#ede9fe]">
      
      <div className="h-20" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Our Journal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            THE BLOG
          </h1>
          <p className="mt-4 text-gray-500 text-lg max-w-lg mx-auto">
            Insights, tips, and stories from the world of premium hair care.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link to="/blog/featured" className="group block">
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl shadow-purple-900/5 border border-purple-100/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-12 lg:p-16 flex flex-col justify-center">
                  <span className="inline-block bg-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4 w-fit">
                    Featured
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                    The Complete Guide to Flake-Free Hair
                  </h2>
                  <p className="text-purple-100 text-lg leading-relaxed mb-6">
                    Everything you need to know about dandruff, scalp health, and how our breakthrough Clarify formula eliminates flakes for good.
                  </p>
                  <div className="flex items-center gap-4 text-purple-200 text-sm">
                    <span>Jul 15, 2026</span>
                    <span className="w-1 h-1 bg-purple-300 rounded-full" />
                    <span>8 min read</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="group block bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-purple-900/5 border border-purple-100/50 hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder with gradient */}
              <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10" />
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">{post.readTime}</span>
                  <span className="text-purple-600 font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="bg-white text-gray-900 font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
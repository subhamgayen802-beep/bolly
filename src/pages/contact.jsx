
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-[#f5f3f8] to-[#ede9fe]">
      
      {/* Header spacer */}
      <div className="h-20" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-20">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            CONTACT US
          </h1>
          <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto">
            Have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl shadow-purple-900/5 border border-purple-100/50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-500 text-sm mt-1">hello@bolly.com</p>
                  <p className="text-gray-500 text-sm">support@bolly.com</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-500 text-sm mt-1">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon - Fri, 9am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-500 text-sm mt-1">123 Beauty Lane</p>
                  <p className="text-gray-500 text-sm">New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                  <Link 
                    key={social}
                    to="#"
                    className="px-4 py-2 bg-white rounded-full text-xs font-bold text-gray-700 border border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                  >
                    {social}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
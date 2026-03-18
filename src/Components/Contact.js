import React from 'react';

const Contact = React.forwardRef(({ onSubmit }, ref) => {
  return (
    <section ref={ref} className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-2xl mx-auto border-4 border-blue-500/30 p-10 rounded-3xl bg-gray-50 dark:bg-slate-800 shadow-2xl">
        <h2 className="text-4xl font-black text-center mb-10 dark:text-white uppercase tracking-tight">Get In Touch</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <input type="text" placeholder="Name" required className="w-full p-4 bg-slate-200 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 dark:text-white transition-all" /> 
          <input type="email" placeholder="Email" required className="w-full p-4 bg-slate-200 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 dark:text-white transition-all" /> 
          <textarea placeholder="Message" rows="4" required className="w-full p-4 bg-slate-200 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 dark:text-white transition-all"></textarea> 
          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 tracking-widest">
            Submit 
          </button>
        </form>
      </div>
    </section>
  );
});

export default Contact;
export default function Services() {
  const services = ['Personal Training', 'Modern Equipment', 'Group Classes'];
  
  return (
    <section className="bg-slate-200 dark:bg-slate-800/50 py-20 px-6 transition-colors text-center">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map(s => (
          <div key={s} className="bg-white dark:bg-slate-800 p-10 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold dark:text-white">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
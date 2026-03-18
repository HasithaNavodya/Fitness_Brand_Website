export default function Hero({ onJoinClick }) {
  return (
    <section className="bg-slate-200 dark:bg-slate-800 py-24 px-4 text-center transition-colors">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
        Transform Your Body Today.
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
        Join our gym and get fit with expert trainers and modern equipment.
      </p>
      <button 
        onClick={onJoinClick}
        className="bg-black dark:bg-white dark:text-black text-white px-12 py-4 rounded-full font-black text-lg hover:shadow-2xl transition-all"
      >
        Join Now
      </button>
    </section>
  );
}
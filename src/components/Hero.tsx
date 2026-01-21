export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 bg-[#FCFCFC]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-[0.2em] text-slate-400 mb-8 uppercase">Diary App</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-12 leading-[1.6]">
          見出しテキスト
        </h1>
        <p className="text-base md:text-lg text-slate-500 mb-16 font-light leading-relaxed max-w-xl mx-auto">
          サブテキスト
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="px-10 py-3 bg-slate-900 text-white text-sm font-medium tracking-wider hover:bg-slate-800 transition-all duration-300">
            はじめる
          </button>
          <button className="text-sm font-medium tracking-wider text-slate-400 hover:text-slate-900 transition-all duration-300">
            もっと詳しく —
          </button>
        </div>
      </div>
    </section>
  );
}
export default function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-[#FCFCFC] border-t border-slate-100">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="font-serif text-lg tracking-tighter text-slate-900">
          Diary
        </h1>
        <div className="flex gap-8 items-center">
          <span className="text-xs tracking-widest text-slate-500 cursor-pointer hover:text-slate-900 transition-colors">
            ABOUT
          </span>
          <button className="px-5 py-1.5 bg-slate-900 text-white text-xs tracking-widest rounded-md hover:bg-slate-800 transition-all">
            SIGN UP
          </button>
        </div>
      </div>
    </nav>
  );
}
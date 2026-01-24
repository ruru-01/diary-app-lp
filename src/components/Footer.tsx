export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-[#F9F8F6] shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4">
          <h2 className="text-lg font-medium tracking-tighter text-slate-900">
            Diary
          </h2>
          <p className="text-sm text-slate-400 font-light max-w-[240px] leading-relaxed">
            テキストテキスト<br />
            テキストテキストテキスト
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-900">Product</h3>
            <ul className="text-sm text-slate-500 space-y-3 font-light">
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Features</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-900">Company</h3>
            <ul className="text-sm text-slate-500 space-y-3 font-light">
              <li className="hover:text-slate-900 cursor-pointer transition-colors">About</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20">
        <p className="text-[10px] tracking-widest text-slate-300 uppercase">
          &copy; 2026 Diary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
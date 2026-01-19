export default function Features() {
  const features = [
    {
      title: "静かな記録",
      description: "余計な通知や装飾はありません。今の気持ちと向き合うための、静かな場所を提供します。",
    },
    {
      title: "直感的な操作",
      description: "考える前に書き出せる。複雑な設定を削ぎ落とした、身体の一部のような使い心地。",
    },
    {
      title: "振り返りの時間",
      description: "過去の自分からのメッセージ。時間の経過とともに、言葉は深みを増していきます。",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="mb-6 h-px w-8 bg-slate-200 group-hover:w-12 transition-all duration-500" />
              <h3 className="text-lg font-medium text-slate-900 mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
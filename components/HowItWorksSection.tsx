'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Audit',
      description:
        'We analyze your current workflows and identify automation opportunities to maximize efficiency and ROI.',
    },
    {
      number: '02',
      title: 'Build',
      description:
        'Our experts design and develop custom AI systems tailored to your specific business needs and goals.',
    },
    {
      number: '03',
      title: 'Deploy',
      description:
        'Seamless integration into your existing infrastructure with comprehensive training and documentation.',
    },
    {
      number: '04',
      title: 'Scale',
      description:
        'Continuous optimization and scaling as your business grows, with ongoing support and improvements.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-cream relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">
            How It Works
          </h2>
          <div className="w-12 h-1 bg-zinc-900/10 mx-auto mb-6" />
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light">
            Our proven 4-step process ensures your success from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white/40 backdrop-blur-sm border border-zinc-200/50 rounded-2xl p-8 h-full hover:border-zinc-300 transition-all duration-500 group-hover:translate-y-[-4px] hover:shadow-xl hover:shadow-zinc-900/5">
                <div className="text-5xl font-bold text-zinc-900/5 mb-6 group-hover:text-zinc-900/10 transition-colors duration-500">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-4 tracking-wide uppercase text-sm">
                  {step.title}
                </h3>
                <p className="text-zinc-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && ( index % 2 === 1 || index === 0 ) && (
                <div className="hidden lg:block absolute top-[40%] -right-4 w-8 h-[1px] bg-gradient-to-r from-zinc-200 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

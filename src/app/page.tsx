export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-subtle via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Your perfect outfit,
              <br />
              <span className="text-primary">every day.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/60 max-w-lg mx-auto md:mx-0">
              AI-powered outfit recommendations from your own closet. Scan your wardrobe, get styled, and never wonder what to wear again.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-muted transition-colors shadow-lg shadow-primary-shadow"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.82 11.78 5.71 12.56 5.71C13.34 5.71 14.82 4.62 16.39 4.8C17.04 4.83 18.83 5.06 19.97 6.74C19.88 6.79 17.69 8.08 17.72 10.71C17.75 13.87 20.47 14.88 20.5 14.89C20.48 14.96 20.06 16.43 19.03 17.94L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              Download on the App Store
            </a>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <div className="relative w-[280px] h-[560px] bg-gradient-to-br from-primary to-primary-muted rounded-[3rem] shadow-2xl shadow-primary-shadow p-3">
              <div className="w-full h-full bg-[#0a0a0b] rounded-[2.4rem] flex flex-col items-center justify-center overflow-hidden">
                <div className="w-20 h-1 bg-white/10 rounded-full mb-8" />
                <img src="/icon.png" alt="Nebulook" className="w-20 h-20 mb-4" />
                <p className="text-primary font-bold text-2xl">Nebulook</p>
                <p className="text-white/40 text-sm mt-2">Your perfect outfit</p>
                <div className="mt-8 space-y-3 w-48">
                  <div className="h-3 bg-primary/20 rounded-full" />
                  <div className="h-3 bg-primary/20 rounded-full w-3/4" />
                  <div className="h-3 bg-primary/20 rounded-full w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Style made <span className="text-primary">effortless</span>
        </h2>
        <p className="text-center text-foreground/50 mb-14 max-w-xl mx-auto">
          Your closet is full of possibilities. Nebulook finds them for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "\u{1F4F7}",
              title: "Scan Your Closet",
              desc: "Take a photo of your wardrobe. Nebulook identifies every piece, categorizes it, and builds your digital closet in seconds.",
            },
            {
              icon: "\u2728",
              title: "AI Outfit Recommendations",
              desc: "Get personalized outfit suggestions based on your style profile, the weather, and what you\u2019re doing today.",
            },
            {
              icon: "\u{1F321}\uFE0F",
              title: "Weather-Smart Styling",
              desc: "Nebulook checks the forecast and recommends outfits that keep you comfortable and looking great, rain or shine.",
            },
            {
              icon: "\u{1F3AF}",
              title: "Dress for the Occasion",
              desc: "Date night, gym, office, brunch \u2014 pick your activity and get outfits that match the vibe perfectly.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md hover:shadow-primary-shadow/30 transition-all border border-primary/5 group"
            >
              <div className="text-4xl mb-4 w-16 h-16 bg-primary-subtle rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary-subtle/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Styled in <span className="text-primary">3 steps</span>
          </h2>
          <p className="text-center text-foreground/50 mb-14 max-w-lg mx-auto">
            From closet chaos to curated looks in under a minute.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Scan your wardrobe",
                desc: "Snap a photo. Our AI detects and catalogs every item.",
              },
              {
                step: "2",
                title: "Set your style",
                desc: "Tell us your vibe and preferences. Nebulook learns what you love.",
              },
              {
                step: "3",
                title: "Get dressed",
                desc: "Receive daily outfit picks tailored to your day, weather, and mood.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-lg shadow-primary-shadow">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-foreground/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-muted">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never ask &ldquo;what should I wear?&rdquo; again.
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            Your closet already has everything you need &mdash; Nebulook shows you how to wear it.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Download Nebulook
          </a>
        </div>
      </section>
    </>
  );
}

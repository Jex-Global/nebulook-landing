import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Nebulook",
  description: "Get help with Nebulook. FAQs and contact support.",
};

const faqs = [
  {
    q: "What is Nebulook?",
    a: "Nebulook is an AI-powered outfit recommendation app. It scans your closet, learns your style, and suggests outfits every day based on the weather, your schedule, and your personal taste.",
  },
  {
    q: "How does closet scanning work?",
    a: "Take a photo of your wardrobe or individual items. Our AI detects each clothing piece, categorizes it by type, color, and style, and adds it to your digital closet automatically.",
  },
  {
    q: "Does Nebulook need access to my camera?",
    a: "Yes. Camera access is used to scan your closet items. You can also pick images from your photo library. We never store your photos on our servers beyond what\u2019s needed for processing.",
  },
  {
    q: "How do outfit recommendations work?",
    a: "Nebulook combines your style profile, the items in your closet, local weather data, and the activity you\u2019re dressing for to generate complete outfit suggestions using AI.",
  },
  {
    q: "Does it work with any wardrobe?",
    a: "Absolutely. Nebulook works with whatever you own. The AI adapts to your specific clothes and style, whether your closet is minimal or maximal.",
  },
  {
    q: "How much does Nebulook cost?",
    a: "Nebulook offers a free tier with closet scanning and limited daily outfits. Premium unlocks unlimited outfits, AI previews, and personalized recommendations. Check the App Store for current pricing.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "iPhone Settings > tap your name > Subscriptions > Nebulook > Cancel Subscription. Access continues until the end of your billing period.",
  },
  {
    q: "How do I contact support?",
    a: "Email support@jexhq.com. We respond within 24 hours.",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        How can we <span className="text-primary">help</span>?
      </h1>
      <p className="text-center text-foreground/50 mb-14">
        Find answers below or reach out directly.
      </p>

      {/* FAQ */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group bg-card rounded-2xl border border-primary/10 shadow-sm overflow-hidden"
          >
            <summary className="cursor-pointer px-6 py-5 flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors">
              {faq.q}
              <svg
                className="w-5 h-5 text-primary/40 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-5 text-foreground/60 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-2">Still need help?</h2>
        <p className="text-center text-foreground/50 mb-10">
          Email us at{" "}
          <a href="mailto:support@jexhq.com" className="text-primary font-medium">
            support@jexhq.com
          </a>
        </p>
        <form
          action="mailto:support@jexhq.com"
          method="POST"
          encType="text/plain"
          className="bg-card rounded-2xl border border-primary/10 p-8 shadow-sm space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-primary/15 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-primary/15 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl border border-primary/15 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-muted transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

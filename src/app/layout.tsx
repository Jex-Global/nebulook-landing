import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebulook — Your Perfect Outfit, Every Day",
  description:
    "AI-powered outfit recommendations from your own closet. Scan your wardrobe, get styled, and never wonder what to wear again.",
  openGraph: {
    title: "Nebulook — Your Perfect Outfit, Every Day",
    description:
      "AI-powered outfit recommendations from your own closet.",
    url: "https://nebulook.jexhq.com",
    siteName: "Nebulook",
    type: "website",
  },
};

function Footer() {
  return (
    <footer className="bg-primary-muted text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/icon.png" alt="Nebulook" className="w-8 h-8" />
              <h3 className="text-xl font-bold">Nebulook</h3>
            </div>
            <p className="text-white/70 text-sm">
              Your perfect outfit, every day.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/support" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-white/70">support@jexhq.com</p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/50">
          &copy; 2026 Jex Global Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/icon.png" alt="Nebulook" className="w-8 h-8" />
          <span className="text-xl font-bold text-primary">Nebulook</span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="/support"
            className="text-foreground/70 hover:text-primary transition-colors hidden sm:block"
          >
            Support
          </a>
          <a
            href="#"
            className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary-muted transition-colors"
          >
            Get Nebulook
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

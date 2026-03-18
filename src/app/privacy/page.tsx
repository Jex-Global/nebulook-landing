import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Nebulook",
  description: "Nebulook Privacy Policy. Learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24 prose-custom">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-foreground/50 mb-10">
        Effective Date: March 2026 &middot; Last Updated: March 2026
      </p>

      <p>
        Jex Global Inc. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates Nebulook (the &quot;App&quot;). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our App.
      </p>
      <p>
        By using Nebulook, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the App.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">1. Information We Collect</h2>

      <h3 className="text-lg font-semibold mt-6 mb-2">Account Information</h3>
      <p>When you create an account, we collect your name and email address through Apple Sign-In via Supabase Authentication.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Closet &amp; Style Data</h3>
      <p>You may upload photos of your clothing items. Our AI processes these images to identify garment type, color, and style attributes. Processed item data is stored to provide outfit recommendations. Original photos may be stored temporarily for processing and are not retained beyond what is necessary.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Style Preferences</h3>
      <p>During onboarding, you provide style preferences and photos so Nebulook can learn your taste. This data is used solely to personalize your outfit recommendations.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Location Data</h3>
      <p>With your permission, Nebulook accesses your approximate location to provide accurate weather-based outfit suggestions. Location data is not stored on our servers and is used only in real-time for weather lookups.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Camera &amp; Photo Library</h3>
      <p>Nebulook requests camera and photo library access to allow you to scan closet items. Photos are processed for garment detection and are not shared with third parties.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Usage Data</h3>
      <p>We collect anonymized usage data including app interactions and crash logs to help us improve the App.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Subscription Information</h3>
      <p>We receive subscription status information through RevenueCat and Apple to manage your premium access.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">2. Information We Do NOT Collect</h2>
      <ul className="list-disc pl-6 space-y-1 text-foreground/70">
        <li>Contacts or address book</li>
        <li>Health data</li>
        <li>Browsing history</li>
        <li>Social media data</li>
        <li>Financial or payment information (handled by Apple)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">3. How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li><strong>Provide and personalize the App</strong> &mdash; generate outfit recommendations, manage your digital closet, and tailor suggestions to your style.</li>
        <li><strong>Process subscriptions</strong> &mdash; via Apple and RevenueCat.</li>
        <li><strong>Weather-based recommendations</strong> &mdash; use your location to check weather conditions for outfit suggestions.</li>
        <li><strong>Improve the App</strong> &mdash; through anonymized analytics and crash reporting.</li>
        <li><strong>Respond to support requests</strong> &mdash; when you contact us at support@jexhq.com.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">4. Third-Party Services</h2>
      <p>We use the following third-party services, each for a specific purpose:</p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li><strong>Supabase</strong> &mdash; authentication, cloud database, storage, and serverless functions (PostgreSQL with Row Level Security).</li>
        <li><strong>RevenueCat</strong> &mdash; subscription management and purchase verification.</li>
        <li><strong>Apple</strong> &mdash; Sign-In with Apple and App Store payment processing.</li>
        <li><strong>OpenAI</strong> &mdash; AI processing for garment detection and outfit generation (via server-side API calls; your data is not used to train their models).</li>
      </ul>
      <p className="mt-4">Each third-party service has its own privacy policy governing their handling of your data. We encourage you to review them.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">5. Data Storage &amp; Security</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li>Your data is stored securely in Supabase (PostgreSQL) with Row Level Security ensuring you can only access your own data.</li>
        <li>All data is encrypted in transit using TLS and encrypted at rest.</li>
        <li>Clothing photos are stored in Supabase Storage with access controls. They are used solely for generating your closet data.</li>
        <li>We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes.</li>
        <li>Anonymized, aggregated data may be used for internal analytics to improve the App.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">6. Children&apos;s Privacy</h2>
      <p>Nebulook is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected data from a child under 13, we will delete it promptly.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">7. Data Retention</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li><strong>Active accounts:</strong> Your data is retained for as long as your account exists.</li>
        <li><strong>Account deletion:</strong> Upon account deletion, your personal data including all closet items and photos will be deleted within 30 days.</li>
        <li>Anonymized analytics data may be retained indefinitely.</li>
        <li>You can delete your account and all data from within the App at any time.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li>Access, correct, or delete your personal data.</li>
        <li>Export your data.</li>
        <li>Revoke camera or location permissions via device settings at any time.</li>
        <li>Request any of the above by emailing <a href="mailto:support@jexhq.com" className="text-primary">support@jexhq.com</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">9. California Residents (CCPA)</h2>
      <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li><strong>Right to Know:</strong> You may request what personal information we collect, use, and disclose.</li>
        <li><strong>Right to Delete:</strong> You may request deletion of your personal information.</li>
        <li><strong>Right to Opt-Out of Sale:</strong> We do <strong>not</strong> sell your personal information.</li>
        <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
      </ul>
      <p className="mt-4">To exercise these rights, contact us at <a href="mailto:support@jexhq.com" className="text-primary">support@jexhq.com</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">10. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of material changes through the App or via email. Your continued use of the App after changes constitutes acceptance of the updated policy.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or your data, contact us at:
      </p>
      <p className="mt-2">
        <strong>Jex Global Inc.</strong>
        <br />
        Email: <a href="mailto:support@jexhq.com" className="text-primary">support@jexhq.com</a>
      </p>
    </article>
  );
}

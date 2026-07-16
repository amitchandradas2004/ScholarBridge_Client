import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ScholarBridge",
  description: "How ScholarBridge collects, uses, and protects your information.",
};

const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <p>
        ScholarBridge is a platform built to help students discover
        scholarship opportunities. This policy explains what information we
        collect when you use the site, why we collect it, and how it&apos;s
        handled. ScholarBridge is a simple, independently built project — not
        a large organization — so we keep this policy just as simple and
        direct.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <ul className="list-disc space-y-2 pl-5 marker:text-indigo-400">
        <li>
          <span className="text-slate-200 font-medium">Account details</span>
          {" "}— your name and email address if you create an account or sign in.
        </li>
        <li>
          <span className="text-slate-200 font-medium">Usage data</span>
          {" "}— basic technical information like browser type and pages
          visited, used only to understand how the site is used.
        </li>
        <li>
          <span className="text-slate-200 font-medium">Cookies</span>
          {" "}— small files used to keep you signed in and remember basic
          preferences.
        </li>
      </ul>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <ul className="list-disc space-y-2 pl-5 marker:text-indigo-400">
        <li>To let you browse and search scholarship listings.</li>
        <li>To keep your account secure and let you sign in.</li>
        <li>To improve ScholarBridge based on how it&apos;s actually used.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Sharing your information",
    body: (
      <p>
        We don&apos;t sell your data, and we don&apos;t share it with third
        parties for advertising. Information may only be shared with the
        infrastructure providers (such as hosting and authentication
        services) that ScholarBridge relies on to run.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data security",
    body: (
      <p>
        We take reasonable steps to protect your information, including
        secure authentication practices. That said, ScholarBridge is a
        personal project under active development, so no method of storage
        or transmission can be guaranteed 100% secure.
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices",
    body: (
      <p>
        You can request to view, update, or delete your account information
        at any time by contacting us using the details below.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        As ScholarBridge grows, this policy may be updated. Any changes will
        be reflected on this page with a new effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about this policy? Reach out at{" "}
        <a
          href="mailto:hello@scholarbridge.app"
          className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
        >
          hello@scholarbridge.app
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300">
      {/* ambient glow, consistent with the rest of ScholarBridge */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-slate-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto container px-6 py-20 sm:py-28">
        <header className="mb-14">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium tracking-wide text-indigo-300">
            Legal
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Effective {effectiveDate}
          </p>
        </header>

        {/* frosted glass card, matching the rest of the app */}
        <div className="rounded-2xl border border-white/10 bg-white/3 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl sm:p-10">
          <nav aria-label="Sections" className="mb-10 flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-indigo-400/40 hover:text-indigo-300"
              >
                {section.title}
              </a>
            ))}
          </nav>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="mb-3 flex items-center gap-3 text-lg font-semibold text-white">
                  <span className="text-sm font-normal text-indigo-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="text-sm leading-relaxed text-slate-400">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          ScholarBridge — built to help students find the funding they need.
        </p>
      </div>
    </main>
  );
}
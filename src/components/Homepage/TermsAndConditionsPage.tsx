import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ScholarBridge",
  description: "The terms that govern your use of ScholarBridge.",
};

const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    body: (
      <p>
        By using ScholarBridge, you agree to these terms. ScholarBridge is an
        independently built project made to help students discover scholarship
        opportunities — please read this page before using the site, and
        don&apos;t use it if you don&apos;t agree with any part of it.
      </p>
    ),
  },
  {
    id: "what-scholarbridge-is",
    title: "What ScholarBridge is",
    body: (
      <p>
        ScholarBridge is a listing platform. We surface scholarship information
        to help you discover opportunities more easily. We are not affiliated
        with the scholarship providers listed on the site, and we don&apos;t
        process applications or funds on their behalf.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "Accounts",
    body: (
      <ul className="list-disc space-y-2 pl-5 marker:text-indigo-400">
        <li>
          You&apos;re responsible for keeping your account credentials safe.
        </li>
        <li>You must provide accurate information when creating an account.</li>
        <li>
          You&apos;re responsible for any activity that happens under your
          account.
        </li>
      </ul>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <p>
        Please use ScholarBridge respectfully. Don&apos;t attempt to disrupt the
        site, scrape data at scale, misrepresent yourself, or use the platform
        for anything unlawful. We may suspend or remove access for anyone who
        misuses the platform.
      </p>
    ),
  },
  {
    id: "content-accuracy",
    title: "Accuracy of listings",
    body: (
      <p>
        We do our best to keep scholarship listings accurate and up to date, but
        details like deadlines and eligibility are set by the original providers
        and can change. Always verify details directly with the scholarship
        provider before applying or making decisions based on a listing.
      </p>
    ),
  },
  {
    id: "no-warranty",
    title: "No warranty",
    body: (
      <p>
        ScholarBridge is provided &quot;as is,&quot; as an independently built
        and still-evolving project. We don&apos;t guarantee the site will be
        error-free, uninterrupted, or that any scholarship listed will result in
        a successful application.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the extent permitted by law, ScholarBridge and its creator
        aren&apos;t liable for any loss or damage arising from your use of the
        site, including missed deadlines or decisions made based on listing
        information.
      </p>
    ),
  },
  {
    id: "changes-to-terms",
    title: "Changes to these terms",
    body: (
      <p>
        These terms may be updated as ScholarBridge grows. Continued use of the
        site after changes are posted means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms? Reach out at{" "}
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

export default function TermsAndConditionsPage() {
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
            Terms &amp; Conditions
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
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
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

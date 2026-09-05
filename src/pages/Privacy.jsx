import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo-no-bg.png";

const LAST_UPDATED = "August 31, 2026";

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-bold text-[#212121] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-gray-600 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function Privacy() {
  return (
    <main className="font-sans overflow-x-hidden bg-white">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm md:px-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Quant Logo" className="w-10" />
          <span className="text-[26px] font-bold tracking-tight text-[#212121]">
            Quant
          </span>
        </Link>
        <Link
          to="/"
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          Back to home
        </Link>
      </nav>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-0">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-[#212121] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 sm:text-base">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            Quant ("Quant", "we", "us", or "our") is a WhatsApp-based AI
            study assistant built for Nigerian university students. This
            Privacy Policy explains what information we collect when you use
            Quant on WhatsApp or visit{" "}
            <span className="font-medium">getquant.app</span>, how we use
            and share it, and the choices and rights you have. By joining
            Quant on WhatsApp or using our website, you agree to the
            practices described here.
          </p>
        </header>

        <nav aria-label="Table of contents" className="rounded-2xl bg-gray-50 p-5 sm:p-6">
          <h2 className="text-sm font-semibold text-[#212121]">On this page</h2>
          <ol className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-[#4A42FF] sm:grid-cols-2">
            {[
              ["information-we-collect", "Information we collect"],
              ["whatsapp", "Using Quant over WhatsApp"],
              ["how-we-use", "How we use your information"],
              ["ai-processing", "AI processing of your content"],
              ["sharing", "How we share information"],
              ["retention", "Data retention"],
              ["security", "Data security"],
              ["your-rights", "Your rights"],
              ["children", "Children's privacy"],
              ["cookies", "Cookies on our website"],
              ["international", "International data transfers"],
              ["changes", "Changes to this policy"],
              ["contact", "Contact us"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <Section id="information-we-collect" title="1. Information we collect">
          <p>
            <span className="font-semibold text-[#212121]">
              Information you provide.
            </span>{" "}
            When you join Quant on WhatsApp or interact with us, we may
            collect your name, WhatsApp phone number, university or
            institution, department, level, and any academic details you
            choose to share — such as course names, timetable information, or
            CGPA and grade data you enter for CGPA tracking.
          </p>
          <p>
            <span className="font-semibold text-[#212121]">
              Content you send us.
            </span>{" "}
            This includes lecture notes, slides, past questions, and other
            documents or messages you send to Quant so we can generate
            summaries, PDFs, and reminders for you.
          </p>
          <p>
            <span className="font-semibold text-[#212121]">
              Information collected automatically.
            </span>{" "}
            When you message Quant, WhatsApp shares certain metadata with us
            (such as your phone number and message timestamps) through the
            WhatsApp Business Platform. When you visit getquant.app, we and
            our analytics providers may automatically collect your IP
            address, device and browser type, pages visited, and general
            location, as described in{" "}
            <a href="#cookies" className="text-[#4A42FF] hover:underline">
              Cookies on our website
            </a>
            .
          </p>
        </Section>

        <Section id="whatsapp" title="2. Using Quant over WhatsApp">
          <p>
            Quant operates as a chatbot on the WhatsApp Business Platform,
            which is provided by Meta (and, in some cases, delivered through
            infrastructure partners such as Twilio). Any message you send to
            Quant is also processed by WhatsApp/Meta under WhatsApp's own
            privacy policy and terms, which are separate from this policy and
            outside our control. We encourage you to review{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A42FF] hover:underline"
            >
              WhatsApp's Privacy Policy
            </a>{" "}
            to understand how they handle your data.
          </p>
        </Section>

        <Section id="how-we-use" title="3. How we use your information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Generate lecture summaries, study PDFs, and revision materials from content you send us;</li>
            <li>Send you reminders about deadlines, tests, and your class timetable;</li>
            <li>Calculate and track your CGPA based on the grades you provide;</li>
            <li>Operate, maintain, and improve Quant's features and reliability;</li>
            <li>Respond to support requests and communicate service updates; and</li>
            <li>Detect, prevent, and address abuse, fraud, or security issues.</li>
          </ul>
          <p>
            We do not use your academic content or personal data for
            advertising, and we do not sell your personal information.
          </p>
        </Section>

        <Section id="ai-processing" title="4. AI processing of your content">
          <p>
            To generate summaries, PDFs, and answers, Quant sends the
            documents and messages you share to third-party AI model
            providers for processing. These providers process your content
            solely to return a result to Quant and are bound by their own
            data-processing terms; we do not permit them to use your content
            to train their models. We retain uploaded documents and generated
            outputs only for as long as needed to provide the feature and for
            the retention period described in{" "}
            <a href="#retention" className="text-[#4A42FF] hover:underline">
              Data retention
            </a>
            .
          </p>
        </Section>

        <Section id="sharing" title="5. How we share information">
          <p>We share information only in the following circumstances:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold text-[#212121]">
                Service providers,
              </span>{" "}
              including the WhatsApp Business Platform, cloud hosting, AI
              processing, and analytics providers, who help us run Quant and
              are contractually required to protect your data;
            </li>
            <li>
              <span className="font-semibold text-[#212121]">
                Legal reasons,
              </span>{" "}
              if required by law, regulation, or a valid request from a
              Nigerian regulatory or law-enforcement authority; and
            </li>
            <li>
              <span className="font-semibold text-[#212121]">
                Business transfers,
              </span>{" "}
              if Quant is involved in a merger, acquisition, or asset sale,
              in which case we will notify you before your data is
              transferred or becomes subject to a different privacy policy.
            </li>
          </ul>
        </Section>

        <Section id="retention" title="6. Data retention">
          <p>
            We keep your account information and academic data for as long as
            you remain an active Quant user, and for a reasonable period
            afterward in case you return. Uploaded documents used to generate
            a one-off summary or PDF are retained only as long as needed to
            deliver that result, unless you've saved them within Quant for
            later access. You can request deletion of your data at any time,
            as described in{" "}
            <a href="#your-rights" className="text-[#4A42FF] hover:underline">
              Your rights
            </a>
            .
          </p>
        </Section>

        <Section id="security" title="7. Data security">
          <p>
            We apply reasonable technical and organizational measures —
            including encryption in transit and access controls — to protect
            your information against unauthorized access, alteration, or
            loss. However, no method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section id="your-rights" title="8. Your rights">
          <p>
            As a Nigerian resident, you have rights under the Nigeria Data
            Protection Act, 2023 (NDPA) and its regulations, including the
            right to:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Access the personal data we hold about you;</li>
            <li>Request correction of inaccurate or incomplete data;</li>
            <li>Request deletion of your personal data;</li>
            <li>Withdraw consent to processing at any time; and</li>
            <li>
              Lodge a complaint with the Nigeria Data Protection Commission
              (NDPC) if you believe your data has been mishandled.
            </li>
          </ul>
          <p>
            To exercise any of these rights, simply message "delete my data"
            to Quant on WhatsApp or reach us using the details in{" "}
            <a href="#contact" className="text-[#4A42FF] hover:underline">
              Contact us
            </a>
            . You can also stop using Quant at any time by leaving the
            WhatsApp conversation.
          </p>
        </Section>

        <Section id="children" title="9. Children's privacy">
          <p>
            Quant is built for university students and is not directed at
            children under the age of 13. If we become aware that we've
            collected personal data from a child without appropriate
            consent, we will delete it promptly. If you believe a child has
            provided us with personal data, please contact us.
          </p>
        </Section>

        <Section id="cookies" title="10. Cookies on our website">
          <p>
            getquant.app uses cookies and similar technologies to remember
            your preferences, understand how visitors use the site, and
            measure the performance of our marketing. You can control
            cookies through your browser settings; disabling them may affect
            some website functionality. Cookies are used only on our
            website — Quant on WhatsApp does not use browser cookies.
          </p>
        </Section>

        <Section id="international" title="11. International data transfers">
          <p>
            Some of our service providers (such as WhatsApp/Meta, cloud
            hosting, and AI processing partners) operate servers outside
            Nigeria. When your data is transferred internationally, we take
            steps to ensure it receives a level of protection consistent
            with the NDPA and this policy.
          </p>
        </Section>

        <Section id="changes" title="12. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes to Quant or applicable law. If we make material changes,
            we'll notify you via WhatsApp or by updating the "Last updated"
            date above. We encourage you to review this page periodically.
          </p>
        </Section>

        <Section id="contact" title="13. Contact us">
          <p>
            If you have questions about this Privacy Policy or how we handle
            your data, reach out to us:
          </p>
          <div className="mt-1 flex flex-col gap-3">
            <a
              href="mailto:support@quantapp.com"
              className="flex items-center gap-2 text-[#4A42FF] hover:underline"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4A42FF]/10">
                <MdEmail className="text-[15px]" />
              </span>
              support@quantapp.com
            </a>
          </div>
        </Section>
      </div>
    </main>
  );
}

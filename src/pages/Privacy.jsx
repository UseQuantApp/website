import LegalPage from "../components/home/LegalPage";

// TODO: confirm the exact "last updated" date with Quant.
const LAST_UPDATED = "October 2026";

const intro = [
  "Welcome to Quant, your academic companion. We're building a simpler way for students to access learning materials, get academic support, and navigate university life.",
  "Your privacy matters to us. This Privacy Policy explains what information we collect, how we use it, and the choices you have when using Quant.",
];

const sections = [
  {
    heading: "1. What Information We Collect",
    lead: ["Depending on how you use Quant, we may collect:"],
    items: [
      {
        label: "Account information:",
        text: "Your name, email address, phone number, and other details you provide when creating an account.",
      },
      {
        label: "Academic information:",
        text: "Your university, faculty, department, level, courses, and other academic details you choose to share.",
      },
      {
        label: "Academic materials:",
        text: "PDFs, DOCX files, past questions, lecture notes, and other documents you upload or submit.",
      },
      {
        label: "Messages and interactions:",
        text: "Messages, requests, and information you share when using Quant through WhatsApp or other supported channels.",
      },
      {
        label: "Usage information:",
        text: "Basic technical and activity information needed to operate, maintain, and improve our services.",
      },
    ],
    after: [
      "We only collect information that is relevant to providing or improving Quant, subject to the services you use.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    lead: ["We use your information to:"],
    items: [
      "Create and manage your account.",
      "Help you find relevant academic materials.",
      "Process and organise uploaded documents.",
      "Provide academic assistance and other Quant features.",
      "Send important service updates and reminders where applicable.",
      "Review submitted materials before making them available to other students, where that feature applies.",
      "Maintain the safety, reliability, and performance of our services.",
      "Respond to questions, feedback, and support requests.",
    ],
  },
  {
    heading: "3. AI and Document Processing",
    lead: [
      "Quant may use AI tools to process uploaded documents, organise academic information, or provide learning support.",
      "AI-generated responses may sometimes be incomplete or inaccurate, so you should verify important academic information.",
      "Please avoid uploading sensitive personal information that is not needed for the academic service. We will provide further details about how AI providers process information as our systems and providers are confirmed.",
    ],
  },
  {
    heading: "4. Academic Materials You Upload",
    lead: [
      "When you submit lecture notes, past questions, or other academic materials, we may review them for relevance, quality, and suitability.",
      "If a submission is approved for sharing, it may be made available to other Quant users. Do not upload private documents, confidential information, or materials you do not have permission to share.",
      "We will explain any additional rules that apply to material contributions and rewards within the relevant feature.",
    ],
  },
  {
    heading: "5. How We Share Information",
    lead: [
      "We do not treat your personal information as public content. However, we may share relevant information:",
    ],
    items: [
      "With service providers that help us operate Quant, such as hosting, messaging, or AI providers.",
      "When needed to provide a feature you have requested.",
      "When required by law or necessary to protect the rights, safety, and security of Quant and its users.",
      "With your permission or at your direction.",
    ],
    after: [
      "We will update this section as our actual service providers and data-sharing arrangements are confirmed.",
    ],
  },
  {
    heading: "6. Data Storage and Security",
    lead: [
      "We take reasonable steps to protect the information entrusted to us and limit access to authorised purposes. However, no online service can guarantee absolute security.",
      "We retain information for as long as reasonably necessary to provide our services, meet applicable legal obligations, resolve disputes, and maintain legitimate business records.",
    ],
  },
  {
    heading: "7. Your Privacy Choices",
    lead: ["Subject to applicable law, you may request to:"],
    items: [
      "Access the personal information we hold about you.",
      "Correct inaccurate information.",
      "Delete certain personal information.",
      "Withdraw consent where processing relies on your consent.",
      "Ask questions or raise concerns about how your information is used.",
    ],
    after: [
      "Some information may need to be retained where required by law or for legitimate operational purposes.",
    ],
  },
  {
    heading: "8. Third-Party Services",
    lead: [
      "Quant may rely on third-party services, including WhatsApp and other technology providers. Their own privacy policies and terms may also apply when you use their services.",
      "We encourage you to review those policies so you understand how your information is handled by those providers.",
    ],
  },
  {
    heading: "Changes to This Policy",
    lead: [
      "We may update this Privacy Policy as Quant develops. When we make changes, we will update the date at the top and provide additional notice where appropriate.",
    ],
  },
  {
    heading: "Contact Us",
    lead: [
      "If you have questions about this Privacy Policy or want to make a privacy request, contact us at:",
    ],
    contactEmail: "hello@getquant.app",
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={intro}
      sections={sections}
    />
  );
}

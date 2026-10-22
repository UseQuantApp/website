import LegalPage from "../components/home/LegalPage";

const LAST_UPDATED = "20 October 2026";

const intro = [
  "Welcome to Quant! These Terms of Service explain the rules for using Quant and the responsibilities we share in making it a useful and safe experience for students.",
  "By accessing or using Quant, you agree to these Terms. If you do not agree, please do not use the service.",
];

const sections = [
  {
    heading: "1. About Quant",
    lead: [
      "Quant provides tools designed to make student life easier, including access to academic materials, learning support, and other academic productivity features.",
      "Our services and features may change as we improve the platform.",
    ],
  },
  {
    heading: "2. Your Account",
    lead: [
      "You are responsible for providing accurate information when creating your account and keeping your account details secure.",
      "You must not impersonate another person, provide misleading information, or use another person's account without permission.",
      "If you believe someone has accessed your account without authorisation, please contact us.",
    ],
  },
  {
    heading: "3. Using Quant Responsibly",
    lead: ["When using Quant, you agree not to:"],
    items: [
      "Upload harmful, unlawful, misleading, or irrelevant content.",
      "Share private or confidential information without permission.",
      "Upload materials you do not own or have the right to distribute.",
      "Use Quant to harass, threaten, defraud, or harm others.",
      "Attempt to disrupt, exploit, or gain unauthorised access to our systems.",
      "Use the service in ways that violate applicable laws or the rights of others.",
    ],
    after: ["We may restrict access to accounts or content that violate these Terms."],
  },
  {
    heading: "4. Academic Materials",
    lead: [
      "Quant may allow users to upload, access, or share lecture notes, past questions, course documents, and other academic resources.",
      "When uploading materials, you confirm that you have the right to submit them and that doing so does not violate another person's rights or applicable rules.",
      "Submitted materials may be reviewed before approval. Approved materials may be made available to other Quant users where the relevant feature supports sharing.",
      "Please do not upload confidential examination materials, private student records, or other restricted content.",
    ],
  },
  {
    heading: "5. AI-Powered Features",
    lead: [
      "Some Quant features may use artificial intelligence to organise materials, respond to questions, or support learning.",
      "AI-generated content can contain mistakes. You are responsible for checking important information against reliable sources and your institution's official guidance.",
      "Quant should support your learning, not replace your own judgement, academic effort, or the instructions of your lecturers.",
      "You must not use Quant to cheat, impersonate another student, or engage in academic misconduct.",
    ],
  },
  {
    heading: "6. Rewards, Tokens, and Contributions",
    lead: [
      "Quant may offer points, tokens, rewards, or other benefits for eligible activities, such as contributing academic materials.",
      "Where these features are available, their eligibility requirements, redemption rules, and applicable limits will be communicated separately.",
      "Rewards are subject to the rules of the relevant programme. We may investigate suspected abuse or fraudulent activity and take appropriate action.",
      "Any paid features, token purchases, or refund arrangements will be governed by the specific terms presented when those features become available.",
    ],
  },
  {
    heading: "7. Intellectual Property",
    lead: [
      "Quant and its associated branding, software, design, and original content are protected by applicable intellectual property laws.",
      "You retain ownership of materials you own and upload. By submitting materials, you grant Quant permission to process, review, store, and—where you have submitted them for sharing and they are approved—make them available to other users as needed to operate that feature.",
      "This permission does not transfer ownership of your materials to Quant.",
      "You must respect the intellectual property rights of Quant, other users, educational institutions, and third parties.",
    ],
  },
  {
    heading: "8. Third-Party Services",
    lead: [
      "Quant may rely on third-party platforms and providers to deliver certain features. These services may have their own terms, privacy policies, and availability limitations.",
      "We are not responsible for third-party services to the extent permitted by applicable law.",
    ],
  },
  {
    heading: "9. Service Availability and Changes",
    lead: [
      "We are continuously developing Quant, so some features may change, become temporarily unavailable, or be discontinued.",
      "We will make reasonable efforts to maintain the service, but we cannot guarantee uninterrupted availability or that every feature will always work without errors.",
    ],
  },
  {
    heading: "10. Account Suspension or Termination",
    lead: [
      "We may suspend or restrict access to Quant if we reasonably believe an account has violated these Terms, created a security risk, or been used unlawfully.",
      "You may stop using Quant at any time. If you want to close your account or request deletion of personal information, contact us using our official support channel. Some information may need to be retained where required by law or for legitimate operational purposes.",
    ],
  },
  {
    heading: "11. Privacy",
    lead: [
      "Your use of Quant is also governed by our Privacy Policy, which explains how we collect, use, and protect personal information.",
    ],
  },
  {
    heading: "12. Changes to These Terms",
    lead: [
      "We may update these Terms as Quant evolves. When changes are made, we will update the date at the top and provide notice where appropriate.",
      "Continuing to use Quant after updated Terms take effect means you accept the changes, to the extent permitted by law.",
    ],
  },
  {
    heading: "13. Governing Law",
    lead: [
      "These Terms are intended to be governed by the laws of the Federal Republic of Nigeria, subject to applicable legal requirements.",
    ],
  },
  {
    heading: "Contact Us",
    lead: ["For questions about these Terms, contact:"],
    contactEmail: "hello@getquant.app",
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Quant Terms of Service"
      pageTitle="Terms of Service | Quant"
      lastUpdated={LAST_UPDATED}
      intro={intro}
      sections={sections}
    />
  );
}

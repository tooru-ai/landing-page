// AUTO-GENERATED from docs/research/whelp.co/pages/pages-data.json by scripts/gen-page-data.mjs
import { FeatureIcon0, FeatureIcon1, FeatureIcon2, FeatureIcon3, FeatureIcon4, FeatureIcon5, FeatureIcon6, FeatureIcon7, FeatureIcon8, FeatureIcon9, FeatureIcon10, FeatureIcon11, FeatureIcon12, FeatureIcon13, FeatureIcon14, FeatureIcon15, FeatureIcon16, FeatureIcon17, FeatureIcon18 } from "@/components/feature-icons";

export interface PageSection {
  tag: "h2" | "h3";
  heading: string;
  sub: string;
  image: { src: string; width: number; height: number; alt: string };
  imageSide: "left" | "right";
  wrapperClassName?: string;
  textClassName?: string;
}

export interface PageFeatureCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

export interface FeaturePageData {
  slug: string;
  hero: { heading: string; sub: string; image: { src: string; width: number; height: number; alt: string }; imageSide: "left" | "right" };
  sections: PageSection[];
  features: PageFeatureCard[];
  /* index in sections after which the OmniChannel band renders */
  omniAfterIndex?: number;
}

export const faqItems: { q: string; a: string }[] = [
  {
    "q": "How does Whelp work?",
    "a": "It only takes a few minutes to get started with Whelp. Simply click the \"Get Started\" button, register, and connect your desired apps and channels."
  },
  {
    "q": "What are the security and privacy terms for Whelp?",
    "a": "Whelp offers on-premises solutions for ultimate security, and all cloud connections are end-to-end encrypted. Two-factor authentication is also available."
  },
  {
    "q": "Are there any technical requirements to use Whelp?",
    "a": "No, there are no technical requirements to use Whelp."
  },
  {
    "q": "Is installation or downloading required?",
    "a": "No, installation or downloading is not required. Whelp can be accessed directly through your web browser."
  },
  {
    "q": "How many conversations does my subscription cover?",
    "a": "No, every subscription comes with unlimited conversations, so you can connect with your customers as often as you need."
  },
  {
    "q": "Is it possible to cancel my subscription at any time?",
    "a": "Yes, you can cancel your subscription at any time by contacting our team. Simply reach out to us and let us know that you would like to cancel your subscription. Your subscription will continue to include the features and limits of your current plan until the end of the billing cycle."
  },
  {
    "q": "Are volume discounts available for large businesses?",
    "a": "Yes, we offer customized packages for Enterprise customers who anticipate needing a higher volume of Monthly Active Contacts than what is available in our Team or Business plans. If you are interested in learning more about these customized packages, please get in touch with us and we would be happy to tailor a package to your specific needs."
  }
];

export const featurePages: FeaturePageData[] = [
  {
    slug: "inbox",
    hero: { heading: "Manage all your conversations in one place", sub: "Consolidate phone, email, chat, and messaging app conversations in one location for easy management and response to customer inquiries.", image: { src: "/images/pages/right.b44a27c2.png", width: 1176, height: 1016, alt: "Hero background" }, imageSide: "right" },
    sections: [
      { tag: "h3", heading: "A feature-rich platform that's easy to use", sub: "Enjoy a variety of tools and features to improve customer support with a user-friendly interface.", image: { src: "/images/pages/left.2b45adf9.png", width: 1176, height: 928, alt: "Inbox background" }, imageSide: "left" },
      { tag: "h2", heading: "Assign conversations to your teammates", sub: "Easily assign conversations to your teammates to ensure that every customer inquiry is promptly addressed and resolved.", image: { src: "/images/pages/right.b0615e2f.png", width: 1176, height: 928, alt: "Assign background" }, imageSide: "right", wrapperClassName: "mb-10" },
      { tag: "h3", heading: "Send Emails Like Never Before", sub: "Use our platform to improve your email communication with customers through advanced management tools and customizable options.", image: { src: "/images/pages/left.f39dda21.png", width: 1176, height: 912, alt: "Email compose background" }, imageSide: "left", wrapperClassName: "pt-30! max-[768px]:pt-15!", textClassName: "pl-15" },
      { tag: "h2", heading: "Customize As You Want", sub: "Enhance your customer support experience by customizing your inbox with options like bolding text and other standard features.", image: { src: "/images/pages/right.e7f14d77.png", width: 1176, height: 896, alt: "Email customize background" }, imageSide: "right", wrapperClassName: "mb-10" },
      { tag: "h3", heading: "All of Your Emails in One Unified Inbox", sub: "Keep all of your emails in one central location for easy access and organization.", image: { src: "/images/pages/left.6030c11b.png", width: 1176, height: 848, alt: "Email inbox background" }, imageSide: "left", wrapperClassName: "pb-30! max-[768px]:pb-15!" },
      { tag: "h2", heading: "All Your Data in One Place", sub: "Collect and store all customer data in one location for easy access and analysis to optimize your business operations.", image: { src: "/images/pages/right.633683eb.png", width: 1176, height: 736, alt: "User details customize background" }, imageSide: "right", wrapperClassName: "mt-10" },
      { tag: "h3", heading: "Saved Responses", sub: "Use saved responses to quickly and efficiently respond to common customer inquiries.", image: { src: "/images/pages/left.687e54ff.png", width: 1176, height: 800, alt: "Saved response inbox background" }, imageSide: "left" },
      { tag: "h2", heading: "Calling Has Never Been Easier Before", sub: "Place and receive calls with ease and send voice recordings to customers if needed.", image: { src: "/images/pages/right.83981467.png", width: 1176, height: 640, alt: "Call inbox background" }, imageSide: "right" },
      { tag: "h3", heading: "Schedule Your Messages for Later", sub: "Schedule messages to be sent at a later time to ensure that your customers receive timely and efficient support.", image: { src: "/images/pages/left.c207ba18.png", width: 1176, height: 640, alt: "Schedule inbox background" }, imageSide: "left" },
      { tag: "h2", heading: "Send Your Voice Record", sub: "Send voice recordings to customers if needed to better communicate and resolve issues.", image: { src: "/images/pages/right.d4aa71b4.png", width: 1176, height: 640, alt: "Call inbox background" }, imageSide: "right" }
    ],
    features: [
      { icon: FeatureIcon0, iconBg: "var(--wh-green-5)", iconColor: "var(--wh-green-90)", title: "Create folders", description: "Organize your conversations and messages with customizable folders." },
      { icon: FeatureIcon1, iconBg: "var(--wh-purple-5)", iconColor: "var(--wh-purple-90)", title: "Real-time discussions", description: "Collaborate with your team in real-time to provide quick and efficient customer support." },
      { icon: FeatureIcon2, iconBg: "var(--wh-blue-5)", iconColor: "var(--wh-blue-90)", title: "Add tags", description: "Easily tag and categorize your conversations for improved organization and tracking." },
      { icon: FeatureIcon3, iconBg: "var(--wh-yellow-5)", iconColor: "var(--wh-yellow-90)", title: "Private notes", description: "Keep track of important information and notes with our private notes feature." },
      { icon: FeatureIcon4, iconBg: "var(--wh-pink-5)", iconColor: "var(--wh-pink-90)", title: "Send invoices", description: "Quickly send invoices to customers directly from our platform" },
      { icon: FeatureIcon5, iconBg: "var(--wh-orange-5)", iconColor: "var(--wh-orange-90)", title: "Send events", description: "Schedule and send events to customers through our platform." }
    ],
    omniAfterIndex: 6,
  },
  {
    slug: "crm",
    hero: { heading: "The CRM solution you've been looking for", sub: "Streamline your customer relationship management with our feature-rich platform that offers tools and solutions to improve your customer support.", image: { src: "/images/pages/right.9f15b2dd.png", width: 1176, height: 976, alt: "CRM Hero background" }, imageSide: "right" },
    sections: [
      { tag: "h2", heading: "One location for all your customer data", sub: "The platform allows you to collect and store all of your customer data in one location, making it easy to access and analyze it to optimize your business operations.", image: { src: "/images/pages/left.f4e4a29d.png", width: 1176, height: 736, alt: "User details background" }, imageSide: "left" },
      { tag: "h2", heading: "Importing your data is a breeze", sub: "This platform makes it easy to import your existing customer data, allowing you to seamlessly transition to our platform.", image: { src: "/images/pages/right.c0900a4e.png", width: 1176, height: 688, alt: "Import background" }, imageSide: "right" },
      { tag: "h2", heading: "Customize your data management", sub: "With this platform, you have control over your data management. You can create your own tables and set your own rules for organizing and tracking your customer data.", image: { src: "/images/pages/left.3aa132f4.png", width: 1176, height: 928, alt: "Table fields background" }, imageSide: "left" },
      { tag: "h2", heading: "Track customer activity and interactions", sub: "Keep track of customer activity and interactions to get a better understanding of their behavior and preferences.", image: { src: "/images/pages/right.537a5c91.png", width: 1176, height: 928, alt: "Activity background" }, imageSide: "right" },
      { tag: "h2", heading: "Quickly find the data you need", sub: "Use the platform's filtering tools to quickly locate specific customer data.", image: { src: "/images/pages/left.ced91302.png", width: 1176, height: 776, alt: "Filter data background" }, imageSide: "left" },
      { tag: "h2", heading: "Easily manage your customer contacts", sub: "Our platform makes it simple to add, edit, and delete customer contacts as needed.", image: { src: "/images/pages/right.1e51362b.png", width: 1176, height: 712, alt: "Manage contacts background" }, imageSide: "right" },
      { tag: "h2", heading: "Merge duplicate customer contacts", sub: "Eliminate duplicate customer contacts with our merge feature.", image: { src: "/images/pages/left.61808840.png", width: 1176, height: 640, alt: "Merge contacts background" }, imageSide: "left" },
      { tag: "h2", heading: "Export your customer data as needed", sub: "Export your customer data for backup or use in other systems with ease.", image: { src: "/images/pages/right.adb99847.png", width: 1176, height: 640, alt: "Export data background" }, imageSide: "right" },
      { tag: "h2", heading: "Categorize your customer contacts with tags", sub: "Use tagging feature to categorize your customer contacts, making it easier to find and manage them.", image: { src: "/images/pages/left.c7256c3c.png", width: 1176, height: 640, alt: "Add tag background" }, imageSide: "left" }
    ],
    features: [
      { icon: FeatureIcon2, iconBg: "var(--wh-green-5)", iconColor: "var(--wh-green-90)", title: "Add tags", description: "Easily categorize and organize your customer data by adding tags to their profiles." },
      { icon: FeatureIcon6, iconBg: "var(--wh-purple-5)", iconColor: "var(--wh-purple-90)", title: "Customize table", description: "Tailor the display of your customer data by selecting which columns to show or hide in your table view." },
      { icon: FeatureIcon7, iconBg: "var(--wh-blue-5)", iconColor: "var(--wh-blue-90)", title: "Filter your data", description: "Quickly find specific customers by filtering your data by various criteria such as location, purchase history, or tag." },
      { icon: FeatureIcon3, iconBg: "var(--wh-yellow-5)", iconColor: "var(--wh-yellow-90)", title: "Private notes", description: "Keep sensitive or confidential information about your customers securely stored with our private notes feature." },
      { icon: FeatureIcon8, iconBg: "var(--wh-pink-5)", iconColor: "var(--wh-pink-90)", title: "Save segments", description: "Create and save segments of customers based on specific criteria, making it easy to target marketing campaigns or track performance." },
      { icon: FeatureIcon9, iconBg: "var(--wh-orange-5)", iconColor: "var(--wh-orange-90)", title: "User details", description: "View detailed information about each of your team members, including their role, permissions, and activity history." }
    ],
  },
  {
    slug: "reporting",
    hero: { heading: "Track all your data with the advanced reporting system", sub: "Keep track of all your customer interactions and business performance with our advanced reporting system, equipped with a range of tools to help you analyze and optimize your operations.", image: { src: "/images/pages/right.6f60146a.png", width: 1176, height: 1040, alt: "Reporting hero background" }, imageSide: "right" },
    sections: [
      { tag: "h3", heading: "Monitor your Average Handling Time", sub: "Measure and monitor your Average Handling Time to identify areas for improvement in customer support.", image: { src: "/images/pages/left.f6b067fa.png", width: 1176, height: 768, alt: "AverageHandlingTime background" }, imageSide: "left", wrapperClassName: "pt-30! max-[768px]:pt-15!" },
      { tag: "h2", heading: "First response time analysis", sub: "Our reporting system includes tools to analyze and track your team's First Response Time, helping you optimize your customer support and improve your response times.", image: { src: "/images/pages/right.68bc224e.png", width: 1176, height: 768, alt: "FirstResponseTime background" }, imageSide: "right", wrapperClassName: "pb-30! max-[768px]:pb-15!" },
      { tag: "h3", heading: "Chatbot performance reports", sub: "Get detailed reports on the performance and effectiveness of your AI-based chatbot with our reporting system.", image: { src: "/images/pages/left.b64c488a.png", width: 1176, height: 800, alt: "ChatbotReports background" }, imageSide: "left", wrapperClassName: "mt-5" },
      { tag: "h2", heading: "Channel-specific reports", sub: "Our reporting system offers channel-specific reports to help you track and analyze your customer interactions across various channels, giving you a comprehensive view of your customer support.", image: { src: "/images/pages/right.82c28c6c.png", width: 1176, height: 592, alt: "ChannelReports background" }, imageSide: "right" },
      { tag: "h3", heading: "Reports overview", sub: "Our reporting system provides an overview of all your reports, making it easy to access and compare data from different sources.", image: { src: "/images/pages/left.6c38da2b.png", width: 1176, height: 928, alt: "ReportsOverview background" }, imageSide: "left" },
      { tag: "h2", heading: "Custom range filter", sub: "Set custom date ranges to filter your data and focus on specific time periods with our reporting system's custom range filter.", image: { src: "/images/pages/right.98f62af2.png", width: 1176, height: 928, alt: "RangeFilter background" }, imageSide: "right" }
    ],
    features: [
      { icon: FeatureIcon10, iconBg: "var(--wh-green-5)", iconColor: "var(--wh-green-90)", title: "Company reports", description: "View and analyze data on customer interactions, agent performance, and chatbot usage across all channels." },
      { icon: FeatureIcon11, iconBg: "var(--wh-purple-5)", iconColor: "var(--wh-purple-90)", title: "Agent reports", description: "Track and measure the productivity and performance of individual agents within your team." },
      { icon: FeatureIcon12, iconBg: "var(--wh-blue-5)", iconColor: "var(--wh-blue-90)", title: "Chatbot reports", description: "Monitor and analyze the effectiveness of your chatbot in automating customer inquiries and providing support." },
      { icon: FeatureIcon2, iconBg: "var(--wh-yellow-5)", iconColor: "var(--wh-yellow-90)", title: "Tag reports", description: "View and analyze data on customer interactions and performance based on tags assigned to conversations." },
      { icon: FeatureIcon13, iconBg: "var(--wh-pink-5)", iconColor: "var(--wh-pink-90)", title: "Integration Reports", description: "Monitor and analyze data on how integrations with other tools and platforms are affecting customer interactions and team productivity." },
      { icon: FeatureIcon14, iconBg: "var(--wh-orange-5)", iconColor: "var(--wh-orange-90)", title: "Export Reports", description: "Easily export data from any report for further analysis or sharing with others." }
    ],
  },
  {
    slug: "chatbot",
    hero: { heading: "Design unique chatbots with drag and drop builder", sub: "Create personalized chatbots quickly and easily with our intuitive drag-and-drop builder.", image: { src: "/images/pages/right.c09b7db4.png", width: 1224, height: 848, alt: "Chatbot hero background" }, imageSide: "right" },
    sections: [
      { tag: "h3", heading: "Get 7/24 support with our chatbot", sub: "Provide your customers with 24/7 support by automating common inquiries with our AI-based chatbot.", image: { src: "/images/pages/left.fd12151c.png", width: 1176, height: 928, alt: "Bot background" }, imageSide: "left" },
      { tag: "h2", heading: "Happy customers", sub: "Keep your customers happy with fast, efficient, and personalized support from our chatbot.", image: { src: "/images/pages/right.ec1bec4f.png", width: 1176, height: 928, alt: "HappyCustomers background" }, imageSide: "right" },
      { tag: "h3", heading: "Intuitive builder at your fingertips", sub: "Our platform makes it easy for you to design and customize chatbots with its user-friendly interface.", image: { src: "/images/pages/left.62e64c9a.png", width: 1176, height: 976, alt: "BotFlow1 background" }, imageSide: "left", wrapperClassName: "pt-30! max-[768px]:pt-15!" },
      { tag: "h2", heading: "Automate the whole journey for customers", sub: "Use our chatbot to automate the entire customer journey, from initial contact to purchase and beyond.", image: { src: "/images/pages/right.8fa188d0.png", width: 1176, height: 928, alt: "BotFlow2 background" }, imageSide: "right" },
      { tag: "h3", heading: "Chatbot reports", sub: "Get detailed reports on the performance and effectiveness of your chatbot to optimize its performance.", image: { src: "/images/pages/left.b64c488a.png", width: 1176, height: 800, alt: "BotReports background" }, imageSide: "left", wrapperClassName: "pb-30! max-[768px]:pb-15!" },
      { tag: "h2", heading: "Design great flows with no-code platform", sub: "Create complex chatbot flows without any coding knowledge using our no-code platform.", image: { src: "/images/pages/right.ad64c5e0.png", width: 1176, height: 928, alt: "BotFlow background" }, imageSide: "right" },
      { tag: "h3", heading: "Condition builder", sub: "Use our condition builder to customize chatbot responses based on specific conditions or triggers.", image: { src: "/images/pages/left.4952c461.png", width: 1176, height: 928, alt: "BotCondition background" }, imageSide: "left" },
      { tag: "h2", heading: "Select your desired channel", sub: "Communicate with customers through their preferred channels, including SMS, Voice, WhatsApp, WeChat, Messenger, Email, Live Chat, and other social messengers.", image: { src: "/images/pages/right.93b3abee.png", width: 1176, height: 928, alt: "BotChannels background" }, imageSide: "right" }
    ],
    features: [
      { icon: FeatureIcon12, iconBg: "var(--wh-green-5)", iconColor: "var(--wh-green-90)", title: "Live Chat", description: "Communicate with customers in real-time through our live chat feature." },
      { icon: FeatureIcon15, iconBg: "var(--wh-purple-5)", iconColor: "var(--wh-purple-90)", title: "Flow builder", description: "Create personalized chatbot flows to guide customer conversations." },
      { icon: FeatureIcon16, iconBg: "var(--wh-blue-5)", iconColor: "var(--wh-blue-90)", title: "Artificial Intelligence", description: "Leverage AI to automate customer interactions and improve efficiency." },
      { icon: FeatureIcon10, iconBg: "var(--wh-yellow-5)", iconColor: "var(--wh-yellow-90)", title: "Reporting", description: "Track and analyze chatbot performance with our comprehensive reporting tools." },
      { icon: FeatureIcon17, iconBg: "var(--wh-pink-5)", iconColor: "var(--wh-pink-90)", title: "Different Channels", description: "Connect with customers across various channels, including messaging apps and social media." },
      { icon: FeatureIcon3, iconBg: "var(--wh-orange-5)", iconColor: "var(--wh-orange-90)", title: "Export Reports", description: "Use our pre-built templates or create custom ones to streamline chatbot setup." }
    ],
  },
  {
    slug: "outbound",
    hero: { heading: "Automate your campaigns with ease", sub: "Automate your marketing efforts with our campaign automation tools, saving time and resources while reaching your audience efficiently.", image: { src: "/images/pages/right.2b53e303.png", width: 1176, height: 880, alt: "Outbound hero background" }, imageSide: "right" },
    sections: [
      { tag: "h3", heading: "Reach a larger audience with bulk messaging", sub: "Send bulk messages to your audience, increasing your reach and helping you grow your business.", image: { src: "/images/pages/left.5babc19f.png", width: 1176, height: 752, alt: "BulkMessages background" }, imageSide: "left", wrapperClassName: "pt-30! max-[768px]:pt-15!" },
      { tag: "h2", heading: "Keep track of your campaigns with detailed reports", sub: "Monitor the performance of your campaigns with detailed reports, providing valuable insights for future planning.", image: { src: "/images/pages/right.3c075ee9.png", width: 1176, height: 680, alt: "CampaignReports background" }, imageSide: "right", wrapperClassName: "pb-30! max-[768px]:pb-15!" },
      { tag: "h3", heading: "Filter your audience to target the right people", sub: "Use various criteria to filter your audience and target the right people for your campaigns.", image: { src: "/images/pages/left.fcbf16bc.png", width: 1176, height: 776, alt: "FilterAudience background" }, imageSide: "left" },
      { tag: "h2", heading: "Identify your target audience and tailor your campaigns", sub: "Determine your target audience and tailor your campaigns to their specific needs and preferences.", image: { src: "/images/pages/right.724ba8c7.png", width: 1176, height: 592, alt: "TargetAudience background" }, imageSide: "right" },
      { tag: "h3", heading: "Schedule your messages for later", sub: "Plan and execute your campaigns in advance by scheduling your messages for later.", image: { src: "/images/pages/left.f2344c3d.png", width: 1176, height: 928, alt: "Schedule background" }, imageSide: "left" },
      { tag: "h2", heading: "Add personalization to your campaigns", sub: "Enhance the engagement of your campaigns by adding personalization to your messages.", image: { src: "/images/pages/right.7b51ccb3.png", width: 1176, height: 928, alt: "Personalization background" }, imageSide: "right" },
      { tag: "h3", heading: "Choose your desired channel for your campaigns", sub: "Reach your audience through their preferred channels, including SMS, Voice, WhatsApp, WeChat, Messenger, Email, and Live Chat.", image: { src: "/images/pages/left.82c99e56.png", width: 1176, height: 928, alt: "SelectChannel background" }, imageSide: "left" }
    ],
    features: [
      { icon: FeatureIcon18, iconBg: "var(--wh-green-5)", iconColor: "var(--wh-green-90)", title: "Automation", description: "Automate repetitive tasks and personalize your outbound messages to save time and improve customer engagement." },
      { icon: FeatureIcon17, iconBg: "var(--wh-purple-5)", iconColor: "var(--wh-purple-90)", title: "Different Channels", description: "Reach customers through various channels, including email, SMS, and messaging apps, to ensure that they can communicate with you wherever they are." },
      { icon: FeatureIcon10, iconBg: "var(--wh-blue-5)", iconColor: "var(--wh-blue-90)", title: "Reporting", description: "Track and analyze your performance and customer interactions with our analytics and reporting tools." },
      { icon: FeatureIcon11, iconBg: "var(--wh-yellow-5)", iconColor: "var(--wh-yellow-90)", title: "Audience", description: "Segment and target specific audiences with our filtering tools to ensure that you are reaching the right customers with the right messages." },
      { icon: FeatureIcon7, iconBg: "var(--wh-pink-5)", iconColor: "var(--wh-pink-90)", title: "Filter Your Data", description: "Use our filtering tools to segment and target specific audiences to ensure that you are reaching the right customers with the right messages." },
      { icon: FeatureIcon0, iconBg: "var(--wh-orange-5)", iconColor: "var(--wh-orange-90)", title: "Create folders", description: "Organize your outbound messages and campaigns with customizable folders to improve efficiency and keep your data organized." }
    ],
  }
];

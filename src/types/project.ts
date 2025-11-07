export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  year: string;
  role: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FinTech Mobile Banking App",
    category: "Mobile App Design",
    description: "Redesigned mobile banking experience with focus on accessibility and micro-interactions",
    longDescription: "Led the complete redesign of a mobile banking application, focusing on improving user trust, accessibility, and daily transaction flows. Conducted extensive user research with 200+ participants and achieved a 45% increase in daily active users.",
    image: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyMzk0NzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile", "FinTech", "User Research", "Accessibility"],
    year: "2024",
    role: "Lead UX Designer",
    isFeatured: true
  },
  {
    id: "2",
    title: "Healthcare Patient Portal",
    category: "Web Application",
    description: "Enterprise healthcare platform connecting patients with providers through intuitive interface",
    longDescription: "Designed a comprehensive patient portal for a major healthcare provider, streamlining appointment scheduling, medical records access, and telehealth consultations. The solution reduced administrative overhead by 60% and improved patient satisfaction scores by 38%.",
    image: "https://images.unsplash.com/photo-1591608517093-3bb6aa9efe35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwfGVufDF8fHx8MTc2MjQyNDA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Healthcare", "Enterprise", "Web Design", "Telehealth"],
    year: "2024",
    role: "Senior UX Designer",
    isFeatured: true
  },
  {
    id: "3",
    title: "E-commerce Checkout Flow",
    category: "E-commerce",
    description: "Optimized checkout experience reducing cart abandonment by 32%",
    longDescription: "Redesigned the entire checkout flow for a major retail client, implementing guest checkout, saved payment methods, and real-time shipping estimates. A/B testing showed significant improvements in conversion rates.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MjQyNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["E-commerce", "Conversion", "A/B Testing"],
    year: "2023",
    role: "UX Designer"
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description: "Real-time analytics platform for marketing teams with customizable widgets",
    longDescription: "Created an intuitive analytics dashboard that allows marketing teams to track campaign performance in real-time. Features drag-and-drop widget customization and automated reporting.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyNDQ1ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Data Viz", "Dashboard", "SaaS"],
    year: "2023",
    role: "UX Designer"
  },
  {
    id: "5",
    title: "Social Media Management Tool",
    category: "SaaS Platform",
    description: "Multi-platform social media scheduling and analytics tool for content creators",
    longDescription: "Designed a comprehensive social media management platform that allows creators to schedule posts, analyze engagement, and collaborate with team members across multiple social platforms.",
    image: "https://images.unsplash.com/photo-1717390758666-97dc77ef7a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBpbnRlcmZhY2UlMjB1eHxlbnwxfHx8fDE3NjI0NTM1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["SaaS", "Social Media", "Collaboration"],
    year: "2023",
    role: "UX Designer"
  }
];

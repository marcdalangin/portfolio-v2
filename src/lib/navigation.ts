export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  upcoming?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    title: "Learn",
    items: [
      { label: "Webinars", href: "/webinars", icon: "video", badge: "3" },
      { label: "Courses", href: "/courses", icon: "graduation-cap", upcoming: true },
    ],
  },
  {
    title: "Explore",
    items: [
      { label: "Links", href: "/links", icon: "link", badge: "10" },
      { label: "Blog", href: "/blog", icon: "file-text" },
      { label: "Gear", href: "/gear", icon: "cpu", badge: "12" },
      { label: "Resources", href: "/resources", icon: "book-open" },
    ],
  },
  {
    title: "Work with me",
    items: [
      { label: "Services", href: "/services", icon: "briefcase" },
    ],
  },
  {
    title: "Portfolio",
    items: [
      { label: "About", href: "/about", icon: "user" },
      { label: "Projects", href: "/projects", icon: "folder-code", badge: "9" },
      { label: "Stack", href: "/stack", icon: "layers", badge: "32" },
    ],
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
];
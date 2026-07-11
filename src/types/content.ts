export interface NavMenuItem {
  label: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface NavDropdown {
  label: string;
  href?: string;
  items?: NavMenuItem[];
}

export interface SolutionSlide {
  category: string;
  title: string;
  image: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

export interface FooterColumn {
  header: string;
  links: { label: string; href: string }[];
}

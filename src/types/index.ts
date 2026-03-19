// Types globaux pour NEXARA

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currency: string;
  period?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  imageUrl: string;
  clientName?: string;
  sector?: string;
  results?: string;
  techStack?: string[];
  featured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category?: string;
  imageUrl?: string;
  author: string;
  publishedAt?: Date | string;
  views?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

export interface Lead {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  source?: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "LOST";
  notes?: string;
  createdAt: Date | string;
}

export interface DevisRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  sector?: string;
  service: string;
  budget?: string;
  timeline?: string;
  description?: string;
  status: "NEW" | "IN_REVIEW" | "QUOTED" | "ACCEPTED" | "REJECTED";
  createdAt: Date | string;
}

export type ServiceCategory =
  | "chatbots-ia"
  | "sites-web"
  | "ecommerce"
  | "applications-web"
  | "branding"
  | "automatisation";

export type StatusType = "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "LOST" | "IN_REVIEW" | "QUOTED" | "ACCEPTED" | "REJECTED";

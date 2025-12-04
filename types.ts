export interface NavItem {
  label: string;
  href: string;
}

export interface CollectionItem {
  title: string;
  description: string;
  image: string;
  id: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface GalleryItem {
  src: string;
  caption: string;
}

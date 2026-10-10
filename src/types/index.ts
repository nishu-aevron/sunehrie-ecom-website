export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
  description: string;
  material?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount: number;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

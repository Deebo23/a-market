
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
  isFree?: boolean;
  isBestSeller?: boolean;
  badge?: string;
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productsCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

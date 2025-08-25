import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss']
})
export class ProductDetails {
  // Product data - in a real app this would come from a service
  product = {
    name: 'APPLE iPhone 15 Pro Max 5G, 256GB, Natural Titanium',
    price: 1199,
    originalPrice: 1399,
    discount: 14,
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center'
    ],
    currentImageIndex: 0,
    specifications: {
      'Display': '6.7-inch Super Retina XDR OLED',
      'Processor': 'A17 Pro chip',
      'Storage': '256GB',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback',
      'Colors': 'Natural Titanium, Blue Titanium, White Titanium, Black Titanium'
    },
    features: [
      '5G capable',
      'A17 Pro chip for gaming',
      'Pro camera system',
      'Titanium design',
      'USB-C connector',
      'Action button'
    ]
  };

  selectImage(index: number) {
    this.product.currentImageIndex = index;
  }

  addToCart() {
    // Implementation for adding to cart
    console.log('Added to cart:', this.product.name);
  }

  addToWishlist() {
    // Implementation for adding to wishlist
    console.log('Added to wishlist:', this.product.name);
  }
}

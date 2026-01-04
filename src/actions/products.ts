'use server'

import { ApiResponse, Product, Category } from '@/types';

const BASE_URL = 'https://mm-assesment-server.vercel.app/api/v1';

export async function getProducts(): Promise<ApiResponse<Product[]>> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return { 
      success: false, 
      message: 'Failed to fetch products', 
      data: [] 
    };
  }
}

export async function getCategories(): Promise<ApiResponse<Category[]>> {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { 
      success: false, 
      message: 'Failed to fetch categories', 
      data: [] 
    };
  }
}

export async function getProductsByCategory(category: string): Promise<ApiResponse<Product[]>> {
  try {
    const res = await fetch(`${BASE_URL}/products/category/${category}`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
        // Attempt to parse error message if possible, or just throw
        const errorData = await res.json().catch(() => ({}));
        console.error('API Error:', errorData);
        return {
            success: false,
            message: errorData.message || `Failed to fetch products for category: ${category}`,
            data: [],
            errorMessages: errorData.errorMessages
        };
    }
    
    return await res.json();
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return { 
      success: false, 
      message: `Failed to fetch products for category: ${category}`, 
      data: [] 
    };
  }
}

export async function getProductById(id: number): Promise<ApiResponse<Product | null>> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return { 
      success: false, 
      message: `Failed to fetch product: ${id}`, 
      data: null 
    };
  }
}

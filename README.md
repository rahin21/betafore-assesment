# Winstore - E-commerce Home Page Assessment

This project is a Next.js application implementing the Home Page of an E-commerce website based on a provided Figma design and API endpoints.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

This project uses **Next.js 15+ (App Router)** with a focus on **Server Components** and **Server Actions**.

-   **Server Actions**: All API interactions are handled in `src/actions/products.ts`. This ensures no client-side `fetch()` calls are made to the external API, securing API logic and leveraging server capabilities.
-   **Server Components**: The main `Home` page (`src/app/page.tsx`) is a Server Component that fetches data in parallel (Products and Categories) using `Promise.all` and passes it to child components.
-   **Component Structure**:
    -   `src/components/layout`: Contains global layout elements like `Header` and `Footer`.
    -   `src/components/home`: Contains page-specific sections (`Hero`, `CategoryShowcase`, `NewArrivals`, `BestDeals`).
    -   `src/components/ui`: Contains reusable UI atoms (`Button`, `ProductCard`, `Container`).
-   **Styling**: **Tailwind CSS** is used for all styling, ensuring responsiveness and adherence to the design system.
-   **Icons**: `lucide-react` is used for iconography.

## Assumptions & Decisions

1.  **Images**: The provided Figma design contains specific marketing images (banners, category thumbnails). As these assets were not provided as separate files, I have used CSS-based styling/placeholders or the product images from the API where applicable.
2.  **Categories**: The API returns 4 specific categories (`electronics`, `jewelery`, `men's clothing`, `women's clothing`). The Figma design lists different categories (e.g., "Babies Store"). I have used the *API-provided categories* for the functionality and display to ensure data consistency, while maintaining the *visual layout* of the design.
3.  **Pricing & Currency**: The Figma design shows prices in "RS" with a discounted view (Original vs Sale). The API provides a single price in (presumably) USD.
    -   I have displayed the API price as the "current" price.
    -   I have simulated an "original" price (20% higher) to replicate the visual "discount" style shown in the design.
    -   I used `$` to match the likely currency of the `fakestoreapi` data.
4.  **Interactivity**: The "Add to cart" and "Wishlist" buttons are visual implementations. As no Cart/User API endpoints were provided in the requirements, these actions are placeholders.
5.  **Font**: Used `Geist` (Next.js default) as a clean sans-serif font that closely resembles the design's typography.

## Project Structure

```
src/
├── actions/        # Server Actions for API calls
├── app/            # Next.js App Router pages
├── components/     # React components
│   ├── home/       # Home page specific sections
│   ├── layout/     # Header, Footer
│   └── ui/         # Reusable UI components
├── lib/            # Utilities (cn for class merging)
└── types/          # TypeScript interfaces
```

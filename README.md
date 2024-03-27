Overview:

Part 1  
Implement a basic product grid page. The page should have a header with the text “Products” and a grid of
product cards. Each product card should display the product image and title. The cards should render in three
columns on desktop, and one column on mobile. Here is an example of the product data objects:
[
  { "product_id": 1, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
  { "product_id": 2, "title": "Gizmo B", "image": "https://picsum.photos/id/11/200" },
  { "product_id": 3, "title": "Widget C", "image": "https://picsum.photos/id/40/200" }
]


Points from Juan to bring up:
- Definition of a "desktop view", am assuming that desktop view is any screen greater than 768px
- structure is ProductGrid with header
                  |
               ProductCard

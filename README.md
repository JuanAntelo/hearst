Overview:

Part 4
Build a simple modal that displays the product image at a larger size when a product card is clicked. The modal
should be centered and positioned over the rest of the page content, and should have a button to close. See
below for a mockup.

Points from Juan to bring up:
- Definition of a "desktop view", am assuming that desktop view is any screen greater than 768px
- structure is ProductGrid with header
                |        |
          ProductCard ContentRow
- Unclear on if more than 2 content data objects (row-1 / row-3) are possible. Assuming no 
- Assumes that Product list is never less than 3 products
- Assume that if one endpoint fails then auto fail page render and return error to user
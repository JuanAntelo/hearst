Overview:

Part 3
Load product and content data from their respective API endpoints below.
GET https://cx-interview-api.dev.ecmapps.com/products?page=${pagePath}
GET https://cx-interview-api.dev.ecmapps.com/content?page=${pagePath}
For this prompt, your pagePath will be “hello-world”.
The data should be rendered in the grid per parts 1 and 2 of the prompt.

Points from Juan to bring up:
- Definition of a "desktop view", am assuming that desktop view is any screen greater than 768px
- structure is ProductGrid with header
                |        |
          ProductCard ContentRow
- Unclear on if more than 2 content data objects (row-1 / row-3) are possible. Assuming no 
- Assumes that Product list is never less than 3 products
- Assume that if one endpoint fails then auto fail page render and return error to user
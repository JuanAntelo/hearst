Overview:

Part 2
Implement the layout of content rows in the grid. Each content item will occupy a single row, specified by its
position, and should render the material from its contents. Here is an example of content data objects:
[
  { "type": "html", "contents": "<p>This is row 1 of content.</p>", "position": "row-1" },
  { "type": "html", "contents": "<p>This is row 3 of content.</p>", "position": "row-3" }
]

Points from Juan to bring up:
- Definition of a "desktop view", am assuming that desktop view is any screen greater than 768px
- structure is ProductGrid with header
                |        |
          ProductCard ContentRow
- Unclear on if more than 2 content data objects (row-1 / row-3) are possible. Assuming no 

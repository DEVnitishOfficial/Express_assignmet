
const http = require('http');

// Dummy product data
const menProducts = [
        {
          "id": 1,
          "name": "Men's T-Shirt",
          "category": "men",
          "price": 19.99,
          "color": "blue"
        },
        {
          "id": 2,
          "name": "Men's Jeans",
          "category": "men",
          "price": 39.99,
          "color": "black"
        },
        {
          "id": 3,
          "name": "Men's Sneakers",
          "category": "men",
          "price": 59.99,
          "color": "white"
        },
        {
          "id": 4,
          "name": "Men's Watch",
          "category": "men",
          "price": 79.99,
          "color": "silver"
        },
        {
          "id": 5,
          "name": "Men's Polo Shirt",
          "category": "men",
          "price": 29.99,
          "color": "green"
        },
        {
          "id": 6,
          "name": "Men's Hoodie",
          "category": "men",
          "price": 49.99,
          "color": "gray"
        },
        {
          "id": 7,
          "name": "Men's Dress Shoes",
          "category": "men",
          "price": 69.99,
          "color": "brown"
        },
        {
          "id": 8,
          "name": "Men's Sunglasses",
          "category": "men",
          "price": 24.99,
          "color": "black"
        },
        {
          "id": 9,
          "name": "Men's Shorts",
          "category": "men",
          "price": 34.99,
          "color": "blue"
        },
        {
          "id": 10,
          "name": "Men's Belt",
          "category": "men",
          "price": 14.99,
          "color": "brown"
        }
      ]
      

const womenProducts = [
    {
      "id": 1,
      "name": "Women's Dress",
      "category": "women",
      "price": 49.99,
      "color": "red"
    },
    {
      "id": 2,
      "name": "Women's Handbag",
      "category": "women",
      "price": 39.99,
      "color": "pink"
    },
    {
      "id": 3,
      "name": "Women's Heels",
      "category": "women",
      "price": 59.99,
      "color": "black"
    },
    {
      "id": 4,
      "name": "Women's Earrings",
      "category": "women",
      "price": 19.99,
      "color": "gold"
    },
    {
      "id": 5,
      "name": "Women's Blouse",
      "category": "women",
      "price": 29.99,
      "color": "white"
    },
    {
      "id": 6,
      "name": "Women's Skirt",
      "category": "women",
      "price": 34.99,
      "color": "blue"
    },
    {
      "id": 7,
      "name": "Women's Sandals",
      "category": "women",
      "price": 44.99,
      "color": "brown"
    },
    {
      "id": 8,
      "name": "Women's Necklace",
      "category": "women",
      "price": 24.99,
      "color": "silver"
    },
    {
      "id": 9,
      "name": "Women's Jeans",
      "category": "women",
      "price": 39.99,
      "color": "blue"
    },
    {
      "id": 10,
      "name": "Women's Scarf",
      "category": "women",
      "price": 14.99,
      "color": "green"
    }
  ]
  

// Creating a simple HTTP server with 4 routes
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');

  } else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));

  } else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  }
     else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Starting the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

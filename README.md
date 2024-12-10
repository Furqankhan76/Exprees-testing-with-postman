# Express Testing with Postman

A basic Express.js application to demonstrate REST API creation and testing using Postman.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Furqankhan76/Exprees-testing-with-postman.git
   cd Exprees-testing-with-postman
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Open your browser or Postman and navigate to:

arduino
Copy code
http://localhost:3000
Follow the endpoints mentioned below to test the API functionality.

API Endpoints
GET /api/items
Retrieve all items:

json
Copy code
[
  { "id": 1, "name": "Item 1" },
  { "id": 2, "name": "Item 2" }
]
GET /api/items/:id
Retrieve a specific item:

json
Copy code
{ "id": 1, "name": "Item 1" }
POST /api/items
Create a new item:

Request Body:
json
Copy code
{ "name": "New Item" }
Response:
json
Copy code
{ "message": "Item created successfully", "item": { "id": 3, "name": "New Item" } }
PUT /api/items/:id
Update an item:

Request Body:
json
Copy code
{ "name": "Updated Item" }
Response:
json
Copy code
{ "message": "Item updated successfully", "item": { "id": 1, "name": "Updated Item" } }
DELETE /api/items/:id
Delete an item:

json
Copy code
{ "message": "Item deleted successfully" }
Testing with Postman
Import Postman_collection.json into Postman.
Test endpoints using the collection.

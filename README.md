# Products List App
This project is developed as a takehome project. It is a basic products list application. This project has two sides: 'server' and 'client'. 'server' is the back-end Api where the information of products are stored and a seeder is created to add some products to the api. 'client' displays the list of products on explorer. A user can click on see product details buttona and add products to their shopping cart. The product modal shows the information of product with two buttons add and remove.

![screenshot](https://github.com/necmigunduz/mb-test-app-latest/blob/master/assets/server.png)
![screenshot](https://github.com/necmigunduz/mb-test-app-latest/blob/master/assets/client-I.png)
![screenshot](https://github.com/necmigunduz/mb-test-app-latest/blob/master/assets/client-II.png)

## 'server' is Built With

- NodeJS,
- ExpressJS,
- MongoDB.

## 'client' is Built With

- React,
- React-Bootstrap.

## Getting Started
### Clone the repository and prepare client and server for operation:
- `git clone git@github.com:necmigunduz/mb-test-app-latest.git`,
- `cd mb-test-app-latest`,
- `cd server`
- `npm install`
- `cd ..`
- `cd client`
- `npm install`.

### To run MongoDB
- `docker run -d -p 27017:27017 mongo:latest`.

### To run server
- `cd server` (from the main folder),
- `docker build -t server .`,
- `docker run -d -p 8080:8080 server:latest`.

### To run client
- `cd client` (from the main folder),
- `docker build -t client .`,
- `docker run -d -p 3000:3000 client:latest`.

## Usage
- User needs to run MongoDB first and then build server and client, and then run client and server as mentioned above. To view the server (api), please type http://localhost:8080/api/products in your explorer. To view client, type http://localhost3000 in your explorer. After running server and client, user can see the products list and clicking on product details buttons would show the properties of a specific product. Adding and removing products will increase the total amounts on the main page and on product modals. Any total change will influence server api and amount info will be changed accordingly.

## Author

👤 **Necmi Gunduz**

- LinkedIn: [Necmi Gunduz](https://www.linkedin.com/in/necmigunduz/)
- Github: [@necmigunduz](https://github.com/necmigunduz/)
- Twitter: [@necm_gun](https://twitter.com/necm_gun)
- Mail: [necmigunduz@gmail.com](necmigunduz@gmail.com)

## Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!!

## 📝 [License](https://creativecommons.org/licenses/by-nc-nd/4.0/)
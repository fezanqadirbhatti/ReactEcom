# **ReactEcom**

# **ReactEcom**

[![React](https://img.shields.io/badge/React-18.0.0-blue.svg)](https://reactjs.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

ReactEcom is a modern, responsive e-commerce web application built using ReactJS. The project demonstrates the use of dynamic product listings, routing, and API integration to create a simple yet effective shopping platform.

--------------------------------------------------

## **Features**

- 🛍️ **Dynamic Product Listings**: Display a variety of products with details fetched from an API.

- 🚀 **Fast Navigation**: Utilize `react-router-dom` for a seamless single-page application experience.

- 🎨 **Responsive Design**: Styled with Bootstrap for mobile-first, cross-device compatibility.

- 🔐 **Authentication**: Token-based authentication for secure access.

- 💡 **State Management**: Manage application state using React's `useState` and `useEffect` hooks.

--------------------------------------------------

## **Tech Stack**

- **Frontend**: ReactJS, Bootstrap, HTML5, CSS3

- **Routing**: React Router

- **API**: Integration with DummyJSON or other mock APIs

- **Authentication**: JWT token stored in browser cookies

- **Version Control**: Git and GitHub

--------------------------------------------------

## **Setup and Installation**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (version 14+)

- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Steps**

1. **Clone the Repository**
````bash
git clone https://github.com/fezanqadirbhatti/ReactEcom.git
cd ReactEcom
````

2. **Install Dependencies**
````bash
npm install
````

3. **Start the Development Server**

```bash
npm start
````

4. **Build for Production**
````bash
npm run build
````

--------------------------------------------------

## **Directory Structure**

```
ReactEcom/

├── public/

├── src/

│   ├── components/

│   │   ├── Auth/

│   │   ├── Layout/

│   │   ├── AdminPanel/

│   │   ├── Products/

│   │   └── ProductDetail/

│   ├── styles/

│   ├── App.js

│   └── index.js

├── package.json

└── README.md

```

--------------------------------------------------

## **API Integration**

The project fetches product data from DummyJSON:

- **Products Endpoint**: https://dummyjson.com/products

- **Product Detail Endpoint**: https://dummyjson.com/product/:id

--------------------------------------------------

## **Usage**

1. **Authentication**
- Login with valid credentials to access the admin dashboard.
` Session is managed using JWT stored in cookies.

2. **Product Listings**
` Navigate to `/products` to view all available products.
` Click on any product to see its details.

3. **Admin Dashboard**
` Accessible at `/home` after login.

--------------------------------------------------

## **Future Enhancements**

- 🛒 Add a shopping cart and checkout system.

- 🌐 Implement backend integration with a real database.

- 📦 Enhance product filtering and search functionality.

- 🔐 Add role-based access control (e.g., admin vs. user).

--------------------------------------------------

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch (`git checkout -b feature-name`).

3. Commit your changes (`git commit -m "Add feature-name"`).

4. Push to your branch (`git push origin feature-name`).

5. Open a Pull Request.

--------------------------------------------------

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

--------------------------------------------------

## **Author**

**Fezan Bhatti**  

[GitHub Profile](https://github.com/fezanqadirbhatti)

--------------------------------------------------

## **Feedback**

Feel free to open an issue or submit a pull request for any improvements, bugs, or suggestions. Happy coding!

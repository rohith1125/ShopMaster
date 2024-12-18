# Final Project Report

## Introduction
**Team Name**: Kanyarasi  

**Team Members**:  
- **Ripu Daman Reddy Amireddy** - Pitt ID: rra30@pitt.edu  
- **Sai Rohith Tanuku** - Pitt ID: sat278@pitt.edu  
- **Indra Kumar Vaddella** - Pitt ID: inv4@pitt.edu  

Our project, **ShopMaster**, is a fully featured e-commerce web application where users can browse products, manage their shopping carts, place orders, and download invoices. Admin users have enhanced capabilities to add, edit, or delete products, ensuring streamlined product management. The application uses a secure login system, a responsive user interface, and robust backend technologies.

---

## Objective
The goals of our project were to:
- Build a **scalable, fully functional e-commerce platform** using modern web technologies.
- Provide secure **authentication and session management** with hashed passwords and CSRF protection.
- Create **admin tools** for advanced management of products and orders.
- Integrate **Stripe payments** for seamless checkout.
- Generate downloadable **PDF invoices** for completed orders.
- Implement a **responsive design** with polished user interfaces for both regular and admin users.

### Additional Features Beyond Requirements:
1. **Stripe Payment Integration**: Secure, real-time payment gateway for processing orders.
2. **PDF Invoice Generation**: Users can download their order details as a PDF.
3. **Dynamic Pagination**: Implemented for product and order lists for better navigation and performance.
4. **AJAX Product Deletion**: Admins can delete products without page reloads, improving UX.
5. **Custom 404 and 500 Error Pages**: Enhanced error handling for better user experience.

---

## Team Member Contributions
- **Ripu Daman Reddy Amireddy**:  
   - Authentication related MVCs, Database, Integration.
   - Implemented and setup MongoDB.
   - End to end project integration and testing.
- **Sai Rohith Tanuku**:  
   - Shop related MVCs, Deployment, Project Setup
   - Integrated **Stripe** Payment Gateway.
   - Developed **PDF invoice generation** with PDFKit.
- **Indra Kumar Vaddella**:  
   - Built the **admin dashboard**: product creation, editing, and AJAX-based deletion.
   - Configured **file uploads** using Multer and image storage.

---

## Technical Architecture
Our application adheres to the **MVC architecture**:

### Models
- **User**: Handles user registration, password hashing, cart, and authentication tokens.
- **Product**: Manages product details (title, price, description, image URL, user ID).
- **Order**: Stores order details with product snapshots and user information.

### Views
- **Templates**: EJS-based views for user pages (`login`, `signup`, `cart`, `orders`, etc.) and admin pages (`add/edit product`, `admin product list`).
- **Shared Components**: Navigation bar, pagination, and footer.

### Controllers
1. **Admin Controller**:  
   - Manages product creation, editing, deletion (with AJAX for better UX).
2. **Shop Controller**:  
   - Handles product listing, cart logic, orders, and Stripe checkout.
3. **Auth Controller**:  
   - Secure login, signup, password reset, and session management.
4. **Error Controller**:  
   - Custom error handling for 404 and 500 pages.

### Middleware
- **CSRF Protection**: Prevents CSRF attacks using `csurf`.
- **Session Management**: Handled via `express-session` with MongoDB-backed storage.
- **File Uploads**: Implemented with **Multer** for product image uploads.
- **Error Handling**: Global middleware ensures proper error messages for users.

### Technologies Used
- **Backend**: Node.js, Express.js, Mongoose (MongoDB ORM), Multer.
- **Frontend**: EJS templates, vanilla CSS for responsiveness.
- **Security**: CSRF protection, bcrypt for password hashing.
- **Payment Integration**: Stripe API.
- **PDF Generation**: PDFKit for invoice creation.
- **Database**: MongoDB Atlas.
- **Deployment**: Glitch.

---

## Challenges
1. **File Upload Configuration**: Managing image uploads with unique filenames and proper validation.\n2. **Stripe Payment Integration**: Understanding and configuring secure session-based Stripe checkout.\n3. **Dynamic UI**: Implementing a responsive, polished design for all pages, including admin dashboards.\n4. **Error Handling**: Ensuring users receive clear, actionable messages without exposing sensitive information.\n5. **Session and CSRF Management**: Integrating secure session management with CSRF tokens for forms.\n\n---

## Future Work
If given more time, we would enhance the project with:\n1. **RESTful API**: Develop an API with CRUD operations and API key authentication.\n2. **User Profiles**: Allow users to save addresses, view order history, and manage personal settings.\n3. **WebSockets Integration**: Real-time notifications for admins (e.g., new orders).\n4. **Frontend Framework**: Use React or Vue.js for a more interactive user experience.\n5. **Testing Suite**: Add unit and integration tests for routes and controllers.\n\n---

## Conclusion\nThis project allowed us to combine everything we learned in this course to build a real-world e-commerce application:\n- We gained experience with **Node.js, Express.js, MongoDB, and EJS**.\n- Implementing secure authentication and payments strengthened our understanding of web security.\n- Creating a polished, responsive frontend gave us hands-on experience with modern UI development.\n\nWe exceeded the core requirements by adding features like **Stripe payments**, **AJAX deletion**, and **PDF invoices**, providing a strong foundation for future development.\n\n---

## Resources\n- **Node.js Documentation**: [https://nodejs.org](https://nodejs.org)\n- **Express.js Documentation**: [https://expressjs.com](https://expressjs.com)\n- **Mongoose Documentation**: [https://mongoosejs.com](https://mongoosejs.com)\n- **Stripe API**: [https://stripe.com/docs](https://stripe.com/docs)\n- **PDFKit**: [https://pdfkit.org](https://pdfkit.org)\n- **Multer**: [https://github.com/expressjs/multer](https://github.com/expressjs/multer)\n\n---

## Testing Instructions\n1. **Clone the Repository**:\n   ```bash\n   git clone <repository-link>\n   cd project-directory\n   ```\n2. **Install Dependencies**:\n   ```bash\n   npm install\n   ```\n3. **Setup Environment Variables**:\n   Add a `.env` file in the project root with:\n   ```env\n   MONGODB_URI=<your-mongodb-uri>\n   STRIPE_KEY=<your-stripe-secret-key>\n   SESSION_SECRET=mysecret\n   ```\n4. **Start the Server**:\n   ```bash\n   npm start\n   ```\n5. **Access the App**: Go to `http://localhost:3000` in your browser.\n6. **Test Features**:\n   - Sign up, log in, and access the application.\n   - Add, edit, and delete products (admin functionality).\n   - Add items to the cart and complete the order using Stripe.\n   - Download the invoice for completed orders.\n\n---

## Glitch Project Link\n**Team Name**: ShopMaster  \n**Project URL**: [https://glitch.com/~kanyarasi](https://glitch.com/~kanyarasi)\n\n---

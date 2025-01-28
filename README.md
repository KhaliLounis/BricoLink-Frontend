# 🛠️ BricoLink Frontend

**BricoLink** is a modern platform connecting individuals with professional artisans for home improvement and repair services. This repository contains the frontend codebase for BricoLink, designed for a smooth and user-friendly experience.

---

## 🌟 Features

### 1️⃣ **Authentication**

- **Sign Up, Login, and Password Reset**: Streamlined user authentication process, including a secure password reset feature.
- **User Role Management**: Differentiated access for customers and artisans.

### 2️⃣ **Artisans Directory**

- **Browse Artisans**: View a list of professional artisans with detailed profiles, including services offered, reviews, and ratings.
- **Artisan Details**: Navigate to individual artisan profiles to explore their work history, expertise, and contact information.

### 3️⃣ **Requests Management**

- **Create Service Requests**: Users can submit detailed project requests specifying their needs.
- **Request Tracking**: Monitor the status of service requests from creation to completion.
- **Request Details**: Access all relevant details, including communication history and updates.

### 4️⃣ **Real-Time Messaging**

- **Chat with Artisans**: Seamless real-time chat system for effective communication between customers and artisans.

### 5️⃣ **Profile Customization**

- **User Profiles**: Update personal details, change passwords, and manage account preferences.
- **Artisan Profiles**: Artisans can showcase their skills, upload portfolios, and manage service categories.

### 6️⃣ **Project Tracking**

- **Request Status Updates**: Track ongoing projects with real-time updates.
- **Delivery Progress**: Stay informed about each stage of a project’s lifecycle.

---

## 🚀 Getting Started

Follow the steps below to set up the project locally.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/bricolink-frontend.git
cd bricolink-frontend
```

### 2️⃣ Install dependencies

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
```

### 3️⃣ Set up environment variables

Create a `.env.local` file in the root directory and add your environment variables. Example:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4️⃣ Run the development server

Start the server locally:

```bash
npm run dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## 📂 Project Structure

The project is organized for scalability and maintainability, with clear separation of concerns:

```plaintext
public/
├── assets/          # Static assets (images, icons, fonts)
└── fonts/           # Custom fonts

src/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   └── reset-password/
│   └── (logged-in)/         # Authenticated user routes
│       ├── (artisans-routes)/ # Artisan-specific routes
│       ├── artisans/        # Artisan directory
│       │   └── [artisanId]/ # Artisan profile details
│       ├── chats/           # Messaging system
│       │   └── [chatId]/    # Individual chat
│       ├── profile/         # User profile
│       ├── requests/        # Service requests
│       │   └── [requestId]/ # Request details
│       └── tracking/        # Project tracking
├── components/              # pages components
├── context/                 # Global state management (React Context)
├── hooks/                   # Custom React hooks
├── i18n/                    # Localization files (lacks some configuration)
│   └── locale/
├── lib/                     # Helper functions and libraries
├── services/                # API service integration
├── types/                   # TypeScript types and interfaces
tests/
    ├── e2e/                 # End-to-end tests
    └── unit/                # Unit tests
```

---

## 🚀 Future Enhancements

Here are some planned improvements and features:

- **Advanced Search and Filters**: Enable users to search artisans based on location, expertise, and availability.
- **Payment Integration**: Add secure payment gateways for transactions.
- **Notifications**: Real-time notifications for chat messages and request updates.
- Add more supported languages for internationalization.

---

## 🛠️ Contributing

We welcome contributions to improve BricoLink! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and open a pull request.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

Feel free to fork, modify, and use it for your own purposes.

---

## 📧 Contact

For any questions, suggestions, or support, feel free to reach out:

**Email**: k_lounis@estin.dz  
**GitHub**: [Your GitHub Profile](https://github.com/KhaliLounis)

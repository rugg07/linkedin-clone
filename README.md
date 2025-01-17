# LinkedIn Clone

Welcome to the **LinkedIn Clone** repository. This project is a full-stack web application that mimics core features of the LinkedIn platform, enabling users to connect, share updates, and build professional networks. The application showcases robust frontend and backend integration, responsive design, and scalable architecture.

<img>![image](https://user-images.githubusercontent.com/86529890/147869942-03a3ae18-00c9-40bd-905d-0e7683ec545d.png) </img>

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Setup](#project-setup)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

---

## Introduction

This project aims to replicate the essential functionalities of LinkedIn, providing a platform where users can:

- Create and manage professional profiles.
- Connect with other users by sending and accepting connection requests.
- Share posts, updates, and professional achievements.
- Interact with posts through likes and comments.

This clone project serves as a comprehensive showcase of web development skills, covering frontend design, backend logic, database management, and deployment.

---

## Features

- **User Authentication**: Secure signup and login functionality with JWT-based authentication.
- **Profile Management**: Users can update their profile details, including a profile picture and bio.
- **Connections**: Send, accept, and manage connection requests.
- **Post Management**: Create, edit, delete, and interact with posts.
- **Real-Time Updates**: Notifications and live updates for user interactions.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

---

## Tech Stack

### Frontend:
- React.js
- Redux
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ORM)

### Deployment:
- AWS S3 (Static Assets)
- AWS EC2 (Server Hosting)
- GitHub Actions (CI/CD)

---

## Project Setup

To set up and run the project locally, follow these steps:

### Prerequisites:
- Node.js (v14+)
- MongoDB

### Steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rugg07/linkedin-clone.git
   cd linkedin-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   cd client
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the application:**
   - **Backend:**
     ```bash
     npm start
     ```
   - **Frontend:**
     ```bash
     cd client
     npm start
     ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. **Sign up or log in:**
   Create a new account or log in with an existing one.

2. **Build your profile:**
   Add your profile details and upload a profile picture.

3. **Connect with others:**
   Send and accept connection requests to expand your network.

4. **Share and interact:**
   Post updates, like, and comment on posts shared by others.

---

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions, suggestions, or feedback, feel free to reach out:

- **Name:** Hrugved Pawar
- **GitHub:** [@rugg07](https://github.com/rugg07)

---

Thank you for exploring this project! Your feedback and contributions are greatly appreciated.


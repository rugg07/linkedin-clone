# LinkedIn Clone

Welcome to the **LinkedIn Clone** repository. This project is a full-stack web application that mimics core features of the LinkedIn platform, enabling users to connect, share updates, and build professional networks. The application showcases robust frontend and backend integration, responsive design, and scalable architecture.

<img>![image](https://user-images.githubusercontent.com/86529890/147869942-03a3ae18-00c9-40bd-905d-0e7683ec545d.png) </img>


## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

---

## Introduction

This project aims to replicate the core functionalities of LinkedIn's interface, providing a platform to practice and demonstrate skills in React.js, Redux, and Firebase integration.

---

## Features

- **User Authentication:** Sign in with Google accounts using Firebase Authentication.
- **Post Creation:** Users can create and share posts with the community.
- **Real-time Updates:** Posts and user interactions are updated in real-time.
- **Responsive Design:** Optimized for various screen sizes to ensure a seamless user experience across devices.

---

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Redux:** A predictable state container for JavaScript apps.
- **Firebase:** Utilized for authentication and real-time database services.
- **Styled Components:** For writing CSS-in-JS and styling React components.

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rugg07/linkedin-clone.git
   cd linkedin-clone
   ```

2. **Install dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required packages:

   ```bash
   npm install
   ```

3. **Configure Firebase:**

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Google authentication in the Firebase Authentication section.
   - Set up a Firestore database.
   - Create a `.env` file in the root directory and add your Firebase configuration:

     ```env
     REACT_APP_API_KEY=your_api_key
     REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
     REACT_APP_PROJECT_ID=your_project_id
     REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
     REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_APP_ID=your_app_id
     ```

---

## Usage

To start the development server, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature name"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or suggestions, feel free to contact:

- **Name:** Hrugved Pawar
- **GitHub:** [@rugg07](https://github.com/rugg07)

---

Thank you for exploring this project! Your feedback is greatly appreciated. 

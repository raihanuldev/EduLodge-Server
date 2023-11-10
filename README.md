# EduLodge Backend

## Overview

Welcome to the EduLodge Backend repository! This backend server is designed to handle MongoDB CRUD operations, providing the necessary APIs for managing school information and applications.

## Links

- **GitHub Repository:** [EduLodge Backend Repo]([https://github.com/YourUsername/EduLodge-Backend](https://github.com/UniqueCoderRihan/EduLodge-Server))

## Technology

- **Database:** MongoDB
- **Backend Framework:** Express.js
- **API Documentation:** [API Documentation](./API_DOCUMENTATION.md)

## Features

1. **MongoDB CRUD Operations:** Implement Create, Read, Update, and Delete operations for school information and applications.

2. **RESTful APIs:** Well-structured APIs for easy integration with the front end.

## Getting Started

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/YourUsername/EduLodge-Backend.git
    ```

2. **Install Dependencies:**
    ```bash
    cd EduLodge-Backend
    npm install
    ```

3. **Configure Environment Variables:**
    - Create a `.env` file based on the provided `.env.example` and add your MongoDB connection string.

4. **Run the Server:**
    ```bash
    npm start
    ```
    The server will run on the specified port (default is 3000).

## MongoDB CRUD Operations

- **Create:** `POST /api/schools` - Create a new school record.
- **Read:** 
    - `GET /api/schools` - Get a list of all schools.
    - `GET /api/schools/:id` - Get details of a specific school by ID.
- **Update:** `PUT /api/schools/:id` - Update information for a specific school by ID.
- **Delete:** `DELETE /api/schools/:id` - Delete a school record by ID.

## API Documentation

For detailed API documentation, please refer to [API_DOCUMENTATION.md](./API_DOCUMENTATION.md).

## Contributing

We welcome contributions! Please follow our [Contribution Guidelines](CONTRIBUTING.md).

## Issues

Report issues on the [GitHub Issues](https://github.com/YourUsername/EduLodge-Backend/issues) page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Thank you for using EduLodge Backend! We hope it seamlessly integrates with the front end and provides efficient CRUD operations for school data.

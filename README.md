# Document Validation Service

This Node.js application interfaces with the IDfy API to validate documents, specifically international passports. It demonstrates how to make secure HTTP requests using environment variables for sensitive data like API keys and account IDs.

## Getting Started

### Prerequisites

- Node.js
- npm (Node.js package manager)

### Installation

1. **Clone the Repository**
   ```
   git clone https://github.com/adanzweig/nodejs-idfy.git
   cd nodejs-idfy
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory of the project.
   - Add the following lines to the `.env` file:
     ```
     ACCOUNT_ID=your_account_id
     API_KEY=your_api_key
     ```
   - Replace `your_account_id` and `your_api_key` with your actual IDfy account ID and API key.

### Usage

To run the application, use the following command:

```
node index.js
```

The script will automatically validate a predefined document URL and log the results. You can modify the `index.js` file to validate different documents as needed.

## Functionality

- **Document Validation**: Validates international passports by sending a request to the IDfy API with the document's URL.
- **Error Handling**: Implements error handling for the HTTP request process.

## Contributing

Contributions to improve this project are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

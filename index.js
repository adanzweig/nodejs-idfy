// Importing required modules
require('dotenv').config(); // Loads environment variables from a .env file into process.env
const axios = require('axios'); // Axios for making HTTP requests

// Async function to validate a document
async function validateDocument(documentURL, task_id, group_id) {
    try {
        // API endpoint URL
        const url = 'https://eve.idfy.com/v3/tasks/sync/extract/id_document';
        
        // Data payload for the POST request
        const data = {
            task_id,
            group_id,
            data: {
                document1: documentURL, // Document URL to be validated
                doc_type: 'international_passport' // Specifying the type of document
            }
        };

        // Making a POST request using axios
        const response = await axios.post(url, data, {
            headers: {
                'account-id': process.env.ACCOUNT_ID, // Using account ID from environment variables
                'api-key': process.env.API_KEY // Using API key from environment variables
            }
        });

        // Returning the response data
        return response.data;
    } catch (error) {
        // Error handling
        console.error(error);
    }
}

// Self-invoking async function to execute validateDocument function
(async () => {
    const document = await validateDocument(
        'https://media.cnn.com/api/v1/images/stellar/prod/210316052514-iceland-gender-neutral-passport.jpg',
        '12345678', '12345678'
    );
    console.log(document); // Logging the response
})();

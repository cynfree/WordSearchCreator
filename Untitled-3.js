// Initialize Sui API client
const axios = require('axios');

async function fetchSuiData() {
  const suiApiUrl = 'https://api.sui.io/v1/companies'; // Replace with the actual Sui API endpoint
  try {
    const response = await axios.get(suiApiUrl, {
      headers: {
        Authorization: `Bearer YOUR_SUI_API_KEY`, // Replace with your API key
      },
    });
    console.log('Sui API Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Sui API data:', error);
    throw error;
  }
}

module.exports = { fetchSuiData };

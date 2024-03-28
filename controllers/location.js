import axios from "axios";

// Google Places API endpoint for autocomplete
const autocompleteEndpoint = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

// Google Places API endpoint for details
const detailsEndpoint = 'https://maps.googleapis.com/maps/api/place/details/json';

// Your Google Places API key
const apiKey = process.env.GOOGLE_API_KEY;



 export const getCoordinates = async(location) => {
    try {
       
        const autocompleteResponse = await axios.get(autocompleteEndpoint, {
            params: {
                input: location,
                key: apiKey
            }
        });
          console.log(autocompleteResponse);
        const placeId = autocompleteResponse.data.predictions[0].place_id;

      
        const detailsResponse = await axios.get(detailsEndpoint, {
            params: {
                place_id: placeId,
                key: apiKey
            }
        });

 
        const { lat, lng } = detailsResponse.data.result.geometry.location;
        return { latitude: lat, longitude: lng };
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
}



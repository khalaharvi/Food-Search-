import Axios from 'axios';
import { YELP_API_KEY } from 'react-native-dotenv';

console.log('process.env.YELP_API_KEY', YELP_API_KEY);
export default Axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`
  }
});
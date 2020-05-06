import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try{
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: "New York City",
          limit: 50
        }
      });
      setResults(response.data.businesses);
    } catch(err) {
      setErrorMessage('Something Went Wrong');
      console.log('err', err);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);
 return [searchApi, results, errorMessage];
};

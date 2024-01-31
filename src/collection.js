import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Collection = () => {
  const [userData, setUserData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        console.log(response);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (url) => {
    console.log('Button clicked for:', url);
    window.location.href = url;
  };

  return (
    <>
      <h1>Welcome to this Application</h1>
      {userData.map((data) => (
        <div key={data.show.id}>
          <h2>{data.show.name}</h2>
          <img src={data.show.image?.medium} alt={data.show.name} />
          <button onClick={() => handleButtonClick(data.show.url)}>
            Go to Another Page
          </button>
        </div>
      ))}
    </>
  );
};

export default Collection;

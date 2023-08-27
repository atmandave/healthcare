// DataDisplay.js
import React, { useEffect, useState } from 'react';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your server API
    fetch('/api/fetchData')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from MongoDB:</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            Name: {item.name}, Email: {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;

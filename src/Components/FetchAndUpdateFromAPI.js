import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchAndUpdateFromAPI = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/?_limit=10');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUpdateClick = async (id) => {
    debugger;
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { userId: "100", body: "body", title: inputValue });
      setInputValue('');
      fetchData(); // Fetch updated data after successful update
    } catch (error) {
      console.error('Error updating field:', error);
    }
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={() => handleUpdateClick(item.id)}>
              Update Field
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAndUpdateFromAPI;
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/posts";

export const usePosts = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchId) {
      const filtered = data.filter(post => post.id === parseInt(searchId, 10));
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchId, data]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleSearchChange = (value) => {
    setSearchId(value);
  };

  return {
    data,
    filteredData,
    searchId,
    handleSearchChange,
    fetchPosts
  };
};

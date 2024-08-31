import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import PostTable from './components/PostTable';
import PostModal from './components/PostModal';
import SearchBar from './components/SearchBar';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

const url = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState('');
  const [currentPost, setCurrentPost] = useState({
    userId: '',
    id: '',
    title: '',
    body: ''
  });
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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCreatePost = async (post) => {
    try {
      await axios.post(url, post);
      toggleModal();
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleUpdatePost = async (post) => {
    try {
      await axios.put(`${url}/${post.id}`, post);
      toggleModal();
      fetchPosts();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost({
      ...currentPost,
      [name]: value
    });
  };

  const handleEditClick = (post) => {
    setActionType('update');
    setCurrentPost(post);
    toggleModal();
  };

  const handleAddClick = () => {
    setActionType('create');
    setCurrentPost({
      userId: '',
      id: data.length + 1,
      title: '',
      body: ''
    });
    toggleModal();
  };

  const handleSearchChange = (value) => {
    setSearchId(value);
  };

  return (
    <div>
      <header className='header'>
        <button className='btn-ingreso' onClick={() => window.open('https://jsonplaceholder.typicode.com/posts', '_blank')}>JSONPlaceholder</button>
        <button className='btn-ingreso' onClick={() => window.open('https://jsonplaceholder.typicode.com/', '_blank')}>Ruta Posts</button>
        <button className='btn-ingreso' onClick={() => window.open('https://jsonplaceholder.typicode.com/', '_blank')}>Páginas Sociales</button>
      </header>
      <header className='header'>
        <h1>JSON Placeholder</h1>
        <h3>Consumiendo API</h3>
      </header>
      <div className='tablaconteiner'>
        <div className="d-flex justify-content-center mb-3">
          <button className='btn btn-success' onClick={handleAddClick}>AGREGAR POST</button>
        </div>
        <SearchBar onSearchChange={handleSearchChange} />
        <PostTable data={filteredData} onEditClick={handleEditClick} />
        <PostModal isOpen={modalOpen} toggle={toggleModal}>
          {actionType === 'create' ? (
            <CreatePost
              post={currentPost}
              onChange={handleChange}
              onCreate={handleCreatePost}
            />
          ) : (
            <UpdatePost
              post={currentPost}
              onChange={handleChange}
              onUpdate={handleUpdatePost}
            />
          )}
        </PostModal>
      </div>
    </div>
  );
};

export default App;

import { useState } from 'react';
import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/posts";

export const usePostHandlers = (fetchPosts) => {
  const [currentPost, setCurrentPost] = useState({
    userId: '',
    id: '',
    title: '',
    body: ''
  });
  const [actionType, setActionType] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

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
      id: Date.now(), // Use a temporary ID for new posts
      title: '',
      body: ''
    });
    toggleModal();
  };

  return {
    currentPost,
    actionType,
    modalOpen,
    toggleModal,
    handleCreatePost,
    handleUpdatePost,
    handleChange,
    handleEditClick,
    handleAddClick
  };
};

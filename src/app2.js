import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import PostTable from './components/PostTable';
import PostModal from './components/PostModal';
import SearchBar from './components/SearchBar';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

import { usePosts } from './hooks/usePosts';
import { usePostHandlers } from './hooks/usePostHandlers';

const App = () => {
  const {
    filteredData,
    searchId,
    handleSearchChange,
    fetchPosts
  } = usePosts();

  const {
    currentPost,
    actionType,
    modalOpen,
    toggleModal,
    handleCreatePost,
    handleUpdatePost,
    handleChange,
    handleEditClick,
    handleAddClick
  } = usePostHandlers(fetchPosts);

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

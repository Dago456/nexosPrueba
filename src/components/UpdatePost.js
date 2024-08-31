// src/components/UpdatePost.js
import React from 'react';
import { Button, Input } from 'reactstrap';

const UpdatePost = ({ post, onChange, onUpdate }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor='userId'>ID de Usuario</label>
        <Input
          className="form-control"
          type='text'
          name='userId'
          id='userId'
          onChange={onChange}
          value={post.userId || ''}
        />
        <br />
        <label htmlFor='title'>Título del Post</label>
        <Input
          className="form-control"
          type='text'
          name='title'
          id='title'
          onChange={onChange}
          value={post.title || ''}
        />
        <br />
        <label htmlFor='body'>Cuerpo del Post</label>
        <Input
          className="form-control"
          type='text'
          name='body'
          id='body'
          onChange={onChange}
          value={post.body || ''}
        />
        <br />
      </div>
      <Button color='success' onClick={() => onUpdate(post)}>Actualizar</Button>
    </div>
  );
};

export default UpdatePost;

import React from 'react';
import { Input } from 'reactstrap';

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <Input
        type='text'
        placeholder='Buscar por ID'
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: '300px' }}
      />
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Digite sua busca
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </label>
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default SearchForm;

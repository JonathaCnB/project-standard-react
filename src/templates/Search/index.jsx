import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import * as Styled from './styles';

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = `http://localhost:3000/products?${searchParams}`;
  const { data: items, loading, error } = useFetch(url);
  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <Styled.TableProducts>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>R$ {product.price}</p>

                <Link to={`/products/${product.id}`}>Detalhe</Link>
              </li>
            ))}
        </Styled.TableProducts>
      )}
    </div>
  );
};

export default Search;

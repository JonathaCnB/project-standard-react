import { useEffect, useState } from 'react';
import * as Styled from './styles';

// 4 - custom hook
import { useFetch } from '../../hooks/useFetch';

function Home() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const url = 'http://localhost:3000/products';

  // 4 - cursom hook

  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // 2 - add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };
    {
      /*
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    // 3 - carregamento dinâmico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
      */
    }

    // 5 - Refatorando POST

    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  };

  const handleRemove = (productId) => {
    httpConfig(productId, 'DELETE');
  };

  return (
    <div className="App">
      <Styled.Wrapper>
        <h1>Lista com HTTP REQUEST</h1>
      </Styled.Wrapper>
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$ {product.price}
                <button onClick={() => handleRemove(product.id)}>
                  Remover
                </button>
              </li>
            ))}
        </ul>
      )}
      <Styled.AddProduct>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </Styled.AddProduct>
    </div>
  );
}

export default Home;

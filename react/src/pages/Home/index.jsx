import { Link } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import { axiosDelete, axiosGet } from "../../axiosServices";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await axiosGet('/product');
      setProducts(res.data);
    } catch (err) {console.log(err)};
  };

  const handleSearch = async (e) => {
    try {
      setSearchInput(e.target.value);
      const res = await axiosGet(`/product/${e.target.value}`)
      setProducts(res.data);
    } catch (err) {console.log(err)};
  }

  const handleDelete = async (id) => {
    try {
      const res = await axiosDelete(`/product/${id}`);
      console.log(res);
    } catch (err) {console.log(err)};
  }


  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input 
        type="text"
        placeholder="Masukkan kata kunci..."
        value={searchInput}
        onChange={handleSearch}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th className="text-right">Harga</th>
            <th className="text-center">Stok</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td className="text-right">{`Rp ${product.price}`}</td>
              <td className="text-right">{product.stock}</td>
              <td className="text-center">
                <Link to="/detail" className="btn btn-sm btn-info">Detail</Link>
                <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;
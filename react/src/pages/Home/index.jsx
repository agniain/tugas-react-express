import { Link } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import { axiosGet } from "../../axiosServices";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await axiosGet('/product');
      setProducts(res.data);
    } catch (err) {console.log(err)};
  };

  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukkan kata kunci..."/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Stock</th>
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
                <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;
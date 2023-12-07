import { Link, useParams } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import './index.scss';
import { axiosGet } from "../../axiosServices";

const Detail = () => {
  const { productId } = useParams();
  const [prodById, setProdById] = useState({});

  const getProductById = useCallback(async () => {
    console.log(productId)
    try {
      const res = await axiosGet(`/product/${productId}`);
      console.log(res, "raw data")
      console.log(res.data, "data");
      setProdById(res.data);
    } catch (err) {console.log(err)};
  }, [productId]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          {prodById.map((prodById) => (
          <tr key={prodById.id}>
          <tr>
            <td>ID</td>
            <td>: {prodById.id}</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>: {prodById.name}</td>
          </tr>
          <tr>
            <td>Harga</td>
            <td>: {prodById.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {prodById.stock}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>: {prodById.status}</td>
          </tr>
          </tr>
          ))}
        </tbody>  
      </table>
    </div>
  )
}

export default Detail;
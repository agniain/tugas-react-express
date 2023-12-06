import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './index.scss';
import { axiosGet } from "../../axiosServices";

const Detail = ({ productId }) => {
  const [prodById, setProdById] = useState([])
  
  const getProductById = async () => {
    try {
      const res = await axiosGet(`/product/${product.id}`)
      setProdById(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProductById()
  }, [productId])

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {prodById.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {prodById.name}</td>
          </tr>
          <tr>
            <td>Price</td>
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
        </tbody>
      </table>
    </div>
  )
}

export default Detail;
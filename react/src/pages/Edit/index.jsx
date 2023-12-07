import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { axiosPut } from "../../axiosServices";


const Edit = ({ prodById, setEditModal }) => {
  const [formValues, setFormValues] = useState({
      id: '',
      name: '',
      price: '',
      stock: '',
      status: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prodById) {
      const { id, name, price, stock, status } = prodById;
      setFormValues({
        id,
        name,
        price,
        stock,
        status,
      });
    }
  }, [prodById]);
  
  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEdit = async () => {
        setLoading(true)
        try {
            const res = await axiosPut(`/product/${prodById.id}`, formValues);
            setLoading(false)
            setEditModal(false)
            console.log(res)
            alert("Produk Berhasil Diubah!")
        }
        catch (err) {
            console.log(err)
        }
    };

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={handleEdit}>
        <Input 
            name="id" 
            type="number"
            placeholder="ID Produk..."
            label="ID"
            value={formValues.id}
            onChange={(e) => handleInputChange("id", e.target.value)}  
          />
          <Input 
            name="name" 
            type="text"
            placeholder="Nama Produk..."
            label="Nama"
            value={formValues.name}
            onChange={(e) => handleInputChange("name", e.target.value)}  
          />
          <Input 
            name="price" 
            type="number"
            placeholder="Harga Produk..."
            label="Harga"
            value={formValues.price}
            onChange={(e) => handleInputChange("price", e.target.value)}  
          />
          <Input 
            name="stock" 
            type="number"
            placeholder="Stock Produk..."
            label="Stock"
            value={formValues.stock}
            onChange={(e) => handleInputChange("stock", e.target.value)}  
          />
          <Input 
            name="status" 
            type="checkbox"
            placeholder="Status Produk...."
            label="Status"
            value={formValues.status}
            onChange={(e) => handleInputChange("status", e.target.checked)}  
          />
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit;
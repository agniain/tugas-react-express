import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { axiosPut } from "../../axiosServices";


const Edit = () => {
  const [formValues, setFormValues] = useState({
    id: 0,
    name: "",
    price: 0,
    stock: 0,
    status: false,
  });

  useEffect(() => {
    const getInitialValues = async () => {
      try {
        const initialValues = await productInitialValue();

        setFormValues(initialValues);
      } catch (error) {
        console.error(error);
      }
    };
    getInitialValues();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosPut(`/product/$prodById.id`, formValues);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;
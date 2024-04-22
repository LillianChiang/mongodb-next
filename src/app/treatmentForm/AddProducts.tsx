'use client'

import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box
} from '@mui/material';

interface Form {
  product: string;
  therapist: string;
  price: string;
  quantity: string;
  discount: string;
  totalPrice: string;
}

const AddProducts = () => {
  const [forms, setForms] = useState<Form[]>([{ product: '', therapist: '', price: '', quantity: '', discount: '', totalPrice: '' }]);
  const [products, setProducts] = useState<string[]>([]);
  const [therapists, setTherapists] = useState<string[]>([]);

  useEffect(() => {
    fetch('product.json')
      .then(response => response.json())
      .then((data: Form[]) => {
        const productNames = data.map(item => item.product);
        setProducts(productNames);
        const therapistNames = data.map(item => item.therapist);
        setTherapists(therapistNames);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleFormChange = (index: number, field: keyof Form, value: string) => {
    const updatedForms = [...forms];
    const updatedForm = { ...updatedForms[index], [field]: value };
    
    // Calculate total price
    const price = parseFloat(updatedForm.price);
    const quantity = parseFloat(updatedForm.quantity);
    const discount = parseFloat(updatedForm.discount);
    const totalPrice = (price * quantity * (1 - discount / 100)).toFixed(2); // Calculate total price with discount
    
    updatedForm.totalPrice = totalPrice.toString(); // Update total price in the form
    
    updatedForms[index] = updatedForm;
    setForms(updatedForms);
  };

  const handleAddForm = () => {
    setForms([...forms, { product: '', therapist: '', price: '', quantity: '', discount: '', totalPrice: '' }]);
  };

  const handleDeleteForm = (index: number) => {
    if (forms.length > 1) {
      const updatedForms = [...forms];
      updatedForms.splice(index, 1);
      setForms(updatedForms);
    }
  };

  return (
    <div className="container mx-auto bg-gray-200 p-10 ">
      {forms.map((form, index) => (
        <form key={index} className="mb-4 flex items-center ">
          <FormControl sx={{ minWidth: 120, flexGrow: 1 }}>
            <Box display="flex" >
              <InputLabel id={`product-label-${index}`}>商品:</InputLabel>
              <Select
                labelId={`product-label-${index}`}
                id={`product-${index}`}
                value={form.product}
                onChange={(e) => handleFormChange(index, 'product', e.target.value)}
                sx={{ minWidth: '120px' }}
              >
                {products.map((product, i) => (
                  <MenuItem key={i} value={product}>{product}</MenuItem>

                ))}
              </Select>
            </Box>
          </FormControl>

          <FormControl sx={{ minWidth: 120, flexGrow: 1 }}>
            <Box display="flex">
              <InputLabel id={`therapist-label-${index}`}>治療師:</InputLabel>
              <Select
                labelId={`therapist-label-${index}`}
                id={`therapist-${index}`}
                value={form.therapist}
                onChange={(e) => handleFormChange(index, 'therapist', e.target.value)}
                sx={{ minWidth: '120px' }}
              >
                {therapists.map((therapist, i) => (
                  <MenuItem key={i} value={therapist}>{therapist}</MenuItem>
                ))}
              </Select>
            </Box>
          </FormControl>

          <TextField
            className="mr-4"
            label="單價"
            value={form.price}
            onChange={(e) => handleFormChange(index, 'price', e.target.value)}
            
          />
          <TextField 
            className="mr-4"
            label="數量"
            value={form.quantity}
            onChange={(e) => handleFormChange(index, 'quantity', e.target.value)}
            
          />
          <TextField
            className="mr-4"
            label="折扣%"
            value={form.discount}
            onChange={(e) => handleFormChange(index, 'discount', e.target.value  )}
          />
          
          <Box display="flex" alignItems="center">
            <TextField
              label="總價"
              value={form.totalPrice}
              onChange={(e) => handleFormChange(index, 'totalPrice', e.target.value)}
            />
            <Button variant="contained" onClick={handleAddForm} style={{ marginLeft: '10px' }}>+</Button>
            <Button
              variant="outlined"
              onClick={() => handleDeleteForm(index)}
              style={{ marginLeft: '10px' }}
            >-</Button>
          </Box>
        </form>
      ))}
      </div>
  );
};

export default AddProducts;

import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

// Define a type/interface for the form data
interface FormData {
  product: string;
  therapist: string;
  price: string;
  quantity: string;
  discount: string;
  totalPrice: string;
}

const AddProducts = () => {
  const [forms, setForms] = useState([
    {
      product: '',
      therapist: '',
      price: '',
      quantity: '',
      discount: '',
      totalPrice: '',
    },
  ]);

  const handleAddForm = () => {
    setForms((prevForms) => [
      ...prevForms,
      {
        product: '',
        therapist: '',
        price: '',
        quantity: '',
        discount: '',
        totalPrice: '',
      },
    ]);
  };

  const handleFormChange = (index: number, field: string, value: string) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
  };

  const handleDeleteForm = (index: number) => {
    const updatedForms = forms.filter((_, i: number) => i !== index);
    setForms(updatedForms);
  };

  return (
    <div className="container mx-auto flex items-start justify-center bg-gray-200">
      <div className="mt-4 flex flex-col border border-gray-300 p-10">
        {forms.map((form, index) => (
          <form key={index}>
            <div className="mb-4 flex items-center">
              <FormControl className="mr-4">
                <InputLabel id={`product-label-${index}`}>商品:</InputLabel>
                <Select
                  labelId={`product-label-${index}`}
                  id={`product-${index}`}
                  value={form.product}
                  onChange={(e) =>
                    handleFormChange(index, 'product', e.target.value)
                  }
                  sx={{ minWidth: '120px' }}
                >
                  {/* Options for products */}
                  <MenuItem value="product1">Product 1</MenuItem>
                  <MenuItem value="product2">Product 2</MenuItem>
                  <MenuItem value="product3">Product 3</MenuItem>
                </Select>
              </FormControl>

              <FormControl className="mr-6">
                <InputLabel id={`therapist-label-${index}`}>治療師:</InputLabel>
                <Select
                  labelId={`therapist-label-${index}`}
                  id={`therapist-${index}`}
                  value={form.therapist}
                  onChange={(e) =>
                    handleFormChange(index, 'therapist', e.target.value)
                  }
                  sx={{ minWidth: '120px' }}
                >
                  {/* Options for therapists */}
                  <MenuItem value="therapist1">Therapist 1</MenuItem>
                  <MenuItem value="therapist2">Therapist 2</MenuItem>
                  <MenuItem value="therapist3">Therapist 3</MenuItem>
                </Select>
              </FormControl>

              <TextField
                className="mr-4"
                label="單價"
                value={form.price}
                onChange={(e) =>
                  handleFormChange(index, 'price', e.target.value)
                }
              />
              <TextField
                className="mr-4"
                label="數量"
                value={form.quantity}
                onChange={(e) =>
                  handleFormChange(index, 'quantity', e.target.value)
                }
              />
              <TextField
                className="mr-4"
                label="折扣"
                value={form.discount}
                onChange={(e) =>
                  handleFormChange(index, 'discount', e.target.value)
                }
              />

              <TextField
                label="總價"
                value={form.totalPrice}
                onChange={(e) =>
                  handleFormChange(index, 'totalPrice', e.target.value)
                }
              />
              <Button variant="outlined" onClick={handleAddForm}>
                +
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleDeleteForm(index)}
              >
                -
              </Button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default AddProducts;

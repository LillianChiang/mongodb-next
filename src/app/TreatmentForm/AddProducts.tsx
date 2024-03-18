import React, { useState } from 'react';

const AddProducts = () => {
  // State variables for input values
  const [product, setProduct] = useState('');
  const [therapist, setTherapist] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [discount, setDiscount] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  // State variable to toggle visibility of additional columns
  const [showAdditionalColumns, setShowAdditionalColumns] = useState(false);

  return (
    <div className="container mx-auto flex items-start justify-center">
      <div className="mt-4 border border-gray-300 p-10">
        <form>
          {/* Main columns */}
          <div className="mb-4 flex items-center">
            {/* Product column */}
            <div className="mr-4">
              <label htmlFor="product" className="mb-1 block">
                商品:
              </label>
              <select
                id="product"
                className="border border-gray-400 p-1"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              ></select>
            </div>

            <div className="mr-4">
              <label htmlFor="therapist" className="mb-1 block">
                治療師:
              </label>
              <select
                id="therapist"
                className="border border-gray-400 p-1"
                value={therapist}
                onChange={(e) => setTherapist(e.target.value)}
              >
                {/* Options for therapists */}
              </select>
            </div>

            {/* Price column */}
            <div className="mr-4">
              <label htmlFor="price" className="mb-1 block">
                單價:
              </label>
              <input
                type="text"
                id="price"
                className="border border-gray-400 p-1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {/* Quantity column */}
            <div className="mr-4">
              <label htmlFor="quantity" className="mb-1 block">
                數量:
              </label>
              <input
                type="text"
                id="quantity"
                className="border border-gray-400 p-1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            {/* Discount column */}
            <div className="mr-4">
              <label htmlFor="discount" className="mb-1 block">
                折扣:
              </label>
              <input
                type="text"
                id="discount"
                className="border border-gray-400 p-1"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            {/* Total Price column */}
            <div>
              <label htmlFor="totalPrice" className="mb-1 block">
                總價:
              </label>
              <input
                type="text"
                id="totalPrice"
                className="border border-gray-400 p-1"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
            </div>

            {/* Plus icon to toggle additional columns */}
            <div className="ml-4">
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={() => setShowAdditionalColumns(!showAdditionalColumns)}
              >
                {showAdditionalColumns ? '-' : '+'}
              </button>
            </div>
          </div>
          {showAdditionalColumns && (
            <div className="flex items-center">
              {/* Additional column 1 */}
              <div className="mr-4">{/* Input field */}</div>
              {/* Additional column 2 */}
              <div className="mr-4">{/* Input field */}</div>
              {/* Additional column 3 */}
              <div className="mr-4">{/* Input field */}</div>
              {/* Additional column 4 */}
              <div className="mr-4">{/* Input field */}</div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

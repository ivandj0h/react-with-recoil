import React from "react";
import { useAddItem } from '../store';
const ids = [
  "Nasi Putih",
  "Tempe",
  "Ayam",
  "Bebek",
];

const products = ids.map((id, index) => ({ id, price: index + 1 }));

const Catalog = () => {
  const addItem = useAddItem();
  return (
    <div className="catalog">
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="product">
            <h4>
              {/* {p.id} / Rp.{p.price} */}
              {p.id}
            </h4>
            <button
              className="ui button positive mini"
              onClick={() => addItem(p)}
            >
              Tambah
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

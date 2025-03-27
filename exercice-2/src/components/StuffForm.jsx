import { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [stuff, setStuff] = useState("");
  const [price, setPrice] = useState("");

  const handleInputStuff = (e) => {
    setStuff(e.target.value);
  };

  const handleInputPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleInputSend = (e) => {
    e.preventDefault(); // Prevent form submission
    if (stuff && price) {
      onAddStuff({ name: stuff, price: parseFloat(price) }); // Send the data to the parent component

    }
  };

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input
        type="text"
        placeholder="Banana"
        value={stuff}
        onChange={handleInputStuff}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        value={price}
        onChange={handleInputPrice}
      />

      <button onClick={handleInputSend}>Add Stuff</button>
    </form>
  );
}

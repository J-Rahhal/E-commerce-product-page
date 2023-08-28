import Minus from "../assets/images/icon-minus.svg";
import Plus from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";
import { useState } from "react";
const Form = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const handleIncrease = () => {
    setCurrentValue(currentValue + 1);
  };

  const handleDecrease = () => {
    if (currentValue > 0) setCurrentValue(currentValue - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center relative mx-4">
        <img
          src={Minus}
          alt="minus icon"
          className="absolute left-6 cursor-pointer"
          onClick={handleDecrease}
        />
        <input
          type="number"
          placeholder="0"
          value={currentValue}
          className="w-full p-2 bg-light-grayish-blue rounded-md my-4 text-center font-bold"
          readOnly
        />
        <img
          src={Plus}
          alt="plus icon"
          className="absolute right-6 cursor-pointer"
          onClick={handleIncrease}
        />
      </div>
      <div className="mx-4 my-4">
        <button
          type="submit"
          className="flex items-center justify-center gap-4 w-full bg-orange text-white py-2 rounded-md"
        >
          <img src={cart} alt="cart icon" className="" />
          Add to cart
        </button>
      </div>
    </form>
  );
};
export default Form;

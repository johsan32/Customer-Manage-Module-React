import { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isSurnameValid, setIsSurnameValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (customerName.trim().length === 0 || customerSurname.trim().length === 0) {
      setIsNameValid(customerName.trim().length === 0);
      setIsSurnameValid(customerSurname.trim().length === 0);
      return;
    }
    const newCustomer = {
      id: Math.floor(Math.random() * 1000),
      customerName,
      customerSurname,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
    setCustomerSurname("");
  };

  const nameInputChangeHandler = (e) => {
    const nameValue = e.target.value;
    setCustomerName(nameValue);
    setIsNameValid(nameValue.trim().length === 0);
  };

  const surnameInputChangeHandler = (e) => {
    const surnameValue = e.target.value;
    setCustomerSurname(surnameValue);
    setIsSurnameValid(surnameValue.trim().length === 0);
  };

  return (
    <form className="customerForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`customerInput ${isNameValid ? "invalid" : ""}`}
        placeholder={isNameValid ? "Enter a customer name" : "Add a new name"}
        onChange={nameInputChangeHandler}
        value={customerName}
      />
      <input
        type="text"
        className={`customerInput ${isSurnameValid ? "invalid" : ""}`}
        placeholder={isSurnameValid ? "Enter a customer surname" : "Add a new surname"}
        onChange={surnameInputChangeHandler}
        value={customerSurname}
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;

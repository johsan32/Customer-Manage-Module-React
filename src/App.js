
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import CustomerForm from './compenents/CustomerForm';
import CustomerList from './compenents/CustomerList';

function App() {
  
  const [customers, setCustomers] =useState([]);

  const addNewCustomer = (newCustomer) =>{
    setCustomers([newCustomer, ...customers]);
   // setCustomers((prevState) =>[newCustomer, ...prevState]);
    console.log(customers)
  }



  return (
  <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='form'>
        <h1>Customer Manage Module</h1>
        <CustomerForm addNewCustomer= {addNewCustomer} />
        <h4 className='not-found'>{customers.length === 0 && "There aren't customers!"}</h4>
        <CustomerList customers ={customers} setCustomers={setCustomers}/>  
      </div>


      </div>
  </div>

  );
}

export default App;

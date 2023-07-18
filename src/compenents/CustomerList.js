import CustomerItem from './CustomerItem';
import "./CustomerList.css"


const CustomerList = ({customers, setCustomers}) => {

  const handleDelete = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id))
  };
  return (
    <ul className='customer-list'>
      {customers.map((customer) => (
       < CustomerItem customer ={customer} key ={customer.id}
       handleDelete={handleDelete}
       />
        
      ))}
    </ul>
  );
}

export default CustomerList

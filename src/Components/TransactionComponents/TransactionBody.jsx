import TransactionsData from "../../Data/TransactionsData"
const TransactionBody = () => {
{TransactionsData.map((data)=>{
    console.log(data.amount);
    
  return (
   <div className="bg-white w-[80%]">
    <h3>{data.merchant}</h3>
   </div>    
  )})}
}

export default TransactionBody
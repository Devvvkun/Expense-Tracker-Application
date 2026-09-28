import { EllipsisVertical } from "lucide-react"
import TransactionsData from "../../Data/TransactionsData"
const TransactionBody = () => {
  return (
    <>
    {TransactionsData.map((data)=>{
      console.log(data);
      
      return(
        <div key={data.id}>
       <div className="bg-white w-[96%] text-black h-22 flex items-center gap-5 m-5 " >
          <div className="logo flex justify-center items-center h-14 w-14 rounded-full bg-green-400 m-4"> M </div>
          <div className="flex flex-col">
          <div className="transacName m-auto"><h2>{data.merchant}</h2></div>
            <div className="flex items-center gap-4">
              <div>{data.category}</div>
              <div>{data.time}</div>
              <div>{data.paymentMethod}</div>
            </div>
          </div>
          <div>{data.amount}</div>
          <div><EllipsisVertical /></div>
        </div>   
      </div>
    )})}
   
  
   </> 
    
  )
}

export default TransactionBody
import { EllipsisVertical } from "lucide-react"
const TransactionBody = ({filteredData}) => {
  return (
    <>
    {filteredData.map((data)=>{
      console.log(data);
      
      return(
          <div
  key={data.id}
  className="bg-white w-[96%] text-black h-22 m-5
             grid grid-cols-[100px_1fr_150px_40px] items-center"
>
  {/* Logo */}
  <div className="h-14 w-14 rounded-full bg-green-400
                  flex justify-center items-center ml-10">
    M
  </div>

  {/* Transaction details */}
  <div>
    <h2 className="font-bold text-xl">{data.merchant}</h2>

    <div className="flex items-center gap-4">
      <div>{data.category}</div>
      <div>{data.time}</div>
      <div>{data.paymentMethod}</div>
    </div>
  </div>

  {/* Amount */}
  <div className={`text-right pr-8 font-bold ${data.type == 'expense' ? "text-red-500" : "text-green-400"}`}>
    ₹{data.amount}
  </div>

  {/* Menu */}
  <div>
    <EllipsisVertical />
  </div>
</div>
    )})}
   
  
   </> 
    
  )
}

export default TransactionBody
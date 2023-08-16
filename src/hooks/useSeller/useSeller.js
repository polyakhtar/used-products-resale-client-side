import { useEffect, useState } from "react"

const useSeller =email => {
    const [isSeller,setIsSeller]=useState(false);
    const [isSellerLoading,setIsSellerLoading]=useState(true);
    useEffect(()=>{
if(email){
    console.log(email)
fetch(`https://used-products-resale-server-side-drab.vercel.app/users/seller/${email}`)
.then(res=>res.json())
.then(data=>{
    console.log('seller',data)
    setIsSeller(data.isSeller);
    setIsSellerLoading(false);
})
}
    },[email])
    return [isSeller,isSellerLoading]
}

export default useSeller;



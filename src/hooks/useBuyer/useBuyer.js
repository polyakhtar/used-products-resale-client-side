import { useEffect, useState } from "react"

const useBuyer = email => {
    
            const [isBuyer,setIsBuyer]=useState(false);
             const [isUserLoading,setIsUserLoading]=useState(true);
             useEffect(()=>{
         if(email){
            //  console.log(email)
         fetch(`https://used-products-resale-server-side-drab.vercel.app/users/buyer/${email}`)
         .then(res=>res.json())
        .then(data=>{
             console.log('user',data)
             setIsBuyer(data.isBuyer);
             setIsUserLoading(false);
         })
         }
             },[email])
             return [isBuyer,isUserLoading]
         }
        
         export default useBuyer;  


import { useEffect, useState } from "react"

const useUser = email => {
    const [isUser,setIsUser]=useState(false);
    const [isUserLoading,setIsUserLoading]=useState(true);
    useEffect(()=>{
if(email){
    console.log(email)
fetch(`https://used-mobile-phone-resale-market-server.vercel.app/users/User/${email}`)
.then(res=>res.json())
.then(data=>{
    console.log('user',data)
    setIsUser(data.isUser);
    setIsUserLoading(false);
})
}
    },[email])
    return [isUser,isUserLoading]
}

export default useUser;
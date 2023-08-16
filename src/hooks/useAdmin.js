import { useEffect, useState } from "react"

const useAdmin=email=>{
    const [isAdmin,setIsAdmin]=useState(false);
    const [isAdminLoading,setIsAdminLoading]=useState(true);
    useEffect(()=>{
if(email){
    console.log(email)
fetch(`https://used-products-resale-server-side-drab.vercel.app/users/admin/${email}`)
.then(res=>res.json())
.then(data=>{
    console.log('admin',data)
    setIsAdmin(data.isAdmin);
    setIsAdminLoading(false);
})
}
    },[email])
    return [isAdmin,isAdminLoading]
}
export default useAdmin;
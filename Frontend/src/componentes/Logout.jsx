import React from 'react'
import { useauth } from '../context/Authprovider'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function Logout() {
    const locations = useLocation();
    const navigator = useNavigate();
    const form = locations.state?.form?.pathname || "/"
    const [authuser, setauthuser] = useauth();
    const handlelogout = () => {
        try {
            setauthuser({
                ...authuser,
                user: null,
            })
            localStorage.removeItem("user")
            toast.success("Logout successfull!")
            navigator(form, { replace: true })
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            toast.error("Error:" + error)
            setTimeout(() => {
            }, 2000);
        }
    }
    return (
        <div className="py-2 px-3 dark:bg-white dark:text-black cursor-pointer bg-black text-white rounded-md" onClick={handlelogout}>
            Logout
        </div>
    )
}

export default Logout

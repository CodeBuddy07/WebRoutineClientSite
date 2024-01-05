import { useState } from "react";
import { toast } from "react-toastify";




const Admin = () => {

    const [AllOk, setAllOk] = useState(false);

    const handleAuthentication = (e) => {
        e.preventDefault();
        let password = e.target.Pass.value;
        if (password == 12345678) {
            setAllOk(true);
            toast.success("Welcome To Dashboard.", {theme: "colored"})
            e.target.reset();
        }else{
            toast.error("Wrong Password!",{theme: "colored"})
        }

    }



    return (
        <>
            <div className={AllOk ? "hidden" : "flex w-full h-screen items-center justify-center"}>
                <div>
                    <h1 className="font-semibold text-xl mb-3 ms-2">ADMIN LOGIN</h1>
                    <form onSubmit={handleAuthentication}>
                        <input placeholder="Password" className="border rounded py-1 px-3 mr-4" type="text" name="Pass" id="" />
                        <input className="btn bg-orange-500 text-white btn-sm" type="submit" value="Enter" />
                    </form>
                </div>
            </div>

            <div className={AllOk ? "flex w-full h-screen" : "hidden"}>
                <div className="w-full text-right">
                    <button className="btn outline bg-transparent hover:bg-red-400 outline-2 outline-white hover:outline-0 border-0 text-white btn-sm absolute top-8 right-7" onClick={() => setAllOk(false)}>SIGN OUT</button>
                    
                    
                </div>
            </div>

        </>
    );
};

export default Admin;
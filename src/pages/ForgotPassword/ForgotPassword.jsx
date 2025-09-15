import { Breadcrumb } from "flowbite-react";

const ForgetPassword = () => {
    return(
       <>
             <Breadcrumb aria-label="Default breadcrumb example" className="py-2 pl-2">
               <Breadcrumb.Item href="/" className="text-white" icon={HiHome}>
                 Home
               </Breadcrumb.Item>
               <Breadcrumb.Item href="/Register" className="text-white">
                 Register
               </Breadcrumb.Item>
             </Breadcrumb>
             <div className="relative register-background w-full flex flex-col justify-center items-center lg:justify-start py-4">
               <div className="absolute inset-0 bg-black bg-opacity-50"></div>
               <div className="register-container  w-96 flex flex-col justify-center items-center z-50 relative">
                 <div className="flex justify-center">
                   <img class="h-20" src={logo} alt="Fireeye Logo" />
                   <span className="brand-text-one self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                     Fire<span className="brand-text-two text-red-600 ">Eyes</span>
                   </span>
                 </div>
                 <form onSubmit={handleLogin} className="">
                   <div className="flex flex-col w-full">
                     <label>Phone number</label>
                     <input
                       type="text"
                       name="phonenumber"
                       value={phonenumber}
                       onChange={(e) => setPhonenumber(e.target.value)}
                       required
                       placeholder="Enter your phone number"
                     />
                   </div>
       
                   <div className=" flex flex-col pt-4 w-full">
                     <label>Password</label>
                     <input
                       type="text"
                       name="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Enter your password"
                       required
                     />
                   </div>
                   <Link className="flex justify-end text-blue-700" to="/forgotpassword">Forgot Password?</Link>
                   <div className="flex justify-center pt-4 pb-6">
                     <button
                       type="submit"
                       className="py-2 px-4 text-white rounded-md bg-red-600"
                     >
                       {loading ? (
                         <CircleLoader
                           loading={loading}
                           size={30}
                           aria-label="Loading Spinner"
                           data-testid="loader"
                           color={color}
                         />
                       ) : (
                         "Login"
                       )}
                     </button>
                   </div>
                   <p className="text-center pb-2">
                     Don't have an account?{" "}
                     <Link className="text-blue-700" to="/Register">
                       Sign up
                     </Link>
                   </p>
                   {error && <p className="error text-center">{error}</p>}
                 </form>
               </div>
             </div>
             <div className="pt-6">
               <Footer />
             </div>
           </>
    )
}
export default ForgetPassword;
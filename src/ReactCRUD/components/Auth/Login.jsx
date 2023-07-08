import { useEffect,useState, } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';

const Register = () => {
    let [formData,setFormData] = useState({email:"",password:""});
    let nagivate = useNavigate();

    function handleChange(e) {
        let {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        let error_alert = document.querySelector(".alert-danger");
        if (formData.email === "" || formData.password === "") {
            error_alert.textContent = "All fields are required!";
            error_alert.classList.remove("d-none");
            setTimeout(() => {
                error_alert.textContent = "";
                error_alert.classList.add("d-none"); 
            }, 3000);
        }else{
            let registered_data = JSON.parse(sessionStorage.getItem("RCloginAuth"))
            let registered_email = registered_data.email;
            let registered_password = registered_data.password;
            if (formData.email !== registered_email) {
                error_alert.textContent = "Incorrect Email!";
                error_alert.classList.remove("d-none");
                setTimeout(() => {
                    error_alert.textContent = "";
                    error_alert.classList.add("d-none"); 
                }, 3000);
            }else if (formData.password !== registered_password){
                error_alert.textContent = "Incorrect Password!";
                error_alert.classList.remove("d-none");
                setTimeout(() => {
                    error_alert.textContent = "";
                    error_alert.classList.add("d-none"); 
                }, 3000);
            }else{
                 sessionStorage.setItem("RClogin",[JSON.stringify(formData)]);
            let success_alert = document.querySelector(".alert-success");
            success_alert.textContent = "Loged successfully.";
            success_alert.classList.remove("d-none");
            setTimeout(() => {
                success_alert.textContent = "";
                success_alert.classList.add("d-none");
                nagivate("/")
            }, 2000);
            }
        }
    }

    useEffect(()=>{
        if (sessionStorage.getItem("RCloginAuth") === null) {
            sessionStorage.setItem("RCloginAuth",JSON.stringify([{email:"",name:"",password:""}]));
        }
        if (sessionStorage.getItem("RClogin") === "yes") {
            nagivate("/")
        }
        if (sessionStorage.getItem("RClogin") == null || sessionStorage.getItem("RClogin") != "yes") {
            sessionStorage.setItem("RClogin","no");
            }
        },[])
    
  return (
    <>
     <section className="p-3 d-flex align-items-center justify-content-center" style={{minHeight:"calc(100vh - 112px)"}}>
    <div className="container">
    <div className="row">
            <div className="col-lg-10 m-auto">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title m-0 float-left w-100 text-center">Login</h3>
                    </div>
                    <div className="card-body">
                        <form  autoComplete='off' onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className="form-group col-sm-12">
                                <label>Email</label>
                                    <input onChange={handleChange} type="email" className="form-control" name="email" placeholder='Enter email'/>
                            </div>

                            <div className="form-group col-12 col-sm-12">
                                <label >Name</label>
                                    <input onChange={handleChange} type="password" className="form-control" name="password" placeholder='Enter Password'/>
                                </div>

                               <div className="form-group col-12 m-auto text-center">
                                <div className="alert alert-danger py-0 mb-2 d-none"></div>
                                <div className="alert alert-success py-0 mb-2 d-none"></div>
                                <input type="submit" className="btn btn-info w-50" value="Submit" />
                            </div>
                            <div className='mx-auto mt-2'>Not resistered? <NavLink to={"/register"}>Register</NavLink> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Register
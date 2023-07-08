import React, { useState } from 'react'
import { NavLink, json, useNavigate } from 'react-router-dom'

const Add = () => {
    let nagivate = useNavigate();
    let [formData,setFormData] = useState({name:"",class:"",age:""});
    let exist = JSON.parse(localStorage.getItem("data"));
    let [storedData,setStoredData] = useState(exist !== null ? exist : []);

    function handleChange(e) {
        let {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        if ((formData.name || formData.class || formData.age) == "") {
            let error_alert = document.querySelector(".alert-danger");
            error_alert.textContent = "All fields are required!";
            error_alert.classList.remove("d-none");
            setTimeout(() => {
                error_alert.textContent = "";
                error_alert.classList.add("d-none"); 
            }, 3000);
        }else{
            localStorage.setItem("data",JSON.stringify([...storedData,formData]));
            setStoredData(JSON.parse(localStorage.getItem("data")))
            setFormData({name:"",class:"",age:""})
            let success_alert = document.querySelector(".alert-success");
            success_alert.textContent = "Data added successfully!.";
            success_alert.classList.remove("d-none");
            setTimeout(() => {
                success_alert.textContent = "";
                success_alert.classList.add("d-none");
                nagivate("/") 
            }, 2000);
            
        }
    }
  return (
    <>
    <section className="p-3" style={{minHeight:"calc(100vh - 112px)"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-10 m-auto">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title m-0 float-left">Add New Student</h3>
                        <NavLink to={"/"} className="btn btn-info float-right">All Students</NavLink>
                    </div>
                    <div className="card-body">

                        <form onSubmit={(handleSubmit)} autoComplete='off'>
                        <div className='row'>
                            <div className="form-group col-sm-12">
                                <label>Name</label>
                                    <input onChange={handleChange} type="text" className="form-control" name="name" placeholder='Student Name' value={formData.name} />
                            </div>

                            <div className="form-group col-12 col-sm-6">
                                <label >Class</label>
                                    <input onChange={handleChange} type="text" className="form-control" name="class" placeholder='Class Name' value={formData.class}/>
                                </div>

                                <div className="form-group col-12 col-sm-6">
                                <label>Age</label>
                                    <input onChange={handleChange} type="number" className="form-control" name="age" placeholder='Age' value={formData.age}/>
                            </div>
                              
                            <div className="form-group col-12 m-auto text-center">
                                <div className="alert alert-danger py-0 mb-2 d-none"></div>
                                <div className="alert alert-success py-0 mb-2 d-none"></div>
                                    <input type="submit" className="btn btn-info w-50" value="Submit" />
                            </div>
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

export default Add

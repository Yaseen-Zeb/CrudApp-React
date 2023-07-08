import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    let params = useParams();
    let id = params.id;
    let nagivate = useNavigate();
    let [targetData ,settargetData] = useState({name:"",class:"",age:""});
    let storedData;
    if (JSON.parse(localStorage.getItem("data")) != null) {
        storedData = JSON.parse(localStorage.getItem("data"))
        if (storedData[id] == null) {
            nagivate("/");
        } 
    }

    function handleChange(e) {
        let {name,value} = e.target;
        settargetData({...targetData,[name]:value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (targetData.name  == "" || targetData.class == "" || targetData.age == "") {
            let error_alert = document.querySelector(".alert-danger");
            error_alert.textContent = "All fields are required!";
            error_alert.classList.remove("d-none");
            setTimeout(() => {
                error_alert.textContent = "";
                error_alert.classList.add("d-none"); 
            }, 3000);
        }else{
           for (let i = 0; i < storedData.length; i++) {
            if (i == id) {
                storedData[id] = targetData;
            }
           }
           console.log(storedData);
           localStorage.setItem("data",JSON.stringify(storedData));
            settargetData({name:"",class:"",age:""})
            let success_alert = document.querySelector(".alert-success");
            success_alert.textContent = "Data upadted successfully!.";
            success_alert.classList.remove("d-none");
            setTimeout(() => {
                success_alert.textContent = "";
                success_alert.classList.add("d-none");
                nagivate("/") 
            }, 2000);
        }
    }
 
    useEffect(()=>{
        settargetData(storedData[id])
    },[])

  return (
    <>
    <section className="p-3" style={{minHeight:"calc(100vh - 112px)"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-10 m-auto">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title m-0 float-left">Update Data</h3>
                        <NavLink to={"/"} className="btn btn-info float-right">Back</NavLink>
                    </div>
                    <div className="card-body">

                        <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className='row'>
                            <div className="form-group col-sm-12">
                                <label>Name</label>
                                    <input onChange={(handleChange)} type="text" className="form-control" name="name" placeholder='Student Name' value={targetData.name}/>
                            </div>

                            <div className="form-group col-12 col-sm-6">
                                <label >Class</label>
                                    <input onChange={(handleChange)} type="text" className="form-control" name="class" placeholder='Class Name' value={targetData.class}/>
                                </div>

                                <div className="form-group col-12 col-sm-6">
                                <label>Age</label>
                                    <input onChange={(handleChange)} type="number" className="form-control" name="age" placeholder='Age' value={targetData.age}/>
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

export default Update
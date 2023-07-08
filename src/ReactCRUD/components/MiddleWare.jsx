import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const MiddleWare = (props) => {
    let Component = props.Component;
    let navigate = useNavigate()
    let islogin = sessionStorage.getItem("RClogin");


    function handleLogout() {
        sessionStorage.setItem("RClogin","no");
        navigate("/")
    }

    useEffect(()=>{
    if (islogin === "no" || islogin === null) {
       navigate("/login");
      }
    })
   

  return (
    <>
    <div id="wrapper">
        <header className="bg-info p-2">
            <div className="container">
                <div className="row ">
                    <div className="col-md-12 text-center text-white">
                        <h1 style={{margin: "-9px 0 -5px 0"}} className="text-center">React Crud</h1>
                        <small onClick={handleLogout} style={{fontWeight:"bolder",cursor:"pointer"}}>Logout</small>
                    </div>
                </div>
            </div>
        </header>
        <Component />
        </div>
    </>
  )
}

export default MiddleWare
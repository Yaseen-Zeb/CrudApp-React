import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'

const View = () => {
    let exist = JSON.parse(localStorage.getItem("data"));
    let [storedData,setStoredData] = useState(exist !== null ? exist : []);

    function remove(id) {
        let updated_arr = [];
      storedData.forEach((e,i) => {
        if (i != id) {
            updated_arr.push(e)
        }
      });
      localStorage.setItem("data",JSON.stringify(updated_arr));
      setStoredData(updated_arr);
    }


    useEffect(()=>{
        let exist = JSON.parse(localStorage.getItem("data"));
        setStoredData(exist !== null ? exist : [])
    },[])


  return (
    <>
    <section className="p-3" style={{minHeight:"calc(100vh - 112px)"}}>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title m-0 float-left">Students List</h3>
                       <NavLink to={"/add"} className="btn btn-info float-right">Add New</NavLink> 
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Student Name</th>
                                    <th>Class</th>
                                    <th>Age</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    storedData.map((e,i)=>
                                    <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.class}</td>
                                    <td>{e.age}</td>
                                    <td><NavLink to={"/edit/"+i} className="badge badge-success badge-lg px-2 py-2 text-light">Edit</NavLink></td>
                                    <td>
                                        <i className="badge badge-danger badge-lg px-2 py-2 text-light" onClick={()=> remove(i)}>Delete</i>
                                    </td>
                                </tr>
                                    )
                                }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default View

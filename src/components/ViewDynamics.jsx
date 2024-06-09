import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewDynamics = () => {
    const [data,changeView]=useState(
        {"products":[]}
    )
        const fetchData=()=>{
           axios.get("https://dummyjson.com/products").then(
            (response)=>{
                console.log(response.data)
                changeView(response.data)
            }
           ).catch().finally() 
        }
       // useEffect(()=>{fetchData()},[])
    return (
        <div>
            
            <div className="container">
                <button onClick={fetchData}className="btn btn-primary">click</button>
                
                
                <div className="row g-4">
                {data.products.map(
                      (value, index) => {
                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card">
                                <img src={value.images} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.brand}</p>
                                    <p className="card-text">{value.description}</p>
                                    <p className="card-text">{value.price}</p>
                                    
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div> 
                        } 
                )} 
            </div>
            </div>
  

    </div>
  )
}


  
    

    
  

export default ViewDynamics
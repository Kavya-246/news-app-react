import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewNews = () => {
    const [data,changeData]=useState(
        {"articles":[]}
    )
        const fetchData=()=>{
           axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
           ).catch().finally() 
        }
        //useEffect(()=>{fetchData()},[])
    return (
        <div>
            
            <div className="container">
                <button onClick={fetchData} className="btn btn-primary">click</button>
                <div className="row g-4">
                {data.articles.map(
                      (value, index) => {
                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card">
                                <img src={value.urlToImage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.description}</p>
                                    
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


  
    

    
  

export default ViewNews
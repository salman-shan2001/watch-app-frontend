import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewWatch = () => {


    const [watch, changewatch] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:1002/view").then(
            (response) => {
                changewatch(response.data)
            }
        ).catch().finally()
    }

    useEffect(() => { fetchData() }, [])



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                watch.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.image} class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.company}</h5>
                                                    <p class="card-text">{value.material}</p>
                                                    <a href="#" class="btn btn-primary">{value.prize}</a>
                                                </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewWatch

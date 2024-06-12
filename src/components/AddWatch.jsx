import axios from 'axios'
import React, { useState } from 'react'

const AddWatch = () => {

    const [watch, changewatch] = useState(
        {
            "company": "",
            "prize": "",
            "material": "",
            "headquaters": "",
            "image": ""


        }
    )

    const inputHandler = (event) => {
        changewatch({ ...watch, [event.target.name]: event.target.value }

        )
    }


    const readData = () => {
        axios.post("http://localhost:1002/", watch).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("New Watch added successfuly ")
                } else {
                    alert("error occurs")
                }
            }
        ).catch()
    }


    return (
        <div>
            <div>
                <div className="container">
                    <div className="row">
                        <center>
                            <h1> Add Watchs</h1>
                        </center>

                        <div class="card" >
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Company Name</label>
                                        <input type="text" className="form-control" name='company' value={watch.company} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Prize</label>
                                        <input type="text" className="form-control" name='prize' value={watch.prize} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Material used</label>
                                        <input type="text" className="form-control"  name='material' value={watch.material} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Headquarters</label>
                                        <input type="text" className="form-control" name='headquaters' value={watch.headquaters} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">image</label>
                                        <input type="text" className="form-control" name='image' value={watch.image} onChange={inputHandler}/>
                                    </div>
                                    <center>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <button className="btn btn-success" onClick={readData}>ADD</button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div>

    )
}

export default AddWatch

import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchWatch = () => {

    const [watch, changewatch] = useState(
        {
            "company": ""
        }
    )
    //searching part
    const [result, changereselt] = useState([
        {

            "company": "",
            "prize": "",
            "material": "",
            "headquaters": ""

        }
    ]

    )

    //deleting part

    const deleteCourse = (id) => {                                     //delete function
        let input = { "_id": id }
        axios.post("http://localhost:1002/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfuly deleted")
                } else {
                    alert("error in deletion")
                }
            }
        ).catch().finally()
    }

    const inputHandler = (event) => {
        changewatch({ ...watch, [event.target.name]: event.target.value })
    }


    const readvalue = () => {
        console.log(watch)
        axios.post("http://localhost:1002/search", watch).then(
            (response) => {
                changereselt(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <Navbar />
                    <center><h1>Search Watchs Here</h1></center>
                    <br></br><br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Watch Name</label>
                                <input type="text" className="form-control" name='company' value={watch.company} onChange={inputHandler} />
                            </div>

                            <center>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary" onClick={readvalue}>SEARCH</button>
                                </div>
                            </center>
                        </div>

                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Company</th>
                                            <th scope="col">prize</th>
                                            <th scope="col">meterial used</th>
                                            <th scope="col">Headquarters</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            result.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.company}</th>
                                                        <td>{value.prize}</td>
                                                        <td>{value.material}</td>
                                                        <td>{value.headquaters}</td>
                                                        <td>
                                                            <button className="btn btn-danger" onClick={() => { deleteCourse(value._id) }}>DELETE</button>
                                                        </td>
                                                    </tr>
                                                }
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}

export default SearchWatch

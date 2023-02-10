import React from 'react'
import {Link} from "react-router-dom"
import "./UserProfile.css"
function EditProfile() {
  return (
    <div>
        
        <div className="col-md-8" style={{width:"700px"}}>
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-row align-items-center back">
                            <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                            <Link to="/userprofile">
                            <h6>Back to home</h6>
                            </Link>
                            

                        </div>
                        <Link to="/">
                        <h6 className="text-right  bg-red-600 p-2 text-center rounded-md text-white">LogOut</h6>
                        </Link>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="first name" value="Vishal Mishra"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="Mishra" placeholder="Last Name"/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" value="Vishal12@bbb.com"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="+91xxxxx378" placeholder="Phone number"/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="address" value="c-57, Noida Uttar Pardesh"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="India" placeholder="Country"/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" value="Bank of India"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="043958409584095" placeholder="Account Number"/></div>
                    </div>
                    <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
    </div>
  )
}

export default EditProfile

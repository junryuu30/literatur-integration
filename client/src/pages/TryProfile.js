import React from 'react'
import mail from "../assets/mail.png"

function TryProfile() {
  return (
    <>
        <h3 style={{ marginLeft: "110px", color: "white" }}> Profile</h3>
            <div className="profile-container">
                <div className="profile-card">
                <div className="profile-desc">
                        <div className="profile-data">
                            <div className="profile-icon">
                                <img src={mail} alt="" />
                            </div>
                            <div className="profile-details">
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    {/* {state?.user?.email} */}
                                </span>
                                <span>Email</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                    
                        
                        
                        
    </>
  )
}

export default TryProfile
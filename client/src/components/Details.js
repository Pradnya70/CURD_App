import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Details = () => {
   

  return (
    <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome Pradnya Waghmare</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                <div className="add_btn">
                        <button className="btn btn-primary mx-2"><CreateIcon /></button>
                        <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >Pradnya Waghmare</span></h3>
                            <h3 className="mt-3">Age: <span >25</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>pradnyawaghmare@gmail.com</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>Webdeveloper</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">
                        
                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 9090909090</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>Pune</span></p>
                            <p className="mt-3">Description: <span>I am fresher.</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
  
}

export default Details
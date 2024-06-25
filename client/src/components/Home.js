import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
<div className="mt-5">
     <div className="container">
        <div className="add_btn mt-2 mb-2">
            <NavLink to="/register" className='btn btn-primary'>Add data</NavLink>
                    </div>

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                   <tbody>
                     <tr>
                        <th scope="row"></th>
                        <td>meet</td>
                        <td>meet@email.com</td>
                        <td>Webdeveloper</td>
                        <td>9898989898</td>
                        <td className='d-flex justify-content-between'>
                            <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                            <button className='btn-btn-primary'><CreateIcon/></button>
                            <button className='btn btn-danger'><DeleteOutlineIcon/></button>
                        </td>
                    </tr>
                 </tbody>
                     
                 <tbody>
                     <tr>
                        <th scope="row"></th>
                        <td>meet</td>
                        <td>meet@email.com</td>
                        <td>Webdeveloper</td>
                        <td>9898989898</td>
                        <td className='d-flex justify-content-between'>
                        <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                            <button className='btn-btn-primary'><CreateIcon/></button>
                            <button className='btn btn-danger'><DeleteOutlineIcon/></button>
                        </td>
                    </tr>
                 </tbody>
                     

             </table>  

            </div>    
            </div>    


  )
}

export default Home
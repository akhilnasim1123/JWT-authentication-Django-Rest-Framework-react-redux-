import React, { useEffect, useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminLogout } from '../context/Store'
import { checkAuth } from '../features/user'

const AdminPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
 const {isAdminAuthenticated}=useSelector((state)=>state.admin)


//  {  if (!isAdminAuthenticated) return <Navigate to="/admin" />;}
  return (

<div>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <NavLink to='/user-details' href="#" className="navbar-brand">Admin</NavLink>
        
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
                >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink href="#products" to='/user-details' className="nav-link">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/admin' className="nav-link" onClick={() => dispatch(adminLogout())}>Log Out</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>    

</div>

  )
}

export default AdminPage
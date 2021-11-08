import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css'


export default function Navigation() {
    
    return (
        <div className="nav">
             <p>Test navigation!</p>
             <div className="nav-item"><Link to="/home">Home</Link></div>
             <div className="nav-item"><Link to="/about">About</Link></div>
        </div>
       
        
    )
}
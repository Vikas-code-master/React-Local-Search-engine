import React, { useState } from 'react';
import './Header.css';
import dwn_arr from '../../Assets/dwn_arr.svg';


 const Header = ()=>{
    const [showDialog, setDialogBox] = useState(false);

    const Dialogbox = ()=>{
       return <div class="dialog">
            My Profile
            
            </div>
    }
    const insertDialogBox = (type)=>{
        if(type==="ack"){
            if(showDialog===false){
                setDialogBox(true)
            }
    
        }
        if(type==="mr"){
        }
        if(type==="crt"){
        }
    }
    const removeDialogBox = (type)=>{
        if(type==="ack"){
            if(showDialog==true){
                setDialogBox(false)
            }
    
        }
        if(type==="mr"){
            document.getElementById('ack')
        }
        if(type==="crt"){
        }
    }
    return <div className="header">
        <span className="company_name">CityApl</span>
        <input placeholder="Search for products, brands and more"/>
        <div className="admin">
<div className= "ack" id="ack" onMouseLeave = {()=>{removeDialogBox("ack")}} onMouseOver={()=>insertDialogBox("ack")}>MyAccount <img src={dwn_arr} className="dwn_arr"/>{showDialog===true ? <Dialogbox/> : null}</div>
            <div className="mr"id="mr" onMouseOver={()=>insertDialogBox("mr")}>More <img src={dwn_arr} className="dwn_arr"/></div>
            <div className="crt" id="crt" onMouseOver={()=>insertDialogBox("crt")}>Cart <img src={dwn_arr} className="dwn_arr"/></div>
        </div>
    </div>
}

export default Header;
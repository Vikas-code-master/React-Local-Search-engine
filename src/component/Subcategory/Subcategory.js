import React, { useEffect, useState } from 'react';
import './Subcategory.css';

const Subcategory = ()=>{
    const [showDialog, setData] = useState([{"name":"Hotels","catImg":"https://cityapl.com/media/catImg/hotel_9.svg","id":1},{"name":"Education","catImg":"https://cityapl.com/media/catImg/colleges.svg","id":7},{"name":"Banks & ATM","catImg":"https://cityapl.com/media/catImg/bank_BK8vnKp.svg","id":10},{"name":"Automobile","catImg":"https://cityapl.com/media/catImg/automobile_1.svg","id":11}]);

    // const Dialogbox = ()=>{
    //    return <div class="dialog">
    //         My Profile
            
    //         </div>
    // }

    useEffect(() => {  
        fetch("https://cityapl.com/api/v1/cityapl/categories/")
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch(error => console.log(error) );
      },[]);


    return <div className="home">
                <h3>SubCategories</h3>
                <div className="homePage">
                {showDialog.map((data,i)=>{
                    return <div className="category"><img className="catimg" src={data.catImg}/>{data.name}</div>
                })}
                </div>
            </div>


}

export default Subcategory;
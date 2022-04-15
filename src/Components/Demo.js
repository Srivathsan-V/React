import React, {useState } from 'react';

import Axios from 'axios';

function Demo() {
    const[order,setOrder] = useState("");
    const getOrder = (props)=>{
        Axios.get("http://localhost:9090/orderController/viewAllOrder").then((res)=>{
            setOrder(res.json);
            console.log(order)
        }
        );
    };
    getOrder()

    return (
        <div>            
        <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Order</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> orderid:</label>
                        <div> {order}</div>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    );
}


export default Demo;
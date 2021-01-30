import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import "./style.css";

function StaticContact() {
    return (
        <Jumbotron>
            <h1>Contact Pooler Paws!</h1>
            <p>
                Thank you for your visiting our site and wanting to reach out. If you are interested in adopting a pet or helping out the best way to reach out is by our email address below. 
            </p>
           <ul>
               <li>Email: Admin@PoolerPaws.com</li>
               <li>Area Served: Pooler, GA and the surrounding area within 20 miles</li>
               <li>Group Admin: Karen Menatti</li>
           </ul>
        </Jumbotron>

    );
};

export default StaticContact;
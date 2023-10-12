import { Outlet } from "react-router-dom";
import Profile from "./Profile";
//import Profileclass from "./Profileclass";
import React from "react";
const About =() =>{
    return(
        <div className="about">
        <h1>About </h1>
        <h2>This website is used for purchasing all the items which we need in our day to day life like medicines, groceries, dresses, stationary and so..on..</h2>
        <h1>BANK DETAILS</h1><h2>Bank-Name:IDAC Bank</h2><h2>Acc No:045836971254</h2>
        <h2>Account Holder's Name:WORLD OF FASHION</h2>
        <h1> SELLER'S DETAILS</h1>
        <Profile name="SRI READYMADES" dress="Tops,Leggins,Western Wears" rate="4.2"/>
        <Profile name="MAHA DESIGNERS" dress="All Variety of Sarees" rate="4.5"/>
        <Profile name="GRASP " dress="Both Men and Women wears" rate="4.3"/>
        <Profile name="FIRST CRY" dress="New Born Babies-towels,dresses" rate="4.2"/>
        <Profile name="KUTTIES READYMADES" dress="Shirt ,Pant,Jeans,Jeggins,Choli,Anarkali" rate="4.0"/>
        <Profile name="KRISHNA GROCERIES" dress="Dhals,Rice,Snacks,Biscuits and cooking essentials" rate="4.7"/>
        <Profile name="AMUDHA STATIONERY" dress="Pens,Papers,Charts,Glue,Pouch,Bags etc.." rate="4.6"/>
        <Profile name="ANNAI MEDICALS" dress="Paracetomals,Citrizines,etc.." rate="4.5"/>
        
        </div>
        )
        //<Profileclass name="Gnana" color="Green"/>
};

/*class About extends React.Component{
    constructor(){
        super();
    }

componentDidMount()
{
    console.log("Parent Component Mounted");
}

componentDidUpdate(){
    console.log("Component Updated");
}

componentWillUnmount(){
    console.log("Component Unmounted");
}
    render(){
        console.log("Parent Component rendered");
        return (
        <>
        <h1>About </h1>
        <h2>This website is used for purchasing all the items which we need in our day to day life like medicines, groceries, dresses, stationary and so..on..</h2>
        <h1>BANK DETAILS</h1><h2>Bank-Name:IDAC Bank</h2><h2>Acc No:045836971254</h2>
        <h2>Account Holder's Name:WORLD OF FASHION</h2>
        <Profileclass name="Gnana" color="Green"/>

        </>
    )
}
}*/


<Outlet/>//-functioanal component
export default  About;
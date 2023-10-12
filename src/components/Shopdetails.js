import { useParams } from "react-router-dom";

const Shopdetails =()=>{
    const {Id}=useParams();

    return(
    <>
    <h1>Shop details</h1>
    <span>Id:{Id}</span>
    </>
    );
};

export default Shopdetails;
import { useRouteError } from "react-router-dom";

//useRouteError-one more hook
//useRouteError-get the actual error message

const Error =() =>{

    const err=useRouteError();


    return(
        <>
            <h1>Oopss....Some thing Went wrong</h1>
            <h1>Please Check Once again</h1>
            <h2>
                {err.status}-{err.message}
            </h2>
        </>
        
    );
};

export default Error;
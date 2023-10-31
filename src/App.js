import React, { useState } from "react";
import { User } from "./components/User";

const ValidPassword = () => <h1>Valid Password</h1>;
const InValidPassword = () => <h1>invalid Password</h1>;

const Password = ({ isValid }) => {
    return( 
    <div>{isValid ? <ValidPassword/> : <InValidPassword/>} </div>
    )
};



function App() {


    return (
        <div>
            <Password isValid={true} />
        </div>
    );
}

export default App;

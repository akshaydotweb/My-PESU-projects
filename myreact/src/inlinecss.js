import React from "react";
function Demo(){
    const t={
        color:"black",
        padding:"50px",
        backgroundColor:"grey"
    }
    return(
        <>
        <h1 style={{backgroundColor:"grey"}}>hello !!!</h1>
        <p style={{textAlign:"center"}}>world</p>
        <p style={t}>internal styling</p>
        </>
    )
}
export default Demo;
import { useState } from "react";
import React from "react";
function FavColor()
{
    const [color,setColor]=useState("red")

return(
    <>
    <h1>Fav color is {color}</h1>
    <button type="button" onClick={()=>setColor("blue")}>button
    </button>
    </>
)

}
export default FavColor
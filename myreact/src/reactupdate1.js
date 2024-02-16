import React,{component} from "react"
import App from "./App"
class Demo extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={cricketer:"virat"}
    }
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({cricketer:"dhoni"})
        },2000)
    }   
componentDidUpdate()
{
    document.getElementById("d1").innerHTML="the updated cricketer is "+this.state.cricketer
}
render()
{
    return(
    <div>
    <h1>my fav cricketer is {this.state.cricketer}</h1>
    <div id='d1'></div>
    </div>
    )}
}

export default Demo

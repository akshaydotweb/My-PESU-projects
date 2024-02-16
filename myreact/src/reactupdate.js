import React,{component} from "react"
import App from "./App"
class Demo extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={cricketer:"virat"}
    }
shouldComponentUpdate()
{
    return true;
}
change=()=>
{
    this.setState({cricketer:"dhoni"})
}
render()
{
    return(
    <div>
    <h1>my fav cricketer is {this.state.cricketer}</h1>
    <button type="button" onClick={this.change}>change</button>
    </div>
    )}
}
export default Demo

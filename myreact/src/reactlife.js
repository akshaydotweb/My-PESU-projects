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
render()
{
    return(<h1>fav cricketer is{this.state.cricketer}</h1>)
}
}export default Demo
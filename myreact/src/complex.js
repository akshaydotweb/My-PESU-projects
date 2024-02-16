import React,{Component} from "react";
class SrchResult extends React.Component
{
    render(){
        return(
            <div>
                <ResImage/>
                <ResCaption/>
                <ResLink/>
            </div>
        )
    }
}

class ResImage extends React.Component{
    render(){
        return(
            <div>
                <img src="panda.jpg"></img>
            </div>
        );
    }
}


class ResLink extends React.Component{
    render(){
        return(
            <div>
                <a href="https://www.geeksforgeeks.org/reactjs-importing-exporting/">Panda</a>
            </div>
        );
    }
}


class ResCaption extends React.Component{
    render(){
        return(
            <div>
                <p>Panda</p>
            </div>
        );
    }
}

export default SrchResult;s 
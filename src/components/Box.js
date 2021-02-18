import React, {Component} from 'react'
import './Box.css'

class Box extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             background: this.props.color,
             display: ''
        }
    }
    
    handleColorChange = () => {
        this.setState({
            background: 'grey',
            display: 'none'
        })
    }
    // function Box(props) {
    render() {
        return (
            <div>
                <div style={{ color: 'white', cursor: 'pointer', background: this.state.background, width: 100, height: 100, marginLeft: 50 }} className="box-container" onClick={this.handleColorChange}>
                   <span style={{ color: 'white', display: this.state.display}}> Click me!</span>
                </div>
            </div>
           
        )
    }
}

export default Box

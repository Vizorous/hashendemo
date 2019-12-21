import React, { Component } from 'react'
import TemporaryDrawer from '../components/TemporaryDrawer'
//  import  SelectDateTime from '../Component/SelectDateTime'
import SelectDateTime from '../components/SelectDateTime';
import AppBar from '../components/AppBarComponent';


export class UserHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <AppBar/>
                {/* <TemporaryDrawer/> */}
                <SelectDateTime/>
               
            </div>
        )
    }
}

export default UserHome
/**
 * Created by xiajing on 2016/9/22.
 */
import React from 'react';
import backImg from '../../image/back.png'
class NavTitle extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navInfo navbar-fixed-top">
                    <div className="titleBack initHeight"><img src={backImg}  onClick = {this.props.handleClick} /></div>
                    <div className="login-nav"> {this.props.name} </div>
                </nav>
            </div>
            )
    }
}
export default NavTitle
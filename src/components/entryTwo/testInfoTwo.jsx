/**
 * Created by xiajing on 2016/9/22.
 */
import React  from 'react';
import NavTitle from '../../components/publicComponents/navTitle.jsx';
class TestInfoTwo extends React.Component{
    constructor(props){
        super(props);
    }
    backClick(){
        this.props.history.goBack()
    }
    render(){
        var navBar =<NavTitle name="首页"  handleClick={this.backClick.bind(this)}/>;
        return(
            <div>
                {navBar}
                <div className="testOne">单页入口页面test2......  </div>
            </div>
        )
    }
}
TestInfoTwo.contextTypes = {
    router: React.PropTypes.isRequired
}
export default TestInfoTwo
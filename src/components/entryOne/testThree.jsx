/**
 * Created by xiajing on 2016/9/21.
 */
import React  from 'react';
import NavTitle from '../../components/publicComponents/navTitle.jsx';
class TestThree extends React.Component{
    constructor(props){
        super(props);
    }
    backClick(){
        this.props.history.goBack()
    }
    render(){
        var navBar =<NavTitle name="不按需加载"  handleClick={this.backClick.bind(this)}/>;
        return(
            <div>
                {navBar}
                <div  className="testOne" style={{height:'91px'}}>Hello React！我不是按需加载的，请看router文件夹下面的routerConfigOne.js.......</div>
            </div>
        )
    }
}
export default TestThree
/**
 * Created by xiajing on 2016/9/21.
 */
import React  from 'react';
import NavTitle from '../../components/publicComponents/navTitle.jsx';
class TestTwo extends React.Component{
    constructor(props){
        super(props);
    }
    backClick(){
        this.props.history.goBack()
    }
    nextClick(){
        this.context.router.push('/testThree');
    }
    render(){
        var navBar =<NavTitle name="按需加载页面"  handleClick={this.backClick.bind(this)}/>;
        return(
            <div>
                {navBar}
                <div  className="testOne">Hello React！我是按需加载的.......</div>
                <div  className="testOne" style={{marginTop:'22px'}}><a onClick={this.nextClick.bind(this)}>点击我，我不是按需加载的</a></div>
            </div>
        )
    }
}
//es6 语法来声明contextTypes
TestTwo.contextTypes = {
    router: React.PropTypes.isRequired
}
export default TestTwo
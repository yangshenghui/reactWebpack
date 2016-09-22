/**
 * Created by xiajing on 2016/9/21.
 */
import React  from 'react';
import NavTitle from '../../components/publicComponents/navTitle.jsx';
class TestOne extends React.Component{
    constructor(props){
        super(props);
        this.state = {checked: true}
    }
    nextClick(){
        this.context.router.push('/testTwo');
    }
    backClick(){
        this.props.history.goBack()
    }
    queryClick(){
       this.setState({checked: !this.state.checked})
    }
    render(){
        var navBar =<NavTitle name="首页"  handleClick={this.backClick.bind(this)}/>;
        var textValue =  this.state.checked ? '点击' : '哈哈';
        return(
            <div>
                {navBar}
                <div className="testOne">单页入口页面test1......  </div>
                <div className="testOne" style={{marginTop:'22px'}}><a onClick={this.nextClick.bind(this)}>点击我，我是按需加载</a> </div>
                <div className="testOne" style={{marginTop:'22px',height:'83px'}}>
                    <a href="../view/indexTwo.html">点击我，可以跳转到入口2的页面</a>
                    <br/>重新打开一个路由
                </div>
                <ChildrenComponentOne name="我是从父组件获取的值"/>
                <div onClick={this.queryClick.bind(this)} className="testOne" style={{marginTop:'22px'}}>你可以 <a>{textValue}</a> 我</div>
           </div>
        )
    }
}
class ChildrenComponentOne extends React.Component{
    render(){
        return(
            <div  className="testOne" style={{marginTop:'22px'}}>
                {this.props.name}
            </div>
        )
    }
}
TestOne.contextTypes = {
    router: React.PropTypes.isRequired
}
export default TestOne
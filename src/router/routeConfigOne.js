/**
 * Created by xiajing on 2016/9/21.
 */
export default{
    childRoutes:  [
        {   path:'/',
            indexRoute:{component:require('../components/entryOne/testOne.jsx').default}//默认路由
        },
        //如果是大型项目想减少初始化加载时间可以实现按需加载
        {path:'testTwo',
            getComponent(location,callback){
                require.ensure([],(require) =>{
                    callback(null,require('../components/entryOne/testTwo.jsx').default)
                })
            }
        },
        //页面入口初始化加载就执行，不是按需
        {path:'testThree', component:require('../components/entryOne/testThree.jsx').default},
    ]
}
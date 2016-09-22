/**
 * Created by xiajing on 2016/9/21.
 */
export default{
    childRoutes:  [
        {   path:'/',
            indexRoute:{component:require('../components/testOne.jsx').default}//默认路由
        },
        {path:'testTwo',
            getComponent(location,callback){
                require.ensure([],(require) =>{
                    callback(null,require('../components/testTwo.jsx').default)
                })
            }
        }
    ]
}
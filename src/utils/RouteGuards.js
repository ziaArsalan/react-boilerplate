import React, { useContext } from 'react';
import {Redirect, Route} from 'react-router-dom';

import { UserContext } from '../context/User.context';

function AuthGuard({component: Component, ...rest}){
    const user = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={(props) => {
                if(!user.email) return <Component {...props} />
                else return  <Redirect to={'/user/gallery'} />
            }}
        />
    )
}

function UserGuard({component: Component, ...rest}){
    const user = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={(props) => {
                if(user.email) return <Component {...props} />
                else return  <Redirect to={'/'} />
            }}
        />
    )
}




function CreateBrandGuard({component: Component, role, ...rest}){
    const user       = useContext(UserContext)
    const activePerm = getActivePermission()

    function getActivePermission(){
        if(user.activePermission) return user.activePermission
        return {roles: user.roles}
    }

    return (
        <Route
            {...rest}
            render={(props) => {
                if(!user.email) return <Redirect to='/' />
                if(user.email && !user.verified) return <Redirect to='/verify' />
                if(user.email && !user.walletlyReferences) return <Redirect to='/onboard' />
                if(role && !activePerm.roles.some(currentRole=>role.includes(currentRole))) return <Redirect to='/' />
                if(user.email) return <Component {...props} />
                else return  <Redirect to='/' />
            }}
        />
    )
}

function CentralGuard({component: Component, ...rest}){
    const user = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={(props) => {
                if(user.email && !user.verified) return <Redirect to='/verify' />
                if(user.email && !user.walletlyReferences) return <Redirect to='/onboard' />
                if(user.email && !user.activeBrand) return <Redirect to='/brand' />
                if(user.email) return <Component {...props} />
                else return  <Redirect to='/' />
            }}
        />
    )
}

function RoleGuard({component: Component, path, role, ...rest}){
    const activePermission = useContext(UserContext).activePermission

    return (
        <Route
            path={path}
            render={(props) => {
                if(role && !activePermission.roles.some(currentRole=>role.includes(currentRole))) return <Redirect to='/' />
                return <Component {...props} {...rest} />
            }}
        />
    )
}


export {
    AuthGuard,
    UserGuard,
    CreateBrandGuard,
    CentralGuard,
    RoleGuard
}
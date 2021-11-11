import React, { Component } from "react";
import PngIcons from "../icons/png.icon";

import * as localForage from 'localforage'

import Loader from '../components/loader/Loader'

const UserContext = React.createContext();

class UserContextComponent extends Component {
  state = {loader: true}

  
  componentDidMount = async () => {
    const user = await localForage.getItem('user')
    if(user)this.setState({loader: false, ...user})
    else this.setState({loader: false})
  }

  updateUser = (updates) => {
    const updatedUser = {...this.state.user, ...updates}
    this.setState(updatedUser)
    // localForage.setItem('user', {...updatedUser})
  }

  render() {
    return (
      this.state.loader ? 
      <div className="center" ><Loader width={88} height={88} /></div>
      :
      <UserContext.Provider value={{...this.state, updateUser: this.updateUser}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export { UserContext, UserContextComponent }
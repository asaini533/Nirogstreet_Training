/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';


const userInfoContext = createContext()
const userUpdateContext = createContext()

export function useUserInfo(){
  return useContext(userInfoContext)
}

export function getUserInfo(){
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('userInfo'))
}
}

export function userIDContext () {
  const userInfo = useContext(userInfoContext)
  return userInfo.id;
}

export function userUpdate(){
  return useContext(userUpdateContext)
}

export const UserInfoProvider = ({ children }) => {
  const [userInfo,setUserInfo]=useState([])
  function handleUser(info){
      localStorage.setItem('userInfo', JSON.stringify(info));
      setUserInfo(info)
  }
  return (
    <userInfoContext.Provider value={userInfo}>
      <userUpdateContext.Provider value={handleUser}>
        {children}
      </userUpdateContext.Provider>
    </userInfoContext.Provider>
  )
}


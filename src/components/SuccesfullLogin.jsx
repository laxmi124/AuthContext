import React,{useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'


function SuccesfullLogin() {
 let {token} = useContext(AuthContext)
  return (
    <h1> Your token : {token}</h1>
  )
}

export default SuccesfullLogin
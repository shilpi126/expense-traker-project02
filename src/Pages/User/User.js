import React, { useContext } from 'react'
import classes from "./User.module.css"
import Button from '../../UI/Button'
import AuthContext from '../../store/auth-context'
const User = () => {
  const authCtx = useContext(AuthContext)

  const handleVerifyEmail = async() => {

      authCtx.verifyEmailId(authCtx.token)
  }

  return (
    <div className={classes.btn}>
    <Button type="button" onClick={handleVerifyEmail}>Verify Email Id</Button>
    
  </div>
  )
}

export default User
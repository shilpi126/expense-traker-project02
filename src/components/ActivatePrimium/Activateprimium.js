import React, { useState } from 'react'
import classes from "./ActivatePrimium.module.css"

const Activateprimium = () => {
  const [primiumActrivated, setPrimiumActivated]=useState(false)


  const handleActivatePrimium = () => {
    setPrimiumActivated(true)
  }


  const handleCanlePrimium = () => {
    setPrimiumActivated(false)
  }


  return (
    <div className={classes.active}>
      <h1>Hello World!</h1>
      {!primiumActrivated &&  <h1>Please Activate Primium Features</h1>}
      {primiumActrivated && <p>Primium Activated</p>}
        <button onClick={handleActivatePrimium}>
        Activate Primium
        </button>
        <button onClick={handleCanlePrimium}>
          Cancle Primium
        </button>
    </div>
  )
}

export default Activateprimium
import React from 'react'

function Alert(props) {
  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      
    </div>
    // here if props.alert will be null then nothing will render but if
    //...props.alert is not null then do the or show the rest part of code. this happens bcz all the JSX will be converted to js calls.
  )
}

export default Alert

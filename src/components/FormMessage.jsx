import React from "react"
import Alert from "react-bootstrap/Alert"

function FormMessage(props) {
  const variant = props.message.status === 1 ? "danger" : "success"
  return (
    <Alert
      className={props.message.status ? "d-inline-block" : "d-none"}
      variant={variant}
    >
      {props.message.text}
    </Alert>
  )
}

export default FormMessage

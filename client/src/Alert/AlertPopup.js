import Alert from 'react-bootstrap/Alert'
import useAlert from './userAlert'

const AlertPopup = () => {
  const { text, type } = useAlert()

  if (text && type) {
    return (
      <Alert key={type} variant={type}>
        {text}
      </Alert>
    )
  } else {
    return <></>
  }
}

export default AlertPopup

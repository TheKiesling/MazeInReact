import { useState } from 'react'

const useConfigForm = () => {
  const [configForm, setConfigForm] = useState({
    width: 0,
    height: 0,
    player: null,
    theme: null,
    time: false,
    limitTime: -1,
  })

  const handleChange = (event) => {
    const {
      name, value, type, checked,
    } = event.target
    setConfigForm((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return [configForm, handleChange]
}

export default useConfigForm

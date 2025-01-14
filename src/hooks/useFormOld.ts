import React, { ChangeEvent, useState } from 'react'

const useForm = <T>(initialState: T) => {
  const [state, setState] = useState(initialState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setState(initialState)
  }

  const resetCustom = (reset?: T) => {
    setState(reset ? reset : initialState)
  }

  return { ...state, onChange, reset, resetCustom }
}

export default useForm

import React from 'react'
import useAllImagenes from '../../../services/useAllImagenes'

const Imagenes = () => {
  const { db } = useAllImagenes({ pagina: 1, numeroPagina: 50 })
  console.log(db)

  return <div>Imagenes</div>
}

export default Imagenes

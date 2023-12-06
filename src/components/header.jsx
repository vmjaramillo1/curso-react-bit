import { memo } from "react"
import useModules from "../hooks/use-modules";

function Header({title}) {
  const { isLoading } = useModules()
  
  return (
    <header>
      {isLoading && <p>Titulo Cargando...</p>}
      <h1>{title.valor}</h1>
    </header>
  )
}

export default memo(Header);
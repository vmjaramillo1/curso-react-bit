import { memo } from "react"
import useModules from "../hooks/use-modules";

function Header({title}) {
  const { isLoading } = useModules()
  
  return (
    <header className="bg-[#343e42] shadow-lg py-4 rounded-b-[50%] text-center">
      {isLoading && <p>Titulo Cargando...</p>}
      <h1>{title.valor}</h1>
    </header>
  )
}

export default memo(Header);
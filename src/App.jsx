import { useMemo } from "react"
import Footer from "./components/footer"
import Header from "./components/header"
import useModules from "./hooks/use-modules"
import { Outlet } from "react-router-dom"

function App() {
  const { isLoading } = useModules()

  const title = useMemo(() => ({
    valor: "Plataforma de experiencia del colaborador"
  }), [])

  if (isLoading) return <p>Cargando...</p>

  return (
    <>
      <Header title={title}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App


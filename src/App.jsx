import { useState, useMemo } from "react"
import Container from "./components/container"
import Footer from "./components/footer"
import Header from "./components/header"
import ModuleCard from "./components/module-card"
import Options from "./components/options"
import useModules from "./hooks/use-modules"

function App() {
  const { modules, isLoading, error } = useModules()

  const [favorite, setFavorite] = useState(-1)
  
  const title = useMemo(() => ({
    valor: "Plataforma de experiencia del colaborador"
  }), [])

  if (error) return <p>Hubo un error: {error?.message}</p>

  if (isLoading) return <p>Cargando...</p>

  return (
    <>
      <Header title={title}/>
      <Container>
        {modules.map(item => (
          <ModuleCard
            key={item.id}
            id={item.id}
            setFavorite={setFavorite}
            favorite={favorite}
            image={<img width={100} src={item.image.url} alt={item.image.alt} />}
          >
            <p>{item.title}</p>
            {item.title === "Teletrabajo" && <Options />}
          </ModuleCard>
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default App


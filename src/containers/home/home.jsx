import Container from "../../components/container";
import ModuleCard from "../../components/module-card";
import useModules from "../../hooks/use-modules";

export default function Home( ) {
  const { modules } = useModules() 

  return (
    <Container>
      {modules.map(item => (
        <ModuleCard
          key={item.id}
          id={item.id}
          path={`/modulos/${item.title.toLowerCase()}`}
          image={<img width={100} src={item.image.url} alt={item.image.alt} />}
        >
          <p>{item.title}</p>
        </ModuleCard>
      ))}
    </Container>
  )
}
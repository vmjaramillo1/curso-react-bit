import { useEffect } from "react";
import "./module-card.scss";
import { memo } from "react";

 function ModuleCard(props) {
  const { id, setFavorite ,image, favorite, children } = props;

  // useEffect(() => {
  //   console.log("Hola me esto renderizando, soy: ", id)

  //   // Efemplo de desmontaje
  //   return() => {
  //     console.log("Me voy, chauu:", id)
  //   }

  // }, [])

  // usado en la actualizacion
  // useEffect(() => {
  //   console.log("Me actualice: ", id)
  // }, [favorite])

  return (
    <article
      onClick={() => setFavorite(id)}
      className={`module-card
        ${favorite === id ? "module-card--favorite" : ""} `}>
      <figure>
        {image}
        <figcaption className="module-card__description">{children}</figcaption>
      </figure>
    </article>
  )
}

export default memo(ModuleCard)
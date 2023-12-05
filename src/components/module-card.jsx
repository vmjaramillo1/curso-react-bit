export default function ModuleCard({ title, image }) {
  return (
    <article style={{ border: "1px solid gray" }}>
      <figure>
        {image}
        <figcaption>{title}</figcaption>
      </figure>
    </article>
  )
}

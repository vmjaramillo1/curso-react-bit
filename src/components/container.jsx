export default function Container ({ children }) {
  return (
    <section className="grid p-4 grid-cols-[repeat(3,250px)] gap-4">
      {children}
    </section>
  )
}
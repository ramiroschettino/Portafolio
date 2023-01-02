export const SectionTitle = ({ children, id }) => {
  return (
    <h1 id={ id && id } className="text-3xl font-bold mb-5 text-indigo-500">
        { children }
    </h1>
  )
}

const Heading = ({ children, type = "h1", ...properties }) => {
  const HeadingVariants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  }
  const Type = HeadingVariants[type] ? HeadingVariants[type] : 'h1'
  return (
    <Type className={properties.className}>
      {children}
    </Type>
  )
}

export default Heading;
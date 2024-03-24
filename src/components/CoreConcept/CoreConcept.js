import "./CoreConcept.css";

function CoreConcept({
  title = "Title",
  description = "Description...",
  image,
}) {
  // I like validation...
  if (!image) {
    return null;
  }

  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;

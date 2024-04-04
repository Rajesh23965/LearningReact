export default function FirstScientist() {
  const physicists = scientists.filter(
    (person) => person.profession === "physicist"
  );

  const scientistsList = scientists.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "} known htmlFor {person.accomplishment}
      </p>
    </li>
  ));
  return <ul className={styles.arrdata}>{scientistsList}</ul>;
}

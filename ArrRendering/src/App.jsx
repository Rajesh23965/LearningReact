import DataDisplay from "./components/DataDisplay";
export default function RenderingLists() {
  return (
    <>
      {/* <ul className={styles.details}>
        {people.map((person) => (
          <li key={person.id}>
            <strong>Name:</strong> {person.name}, <strong>Profession:</strong>{" "}
            {person.profession}
          </li>
        ))}
      </ul> */}

      <DataDisplay />
    </>
  );
}

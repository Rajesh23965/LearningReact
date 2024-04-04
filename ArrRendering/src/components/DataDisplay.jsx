// import React from "react";
import { scientists } from "./ArrData";
import { getImageUrl } from "./utils";
import styles from "./ArrData.module.css";
export default function DataDisplay() {
  // const physicists = scientists.filter(
  //   (person) => person.profession === "physicist"
  // );
  const styleForAll = (profession) => {
    switch (profession) {
      case "physicist":
        return styles.physicist;
      case "chemist":
        return styles.chemist;
      case "Mathematics":
        return styles.mathematician;
      default:
        return styles.astrophysicist;
    }
  };

  const chemists = scientists.filter(
    (person) => person.profession === "chemist"
  );
  const everyoneElse = scientists.filter(
    (person) => person.profession != "chemist"
  );

  return (
    <article>
      <h1>Chemists</h1>
      <ul>
        {chemists.map((person) => (
          <li key={scientists.id} className={styleForAll(person.profession)}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "} known htmlFor{" "}
              {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h2>Everyone Other Scientists</h2>
      <ul>
        {everyoneElse.map((person) => (
          <li key={person.id} className={styleForAll(person.profession)}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "} known htmlFor{" "}
              {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

/*
  const scientistsList = scientists.map((person) => (
    <li key={scientists.id} className={styleForAll(person.profession)}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "} known htmlFor {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{scientistsList}</ul>;
  */

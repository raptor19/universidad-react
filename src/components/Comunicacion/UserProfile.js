import React, { useContext } from "react";
import AlbumOfTheWeek from "./Context/AlbumContext";

const UserProfile = () => {
  const { title, artist, genre } = useContext(AlbumOfTheWeek);
  return (
    <section>
      <h1>Hi I'm Osman and this is my album of the week:</h1>
      <dl>
        <dt>Title:</dt>
        <dd>{title}</dd>
        <dt>Artist:</dt>
        <dd>{artist}</dd>
        <dt>Genre:</dt>
        <dd>{genre}</dd>
      </dl>
    </section>
  );
};
export default UserProfile;

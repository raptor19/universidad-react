import React from "react";
import Events from './Events';

class MetodoComponentDidMount extends React.Component {
  state = {
    photos: [],
  };
  componentDidMount() {
    // Agregar Solicitudes Http
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((photos) => this.setState({ photos }));
    // Agregar Event Listeners o escuchadores de eventos
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        {photos.map((photo) => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
        <Events/>
      </div>
    );
  }
}
export default MetodoComponentDidMount;

import React from "react";
import faker from "faker";
import Chat from "./Chat";

class MetodogetSnapshotBeforeUpdate extends React.Component {
  state = {
    list: [],
  };

  addMessage = () => {
    // crear mensaje
    const message = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      message: faker.hacker.phrase(),
    };
    console.log(message);

    // agregarlo a la lista
    this.setState(
      (prevState) => ({ list: [...prevState.list, message] }),
      () => {
        console.log(this.state.list);
      }
    );
  };

  render() {
    return (
      <div>
        <h3>{this.state.text}</h3>
        <Chat list={this.state.list} />
        <button onClick={this.addMessage}>Add Message</button>
      </div>
    );
  }
}
export default MetodogetSnapshotBeforeUpdate;

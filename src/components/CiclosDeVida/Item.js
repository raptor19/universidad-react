import React from "react";

const itemStyles = {
  padding: "1em",
  borderBottom: "1px solid #CCC",
  marginTop: "0.4em",
};

class Item extends React.PureComponent {
  //shouldComponentUpdate(nextProps, nextState) {
    //if (nextProps.item.id !== this.props.item.id) {
      //return true;
    //}

    //return false;
  //}

  handleClick = () => {
    this.props.onRemove(this.props.item);
  };
  render() {
    const { item } = this.props;
    return (
      <div style={itemStyles}>
        <button onClick={this.handleClick}>x</button>
        <span>{item.text}</span>
      </div>
    );
  }
}
export default Item;

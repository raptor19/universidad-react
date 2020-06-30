import React from "react";

class Select extends React.Component {
  
    state = {
        tech: 'React'
    }

    handleChange = (e) => {
        this.setState({
            tech: e.target.value
        })
    }

    render() {
    return <div>
        <h2>Etiqueta Select</h2>{this.state.tech}
        <form>
            <select name="framework" id="selectFramework" onChange={this.handleChange}>
                <option value="Angular">Angular</option>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
                <option value="Vanilla">Vanilla</option>
            </select>
        </form>
    </div>;
  }
}

export default Select;

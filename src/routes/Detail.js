import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    const character = location.state;

    if (character) {
      return (
        <div>
          <h2>{character.name}</h2>
          <img src={character.img}></img>
          <div>
            <span>ID : {character.id}</span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;

import React from "react";
import Character from "../components/Character";
import axios from "axios";

class Home extends React.Component {
  state = {
    isLoading: true,
    characterLists: [],
  };

  getGames = async () => {
    // const node = await IPFS.create();
    // const stream = node.cat('QmXth4b16SP5x2F2aSXRiZfCXzLMm9AdDDRPqq9jRcgeXB')
    // const data =
    const { data } = await axios.get(
      "https://ipfs.io/ipfs/QmYi6qHo886KsRGZG6URXdUv5bnkuEhBNbo1VyxFcTEg3V?filename=data.json"
    );
    console.log(data);
    this.setState({ characterLists: data, isLoading: false });
  };

  componentDidMount() {
    this.getGames();
  }

  render() {
    const { isLoading, characterLists } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="characters">
            {characterLists.map((character) => {
              return (
                <Character
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  img={character.image}
                ></Character>
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;

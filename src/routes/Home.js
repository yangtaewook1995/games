import React from "react";
// import IPFS from "IPFS";
import axios from "axios";

class Home extends React.Component {
  state = {
    isLoading: true,
    data: [],
  };

  getGames = async () => {
    // const node = await IPFS.create();
    // const stream = node.cat('QmXth4b16SP5x2F2aSXRiZfCXzLMm9AdDDRPqq9jRcgeXB')
    // const data =
    const { data } = await axios.get(
      "https://ipfs.io/ipfs/QmZZXfrmNAtBFrDTvDaPWMEtMnTaVGeoXrdXakyokAiPja/wilson.json"
    );
    console.log(data);
    this.setState({ data: data, isLoading: false });
  };

  componentDidMount() {
    this.getGames();
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>
            <span>{data.name}</span>
          </div>
        )}
      </section>
    );
  }
}

export default Home;

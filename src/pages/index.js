import React from "react";
import styles from "./index.module.css";
import coronaVirus from "../images/coronavirus2.jpg";
import { Cards, Charts, CountryPicker } from "../components";
import { fetchData } from "../api";

class Home extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  onHandleCountryChange = async (country) => {
    const fetchedCountrySelected = await fetchData(country);
    this.setState({ data: fetchedCountrySelected, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container} id="home">
        <img className={styles.image} src={coronaVirus} alt="corona" />
        <Cards data={data} />
        <CountryPicker onHandleCountryChange={this.onHandleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default Home;

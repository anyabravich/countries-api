import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { ALL_COUNTRIES } from "../config";

export const Home = ({ setCountries, countries }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => setCountries(data))
        .finally(() => {
          setIsLoad(false);
        });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {isLoad ? (
          <p>Loading countries...</p>
        ) : (
          filteredCountries.map((country) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: "Population",
                  description: country.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: country.region,
                },
                {
                  title: "Capital",
                  description: country.capital,
                },
              ],
            };
            return (
              <Card
                key={country.name}
                onClick={() => navigate(`/country/${country.name}`)}
                {...countryInfo}
              />
            );
          })
        )}
      </List>
    </>
  );
};

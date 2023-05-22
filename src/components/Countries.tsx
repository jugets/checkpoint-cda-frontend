import { useQuery } from "@apollo/client";
import { IContinent, ICountry } from "../interfaces";
import { getContinents, getCountries } from "../graphql/queries";
import { Link, useParams } from "react-router-dom";

export default function Countries() {

    let {continentCode} = useParams();
    const { loading, data } = useQuery<{ countries: ICountry[] }>(
        getCountries, { variables: { continentCode }}
    );

    if (loading) return (<div>Loading...</div>);
    const countries = data ? data.countries : null;

    return (
        <div>
          <main>
            <ul>
                {countries?.map((country) => (
                <li key={country.code}>
                    <Link to={country.code} relative="path" key={country.code}>{country.emoji}{country.name}</Link>
                </li>
                ))}
            </ul>
          </main>
        </div>
      );
}
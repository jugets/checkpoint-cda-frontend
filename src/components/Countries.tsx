import { useQuery } from "@apollo/client";
import { ICountry } from "../interfaces";
import { getCountries } from "../graphql/queries";
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
          <main className="countries">
            <h1>Countries</h1>
            <ul>
                {countries?.map((country) => (
                <li key={country.code}>
                    <p>{country.emoji}</p>
                    <Link to={country.code} relative="path" key={country.code}>{country.name}</Link>
                </li>
                ))}
            </ul>
          </main>
        </div>
      );
}
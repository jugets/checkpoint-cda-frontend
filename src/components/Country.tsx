import { useQuery } from "@apollo/client";
import { ICountry } from "../interfaces";
import { getCountries, getCountry } from "../graphql/queries";
import { Link, useParams } from "react-router-dom";

export default function Country() {

    let { countryCode } = useParams();
    const { loading, data } = useQuery<{ country: ICountry }>(
        getCountry, { variables: {"code": `${countryCode}`}}
    );
    console.log(countryCode);
    if (loading) return (<div>Loading...</div>);
    const country = data ? data.country : null;

    return (
        <div>
          <main className="country">
            <h1>{country?.name}</h1>
            <div>{country?.emoji}</div>
            <div>Currency: {country?.currency}</div>
            <div>Capital: {country?.capital}</div>
          </main>
        </div>
      );
}
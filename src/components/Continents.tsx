import { useQuery } from "@apollo/client";
import { IContinent } from "../interfaces";
import { getContinents } from "../graphql/queries";
import { Link } from "react-router-dom";

export default function Continents() {
    const { loading, data } = useQuery<{ continents: IContinent[] }>(
        getContinents
    );


    if (loading) return (<div>Loading...</div>);
    const continents = data ? data.continents : null;

    return (
        <div>
          <main>
            <ul>
                {continents?.map((continent) => (
                <li>
                    <Link itemProp={continent.code} to={continent.code} relative="path">{continent.name}</Link>
                </li>
                ))}
            </ul>
          </main>
        </div>
      );
}
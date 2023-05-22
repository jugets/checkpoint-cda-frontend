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
            <section>
              {continents?.map((continent) => {
                return (
                  <Link to={continent.code}/>
                );
              })}
            </section>
            <ul>
                {continents?.map((continent) => (
                <li key={continent.code}>
                    <Link to={continent.code} relative="path">{continent.name}</Link>
                </li>
                ))}
            </ul>
          </main>
        </div>
      );
}
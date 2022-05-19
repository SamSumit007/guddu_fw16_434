import { useDebouncedCallback } from "@react-hookz/web";
import { useState } from "react";
import { useFetch } from "../fetchHooks/useFetch";
import styles from './Country.module.css'

type All = {
  country: string;
  city: string;
};

export const SearchCountry = () => {
  const [country, setcountry] = useState("");
  const url = "http://localhost:8080/Country";
  const { data, isError, isLoading } = useFetch<All>(url, {
    _page: 1,
    q: country || "india",
    _limit: 5,
  });

  const handleInp = useDebouncedCallback(
    (e) => setcountry(e.target.value),
    [],
    1000,
    0
  );
  return (
    <div>
      <h1>Search Country</h1>
      <input type="text" onChange={handleInp} placeholder="Enter the Country" />
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>Can't found</h1>
        ) : (
          data.map((elem) => {
            return (
              <p className={styles.country} key={elem.city}>
                {elem.country}({elem.city})
              </p>
            )
          })
        )}
      </div>
    </div>
  );
};

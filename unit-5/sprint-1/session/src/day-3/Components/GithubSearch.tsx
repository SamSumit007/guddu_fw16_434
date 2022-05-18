import React, { useState } from "react";
import { useFetch } from "./useFetch";
import { useDebouncedCallback } from "@react-hookz/web";
const url = "https://api.github.com/search/users";

type User = {
  id: string;
  avatar_url: string;
  login: string;
};
export const GithubSearch = () => {
  const [text, settext] = useState("");
  const [Data, setdata] = useState<User[]>([]);

  const { isLoading, data, isError } = useFetch<User>(url, { per_page: 5, q: text || "masai-oss"});
 
  const handleInp = useDebouncedCallback((e)=>settext(e.target.value),[],1000,0)
  return (
    <div>
      <h1>GithubSearch</h1>
      <input
        type="text"
        onChange={handleInp}
      />
      <button
      // onClick={() =>
      // {
      //   axios
      //     .get(url, {
      //       params: {
      //         per_page: 5,
      //         q: text,
      //       },
      //     })
      //     .then(({ data }) => {
      //       setdata(data.items);
      //       console.log(data.items);
      //     });
      // }
      // }
      >
        search
      </button>

      <div>
        {isLoading ? <h1>Loading....</h1> : isError ? <h1>Something went wrong</h1> : data.map((item) => (
          <div key={item.id}>
            {item.login} ~{" "}
            <img height={200} width={200} src={item.avatar_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

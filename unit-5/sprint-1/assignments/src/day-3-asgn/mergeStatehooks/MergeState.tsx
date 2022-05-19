import { useMergeState } from "./useMergeState";

export const MergeState = () => {
  const initState = {
    username: "",
    email: "",
    password: "",
  };
  const [state, setState] = useMergeState(initState);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <h1>Merge State</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="text"
          name="username"
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
        <br />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
        <br />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { getProfile, getReqData } from "../redux/action";
import styles from "./styles/Dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Repocard } from "./Repocard";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [gituser, setgituser] = useState("");
  const dispatch = useDispatch();
  const { gitRepo, isLoadding, isError, token, user, profileData } =
    useSelector((state) => state);
  // console.log(gitRepo,isLoadding,isError,token,user)
  useEffect(() => {
    getProfile(dispatch, user, token);
  }, [dispatch]);

  const handlegituser = () => {
    // console.log(gituser);
    getReqData(dispatch, gituser);
  };
if (!token) return <h3 className={styles.heading}>Please click on <Link to={"/login"} >Login</Link> to access dashboard</h3>
  return (
    <>
      {!profileData ? (
        <h1>Loading.....</h1>
      ) : (
        <div className={styles.outer}>
          <div className={styles.profile}>
            <h1>My profile:</h1>
            <h3>Name: {profileData.name}</h3>
            <h3>Email: {profileData.email}</h3>
            <h3>Mobile: {profileData.mobile}</h3>
            <h3>Description: {profileData.description}</h3>
          </div>
          <div className={styles.git}>
            <h1>Search Github Users</h1>
            <input
              type="search"
              placeholder="Search user"
              className={styles.search}
              value={gituser}
              onChange={(e) => setgituser(e.target.value)}
            />
            <button onClick={handlegituser} className={styles.button}>
              Search
            </button>
            {isLoadding ? (
              <h1>Loading....</h1>
            ) : isError ? (
              <h1>Error Occured while Loading!</h1>
            ) : (
              <div>
                {gitRepo.map((elem) => (
                  <Repocard key={elem.id} {...elem} />
                ))}
              </div>
            )}
            <div id={styles.buttonDiv}><button>Previous</button>
            <button>NEXT</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import { useEffect, useState } from "react";

export const UseEffectApi = () => {
  const [userss, setUserss] = useState([]);
  
  const getUsers = async () => {
    const resp = await fetch('https:api.github.com/users');
    // console.log(resp);
    // const data =  await resp.json();
    setUserss(await resp.json());

  }

  useEffect(() => {
    getUsers();

  }, [])

  return (
    <>
      <h1>List of Github users</h1>
      <div className="container-fluid mt-5 ">
        <div className="row text-center">

          {
            userss.map((currEle) => {
              return (

                <div className="col-10 col-md-4 mt-5" key={currEle.id}>
                  <div className="card">
                    <div className="card-header">
                      <div className="image">
                        <img src={currEle.avatar_url} alt="Profile" />
                      </div>
                      <div>
                        <h4>{currEle.login}</h4>
                        <span className="textLeft">{currEle.type}</span>
                      </div>
                    </div>
                    <div className="stats">
                      <div>
                        <span className="articles">Articles</span>
                        <span className="number">38</span>
                      </div>
                      <div>
                        <span className="followers">Followers</span>
                        <span className="number">980</span>
                      </div>
                      <div>
                        <span className="rating">Rating</span>
                        <span className="number">{8.9}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};





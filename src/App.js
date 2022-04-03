import { useState } from "react";
import * as React from 'react';
import "./App.css"

//Axios for API
import axios from "axios";

//Imported components 
import SearchBar from "./components/SearchBar/SearchBar";
import StarOne from "./components/StarUsers/Eddie.js";
import StarTwo from "./components/StarUsers/Monica.js";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//MaterialUi components 
import Cards from "./components/Card/Card"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function App() {
  let [allUsers, setAllUsers] = useState([]);
  let [displayNumber, setDisplayNumber] = useState(false);
  let [error, setError] = useState(false);
  let [gettingUsers, setGettingUsers] = useState(false);
  let [showStars, setShowStars] = useState(true);
  let [page, setPage] = useState(1);
  

  //GET request to github api
  async function getUserData(userInput) {   //https://medium.com/@stubailo/how-to-call-a-graphql-server-with-axios-337a94ad6cf9
    console.log(userInput)
    setGettingUsers(true)   //when true, the loading bar will appear
    setDisplayNumber(true)    //when true, the number of users will appear
    try {
      const data = await axios({
        url: "https://api.github.com/graphql",
        method: 'post',
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_API_KEY}`
          },
            data: {
              query: `query($searchQuery:String!){
                      search(first: 30, type: USER, query: $searchQuery) {
                        userCount
                        edges {
                          node {
                            ... on User {
                              id
                              email
                              name
                              url
                              avatarUrl
                              bio
                              login
                              location
                              isGitHubStar
                              following {
                                totalCount
                              }
                              followers {
                                totalCount
                              }
                              pullRequests {
                                totalCount
                              }
                              repositories {
                                totalCount
                              }
                            }
                          }
                        }
                      }
                    }`,
                  variables: {
                    searchQuery: `${userInput}`  //https://github.community/t/graphql-search-query-format/13784/6
                  }
                }},
              )
            .then(res => {
              setGettingUsers(false)    //when false, will hide the loading component 
              setAllUsers(res.data.data.search.edges.map(user => user.node))  //this will set allUsers to an array of objects of users matching the userInput
              setShowStars(false) // when false, will hide the start users 
            }
          ) 
        }catch (error) {
          console.log(error)  
          setError(true)   //if there's an error, it'll display an h1 below
        }
      }
  //will determine the page number and slice elements for 5 per page depending on first and last index
  const startIndex = (page - 1) * 6
  const selectedUsers = allUsers.slice(startIndex, startIndex + 6)

  return (
    <div>
      <div className="search-area">
        <Header />
          {error && <h1>Oops, something went wrong!</h1>}
          <section>
            <h1>Search your favorite Github user</h1>
          </section>
          <SearchBar getUserData={getUserData}  />
    
        {gettingUsers&&             // loading bar
        <Box sx={{ display: 'flex',  mx: "auto", width: 200}}>      
            <CircularProgress />
        </Box>
      }
      </div>
    {!showStars?     //if we're not showing the github stars, display number of users and the cards
      (<div className="user-results">
          {displayNumber&& <h3>Number of users: {allUsers.length}</h3>}

          {allUsers.length === 0?   // if there are no users, display the no user div
            <div className="no-user">
              <h1>Oops! no users under that username :( </h1>
              <img src="./images/nouser.jpg" alt="no user"/>
            </div>
            :         // else, if we have users, display the cards
          <div className="all-cards">
            {selectedUsers?.map(user =>     //maps through the allUsers array and returns each user's info on a card component
              <Cards
                user={user} 
                key={user.id} 
                page={page}/>
              )
            }    
          </div>
          }
        {                           //materialUi pagination component 
            <Stack spacing={5} 
              sx={{ minWidth: 100, backgroundColor: "white", mx: "auto", 
                width: "auto", justifyContent: "center", display:"flex", 
                alignItems:"center", minHeight: 60 }
                }>     
              <Pagination 
                count={allUsers.length/6} 
                defaultPage={page}
                hideNextButton={true}
                hidePrevButton={true}
                color="primary" 
                onChange={(event, value) => setPage(value)}
              />
            </Stack>
          }
      </div>
      )
      :                     //else display the github stars 
      (
        <div className="github-stars">
          <h4>
            <img src="./images/star.png" className="star" alt="star" />
              Featured Github Stars 
            <img src="./images/star.png" className="star" alt="star" />
          </h4>
          <section className="single-stars">
            <StarOne />
            <StarTwo />
          </section>
        </div>
      )
    }
    <Footer />
    </div>
  );
}

export default App;

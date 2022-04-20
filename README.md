

# GitHub User Search
https://user-images.githubusercontent.com/91508647/161445857-59fa6dc0-c01b-4a2b-822d-b6b112c8fad5.mov
* Live project: https://adorable-vacherin-c76ead.netlify.app/ </br>

## Overview
### Description

Github Search is a tool that allows users to search through Github and find its users. Users can see a paginated result of users, along with the count of users searched.

## Plan
● My first thought was to develop a plan. I asked myself the following questions; How will I accomplish this? what tools do I need? which API do I need? What is the end goal? what requirements do I need to meet? which technologies do I need to use? </br>
● After answering the questions above, I decided to follow the plan below:
  - List the requirements
  - List the end goals
  - Decide which tools/technologies do you need
  - Research 
  - Build
  - Check the requirements
  - If requirements are met, test the app with a user. If requirements are not met, go back to the research step
  - If user successfully navigates trough the app, and is able to accomplish the end goals, move on to design. 
  - Design with user in mind.
  - Test
  - Check requirements 
  - Check end goal
  - If end goal and requirements are met, host it
  - Test it 
  - Submit

## Approach #1 
● I used the Github use search API  https://api.github.com/search/users?q=example </br>
● This approach successully retrieved the information of the exact user that was searched. I was able to retrieve the information needed. </br>
● THE PROBLEM: I could not fetch more than one user at a time. </br>
● MY APPROACH: I wrote different async functions to try and fetch other users. However, the Github API has different endpoints and I could not make it work. I searched online; read the Github documentation, read articles, looked through stackoverflow, and looked at Youtube videos. However, it seemed as people were only using this API to retrieve one user at a time. </br>

## Approach #2 
● I searched online; read the Github documentation, read articles, looked through stackoverflow, and looked at Youtube videos all over AGAIN. I searched for tools that would allow me to receive all API data in one go. I came accross graphQL, which was also mentioned in the project. </br> 
● THE PROBLEM: I had never worked with GraphQl before.  </br>
● MY APPROACH: I searched online; read the Github documentation, read the GraphQl documentation, read articles, looked through stackoverflow, and looked at Youtube videos. </br>
● I used GraphiQl to make so queries and learn about GraphQl. </br>
![Screen Shot 2022-03-31 at 5 14 40 PM](https://user-images.githubusercontent.com/91508647/161444685-be8dd1e1-3895-4cca-8ae9-1ea3591175fe.png)

## Approach #3 
● I searched online; read the Github documentation, read articles, looked through stackoverflow, and looked at Youtube videos all over AGAIN.</br>
● I made more queries with GraphiQl, read documentation, and looked through stackOverflow. I saw what other users were doing for different graphql queries for one user search and decided to apply it to my own.  </br>
● After much practice, and broken code, I was able to fetch all the use data at once. </br>
● Once the data was fetched, it was a matter of placing the data where I wanted it.</br>


## Final Steps
● I quickly designed a wireframe of what I wanted my app to look like.</br>
● I set the colors, and components I wanted to have.</br>
● I started designing and organizing the data. </br>
● I tested the design with a user. </br>
● I modified the design based on user feedback. </br>
● I cleaned up the code. </br>
● I hosted the app. </br>

## Final Thoughts

● Highlight something in your project that you thought was especially interesting or
significant to your overall implementation. </br>
    -What was significantly important to my overall implementation was research. If I had not read the documentation several times, watched videos, read articles, and looked through stackoverflow, I don't think I would have been able to accomplish the task. </br>
  
● Tell us about what you are most pleased or proud of with your implementation.</br>
   -I'm most proud of learning how to use GraphQl. I had heard of it before, but did not know how to use. I'm proud of the research I did, and how much I struggled. Without the struggle, I wouldn't have been able to be proud of this project. Lastly, I'm very proud of the design. My goal was to give it a Yellowbook theme. I believe I was able to accomplish that. </br>
   
● Given more time, what would the next feature or improvement you would like to
add to your project?</br>
  -If given more time, I would like to improve on the design of the project. I believe it accomplishes the theme I had in mind, however, it does not meet all accessibility requirements. Also, it could be improved in the responsiveness aspect. Something I would add to my project is a category of recently searched users. This catergory would include Github users that the current app is user has searched. Additionally, I would add an error page and a skeleton. </br>

### Users can: 
● Search for users and see a paginated list of results</br>
● Navigate through the next and previous pages of the paginated results</br>
● See the total count of search results</br>
● See notable information for each search result, such as the description, star/follower
count, profile pictures, etc.</br>
● Select a search result and be taken to the applicable page on github.com API</br>



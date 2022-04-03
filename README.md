

# JavaScript Exercise: GitHub User Search

* Please see below for an extensive description of the project's instructions.</br>
* URL to hosted project: https://adorable-vacherin-c76ead.netlify.app/ </br>

## PREVIEW: 

https://user-images.githubusercontent.com/91508647/161445857-59fa6dc0-c01b-4a2b-822d-b6b112c8fad5.mov



The goal of this project was to create a Github user search that would show a paginated result of users, along with the count of users searched. Below i the approach I used:

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





## Instructions 
The goal of this exercise is to create an app that re-implements a portion of GitHub's Search
feature, the user search, using their public API. Please share a working deployed version of the
exercise as well as the github repo.
The purpose of this code exercise is for us to see a little taste of who you are as a developer.
Don't worry about 'over-engineering' your solution, and don't be afraid to add additional features
(or playful flourishes!), as long as what you build is something you're proud of.
We know that there will be things that you wished you could add if you had more time, that's
part of the goal! We learn as much about you from what you choose not to include as we do
from what you include!
Feel free to use third party libraries or other code that you did not write to help you implement
your exercise. However, please make sure that it is obvious which code you wrote and which
code you borrowed from somewhere else. Also, be sure there's enough of your own work to
give us an accurate impression of who you are.

## Setup
● Please use a modern JavaScript framework or library (Angular, React, Vue, SVELTE,
LitElement, etc.)</br>
● Use the latest version of the framework or library.</br>
● You may use any build system you wish, including any cli.</br>
● You may use any additional third-party libraries you see fit.</br>

## Rules
● The app should NOT require users of the application to provide GitHub permissions. </br>
● You should not fork or use an existing repo although starter kits and boilerplate apps are
allowed - consider using npx create scripts instead</br>
● If the project is copied, forked, or forged in any way, it is considered an automatic fail
from our review team.</br>
● In your projects README, please include details about the following:</br>
● Highlight something in your project that you thought was especially interesting or
significant to your overall implementation.</br>
● Tell us about what you are most pleased or proud of with your implementation.</br>
● Given more time, what would the next feature or improvement you would like to</br>
add to your project?

## Minimum Requirements
Use https://github.com/search as a reference for functionality, but feel free to change style,
behavior, and features as you see fit and time permitting. It is not necessary to match the actual
design of GitHub and we are not expecting a professional design. Focus on functionality and
code.

### As a user,
● I can search for users and see a paginated list of results</br>
● I can navigate through the next and previous pages of the paginated results</br>
● I see the total count of search results</br>
● I see notable information for each search result, such as the description, star/follower
count, profile pictures, etc.</br>
● I can select a search result and be taken to the applicable page on github.com API</br>
● The app should utilize GitHub's public API; either the v3 REST API or the v4 GraphQL version.</br>

Examples of the API call you'll likely need to make:</br>
Search
Documentation: https://developer.github.com/v3/search/  </br>
GET https://api.github.com/search/users?q=example


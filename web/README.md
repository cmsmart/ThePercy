# Problem

The Percy DeWolfe Memorial Mail Race is a 200 mile (321 km) international dog sled race run annually over a two to three day period in March. It has been running since 1981. The race follows the Yukon River along the historic mail route of legendary mail carrier Percy DeWolfe, between Dawson City, Yukon, to Eagle, Alaska. 

In 2007, the race organizers implemented a race tracking system that allows viewers to track the race online. This has been an important modernization of the race to maintain viewer engagement for an event that is run in a very remote environment. 

Consistent race tracking data has been gathered since 2012, but it is archived at the end of each race year and not further utilized. The Percy also has general race data dating back to 1981. The Percy would like to maintain and increase viewer interaction by providing access to the race data in an engaging manner. 

# Solution

Create a dedicated micro-site to sit alongside the Percy De Wolfe website which hosts an interactive dashboard of live and historical race data. Through utilizing data visualisation techniques, we can increase access to and engagement with the race. 

  ### Key components: 
  - A live tracking map that has already been developed will be integrated in the site (initially as an iframe)
  - Display live statistics for the current race.
  - A profile page for each race participant (musher) to display their results and allow both participants and viewers to compare various statistics.
  - Historical statistics to compare race time and competitors by various measures (most won, most participated, fastest times). 
  - Include links to main site and existing social media accounts to further increase engagement.

## Development Process
1. Create react app
2. Remove unncessary default react styling and elements
3. Setup top level components
4. Setup react-router for each page
5. Add gitignore
6. Created Table component

## Local Setup
- run `yarn install`

## Data and APIs

There are two primary sources of race data. 
1. [The Percy DeWolfe Website](https://thepercy.com) - race volunteers and administators manage the content on this site, in particular adding data about race results, run times, mushers etc. Since 2012 more extensive race data has been collected which is when this site was built. However, the race has been running since 1981 and this less comprehnsive data is also available from the website. As the website administator, Cholena was able to set up a couple of APIs that pushed out this data for project use.
2. [The Percy race tracker](http://thepercy.com/tracker/) - Mammoth Mapping aka John Bryant and Cholena have been running a race-tracking service for the Percy since about 2008. The mushers carry a satellite tracking unit that transmits their position back in real time to an exteral api, and this data is processed by and presented on a tracking map app. All the data related to this has also been recorded for 5+ years. We needed to create an API that was able to output this data for us to integrate it into the map.


## Node, Express and Postgres

As all the race tracking data is stored in a postgres database, we needed to set up a postgres/node/express instance to create the API. We utilized [this resource](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.WmguvnXXY8o) to help with the different setup. The db admin assisted with writing the appropriate queries to extract the relevant data from the database.


## Hosting

The client intends to amalgamate their hosting into one location. The current server for the Percy website has been a little erratic in serving up the api, and with this new tracking website, the tracking page, and the tracking data api, the intention before the 2018 race in March is to find a single home for all elements.

For the purposes of this project, the tracking website is hosted on Netlify - the main issues being with https access and CORS.

The node/express/server is hosted on an instance on Digital Ocean. Again, the main issues being CORS and https access (because the express server defaults to port 3000 and to enable a certificate like 'Lets Encrypt' it requires it to default to port 80).

Due to the fact that this is all going to move to one home, the server arrangements are temporary and will be changed post-project.


## Future developments

* Move the website, tracking app and tracking page to one server location.
* Integrate the map tracking page properly into the tracking React app.
* Bedazzle with more representations of data.

## Project Documentation

## Presentation Slides
[https://docs.google.com/presentation/d/1M4m8cykdXWLeh6CoKYhBm3RhfBV7VekAhCVS2FYG-qU/edit?usp=sharing]

## Wireframes
[https://www.figma.com/file/RMDcBB16ZOicgEoTeBBYT8Hw/The-Percy-Initial-wireframes]
![Wireframe example](/src/assets/images/ThePercyWireframes.png)

## ERD
![Erd image](/src/assets/images/ERD.png)

## Trello
[https://trello.com/invite/b/9YUF6HnX/125e66203aef3e933309a3166c9fd20d/the-percy]
![First screen shot of Trello](/src/assets/images/TrelloScreenShot1.png)
![Second screen shot of Trello](/src/assets/images/TrelloScreenShot2.png)

### Teamwork
Weekly team meetings were held, with an agile review of the overarching project criteria. During each of these meetings, notes were taken and tasks were allocated to team members.
Initially these tasks were allocated in a google doc table, but as the project progressed, the documentation of this moved onto Trello as it was easier to move and alter tasks.
Daily catch ups were held in class, which sometimes were also used to implement agile processes. These catch ups were often used to brainstorm solutions to task roadblocks.
During hours outside of the classroom, regular communication was continued via Slack.
Weekly team catch ups were held with the class teachers to determine whether the project was on track, and to obtain some wise advice.

### Client Communication
Two physical client meetings were over the project duration. These meetings were very productive due to the instantaneous feedback that was provided. Minutes were taken on Google Docs.
In addition to the physical client meetings, regular email correspondence was had.
Currently, a client survey has been sent and we are waiting on the response.

### Documentation of Minutes
[https://docs.google.com/document/d/1P7RehDXEWnG2iMyqDF69fCR5f9-p8gCJZ5jOTux2-Rc/edit?usp=sharing]

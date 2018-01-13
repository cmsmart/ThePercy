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
# TravelApp

This is the test project, written with Angular, that gives user an ability to see an actual flights.

## Brief outline

I used Angular version 13.0.4 and Atomic Design Architecture patterns to create application. I divided components into 'chemical structures' (Atoms, Molecules, Organisms, Templates and Pages).Tree of components use Smart-Dumb Architecture patterns as well. To create well-styled UI elements I used Angular Material and custom elements styled with SCSS. Components which use same methods and properties ask for dependencies from App Service which is available in entire app. Travel app support routing using Angular Router module. Also I used HTTP Client Module to fetch an actual Flights data from RapidAPI. API respond is handled with Observables, which I used to publish data to subscribers. To work with Date structures I used moment.js library. Application is fully responsive with help of BreakpointObserver and can be used in all devices. 

## Spent time

1. Components structure - 4 hours;
2. Components styling - 3 hours;
3. Providing "Smart" components' functionality - 12 hours; 
4. Choose API, set API connection and respond handling - 7 hours;
5. Create appropriate types,interfaces,classes,enums - 4 hours;
6. Debugging - 3 hours;

## Issues and limitations of the solution
Issues and limitations

1. API respond was very complex, so user can see only first ten flights of his flight request.
2. Now only flight booking is available.
3. Social media and header links are empty.
4. The app has a limit of available flight origins and destinations.
5. Each destination data text is lorem ipsum.
6. Travel class, airlines list and nearby airports don't have effect on the search result.

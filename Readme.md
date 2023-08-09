Assignment of Ep1 

-> Created the basic program using html
-> Created the same element using java script
-> Created the same element using React
    Firstly we have to bring to our project I have done it through using react cdn links
    Now we can create an using React.createElement("h1",{},"")
    it contains three attributes 
    first one is the element
    second one is about the element attributes which we can send them as key-value pairs
    third one is the textcontent of element
-> create the Root element using ReactDOM.createRoot()
    In createroot we can bring the element in which we can use our React
    I brought the div element by using its id

-> Root.render(creted-elememt)
   render helps to convert our js objects to html tags (which are created using react)  which browser can undestands and places in html page 
->React can be applied for a particular element in a web page
->React is java script library which is written by meta developers
->React helps to fasten our web page


What is Emmet ?
-> Emmet is a plug in for texteditors(eg : VScode) which greatly improve the workflow of html and css
eg :- !+enter gives u the skeleton of HTML
       h1{"Himatheja"}+ enter gives u the h1 element with text content Himatheja (For text content elements)
       ui>li gives u the unordered list in that list
       ui>li*3>span we can multiplt also 
       ui>{li{$@}}*3>a  gives with numbers in the list and a element in list
       ui>li{$@-}*15 gives with numbers in decreasing order from 15
       div#main#main-led.container.reposite = gives div element containing id = "main-led" element contains one id so 2nd will override the first but we can have different classes so no pronblem

Difference between framework and libraries?

Libraries provides the developer with pre-defined code which contains with classes and functions we can call libraried to our code
 Frame work is like base where we can buils our applications
 By using libraries we can control our code 
 Framework controls the flow ang calls our code
 If we build a house from scratch we can have style our rooms in our way it is library
 if we buy a house which is already built we cant change the style of rooms which is like frame work

 What is cdn why we use it?
 ->content delivery networks,It helps to fasten our code using cdn links we can bring the libraries which we can use into our code
  it helps to fasten our website , It can handle large amounts of traffic

  -> React is known as react bcoz if the user changes the events the web page has to react fastly so it is react it is js library using react we can develop front-end devlopment it is front-enf frame-work

  ->React is used to create views ReactDOM is used to render the Dom elements Dom helps to put th object into the nodes 

  ->In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.
  ->react.development.js - More developer friendly, readable, will take more size.
    react.production.js - Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency.

-> When aync is used fetching of script happens parllel to the html parsing and once fetching is done the html parsing stops and then execution script occurs 
-> when defer is used fetching will done parllel to html parsing and the execution will be done after the total html parsing is done
  these sync and defer are boolean attributes

  What is NPM?
  -> It contains all packages It manages the packages
  -> npm manages dependecies
  ->npm install dependencies to our project
  ->npm is installed through Node.js
  ->All npm packages are defined in package.json

  What is parcel or webpack? why do we need it?
  -> these are npm package bundlers which helps to make our project faster these help the code to bundle and helps to perfectly work in production.These bundlers give several properties like make production fast helps to host in our local server caching compress the files code splitting...etc

  What is a .parcel-cache?
  -> It helps to fasten our development it will store the code of our project when we rebulids the project it doesn't have to check from the scratch

  What is npx?
  ->npx helps to execute our project or  host our project

  devdependencies vs dependencies?
  ->dependencies help to run the project while dev dependencies are used to develop and testing purpose but not used to run the project

  Treeshaking
  ->Removes the unwanted code it removes the functions and classes which are unused in bundle 

  What is HMR?
  ->HMR stands for Hot MOdule Replacement When a file changes saved we have to reload the application to see the changes However HMR makes easy with the changes it will gives the application changes without reloading ,While creating changes there will be a creation of hot updated file which is done by bundler the hot updated file is send to HMR server The HMR runtime will accept the requests from HMR server

  Parcel Feauturea :-
  ->Treeshaking
  ->HMR(Hot Module Replacement)
  ->caching : It will cache all the changes and by default stored in .parcel-cache .It cache changed files and rebuild in dist .It only rebuilds the changed files
  ->Dev server : Parcel’s builtin dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve. By default, it starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used. After Parcel starts, the location where the dev server is listening will be printed to the terminal.
  ->Image Optimization : The expensive thing in the web application is Image loading ehich will be optimized by parcel

  What is .gitignore?
  ->.gitignore is used for the files which we dont need in git these files can be regenerated so these files makes lots of memory so we dont need these git if we want while developing simple we can regenrate bcoz we have the package.json and package-lock.json
  ->The files which can be regenrated are add into .gitignore 

  Difference between package.json and package-lock.json?
  ->Package.json is to keep the track of the version of the packages whereas package-lock.json is to keep exact track of the version ,The package.json file can be changes the package-lock.json we dont have to change this

  why package.json file cant be changed?
  it should not be modified it is automatically generated where npm modifies node_modules tree or package.json

  What is node modules?is it important to pudh to git?
  ->Node modules provides a way to reuse the code it contains alla the pcakages which bundler needs it need not be pushed to git because we can regenarate using npm install

  What is dist folder?
  ->dist folder contains the minimized version of code

  Browsers list :- It is for in which browsers our application has to run
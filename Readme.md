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
# The Iron Yard Daily Project "Mars Rover Photo App"  

## A moderate-size ReactJS project  

### This project contains good examples of:  
- A well modularized React App
- inline styling, React-style (maybe over done)
- exporting/importing something other than a component (inlineStyles.js contains two exports)
- using {this.props.children} to render components inside a base-layout components
- fetching from an API in react using a dynamically generated URL with template literals and state (GetFormImage.js line 48)
- Different types of react components:  
.. 1. Statefull Components: "GetFormImage.js"   
.. 2. Stateless Functional Components: "GetImageButton.js", "ImageDisplay.js"  
.. 3. Presentational/Stateless Components: "Jumbotron.js", "Footer.js", "PageLayout.js"  

### Potentially Reusable Components:
1. "GetFormImage.js" contains a lot of code for the common task of rendering a form and storing user input, as well as fetching from an API and storing the response in state
2. "ImageDisplay.js" contains code for the common task of recieving via props a response from an API in a stateful form and rendering it dynamically.

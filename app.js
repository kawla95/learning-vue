// Vue is accessible from the script in index.html 
// createApp() is a method that creates a Vue app for us 
// it's invoked with an object, inside it will handle any events the user makes e.g., button click or handles component template that will be rendered
// this object represents a root component in view which in our case it is the "app" section of the webpage
 const app = Vue.createApp({
    // this is rendered inside app div in index.html 
    // template: '<h2> I am the template </h2>'

 })







 // How do we tell app that we want it to control only a certain of the webpage?
 // on "app" we get acess to a method called: Mount which tells app where in the DOM to mount this application 
 // below we passed a selector "#app" and that would tell view to take our app instance and mount it in the DOM where we have an element with the id of "app" found in index.html
 app.mount("#app")

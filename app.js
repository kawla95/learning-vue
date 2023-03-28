// Vue is accessible from the script in index.html 
// createApp() is a method that creates a Vue app for us 
// it's invoked with an object, inside it will handle any events the user makes e.g., button click or handles component template that will be rendered
// this object represents a root component in view which in our case it is the "app" section of the webpage
 const app = Vue.createApp({
// data function represents the application state
// returns an object which is accessabile in vue
   data() {
    return {
      url: 'http://www.netninja.dev',
      showBooks: true, 
     books: [
      {title: 'Killing Hemingway', author: 'Brian Meeks', img:'assets/1.jpeg', isFav: true },
      {title: 'Harry Potter and the Cursed Child', author: 'J.K. Rowling ', img:'assets/2.jpeg', isFav: false},
      {title: 'The Mind of a Leader', author: 'Kevin Anderson', img:'assets/3.png', isFav: true}
     ],
       x: 0,
       y: 0,
    }
    

   },

 // created component method by adding another property inside this component
 // any methods we want to run inside this component, we place it below
 // we must invoke the method
 
      methods: {   
// whenever the below function is called, it will update the following object 
            changeTitle(title) {
               //update the title
               //this : references the component itself, then it searches through properties 
               this.title = title    
            },
            toggleShowBooks() {
               //this method is triggered by changing showbooks property to false once a user click on "hide books" button
               // the "!" reverses the action
               this.showBooks = !this.showBooks 
            },
            //when an event is triggered, the first paramter and by default is event or "e"
            handleEvent(e) {
               // console logs an event once the cursor is on the box/ double click inside the box/ cursor leaves the box
               console.log(e, e.type)
            },
            handleMouseMove(e) {
               // offset is the cursor position, taken from the event parameter 
               this.x = e.offsetX
               this.y = e.offsetY
            },
            toggleFav(book) {
               book.isFav = !book.isFav

            }
   
      }
   
    })







 // How do we tell app that we want it to control only a certain of the webpage?
 // on "app" we get acess to a method called: Mount which tells app where in the DOM to mount this application 
 // below we passed a selector "#app" and that would tell view to take our app instance and mount it in the DOM where we have an element with the id of "app" found in index.html
 app.mount("#app")

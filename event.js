// A signal that something has happened
// The first letter of every word is uppercase. This is the convention that indicates that this event emitter is a class.
const EventEmitter = require('events')
// Here this emitter is an object
const emitter = new EventEmitter()

/* Register a listener */
// A listener is a function that will be called when that event is raised
// `on` is an alias for `addListener` method that we use more often.
// `on` method takes two arguments: 1) Name of the event  2) A callback function or Listener
emitter.on('messageLogged', function (){
    console.log('Listener called') // Listener called
})
/* Raise an event */
// We use `emit` method to raise an event.
// Emit basically means making a noise, or produce something - You are signaling that an event has happened
emitter.emit('messageLogged')
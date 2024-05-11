// A signal that something has happened
// The first letter of every word is uppercase. This is the convention that indicates that this event emitter is a class.
const EventEmitter = require('events')
// Here this emitter is an object
//const emitter = new EventEmitter()

/* Raise an event */
// We use `emit` method to raise an event.
// Emit basically means making a noise, or produce something - You are signaling that an event has happened
// The second argument is called event argument
// emitter.emit('messageLogged', {id: 1, url: 'https://'})

/* Raise: logging (data: message) */
// emitter.emit('messageLogged', {id: 2, url: 'https://'})

const Logger = require('./logger')
const logger = new Logger()

/* Register a listener */
// A listener is a function that will be called when that event is raised
// `on` is an alias for `addListener` method that we use more often.
// `on` method takes two arguments: 1) Name of the event  2) A callback function or Listener
// The listener can also receive the event argument which you can call it anything such as arg, e, or eventArg
// We can use arrow function instead of the function keyword
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg) // message // Listener called { id: 1, url: 'https://' }

})

logger.log('message') // message // So, the event listener was not called because here we are working with two different app emitters

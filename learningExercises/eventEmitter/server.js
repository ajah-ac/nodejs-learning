import EventEmitter from "node:events";
const eventEmitter=new EventEmitter()
eventEmitter.on('greet',()=>{
     console.log('Hello there')
})
eventEmitter.emit('greet')

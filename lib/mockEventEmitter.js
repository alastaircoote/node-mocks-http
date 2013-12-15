/*
 * http://nodejs.org/api/events.html
*/

function EventEmitter(){
    this.events = [];
    this.instantEvents = [];
}

EventEmitter.prototype.addListener = function(event, listener){}
EventEmitter.prototype.on = function(event, listener){
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
    this.emitInstants(event)
}
EventEmitter.prototype.once = function(event, listener){}
EventEmitter.prototype.removeListener = function(event, listener){}
EventEmitter.prototype.removeAllListeners = function(event){}
// EventEmitter.prototype.removeAllListeners = function([event])
EventEmitter.prototype.setMaxListeners = function(n){}
EventEmitter.prototype.listeners = function(event){}
EventEmitter.prototype.emit = function(event, data){
    if (!this.events[event]) return;
    this.events[event].forEach(function(func) {
        func.apply(null,data)
    });
}
EventEmitter.prototype.success = function(func) {
    this.on("success", func)
}

EventEmitter.prototype.instant = function(event,data) {
    if (!this.instantEvents[event]) this.instantEvents[event] = [];
    this.instantEvents[event].push(data);
}
EventEmitter.prototype.emitInstants = function(event){
    if (!this.instantEvents[event]) return;
    var self = this;
    this.instantEvents[event].forEach(function(data) {
        self.emit(event,data)
    });
}
// EventEmitter.prototype.emit = function(event, [arg1], [arg2], [...]){}

module.exports = EventEmitter;

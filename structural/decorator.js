'use strict';

function Task(name){
    this.name = name;
}
Task.prototype.save = function(message) {
    this._message = message;
};

function UrgentTask(name){
    Task.call(this, name);
    this._notified = false;
}
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = () => {
    this._notified = true;
};
UrgentTask.prototype.save = function(message) {
    this.notify();
    Task.prototype.save.call(this, message);
};


module.exports = {
    Task,
    UrgentTask
};
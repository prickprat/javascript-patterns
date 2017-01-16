'use strict';

function Task(name){
    this.name = name;
    this.completed = false;
}


Task.prototype.complete = function complete(){
    this.completed = true;
    return `${this.name} is complete.`;
};

module.exports = Task;
function ComplicatedTask(name){
    this.name = name;
    this._saved = false;
    this._finished = false;
    this._completed = false;
    this._done = false;

    this.save = function (){
        this._saved = true;
    };
    this.do = function (){
        this._done = true;
    };
    this.finish = function (){
        this._completed = true;
        this._finished = true;
    };
    this.isComplete = function(){
        return this._saved
            && this._finished
            && this._completed
            && this._done;
    };
}

function SimplifiedTask(name){
    let originalTask = new ComplicatedTask(name);

    return {
        get name(){
            return originalTask.name;
        },
        isComplete(){
            return originalTask.isComplete();
        },
        complete(){
            originalTask.do();
            originalTask.finish();
            originalTask.save();
        },
    };
}


module.exports = SimplifiedTask;
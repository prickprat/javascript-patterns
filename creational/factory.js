'use strict';

function remoteDbAccessor(){
    const remoteDb = {};

    return {
        get: get,
        save: save,
    };

    //////////////////////
    function get(name){
        return remoteDb[name];
    }

    function save(name, data){
        remoteDb[name] = data;
    }
}

function DbFactory() {
    this.local = require('./module');
    this.remote = remoteDbAccessor();
}

module.exports = new DbFactory();
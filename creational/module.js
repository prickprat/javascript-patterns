'use strict';

function databaseAccessor(){

    const db = {};

    return {
        get: get,
        save: save,
    };

    //////////////////////
    function get(name){
        return db[name];
    }

    function save(name, data){
        db[name] = data;
    }
}

module.exports = databaseAccessor();
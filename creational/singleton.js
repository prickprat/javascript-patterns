'use strict';


const EnclosedSingleton = (() => {
    let _protectedSingleton = null;

    return {
        _isInitialised,
        getInstance,
    };

    ///////////////////////
    function getInstance(){
        if (_isInitialised()){
            return _protectedSingleton;
        } else {
            _protectedSingleton = {};
            return _protectedSingleton;
        }
    }

    function _isInitialised(){
        return _protectedSingleton !== null
                && _protectedSingleton !== undefined;
    }
})();

module.exports = EnclosedSingleton;
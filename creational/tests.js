const should = require('chai').should();

describe('constructor pattern', () => {
    const Task = require('./constructor');

    it('should instantiate a new Task object', () => {
        let t = new Task('task1');
        let t2 = new Task('task2');

        should.exist(t.completed);
        should.exist(t.name);
        t.completed.should.be.false;
        t.name.should.be.equal('task1');
        t.should.not.equal(t2);
    });

    it('should have functions shared between instances', () => {
        let t1 = new Task('task1');
        let t2 = new Task('task2');

        should.exist(t1.complete);
        should.exist(t2.complete);
        t1.complete.should.deep.equal(t2.complete);
    });
});

describe('module pattern', () => {
    const Database = require('./module');

    it('should only instantiate once', () => {
        let db2 = require('./module');

        Database.should.be.equal(db2);
    });

    it('should save and get data', () => {
        Database.save('id1', 'some-data');
        Database.get('id1').should.be.equal('some-data');
    });
});
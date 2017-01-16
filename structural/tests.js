const should = require('chai').should();

describe('decorator pattern', () => {
    const Task = require('./decorator').Task;
    const UrgentTask = require('./decorator').UrgentTask;

    it('should preserve existing functionality', () => {
        let u = new UrgentTask('task2');

        u.name.should.equal('task2');
        u.save('hello');
        u._message.should.equal('hello');
    });

    it('should embellish core object functionality dynamically.', () => {
        let t = new Task('task1');
        let u = new UrgentTask('task2');

        should.exist(u.notify);
        u.save.should.not.equal(t.save);
    });

    it('should not change the core object interface', () => {
        let t = new Task('task1');
        let u1 = new UrgentTask('task2');
        let u2 = new UrgentTask('task3');

        should.not.exist(t.notify);
        UrgentTask.prototype.newProp = 'this was dynamic';
        should.not.exist(t.newProp);
        should.exist(u1.newProp);
        u1.newProp.should.be.equal(u2.newProp);
    });
});

describe('facade pattern', () => {
    const Task = require('./facade');

    it('should not change existing functionality', () => {
        let t = Task('task1');

        t.name.should.equal('task1');
        t.isComplete().should.be.false;
    });

    it('should simplify a complicated interface', () => {
        let t = Task('task1');
        t.complete();
        t.isComplete().should.be.true;
        should.not.exist(t.do);
        should.not.exist(t.finish);
        should.not.exist(t.save);
    });
});
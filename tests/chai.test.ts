import {assert, describe, expect, it} from "vitest";

function sayHello(name: string): string {
    return `Hello ${name}!`;
}

describe('sayHello', () => {
    it('should return with name', () => {
        expect(sayHello("Aaa")).to.be.a('string', 'Hello Aaa!');
        assert.equal(sayHello('Aaa'), 'Hello Aaa!');
    });
});

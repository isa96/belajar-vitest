import {bench, describe, expect} from "vitest";

describe('benchmarking', () => {

    function sayHello(name: string): string {
        return `Hello ${name}`;
    }

    bench('should run a benchmark', () => {
        const result = sayHello("Aaa");
        expect(result).toBe("Hello Aaa");
    });

});

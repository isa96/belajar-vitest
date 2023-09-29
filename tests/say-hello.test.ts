import {describe, expect, it} from "vitest";
import {sayHello} from "../src/say-hello";

describe('Say Hello', () => {
    it('should say hello', () => {
        const result = sayHello("Aaa");
        expect(result).toBe("Hello Aaa");
    });
});

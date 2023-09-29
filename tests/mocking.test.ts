import {describe, expect, it, vi} from "vitest";

describe('mock', () => {

    function sayHello(name: string, callback: (message: string) => void) {
        callback("Hello " + name);
    }

    it('should support mock', () => {
        const callback = vi.fn();
        sayHello("Aaa", callback);

        expect(callback).toHaveBeenCalledWith("Hello Aaa");
    });

});

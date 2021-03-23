"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_1 = require("./package");
describe('sha256', function () {
    it('is a function of arity 1', function () {
        expect(typeof package_1.sha256).toEqual('function');
        expect(package_1.sha256.length).toEqual(1);
    });
    it('returns expected output', function () {
        var input = 'what?';
        var actual = package_1.sha256(input);
        var expected = '2cc9a59ae14e48454a6a01a2e286a525b9f2d6201a205dec4fbbb8f9755ef363';
        expect(actual).toEqual(expected);
    });
});
describe('sha512', function () {
    it('is a function of arity 1', function () {
        expect(typeof package_1.sha512).toEqual('function');
        expect(package_1.sha512.length).toEqual(1);
    });
    it('returns expected output', function () {
        var input = 'what?';
        var actual = package_1.sha512(input);
        var expected = '1b688b8b9d00e1e1daa19b41b852ece0dd5ad13e6958188f10cb4e7a2f9ad96342f1a90d463c8af5240e02795695779a4a59087d8ca782afaf427f7c8f61e4e8';
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=package.spec.js.map
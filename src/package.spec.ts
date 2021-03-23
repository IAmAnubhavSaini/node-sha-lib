import {sha256, sha512} from './package';

describe('sha256', () => {
    it('is a function of arity 1', () => {
        expect(typeof sha256).toEqual('function');
        expect(sha256.length).toEqual(1);
    });
    it('returns expected output', () => {
        const input = 'what?';
        const actual = sha256(input);
        const expected = '2cc9a59ae14e48454a6a01a2e286a525b9f2d6201a205dec4fbbb8f9755ef363';
        expect(actual).toEqual(expected);
    });
});

describe('sha512', () => {
    it('is a function of arity 1', () => {
        expect(typeof sha512).toEqual('function');
        expect(sha512.length).toEqual(1);
    });
    it('returns expected output', () => {
        const input = 'what?';
        const actual = sha512(input);
        const expected = '1b688b8b9d00e1e1daa19b41b852ece0dd5ad13e6958188f10cb4e7a2f9ad96342f1a90d463c8af5240e02795695779a4a59087d8ca782afaf427f7c8f61e4e8';
        expect(actual).toEqual(expected);
    });
});

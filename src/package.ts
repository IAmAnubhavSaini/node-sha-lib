import {createHash} from 'crypto';

function sha256(data: string): string {
    const h256 = createHash('sha256');
    h256.update(data);
    return h256.digest('hex');
}

function sha(data: string, algo: string = 'sha512'): string {
    switch (algo) {
        case 'sha512':
            return sha512(data);
        case 'sha256':
            return sha256(data);
        default:
            return sha512(data);
    }
}

function sha512(data: string): string {
    const h512 = createHash('sha512');
    h512.update(data);
    return h512.digest('hex');
}

export {
    sha256,
    sha512,
    sha
};

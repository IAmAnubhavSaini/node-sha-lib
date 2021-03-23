"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha512 = exports.sha256 = void 0;
var crypto_1 = require("crypto");
function sha256(data) {
    var h256 = crypto_1.createHash('sha256');
    h256.update(data);
    return h256.digest('hex');
}
exports.sha256 = sha256;
function sha512(data) {
    var h512 = crypto_1.createHash('sha512');
    h512.update(data);
    return h512.digest('hex');
}
exports.sha512 = sha512;
//# sourceMappingURL=package.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.Path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.Method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.patch = routeBinder(Methods_1.Methods.patch);
exports.del = routeBinder(Methods_1.Methods.del);
exports.post = routeBinder(Methods_1.Methods.post);
//# sourceMappingURL=routes.js.map
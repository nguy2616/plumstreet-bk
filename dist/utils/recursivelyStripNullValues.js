"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function recursivelyStripNullValues(value) {
    if (Array.isArray(value)) {
        return value.map(recursivelyStripNullValues);
    }
    if (value !== null && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, value]) => [
            key,
            recursivelyStripNullValues(value),
        ]));
    }
    if (value !== null) {
        return value;
    }
}
exports.default = recursivelyStripNullValues;
//# sourceMappingURL=recursivelyStripNullValues.js.map
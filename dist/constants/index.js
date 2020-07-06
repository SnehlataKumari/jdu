"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_CONSTANTS = exports.USER_ROLES = exports.getKeys = void 0;
exports.getKeys = (constant) => Reflect.ownKeys(constant).map(constantKey => constant[constantKey].key);
exports.USER_ROLES = {
    USER: { key: 'USER', label: 'User' },
    SUPER_ADMIN: { key: 'SUPER_ADMIN', label: 'Super Admin' },
    ADMIN: { key: 'ADMIN', label: 'Admin' },
    STATE_LEVEL_USER: { key: 'STATE_LEVEL_USER', label: 'State Level User' },
    BLOCK_LEVEL_USER: { key: 'BLOCK_LEVEL_USER', label: 'Block level user' },
    DISTRICT_LEVEL_USER: { key: 'DISTRICT_LEVEL_USER', label: 'District level user' }
};
exports.JWT_CONSTANTS = {
    secret: process.env.SECRET || 'dontcare',
    expiresIn: '60s'
};
//# sourceMappingURL=index.js.map
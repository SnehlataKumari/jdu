export const getKeys = (constant) => Reflect.ownKeys(constant).map(constantKey => constant[constantKey].key);

export const USER_ROLES = {
  USER: {key: 'USER', label: 'User'},
  SUPER_ADMIN: {key: 'SUPER ADMIN',label: 'Super Admin'},
  ADMIN: {key: 'ADMIN', label: 'Admin'},
  STATE_LEVEL_USER: {key: 'STATE LEVEL USER', label: 'State Level User'},
  BLOCK_LEVEL_USER: {key: 'BLOCK LEVEL USER', label: 'Block level user'},
  DISTRICT_LEVEL_USER: {key:  'DISTRICT LEVEL USER', label: 'District level user'}

};

export const JWT_CONSTANTS = {
  secret: process.env.SECRET || 'dontcare',
  expiresIn: '60s'
}

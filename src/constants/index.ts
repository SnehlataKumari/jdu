export const getKeys = (constant) => Reflect.ownKeys(constant).map(constantKey => constant[constantKey].key);

export const USER_ROLES = {
  USER: {key: 'USER', label: 'User'},
  SUPER_ADMIN: {key: 'SUPER_ADMIN',label: 'Super Admin'},
  ADMIN: {key: 'ADMIN', label: 'Admin'},
  STATE_LEVEL_USER: { key: 'STATE_LEVEL_USER', label: 'State Level User'},
  BLOCK_LEVEL_USER: { key: 'BLOCK_LEVEL_USER', label: 'Block level user'},
  DISTRICT_LEVEL_USER: { key:  'DISTRICT_LEVEL_USER', label: 'District level user'}
};
export const getCategory = (constant) => Reflect.ownKeys(constant).map(constantKey => constant[constantKey].key);


// CYCLE_SCHEM, MAHILA_JEEVIKA, HEALTH_DEPARTMENT, EDUCATION_DEPARTMENT, STUDENT
export const QUESTION_CATEGORY = {
  CYCLE_SCHEM: { key: 'CYCLE_SCHEM', label: 'Cycle Schema' },
  MAHILA_JEEVIKA: { key: 'MAHILA_JEEVIKA', label: 'Mahila Jeevika' },
  HEALTH_DEPARTMENT: { key: 'HEALTH_DEPARTMENT', label: 'Health Department' },
  EDUCATION_DEPARTMENT: { key: 'EDUCATION_DEPARTMENT', label: 'Education Department' },
  STUDENT: { key: 'STUDENT', label: 'Student' },
};

export const JWT_CONSTANTS = {
  secret: process.env.SECRET || 'dontcare',
  expiresIn: '60s'
}

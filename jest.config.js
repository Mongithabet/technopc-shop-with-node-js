module.exports = {
    
    transform: {
      "^.+\\.ts$":"ts-jest",
      
    },
    testEnvironnement: 'node',
    testMatch:["**/test/*.test.ts"],
    moduleFileExtension:["js","ts"]
  }
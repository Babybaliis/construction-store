module.exports = {
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.scss$': 'jest-transform-css',
    },
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy',
    },
};


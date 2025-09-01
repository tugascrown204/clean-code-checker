// Clean Code Rules Definitions

const rules = {
    noLongFunctions: {
        description: "Functions should not exceed 20 lines.",
        check: (code) => { /* implementation */ }
    },
    noGlobalVariables: {
        description: "Avoid using global variables; prefer local scopes.",
        check: (code) => { /* implementation */ }
    },
    // Add more rules as needed
};

module.exports = rules;
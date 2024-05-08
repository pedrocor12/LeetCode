/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (second_value) => {
            if (val === second_value) return true
            else throw new Error("Not Equal");
        },

        notToBe: (second_value) => {
            if (second_value !== val) return true
            else throw new Error("Equal");
        },
    }   
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

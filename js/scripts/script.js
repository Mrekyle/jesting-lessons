function addition (num1, num2)  {
    return num1 + num2
}

/**
 * To be able to use the function in our testing environment we need to ensure we export the function. 
 * Allowing us to use it elsewhere 
 */


module.exports = addition;
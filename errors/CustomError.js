class CustomError extends Error {
    /**
     * Constructor for CustomError.
     * @param {string} message - The error message to be displayed when the error is thrown.
     */
    constructor(message) {
        // Call the superclass constructor with the provided error message.
        super(message);
    }
}

export default CustomError;

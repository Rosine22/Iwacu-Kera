import CustomError from './CustomError'; // Ensure the path is correct

class NotFoundError extends CustomError {
    /**
     * Creates a new NotFoundError instance.
     * @param {string} message - Error message.
     */
    constructor(message) {
        super(message);

        /**
         * HTTP status code for this error.
         * @type {number}
         */
        this.statusCode = 404;
    }
}

export default NotFoundError;

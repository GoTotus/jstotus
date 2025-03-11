class TotusClientError extends Error {
    constructor(message, statusCode = null) {
        super(statusCode ? `${message} (Status: ${statusCode})` : message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

class AuthenticationError extends TotusClientError {}
class NotFoundError extends TotusClientError {}
class ClientError extends TotusClientError {}
class ServerError extends TotusClientError {}

module.exports = {
    TotusClientError,
    AuthenticationError,
    NotFoundError,
    ClientError,
    ServerError
};
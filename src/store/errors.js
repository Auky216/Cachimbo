export class SubmitFileError extends Error {
    constructor(message) {
        super(message);
        this.name = 'SubmitFileError';
    }
}
export class SubmitFileError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Error al subir el archivo';
    }
}

export class MissingDataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Campos incompletos';
    }
}
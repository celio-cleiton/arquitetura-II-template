import { BaseError } from "./BaseError";

export const ID_INVALID = "id deve ser uma string"


export class BadRequestError extends BaseError{

    constructor(
        message: string = "Requisição Inválida"
    ){
        super(400, message)
    }
}
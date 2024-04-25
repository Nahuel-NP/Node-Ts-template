import { CustomError } from "../errors/custom.error";


export class ExampleEntity {

  constructor(
    public readonly id: string,
    public readonly name: string
  ) { }

  static fromObject(object: { [key: string]: any }) {
    const { id, name } = object;
    if (!id) throw CustomError.badRequest('Missing id');
    if (!name) throw CustomError.badRequest('Missing name');
    return new ExampleEntity(id, name);
  }
}
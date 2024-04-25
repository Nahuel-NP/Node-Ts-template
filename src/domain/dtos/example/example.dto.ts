
export class ExampleDto {
  constructor(
    public readonly name: string
  ) { }

  // [error,dto]
  static create(object: { [key: string]: any }): [string?, ExampleDto?] {

    const { name } = object;

    if (!name) return ['Missing name'];

    return [undefined, new ExampleDto(name)]
  }
}
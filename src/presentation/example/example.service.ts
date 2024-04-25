import { CustomError, ExampleDto, ExampleEntity, PaginationDto } from "../../domain";


export class ExampleService {

  async createExample(exampleDto: ExampleDto, example: ExampleEntity) {

    throw CustomError.badRequest("Not implemented yet");
  }

  async getExamples(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto
    try {

      return {
        limit,
        page
      }
    } catch (error) {
      throw CustomError.internalServer(`${error}`)
    }
  }
}
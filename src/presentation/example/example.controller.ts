import { Request, Response } from "express";
import { CustomError, ExampleDto, PaginationDto } from "../../domain";
import { ExampleService } from "./example.service";


export class ExampleController {

  constructor(private readonly exampleService: ExampleService) {

  }


  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  createExample = async (req: Request, res: Response) => {
    const [error, exampleDto] = ExampleDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.exampleService.createExample(exampleDto!, req.body)
      .then(example => res.status(201).json(example))
      .catch(error => this.handleError(error, res))
  }

  getExamples = async (req: Request, res: Response) => {

    const { page = 1, limit = 10 } = req.query
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json({ error });

    this.exampleService.getExamples(paginationDto!)
      .then(examples => res.json(examples))
      .catch(error => this.handleError(error, res));
  }
}
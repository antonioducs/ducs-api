export type Params = {
  numberA: number;
  numberB: number;
};

type Result = number;

export class TestingUseCase {
  execute({ numberA, numberB }: Params): Result {
    return numberA + numberB;
  }
}

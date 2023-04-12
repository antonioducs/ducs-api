import { TestingUseCase } from '../../domain/useCases/TestingUseCase';

export const testingRoute = async () => {
  const testingUseCase = new TestingUseCase();

  const result = testingUseCase.execute({
    numberA: 2,
    numberB: 3,
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v3.0! Your function executed successfully!',
      input: result,
    }),
  };
};

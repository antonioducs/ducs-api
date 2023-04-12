import { faker } from '@faker-js/faker';
import { describe, test, expect, beforeAll } from 'vitest';
import {
  TestingUseCase,
  Params,
} from '../../../src/domain/useCases/TestingUseCase';

let useCase: TestingUseCase;
let data: Params;

describe('TestingUseCase Unit Tests', () => {
  beforeAll(() => {
    useCase = new TestingUseCase();
    data = {
      numberA: faker.datatype.number(),
      numberB: faker.datatype.number(),
    };
  });

  test('should be able sum numbers with success', () => {
    const result = useCase.execute(data);

    expect(result).toEqual(data.numberA + data.numberB);
  });
});

import { createTest, updateTest } from '../lib/mock/functions-without-context'
import { prismaMock } from '../lib/mock/singleton'

it('should create new data ', async () => {
  const test = {
    id: 1,
    description: 'create',
  }

  prismaMock.test.create.mockResolvedValue(test)

  await expect(createTest(test)).resolves.toEqual({
    id: 1,
    description: 'create',
  })
})

it('should update existing data ', async () => {
  const test = {
    id: 1,
    description: 'update'
  }

  prismaMock.test.update.mockResolvedValue(test)

  await expect(updateTest(test)).resolves.toEqual({
    id: 1,
    description: 'update'
  })
})
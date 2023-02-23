import { createTest, readTest, updateTest, deleteTest } from '../lib/crud'

it('confirms an entry can be created in the database', async () => {
    await expect(createTest(1)).resolves.toEqual({
        id: 1,
    })
})

it('confirms an entry can be read from the database', async () => {
    await expect(readTest(1)).resolves.toEqual({
        id: 1,
    })
})

it('confirms an entry can be updated in the database', async () => {
    await expect(updateTest(1, 2)).resolves.toEqual({
        id: 2,
    })
})

it('confirms an entry can be deleted from the database', async () => {
    await expect(deleteTest(2)).resolves.toEqual({
        id: 2,
    })
})
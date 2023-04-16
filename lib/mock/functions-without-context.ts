import prisma from '../prisma'

interface CreateTest {
    description: string
}

export async function createTest(test: CreateTest) {
    return await prisma.test.create({
        data: test,
    })
}

interface UpdateTest {
    id: number
    description: string
}

export async function updateTest(test: UpdateTest) {
  return await prisma.test.update({
    where: { id: test.id },
    data: test,
  })
}
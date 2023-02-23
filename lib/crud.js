import prisma from './prisma'

export async function createTest(id) {
    const result = await await prisma.test.create({
        data: {
            id: id,
        },
    })

    return result
}

export async function readTest(id) {
    const result = await prisma.test.findUnique({
        where: {
            id: id,
        },
    })

    return result
}

export async function updateTest(oldId, newId) {
    const result = await prisma.test.update({
        where: {
            id: oldId,
        },
        data: {
            id: newId,
        },
    })

    return result
}

export async function deleteTest(id) {
    const result = await prisma.test.delete({
        where: {
            id: id,
        },
    })

    return result
}
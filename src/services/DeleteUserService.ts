import { PrismaClient } from "@prisma/client"

interface RequestDTO {
  id: number;
}

const prisma = new PrismaClient()

class DeleteUserService {
  public async execute({ id }: RequestDTO): Promise<void> {
    await prisma.user.delete({
      where: {
        id
      },
    })
  }
}

export default new DeleteUserService()
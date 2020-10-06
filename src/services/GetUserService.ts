import { PrismaClient } from "@prisma/client"

import { UserSchema } from '../../prisma/schema.types'

interface RequestDTO {
  id: number;
}

const prisma = new PrismaClient()

class GetUserService {
  public async execute({ id }: RequestDTO): Promise<UserSchema> {
    const user = await prisma.user.findOne({
      where: { id }
    })
    return user;
  }
}

export default new GetUserService()
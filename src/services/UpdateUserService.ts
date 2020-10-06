import { PrismaClient } from "@prisma/client"

import { UserSchema } from '../../prisma/schema.types'

interface RequestDTO {
  id: number;
  name?: string;
  bio?: string;
}

const prisma = new PrismaClient()

class UpdateUserService {
  public async execute({ id, name, bio }: RequestDTO): Promise<UserSchema> {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        bio
      }
    })
    return user;
  }
}

export default new UpdateUserService()
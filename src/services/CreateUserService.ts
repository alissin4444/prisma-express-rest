import { PrismaClient } from "@prisma/client"

import { UserSchema } from '../../prisma/schema.types'

interface RequestDTO {
  name: string;
  bio: string;
}

const prisma = new PrismaClient()

class CreateUserService {
  public async execute({ name, bio }: RequestDTO): Promise<UserSchema> {
    const user = await prisma.user.create({
      data: {
        name,
        bio
      }
    })
    return user;
  }
}

export default new CreateUserService()
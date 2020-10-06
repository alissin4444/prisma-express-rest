import { PrismaClient } from "@prisma/client"

import { UserSchema } from '../../prisma/schema.types'

const prisma = new PrismaClient()

class GetUsersService {
  public async execute(): Promise<UserSchema[]> {
    const users = await prisma.user.findMany()
    return users;
  }
}

export default new GetUsersService()
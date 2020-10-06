import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import GetUsersService from '../services/GetUsersService';
import GetUserService from '../services/GetUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const users = await GetUsersService.execute();
  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { name, bio } = request.body;
  const user = await CreateUserService.execute({ name, bio });
  return response.json(user);
});

usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params
  const user = await GetUserService.execute({ id: Number(id) });
  return response.json(user);
});

usersRouter.put('/:id', async (request, response) => {
  const { id } = request.params
  const { name, bio } = request.body;
  const user = await UpdateUserService.execute({ id: Number(id), name, bio });
  return response.json(user);
});

usersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params
  await DeleteUserService.execute({ id: Number(id) });
  return response.json();
});

export default usersRouter;
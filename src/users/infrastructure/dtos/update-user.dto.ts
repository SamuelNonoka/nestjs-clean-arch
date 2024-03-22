import { UpdateUserUseCase } from "@/users/application/usecases/update-user.usecase";

export class UpdateUserDto implements Omit<UpdateUserUseCase.Input, 'id'> {
  id: string;
  name: string;
}

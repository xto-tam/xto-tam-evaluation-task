import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  createParamDecorator,
  ExecutionContext,
  Controller,
  Body,
  Post
} from '@nestjs/common';

import { UserGateway } from './user.gateway';
import { UserDto } from './user.dto';

export const ReqIdDecorator = createParamDecorator((param: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  console.log(request.cookies)
  return !!param ? request.cookies?.[param] : request.cookies;
});

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly gateway: UserGateway) {}

  @Post('/activity')
  @ApiOkResponse()
  async create(
    @ReqIdDecorator('user-request-id') reqId: string,
    @Body() { url }: UserDto
  ) : Promise<void> {
    console.log({ reqId })
    this.gateway.sendUserActitity({ id: reqId, url });
  }
}

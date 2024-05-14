import { Module } from '@nestjs/common';
import { UserGateway } from './user.gateway';
import { UserController } from './user.controller';

@Module({
  imports: [],
  providers: [UserGateway],
  exports: [],
  controllers: [UserController],
})
@Module({})
export class UserModule {}

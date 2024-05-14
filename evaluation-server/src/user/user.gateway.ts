import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';

import { UserActivityType } from './user.types';

@WebSocketGateway({ cors: true })
export class UserGateway implements OnGatewayConnection {
  private readonly usersActivities = [];
  private readonly logger: Logger = new Logger('AppGateway');

  @WebSocketServer()
  server: Server;

  public handleConnection(client: Socket) {
    this.sendAllUsersActitities();
  }

  public sendAllUsersActitities() {
    this.logger.log('Init connection');

    this.server.emit('usersActivities', this.usersActivities);

    this.logger.log('Users activities has been successfully sent on init');
  }

  public sendUserActitity(payload: UserActivityType) {
    this.logger.log({ payload }, 'Start sending new user activity');

    this.usersActivities.push(payload);
    this.server.emit('userActivity', payload);

    this.logger.log('User activity has been successfully sent');
  }
}

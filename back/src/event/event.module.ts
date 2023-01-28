import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';

import { UsersModule } from '../users/users.module';
import { User } from 'src/users/entities/user.entity';
import { Gift } from 'src/gift/entities/gift.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User, Gift]), UsersModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { RoadmapModule } from './roadmap/roadmap.module';

@Module({
  imports: [RoadmapModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}

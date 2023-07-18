import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TesttModule } from './testt/testt.module';

@Module({
  imports: [DatabaseModule, TesttModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

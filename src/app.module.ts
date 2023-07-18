import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TesttModule } from './testt/testt.module';
import { NewsModule } from './news/news.module';
import { StructureModule } from './structure/structure.module';

@Module({
  imports: [DatabaseModule, TesttModule, NewsModule, StructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

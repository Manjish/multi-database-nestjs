import { Module } from '@nestjs/common';
import { TesttService } from './testt.service';
import { TesttController } from './testt.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [TesttController],
  providers: [TesttService],
  imports: [DatabaseModule],
})
export class TesttModule {}

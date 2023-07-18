import { Module } from '@nestjs/common';
import { StructureService } from './structure.service';
import { StructureController } from './structure.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [StructureController],
  providers: [StructureService],
  imports: [DatabaseModule],
})
export class StructureModule {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateTesttDto } from './create-testt.dto';

export class UpdateTesttDto extends PartialType(CreateTesttDto) {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TesttService } from './testt.service';
import { CreateTesttDto } from './dto/create-testt.dto';
import { UpdateTesttDto } from './dto/update-testt.dto';

@Controller('testt')
export class TesttController {
  constructor(private readonly testtService: TesttService) {}

  @Post()
  async create(@Body() createTesttDto: CreateTesttDto) {
    return await this.testtService.create(createTesttDto);
  }

  @Get()
  async findAll() {
    return await this.testtService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.testtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesttDto: UpdateTesttDto) {
    return this.testtService.update(+id, updateTesttDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testtService.remove(+id);
  }
}

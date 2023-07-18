import { Inject, Injectable } from '@nestjs/common';
import { CreateTesttDto } from './dto/create-testt.dto';
import { UpdateTesttDto } from './dto/update-testt.dto';
import { Db } from 'mongodb';
import { MONGODB, SEQUELIZE } from 'src/helpers/constant';

@Injectable()
export class TesttService {
  constructor(
    @Inject(MONGODB) private db: Db,
    @Inject(SEQUELIZE) private sequelize,
  ) {}
  async create(createTesttDto: CreateTesttDto) {
    return await this.db.collection('testt').insertOne(createTesttDto);
  }

  async findAll() {
    return await this.db.collection('testt').find().toArray();
    return `This action returns all testt`;
  }

  async findOne(id: number) {
    console.log('Sequelize baby');
    const query = await this.sequelize.query(`Select * from users u;`);
    return query;
  }

  update(id: number, updateTesttDto: UpdateTesttDto) {
    return `This action updates a #${id} testt`;
  }

  remove(id: number) {
    return `This action removes a #${id} testt`;
  }
}

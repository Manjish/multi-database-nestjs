import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStructureDto } from './dto/create-structure.dto';
import { UpdateStructureDto } from './dto/update-structure.dto';
import { MONGODB, SEQUELIZE } from 'src/helpers/constant';
import { Db } from 'mongodb';
import { Structure } from './entities/structure.entity';

@Injectable()
export class StructureService {
  constructor(
    @Inject(MONGODB) private mongodb: Db,
    @Inject(SEQUELIZE) private sequelize,
  ) {}
  async create(createStructureDto: CreateStructureDto) {
    try {
      await this.mongodb.collection('structures').insertOne(createStructureDto);
      await Structure.create(createStructureDto);
      return 'New record added successfully';
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findFromMongoDb() {
    try {
      const result = await this.mongodb
        .collection('structures')
        .find()
        .toArray();

      for (const element of result) {
        for (const e of element['item']) {
          if (e['news']) {
            const query = (
              await this.sequelize.query(`
              select * from news where "newsId"='${e['news']}';`)
            )[1].rows[0];
            e['news'] = query;
          }
        }
        delete element['_id'];
      }
      return result;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findFromPostgres() {
    try {
      const structure = await Structure.findAll({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
      });

      const newsJSON = (
        await this.sequelize.query(`
      select 
      json_object_agg(holder->>'news',n.*) populated
      from
      news n,
      (
        select 
        unnest(item) holder
        FROM
        structures s
      ) temp 
      where 
      holder->>'news' is not null 
      and 
      n."newsId" = holder->>'news';`)
      )[1].rows[0]['populated'];

      return { structure, newsJSON };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  findAll() {
    return `This action returns all structure`;
  }

  findOne(id: number) {
    return `This action returns a #${id} structure`;
  }

  update(id: number, updateStructureDto: UpdateStructureDto) {
    return `This action updates a #${id} structure`;
  }

  remove(id: number) {
    return `This action removes a #${id} structure`;
  }
}

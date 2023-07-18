import { DataTypes } from 'sequelize';
import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'structures' })
export class Structure extends Model<Structure> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  auto: boolean;

  @Column
  content: string;

  @Column
  order: number;

  @Column({
    type: DataTypes.ARRAY(DataTypes.JSON),
  })
  item: any;
}

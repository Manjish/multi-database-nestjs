import { DataTypes } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
@Table({ tableName: 'users' })
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password?: string;

  @Column({
    type: DataTypes.TEXT,
  })
  @Column
  token?: string;

  @Default(false)
  @Column
  isVerified: boolean;

  @AllowNull
  @Default('user')
  @Column
  userType: string;
}

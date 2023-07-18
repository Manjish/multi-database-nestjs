import { DataTypes } from 'sequelize';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'news' })
export class News extends Model<News> {
  @PrimaryKey
  @Column
  newsId: string;

  @Column
  news_title: string;

  @Column({
    type: DataTypes.TEXT,
  })
  news: string;
}

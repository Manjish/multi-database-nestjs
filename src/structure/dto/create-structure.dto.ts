export class CreateStructureDto {
  auto: boolean;
  content: string;
  order: number;
  category?: string;
  item: Array<JSON>;
}

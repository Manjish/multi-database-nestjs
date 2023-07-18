import { Test, TestingModule } from '@nestjs/testing';
import { TesttController } from './testt.controller';
import { TesttService } from './testt.service';

describe('TesttController', () => {
  let controller: TesttController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TesttController],
      providers: [TesttService],
    }).compile();

    controller = module.get<TesttController>(TesttController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

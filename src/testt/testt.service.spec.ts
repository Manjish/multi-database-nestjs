import { Test, TestingModule } from '@nestjs/testing';
import { TesttService } from './testt.service';

describe('TesttService', () => {
  let service: TesttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TesttService],
    }).compile();

    service = module.get<TesttService>(TesttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

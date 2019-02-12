import { Test, TestingModule } from '@nestjs/testing';
import { RssreaderController } from './rssreader.controller';

describe('Rssreader Controller', () => {
  let controller: RssreaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RssreaderController],
    }).compile();

    controller = module.get<RssreaderController>(RssreaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RssreaderController } from './rssreader/rssreader.controller';

@Module({
  imports: [],
  controllers: [AppController, RssreaderController],
  providers: [AppService],
})
export class AppModule {}

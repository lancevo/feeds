import { Controller, Post, Body } from '@nestjs/common';
import { url } from 'inspector';
const Parser = require('rss-parser');
const customFields = {
  headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.96 Safari/537.36' },
  customFields: {
    item: ['description'],
  }
}
const parser = new Parser(customFields);
const getUnixTime = dt => Math.floor(new Date(dt).getTime() / 1000);

@Controller('rssreader')
export class RssreaderController {
  @Post()
  async readFeed(@Body() params: any) {
    try {
      let feed = await parser.parseURL(params.url);
      // return feed;
      let result = {
        total: feed.items.length,
        feed: {
          entries: feed.items.map(item => ({
            title: item.title,
            author: item.author,
            permalinkUrl: item.link,
            categories: item.categories,
            published: getUnixTime(item.pubDate),
            content: item['content:encoded'],
            summary: item.description
          }))
        }
      };
      return result;
    }

    catch (error) {
      return error;
    }




  }
}

import News from "#models/news";
import Service from "#services/base";

class NewsService extends Service {
  static Model = News;
}

export default NewsService;

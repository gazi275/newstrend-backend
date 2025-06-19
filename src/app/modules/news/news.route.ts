import express, { Request, Response } from 'express';
import axios from 'axios';
import config from '../../config';


const router = express.Router();

// Add search support to Bangladesh news
router.get('/bangladesh', async (req: Request, res: Response) => {
  try {
    const { search } = req.query;

    const response = await axios.get('https://newsdata.io/api/1/news', {
      params: {
        apikey: config.newsDatakey,
        country: 'bd',
        language: 'en',
        category: 'top',
      },
    });

    const data = response.data as { results?: any[] };
    let results = data.results || [];

    // If search exists, filter results by title/description/content
    if (search) {
      const keyword = (search as string).toLowerCase();
      results = results.filter((item: any) =>
        item.title?.toLowerCase().includes(keyword) ||
        item.description?.toLowerCase().includes(keyword) ||
        item.content?.toLowerCase().includes(keyword)
      );
    }

    res.json({ results });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to fetch local news' });
  }
});

// Same for international route
router.get('/international', async (req: Request, res: Response) => {
  try {
    const { search } = req.query;

    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: config.newsApiKey,
        category: 'general',
        language: 'en',
        pageSize: 100,
      },
    });

    const data = response.data as { articles?: any[] };
    let articles = data.articles || [];

    if (search) {
      const keyword = (search as string).toLowerCase();
      articles = articles.filter((item: any) =>
        item.title?.toLowerCase().includes(keyword) ||
        item.description?.toLowerCase().includes(keyword) ||
        item.content?.toLowerCase().includes(keyword)
      );
    }

    res.json({ articles });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to fetch international news' });
  }
});


export default router;

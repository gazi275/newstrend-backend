import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

// GET Bangladesh news from NewsData.io
router.get('/bangladesh', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://newsdata.io/api/1/news', {
      params: {
        apikey: process.env.NEWSDATA_API_KEY,
        country: 'bd',
        language: 'en',
        category: 'top',
      },
    });
    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to fetch local news' });
  }
});

// GET international news from NewsAPI.org
router.get('/international', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: process.env.NEWS_API_KEY,
        category: 'general',
        language: 'en',
        pageSize: 100,
      },
    });
    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to fetch international news' });
  }
});

export default router;

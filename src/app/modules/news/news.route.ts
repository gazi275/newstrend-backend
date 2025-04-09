import express, { Request, Response } from 'express';
import axios from 'axios';
import config from '../../config';


const router = express.Router();

router.get('/bangladesh', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://newsdata.io/api/1/news', {
      params: {
        apikey: config.newsDatakey,
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
        apiKey: config.newsApiKey,
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

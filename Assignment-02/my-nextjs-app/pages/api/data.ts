// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'This is a server-side component!' });
};

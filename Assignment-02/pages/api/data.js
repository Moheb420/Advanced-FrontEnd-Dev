// pages/api/data.js
export default function handler(req, res) {
    res.status(200).json({ serverData: 'This is from the server!' });
  }
  
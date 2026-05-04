const fs = require('fs');
const path = require('path');

const dbPath = path.join(process.cwd(), 'api', 'db.json');

function readDB() {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { products: [], coupons: [] };
  }
}

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const db = readDB();
    return res.status(200).json(db.coupons);
  }

  res.status(405).json({ error: 'Method not allowed' });
};

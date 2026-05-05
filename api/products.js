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

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

function tryPersistDB(data) {
  try {
    writeDB(data);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const db = readDB();
  const { id } = req.query;

  if (req.method === 'GET') {
    // GET /api/products - list all
    if (!id) {
      return res.status(200).json(db.products);
    }
    // GET /api/products?id=1 - get one
    const product = db.products.find(p => p.id === parseInt(id));
    return res.status(product ? 200 : 404).json(product || { error: 'Not found' });
  }

  if (req.method === 'POST') {
    const { name, price_per_kg } = req.body;
    
    if (!name || price_per_kg === undefined) {
      return res.status(400).json({ error: 'name and price_per_kg required' });
    }

    const newId = Math.max(...db.products.map(p => p.id), 0) + 1;
    const newProduct = { id: newId, name, price_per_kg };

    db.products.push(newProduct);
    const persisted = tryPersistDB(db);

    return res.status(201).json({ ...newProduct, persisted });
  }

  if (req.method === 'DELETE') {
    if (!id) {
      return res.status(400).json({ error: 'id required' });
    }

    const index = db.products.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ error: 'Not found' });
    }

    db.products.splice(index, 1);
    const persisted = tryPersistDB(db);

    return res.status(200).json({ success: true, persisted });
  }

  res.status(405).json({ error: 'Method not allowed' });
};

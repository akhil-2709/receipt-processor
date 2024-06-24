const { v4: uuidv4 } = require('uuid');
const receipts = {};

const processReceipt = (req, res) => {
    const receipt = req.body;
    const id = uuidv4();
    receipts[id] = calculatePoints(receipt);
    res.json({ id });
  };

  const getPoints = (req, res) => {
    const id = req.params.id;
    const totalPoints = receipts[id];
    if (totalPoints === undefined) {
      return res.status(404).json({ error: 'Receipt not found' });
    }
    res.json({ totalPoints });
  };

  
  const calculatePoints = (receipt) => {
    let points = 0;
  
    
    points += (receipt.retailer.match(/[a-z0-9]/gi) || []).length;
  
    
    if (parseFloat(receipt.total) % 1 === 0) {
      points += 50;
    }
  
    
    if (parseFloat(receipt.total) % 0.25 === 0) {
      points += 25;
    }
  
    
    points += Math.floor(receipt.items.length / 2) * 5;
  
    
    receipt.items.forEach(item => {
      const trimmedDescription = item.shortDescription.trim();
      if (trimmedDescription.length % 3 === 0) {
        points += Math.ceil(parseFloat(item.price) * 0.2);
      }
    });
  
    
    const date = parseInt(receipt.purchaseDate.split('-')[2], 10);
    if (date % 2 !== 0) {
      points += 6;
    }
  
    const hours = parseInt(receipt.purchaseTime.split(':')[0], 10);
    const minutes = parseInt(receipt.purchaseTime.split(':')[1], 10);
    if ((hours >= 14 && minutes !== 0) && (hours<16)) {
      points += 10;
    }
  
    return points;
  };

  module.exports = {
    processReceipt,
    getPoints,
  };

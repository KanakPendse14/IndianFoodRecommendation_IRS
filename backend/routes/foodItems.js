const express = require('express');
const FoodItem = require('../models/FoodItem');

const router = express.Router();

// Get all food items
router.get('/', async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.json(foodItems);
    } catch (err) {
        console.error('Error fetching all food items:', err.stack);
        res.status(500).json({ message: err.message });
    }
});

// Search food items by name or other criteria
router.get('/search', async (req, res) => {
    const { name, diet, region, course } = req.query;
    console.log('Search Parameters:', { name, diet, region, course });
    try {
        const query = {};
        if (name) query.name = new RegExp(name, 'i');  // case-insensitive search
        if (diet) query.diet = diet;
        if (region) query.region = region;
        if (course) query.course = course;

        const foodItems = await FoodItem.find(query);
        res.json(foodItems);
    } catch (err) {
        console.error('Error fetching food items:', err.stack);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

module.exports = router;

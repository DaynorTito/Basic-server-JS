const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const authMiddleware = require('./middlewares/middleware');
app.use(authMiddleware);

// Import and use routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/v1', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

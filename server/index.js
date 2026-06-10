require('dotenv').config();
const express          = require('express');
const cors             = require('cors');
const { errorHandler } = require('./middleware/errorHandler');

const authRoutes      = require('./routes/auth.routes');
const travelersRoutes = require('./routes/travelers.routes');
const tripsRoutes     = require('./routes/trips.routes');
const journalRoutes   = require('./routes/journal.routes');
const memoriesRoutes  = require('./routes/memories.routes');
const adminRoutes     = require('./routes/admin.routes');

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ───────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ── Routes ───────────────────────────────────────────────────
app.use('/auth',      authRoutes);
app.use('/travelers', travelersRoutes);   // /travelers/:id + /travelers/:id/password
app.use('/travelers', tripsRoutes);       // /travelers/:userId/trips
app.use('/travelers', journalRoutes);     // /travelers/:userId/journal
app.use('/journal',   memoriesRoutes);    // /journal/:entryId/memories
app.use('/admin',     adminRoutes);       // /admin/users

// ── Error handler – חייב להיות אחרון! ───────────────────────
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

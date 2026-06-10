const router      = require('express').Router();
const { verifyToken } = require('../middleware/auth');
const { getEntries, createEntry, updateEntry, deleteEntry } = require('../controllers/journal.controller');

function ownOnly(req, res, next) {
  if (req.user.id !== +req.params.userId)
    return res.status(403).json({ message: 'Forbidden' });
  next();
}

router.get('/:userId/journal',        verifyToken, ownOnly, getEntries);
router.post('/:userId/journal',       verifyToken, ownOnly, createEntry);
router.put('/:userId/journal/:id',    verifyToken, ownOnly, updateEntry);
router.delete('/:userId/journal/:id', verifyToken, ownOnly, deleteEntry);

module.exports = router;

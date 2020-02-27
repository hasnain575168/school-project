const router = require('express').Router();

const Fund = require('../../models/Fund');
const Complaint = require('../../models/Complaint');

router.get('/api/funds', async (req, res) => {
  try {
    const funds = await Fund.find({}, {
      name: 1, month: 1, amount: 1,
    });

    return res.status(200).json({
      funds,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

router.delete('/api/funds/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Fund.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

router.get('/api/complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find({});

    return res.status(200).json({
      complaints,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

router.delete('/api/complaints/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Complaint.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

module.exports = router;

const router = require('express').Router();

const Complaint = require('../../models/Complaint');

router.post('/complaints', async (req, res) => {
  try {
    const {
      name,
      email,
      description,
    } = req.body;

    const complaint = await Complaint.create({
      name, email, description,
    });

    return res.status(200).json({
      complaint,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

module.exports = router;

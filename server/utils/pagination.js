router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;

  const events = await Event.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const total = await Event.countDocuments();

  res.json({
    events,
    totalPages: Math.ceil(total / limit)
  });
});
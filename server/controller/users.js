import User from "../models/User.js";


export const getUsers = async (req, res) => {
  try {
    const { search = "", role, page = 1, limit = 10 } = req.query;

    const query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ]
    };

    if (role) query.role = role;

    const users = await User.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(query);

    res.json({
      users,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit)
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { returnDocument: "after", runValidators : true }
    );

    const io = req.app.get("io");
    if (io) io.emit("userUpdated", user);

    res.json(user);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    await User.findByIdAndDelete(req.params.id);

    const io = req.app.get("io");
    if (io) io.emit("userDeleted", req.params.id);

    res.json({ message: "Deleted" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
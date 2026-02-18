const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.admin.role)) {
      return res.status(403).json({ message: "Not authorized" });
    }
    next();
  };
};

router.delete('/admin/:id',
  protect,
  authorizeRoles('superadmin'),
  deleteAdmin
);

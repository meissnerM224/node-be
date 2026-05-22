const runTest = async (rec, res) => {
  try {
    return res.status(200).json({
      message: "API work fine!",
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error received",
      error: e,
    });
  }
};

export { runTest };

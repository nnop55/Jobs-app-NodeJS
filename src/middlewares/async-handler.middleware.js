const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.error(err.message);
    if (err.hasOwnProperty("keyPattern")) {
      res
        .status(500)
        .send(`${Object.keys(err["keyPattern"])[0]} already exist`);

      return;
    }
    res
      .status(500)
      .send(
        err.message == "" || !err.message
          ? "Internal Server Error"
          : err.message
      );
  });
};

export default asyncHandler;

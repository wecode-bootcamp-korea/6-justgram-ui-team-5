const sendProducts = (req, res) => {
  res.json({
    products: [
      {
        id: 1,
        title: "node",
        description: "node.js is awesome",
      },
      {
        id: 2,
        title: "express",
        description: "express is a server-sideframework for node.js",
      },
    ],
  });
};

module.exports = { sendProducts };

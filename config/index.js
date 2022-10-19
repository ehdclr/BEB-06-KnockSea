const mongoose = require("mongoose");

module.exports = function connection() {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(process.env.DATABASE, connectionParams);
  console.log("몽고DB 연결 성공!");
};

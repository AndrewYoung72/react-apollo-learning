import { connect, connection } from "mongoose";

connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/react-apollo-learning",
  // process.env.MONGODB_URI || "mongodb+srv://AndrewYoung72:andy12345y@cluster0.vcwmv.mongodb.net/bikesDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

export default connection;

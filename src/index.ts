import { createServer } from 'http'
import 'dotenv/config';


const PORT = process.env.PORT || 4000;

const server = createServer(async (req, res) => {
  res.end("Hello world!")
})


server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));

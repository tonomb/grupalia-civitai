import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const url = `https://civitai.com/api/trpc/image.getInfinite?input=%7B%22json%22%3A%7B%22include%22%3A%5B%22cosmetics%22%5D%2C%22period%22%3A%22Week%22%2C%22sort%22%3A%22Most%20Reactions%22%2C%22types%22%3A%5B%22image%22%5D%2C%22browsingLevel%22%3A1%2C%22cursor%22%3Anull%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22cursor%22%3A%5B%22undefined%22%5D%7D%7D%7D`;

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "content-type": "application/json",
        referer: "https://civitai.com/images",
        "sec-ch-ua":
          '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "x-client": "web",
        "x-client-date": "1715890964402",
        "x-client-version": "3.0.125",
      },
    });

    const data = response.data.result.data;
    // const data = response.data.result.data.json.items;

    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});

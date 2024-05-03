import ImageCard from "./ImageCard";
import { render, screen } from "@testing-library/react";

const mockData = {
  id: 127497,
  url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27e77f3a-29c4-4cab-bcde-dd9eab587000/width=768/27e77f3a-29c4-4cab-bcde-dd9eab587000.jpeg",
  hash: "U6DvD,D%00^+00xu%MV?}=IV?c-p00%2x]Na",
  width: 768,
  height: 1152,
  nsfwLevel: "None",
  nsfw: false,
  browsingLevel: 1,
  createdAt: "2023-02-20T17:16:18.886Z",
  postId: 86634,
  stats: {
    cryCount: 152,
    laughCount: 1995,
    likeCount: 3599,
    dislikeCount: 118,
    heartCount: 823,
    commentCount: 142,
  },
  meta: {
    ENSD: "31337",
    Size: "512x768",
    seed: 3118275117,
    Model: "chilloutmix_NiPrunedFp32Fix",
    steps: 25,
    prompt:
      "best quality, (photorealistic:1.4), 1girl, (black shirt:1.2),  (grey long pants:1.2),(white suspenders:1.4), perfect female figure, full body, from back, white background, short hair, slim",
    sampler: "DPM++ SDE Karras",
    cfgScale: 12,
    "Clip skip": "2",
    resources: [
      {
        hash: "fc2511737a",
        name: "chilloutmix_NiPrunedFp32Fix",
        type: "model",
      },
    ],
    "Model hash": "fc2511737a",
    "Hires upscale": "1.5",
    "Hires upscaler": "Latent (bicubic antialiased)",
    negativePrompt:
      "nsfw, paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres,  ((monochrome)), ((grayscale))",
    "ControlNet Model": "control_openpose [b46e25f5]",
    "ControlNet Module": "none",
    "ControlNet Weight": "1",
    "ControlNet Enabled": "True",
    "Denoising strength": "0.5",
    "ControlNet Guidance Strength": "1",
  },
  username: "41e",
};

describe("<ImageCard />", () => {
  it("should render ImageCard", () => {
    render(<ImageCard imageData={mockData} />);

    expect(screen.getByTestId("image-card")).toBeInTheDocument();
  });
});

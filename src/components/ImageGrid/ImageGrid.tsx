import React, { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";

const mockData = [
  {
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
  },
  {
    id: 9173928,
    url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/cc242d6c-f960-4274-aa1d-f22a71e705ef/width=832/cc242d6c-f960-4274-aa1d-f22a71e705ef.jpeg",
    hash: "UA8N5},:Ioni~C#laKxaoznNwvx]XmRkVstR",
    width: 832,
    height: 1216,
    nsfwLevel: "None",
    nsfw: false,
    browsingLevel: 1,
    createdAt: "2024-04-04T21:22:50.789Z",
    postId: 1981754,
    stats: {
      cryCount: 144,
      laughCount: 336,
      likeCount: 2642,
      dislikeCount: 0,
      heartCount: 1095,
      commentCount: 14,
    },
    meta: {
      Size: "832x1216",
      seed: 1938345220,
      steps: 45,
      prompt:
        "AtomicHeartTwinsCosplay in absolute darkness, profoundly no light, holding black-pink heart shaped orbstaff, \npointed hat, translucent skin, Describe the captivating scene captured in the vintage photograph featuring a Bedouin artist skillfully swallowing a massive sword in the style of Final Fantasy, amidst a mesmerized audience. Provide details about the artist's attire, the sword's intricate design, and the expressions of the onlookers as they witness this extraordinary performance., amazing quality, masterpiece, best quality, hyper detailed, ultra detailed, UHD, perfect anatomy, portrait, dof, hyper-realism, majestic, awesome, inspiring, closeup, an weathered outworn old Fantasy cape, smooth, Closeup, by Dring, rust paint peelz, atmospheric haze, cinamatic composition, soft shadows, national geographic style",
      sampler: "DPM++ 2M",
      cfgScale: 5,
      clipSkip: 2,
      resources: [],
      negativePrompt:
        "easynegative, bad proportions, low resolution, bad, ugly, terrible, painting, 3d, render, comic, anime, manga, unrealistic, flat, watermark, signature, worst quality, low quality, normal quality, lowres, simple background, inaccurate limb, extra fingers, fewer fingers, missing fingers, extra arms, (extra legs:1.3), inaccurate eyes, bad composition, bad anatomy, error, extra digit, fewer digits, cropped, low res, worst quality, low quality, normal quality, jpeg artifacts, extra digit, fewer digits, trademark, watermark, artist's name, username, signature, text, words, human,",
      civitaiResources: [
        {
          type: "checkpoint",
          modelVersionId: 345685,
        },
        {
          type: "embed",
          weight: 1,
          modelVersionId: 9208,
        },
        {
          type: "lora",
          weight: 0.65,
          modelVersionId: 249861,
        },
        {
          type: "lora",
          weight: 0.6,
          modelVersionId: 258687,
        },
        {
          type: "lora",
          weight: 0.8,
          modelVersionId: 332071,
        },
        {
          type: "lora",
          weight: 0.9,
          modelVersionId: 413566,
        },
        {
          type: "lora",
          weight: 0.6,
          modelVersionId: 421757,
        },
        {
          type: "lora",
          weight: 0.8,
          modelVersionId: 426333,
        },
      ],
    },
    username: "Ajuro",
  },
  {
    id: 220973,
    url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ec61a21d-65ff-440e-7b50-455f60f3c200/width=1024/ec61a21d-65ff-440e-7b50-455f60f3c200.jpeg",
    hash: "UFGG5_K5kpXS}?X8-9of1fof}XsoJTof-Uj[",
    width: 1024,
    height: 1536,
    nsfwLevel: "None",
    nsfw: false,
    browsingLevel: 1,
    createdAt: "2023-03-09T20:55:00.313Z",
    postId: 113037,
    stats: {
      cryCount: 185,
      laughCount: 766,
      likeCount: 2430,
      dislikeCount: 953,
      heartCount: 651,
      commentCount: 93,
    },
    meta: null,
    username: "Zavy",
  },
  {
    id: 9517243,
    url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/695375a4-d7af-461e-ae6f-5ee960d34caa/width=832/695375a4-d7af-461e-ae6f-5ee960d34caa.jpeg",
    hash: "UCF=UA~WrrE2?bNttQSMMy^*%1IqIpxZM_E1",
    width: 832,
    height: 1216,
    nsfwLevel: "None",
    nsfw: false,
    browsingLevel: 1,
    createdAt: "2024-04-09T17:30:15.305Z",
    postId: 2061174,
    stats: {
      cryCount: 149,
      laughCount: 720,
      likeCount: 2166,
      dislikeCount: 0,
      heartCount: 969,
      commentCount: 14,
    },
    meta: {
      Size: "832x1216",
      seed: 3912581945,
      Model: "zavychromaxl_v60",
      steps: 20,
      hashes: {
        model: "835d65144c",
        "lora:cashbaba": "e6fb445891ee",
        "lora:xl_more_art-full_v1": "fe3b4816be83",
      },
      prompt:
        "image of a hand offering money to a fishmonger cat, holding fish, 8k, ultra detailed, at the market, <lora:cashbaba:0.6>  <lora:xl_more_art-full_v1:0.5>",
      Version: "v1.8.0",
      sampler: "DPM++ 2M SDE Karras",
      cfgScale: 4.5,
      resources: [
        {
          hash: "e6fb445891ee",
          name: "cashbaba",
          type: "lora",
          weight: 0.6,
        },
        {
          hash: "fe3b4816be83",
          name: "xl_more_art-full_v1",
          type: "lora",
          weight: 0.5,
        },
        {
          hash: "835d65144c",
          name: "zavychromaxl_v60",
          type: "model",
        },
      ],
      "Model hash": "835d65144c",
    },
    username: "Tugoff",
  },
  {
    id: 295008,
    url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/079b552b-9ef8-419d-e104-82b2a6be4400/width=1152/079b552b-9ef8-419d-e104-82b2a6be4400.jpeg",
    hash: "UHL4KVTJ01D%-:_NtlDipw%2IUsoWX?HDix]",
    width: 1152,
    height: 1728,
    nsfwLevel: "None",
    nsfw: false,
    browsingLevel: 1,
    createdAt: "2023-03-21T14:26:52.348Z",
    postId: 108324,
    stats: {
      cryCount: 86,
      laughCount: 177,
      likeCount: 2100,
      dislikeCount: 13,
      heartCount: 1637,
      commentCount: 35,
    },
    meta: {
      Size: "768x1152",
      seed: 1684432449,
      Model: "chilloutmix_NiPrunedFp32Fix",
      steps: 30,
      prompt:
        "(RAW photo, best quality), (realistic, photo-realistic:1.3), masterpiece, an extremely delicate and beautiful, extremely detailed, CG, unity , 2k wallpaper, Amazing, finely detail, light smile, extremely detailed CG unity 8k wallpaper, huge filesize, ultra-detailed, highres, absurdres, soft light, (((medium hair:1.3), short bang, pink hair, floating hair novafrogstyle)), beautiful detailed girl, detailed fingers, extremely detailed eyes and face, beautiful detailed nose, beautiful detailed eyes, long eyelashes, light on face, looking at viewer, (closed mouth:1.2), 1girl, cute, young, mature face, (full body:1.3), ((small breasts)), realistic face, realistic body, beautiful detailed thigh, (ulzzang-6500-v1.1:0.8), <lora:koreanDollLikeness_v15:0.4>, business suit, cross-laced clothes, collared shirt, open clothes, in office, detailed office, open cardigan, black thighhighs, miniskirt, black underwear, unbuttoned shirt,",
      sampler: "DPM++ SDE Karras",
      cfgScale: 7,
      "Clip skip": "2",
      "Mask blur": "4",
      resources: [
        {
          name: "koreanDollLikeness_v15",
          type: "lora",
          weight: 0.4,
        },
        {
          hash: "fc2511737a",
          name: "chilloutmix_NiPrunedFp32Fix",
          type: "model",
        },
      ],
      "Model hash": "fc2511737a",
      negativePrompt:
        "paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans, extra fingers, fewer fingers, ((watermark:2)), (white letters:1), (multi nipples), bad anatomy, bad hands, text, error, missing fingers, missing arms, missing legs, extra digit, fewer digits, cropped, worst quality, jpeg artifacts, signature, watermark, username, bad feet, {Multiple people}, blurry, poorly drawn hands, poorly drawn face, mutation, deformed, extra limbs, extra arms, extra legs, malformed limbs, fused fingers, too many fingers, long neck, cross-eyed, mutated hands, polar lowres, bad body, bad proportions, gross proportions, wrong feet bottom render, abdominal stretch, briefs, knickers, kecks, thong, {{fused fingers}}, {{bad body}},\nbad-picture-chill-75v,  ng_deepnegative_v1_75t, EasyNegative, bad proportion body to legs, wrong toes, extra toes, missing toes, weird toes, 2 body, 2 pussy, 2 upper, 2 lower, 2 head, 3 hand, 3 feet, extra long leg, super long leg, mirrored image, mirrored noise, (bad_prompt_version2:0.8), aged up, old,",
      "Denoising strength": "0.2",
      "SD upscale overlap": "96",
      "SD upscale upscaler": "Remacri 4x",
    },
    username: "lmrlmax379",
  },
];

export default function ImageGrid() {
  const [images, setImages] = useState(mockData);

  return (
    <div
      data-testid="imageGrid"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-6"
    >
      {images.map((image) => {
        return <ImageCard key={image.id} imageData={image} />;
      })}
    </div>
  );
}

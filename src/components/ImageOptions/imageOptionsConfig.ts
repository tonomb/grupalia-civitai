import Bookmark from "../../ui/bookmark.svg";
import Eye from "../../ui/eye.svg";
import Flag from "../../ui/flag.svg";
import EyeOff from "../../ui/eye-off.svg";
import Send from "../../ui/send.svg";
import Download from "../../ui/download.svg";

export const imageOptions = [
  {
    action: "View Post",
    icon: Eye,
    run: function (imageData: any) {
      const anchor = document.createElement("a");
      anchor.href = imageData.url;

      document.body.appendChild(anchor);

      anchor.click();

      document.body.removeChild(anchor);
    },
  },
  {
    action: "Share image",
    icon: Send,
    run: function (imageData: any) {
      navigator.clipboard
        .writeText(imageData.url)
        .then(() => {
          window.alert("Image copied to clipboard");
        })
        .catch((err) => {
          console.error("Unable to copy text: ", err);
        });
    },
  },
  {
    action: "Download image",
    icon: Download,
    run: async function (imageData: any) {
      const image = await fetch(imageData.url);
      const imageBlog = await image.blob();
      const imageURL = URL.createObjectURL(imageBlog);

      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "cliviai";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },

  //   {
  //     action: "Report Image",
  //     icon: Flag,
  //     run: function (imageData: any) {
  //       console.log(this.action);
  //     },
  //   },
  //   {
  //     action: "Hide this Image",
  //     icon: EyeOff,
  //     run: function (imageData: any) {
  //       console.log(this.action);
  //     },
];

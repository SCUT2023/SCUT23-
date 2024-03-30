import { commentPlugin } from "vuepress-plugin-comment2";

// .vuepress/config.ts
export default {
  plugins: [
    commentPlugin({
      provider: "Artalk", // Artalk | Giscus | Waline | Twikoo

      // 在这里放置其他选项
      // ...
    }),
  ],
};

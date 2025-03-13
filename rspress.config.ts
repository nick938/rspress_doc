import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "开发文档",
  // description: '用来开发cbms的文档',
  base:'rspress_doc',
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
    lastUpdated: true,
    lastUpdatedText:'最后更新于',
    prevPageText: "上一篇",
    nextPageText: "下一篇",
  },
});

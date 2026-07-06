import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VSCode Clone",
  isFolder: true,
  children: [
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "FileComponent.tsx",
              isFolder: false,
              content: "FileComponent content",
            },
            {
              name: "SVG",
              isFolder: true,
              children: [
                {
                  name: "File.tsx",
                  isFolder: false,
                  content: "File.tsx content",
                },
              ],
            },
          ],
        },
        {
          name: "App.tsx",
          isFolder: false,
          content: "App.tsx content",
        },
        {
          name: "index.ts",
          isFolder: false,
          content: "index.ts content",
        },
        {
          name: "test",
          isFolder: true,
          children: [
            {
              name: "hello.html",
              isFolder: false,
              content: "index.ts content",
            },
            {
              name: "hello.css",
              isFolder: false,
              content: "index.ts content",
            },
            {
              name: "hello.js",
              isFolder: false,
              content: "index.ts content",
            },
          ],
        },
      ],
    },
  ],
};

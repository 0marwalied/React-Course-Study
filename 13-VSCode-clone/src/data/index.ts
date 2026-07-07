import type { IFile } from "../interfaces";
import { v1 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VSCode Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "FileComponent.tsx",
              isFolder: false,
              content: "FileComponent content",
            },
            {
              id: uuid(),
              name: "SVG",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "File.tsx",
                  isFolder: false,
                  content: "File.tsx content",
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: "App.tsx content",
        },
        {
          id: uuid(),
          name: "index.ts",
          isFolder: false,
          content: "index.ts content",
        },
        {
          id: uuid(),
          name: "test",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "hello.html",
              isFolder: false,
              content: "index.ts content",
            },
            {
              id: uuid(),
              name: "hello.css",
              isFolder: false,
              content: "index.ts content",
            },
            {
              id: uuid(),
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

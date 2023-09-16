import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from 'rehype-prism-plus';
import rehypeExternalLink from 'rehype-external-links';
import rehypeShiftHeading from 'rehype-shift-heading';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: any = {
  readingTime: {
    type: "json",
    resolve: (doc: any) => readingTime(doc.body.raw),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    icon: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    categories: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    image: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/contents",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeExternalLink,
      rehypeAccessibleEmojis,
      () => rehypeShiftHeading(
        { shift: 1 },
      ),
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});

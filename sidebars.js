// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "WaveUI",
      items: [
        "wave-ui/intro"
      ],
    },
    {
      type: "category",
      label: "WaveEngine",
      items: [
        "wave-engine/intro"
      ],
    },
    {
      type: "category",
      label: "Guias Rápidos",
      items: [
        "quick-guides/intro"
      ],
    },
    {
      type: "category",
      label: "Docusaurus Básico",
      items: [
        "tutorial-basics/create-a-document",
        "tutorial-basics/create-a-page",
        "tutorial-basics/create-a-blog-post",
        "tutorial-basics/deploy-your-site",
        "tutorial-basics/markdown-features",
        "tutorial-basics/congratulations"
      ],
    },
    {
      type: "category",
      label: "Docusaurus Extra",
      items: [
        "tutorial-extras/manage-docs-versions",
        "tutorial-extras/translate-your-site",
      ],
    },
  ],
};

export default sidebars;

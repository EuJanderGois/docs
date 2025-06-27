
// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  
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

module.exports = sidebars;

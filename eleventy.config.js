import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "src/_components/**/*.webc",
	});
	eleventyConfig.addPassthroughCopy("public");
	eleventyConfig.setInputDirectory("src");
	eleventyConfig.addGlobalData("layout", "template.html");
};

export const config = {
  htmlTemplateEngine: "webc",
};
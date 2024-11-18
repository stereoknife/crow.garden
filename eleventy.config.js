import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_components/**/*.webc",
	});
};

export const config = {
  htmlTemplateEngine: "webc",
};
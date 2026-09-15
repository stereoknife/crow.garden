export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("public");
	eleventyConfig.setInputDirectory("src");
  eleventyConfig.addGlobalData("layout", "template.html");
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft) {
			return false;
		}
	});
};

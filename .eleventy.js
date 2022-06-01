module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/js");
	eleventyConfig.addPassthroughCopy("src/img");

	return {
		pathPrefix: "/mybus-v2/",
		dir: {
			input: "src",
			output: "docs"
		}
	}
}
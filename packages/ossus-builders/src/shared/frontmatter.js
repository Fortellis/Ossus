function parseFrontMatter(fm) {
  let data = {};
  let matches;
  const re2 = /([^\n]+):\s{1}([^\n]+)\n/g;

  while ((matches = re2.exec(fm)) !== null) {
    data[matches[1]] = matches[2];
  }
  return data;
}

function extractFrontmatter(src) {
  const re = /---\n((([^\n]+:)\s{1}[^\n]+\n)+)---/;
  const res = re.exec(src);
  if (!res) {
    return null;
  }
  return parseFrontMatter(res[1]);
}

module.exports = {
  extractFrontmatter,
  parseFrontMatter
};

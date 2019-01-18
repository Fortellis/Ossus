const wpm = 225; // Average adult reading speed

const wordCount = (options = {
  callback: () => { }
}) => {
  let count = 0;
  const findText = (node) => {
    if (node.type === 'text') {
      count += node.value.split(/\s+/).length;
      return;
    }
    if (node.children) {
      node.children.forEach(child => findText(child));
    }
  };
  return (root) => {
    findText(root);
    options.callback(count);
  };
};

const readTime = (words) => {
  return Math.ceil(words / wpm);
};

export {
  wordCount,
  readTime
};
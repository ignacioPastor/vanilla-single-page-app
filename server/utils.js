const getFileNameFromUrl = url => {
  if (!url) {
    return '';
  }
  const sections = url.split('/');
  if (sections && sections.length) {
    return sections[sections.length - 1];
  }  
};

module.exports = {
  getFileNameFromUrl,
};

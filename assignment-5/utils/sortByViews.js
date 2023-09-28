const sortByViews = (a, b) => {
  return parseFloat(b.views) - parseFloat(a.views);
}

module.exports.sortByViews = sortByViews;
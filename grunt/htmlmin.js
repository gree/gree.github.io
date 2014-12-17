module.exports =  {
  index: {
    options: {
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeCDATASectionsFromCDATA: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeOptionalTags: false,
      removeEmptyElements: false
    },
    files: {
      'dest/index.html': 'src/index.html'
    }
  }
};

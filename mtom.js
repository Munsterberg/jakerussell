const mediumToMarkdown = require('medium-to-markdown')

mediumToMarkdown
  .convertFromUrl('https://medium.com/@iamjwr/how-to-find-a-remote-web-developer-job-e3a05f3cf1d7')
  .then(function (markdown) {
    console.log(markdown) //=> Markdown content of medium post
  })

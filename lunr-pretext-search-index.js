var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   https:\/\/mathstodon.xyz\/@suburbanlion   https:\/\/mathstodon.xyz\/@suburbanlion   copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is this?",
  "body": " What is this?  I've been trying to work my way though \"Conceptual Mathematics\" by Lawvere and Schanuel on my own and it's been kind of difficult. Part of the problem is that I don't have any feedback about whether my solutions to exercises are correct or not. In an effort to resolve this, I've decided to publish my solutions as I go through it so I can discuss them on social media.  With that in mind, it seemed like this would be a good opportunity for me to simulaneously learn how to work with PreTeXt . I've done a lot of work using LaTeX for equations before but I'm expecting this content gives me some much needed practice rendering diagrams with the TiKz package.  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

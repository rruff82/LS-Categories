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
  "id": "about",
  "level": "1",
  "url": "about.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is this?",
  "body": " What is this?  I've been trying to work my way though \"Conceptual Mathematics\" by Lawvere and Schanuel (herein \"L&S\") on my own and it's been kind of difficult. Part of the problem is that I don't have any feedback about whether my solutions to exercises are correct or not. In an effort to resolve this, I've decided to publish my solutions as I go through it so I can discuss them on social media.  With that in mind, it seemed like this would be a good opportunity for me to simulaneously learn how to work with PreTeXt . I've done a lot of work using latex for equations before but I'm expecting this content gives me some much needed practice rendering diagrams with the TiKz package.  To start, I went through my old notes on L&S from my first attempted reading. It looks like I made to to around session 11 before I started really getting lost. Furthermore, the erasable ink I had used to solve the exercises originally had faded significantly since I originally worked on this. Since I'm expecting one of my major difficulties with this to be recreating the diagrams, I figured restarting from the very beginning would be the best way forward.  I know myself better than to make promises about the rate I get through this, but part of me thinks it would be fun to do \"cat theory on caturday\". Giving myself a day of the week to finish by might give me the push I need to get it done. Besides, everything is better with cats.  "
},
{
  "id": "session1",
  "level": "1",
  "url": "session1.html",
  "type": "Section",
  "number": "1.2",
  "title": "Session 1",
  "body": " Session 1  Since L&S start Session 1 prior to \"Part 1\", I figured I should do the same. I'm presuming the reader has access to the source material and hope that my abbreviated reproduction of the prompts this way is \"fair use\". After all, calling them \"exercises\" implies they're meant for me to work out, no?   Exercise 1:   \"...other examples of combining two objects to get a third...\"    Since I was already thinking about cats in the context of category theory, my first thought was perhaps might satisfy the pattern here. The way my cats seem to behave is based in part on certain natural instincts to hunt and hide, but they have been brought up in an environment where those tendencies manifest as behaviors that we classify as cute and playful. On closer inspection, however, I became a little less confident in this when I tried to identify the \"maps\".  The diagrams in session 1 had the following structure:   A typical diagram of the examples considered in L&S \"Session 1\"      It didn't really make sense to me to think of \"behavior\" as A in this diagram and nature\/nuture as B\/C because I could think of many situations where a single behavior might make sense in different environments. It seems more natural to think of behavior as function of environment rather than the environment as a function of the behavior. I feel like the qualities I identified might more accurately be arranged like so:   Alternate explanation structure of behavior (A), nature (B), and nurture (C)      I think some of this unease comes from the complexity associated with behavior. I think on some level I'm confusing a \"behavioral genotype\" with a \"behavioral phenotype\". Being a cat creates a behavior profile of the actions they might engage in, but the environment selects for which actions are allowed to manifest.  Let's define as \"the set of animals\". We can consider \"instincts\" as a map that maps each animal to its \"natural behavior profile\" in set B. We can also consider \"selection\" as a map that maps each animal to an \"environmental reward profile\" in set C. Under these definitions, it seems reasonable to think of the composite map (or ) producing an \"observed behavior profile\" in set D.   Full diagram of behavior expression as maps.      As an example of these maps in action, consider the case of my cats \"playing with toys\". Given that they are cats, I know that they have certain hunting related instincts as a result. However, I also restrict their environment so that they have stuffed toys instead of live prey. What we percieve as \"playing\" is really a proxy for murderous insticts with no where else to go created by the combination of their instincts and the environment.  I think I can see how this additional structure helped to clarify what had started as an vague idea. It makes a lot more sense to think of mapping from a specific cat to a behavior profile, than trying to map from a cat's behavior profile to a specific environment.     Exercise 2:   \"...describe an experiment for deciding whether two nearby points are at the same level...\"    I feel there's an obvious answer to this question: a level. By using a bit of water in a clear container, you could convievably build a rudamentary level by comparing the slant of the water against a marked line. The only tricky part is designing it so you could align it with the points you want to compare, but the basic idea is that if the points are level then the water wouldn't tilt. The authors' use of the word \"level\" in the prompt makes me think they were heavily leading the reader towards something like this. A level makes it easy to hang pictures expressly because it removes the need to measure up from the floor.    "
},
{
  "id": "example-1",
  "level": "2",
  "url": "session1.html#example-1",
  "type": "Example",
  "number": "1.2.1",
  "title": "Exercise 1:.",
  "body": " Exercise 1:   \"...other examples of combining two objects to get a third...\"    Since I was already thinking about cats in the context of category theory, my first thought was perhaps might satisfy the pattern here. The way my cats seem to behave is based in part on certain natural instincts to hunt and hide, but they have been brought up in an environment where those tendencies manifest as behaviors that we classify as cute and playful. On closer inspection, however, I became a little less confident in this when I tried to identify the \"maps\".  The diagrams in session 1 had the following structure:   A typical diagram of the examples considered in L&S \"Session 1\"      It didn't really make sense to me to think of \"behavior\" as A in this diagram and nature\/nuture as B\/C because I could think of many situations where a single behavior might make sense in different environments. It seems more natural to think of behavior as function of environment rather than the environment as a function of the behavior. I feel like the qualities I identified might more accurately be arranged like so:   Alternate explanation structure of behavior (A), nature (B), and nurture (C)      I think some of this unease comes from the complexity associated with behavior. I think on some level I'm confusing a \"behavioral genotype\" with a \"behavioral phenotype\". Being a cat creates a behavior profile of the actions they might engage in, but the environment selects for which actions are allowed to manifest.  Let's define as \"the set of animals\". We can consider \"instincts\" as a map that maps each animal to its \"natural behavior profile\" in set B. We can also consider \"selection\" as a map that maps each animal to an \"environmental reward profile\" in set C. Under these definitions, it seems reasonable to think of the composite map (or ) producing an \"observed behavior profile\" in set D.   Full diagram of behavior expression as maps.      As an example of these maps in action, consider the case of my cats \"playing with toys\". Given that they are cats, I know that they have certain hunting related instincts as a result. However, I also restrict their environment so that they have stuffed toys instead of live prey. What we percieve as \"playing\" is really a proxy for murderous insticts with no where else to go created by the combination of their instincts and the environment.  I think I can see how this additional structure helped to clarify what had started as an vague idea. It makes a lot more sense to think of mapping from a specific cat to a behavior profile, than trying to map from a cat's behavior profile to a specific environment.   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "session1.html#example-2",
  "type": "Example",
  "number": "1.2.5",
  "title": "Exercise 2:.",
  "body": " Exercise 2:   \"...describe an experiment for deciding whether two nearby points are at the same level...\"    I feel there's an obvious answer to this question: a level. By using a bit of water in a clear container, you could convievably build a rudamentary level by comparing the slant of the water against a marked line. The only tricky part is designing it so you could align it with the points you want to compare, but the basic idea is that if the points are level then the water wouldn't tilt. The authors' use of the word \"level\" in the prompt makes me think they were heavily leading the reader towards something like this. A level makes it easy to hang pictures expressly because it removes the need to measure up from the floor.   "
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

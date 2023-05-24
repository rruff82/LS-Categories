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
  "id": "article1",
  "level": "1",
  "url": "article1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Article 1: Sets, maps, composition",
  "body": " Article 1: Sets, maps, composition  This is technically my second time through this content and I think I made some errors in my original solutions to exercises 2-5. Rather than ignore my mistakes, I've made the decision to recreate them here and explain why I think I was wrong afterward. I hope this method will give more insight into my thought process. To prevent accidental spoilers, this will be treated as a \"Hidden Exercise 10\".   Exercise 1:   \"...understand how we got diagrams...\"    Okay let's start by recreating diagram (i).   The original associative law diagram (i) from L&S Article 1.      For diagram (iv), we drop set C and connect B directly to D.   Completed associative law diagram (iv) from L&S Article 1.      To get from here to diagram (v), we drop set B and connect A directly to D.   Completed associative law diagram (v) from L&S Article 1.      As expected, this diagram is an exact match of diagram (iii).     Exercise 2   How many different maps are there with domain and codomain ?...    So I approached this like I would an algebraic function like , but instead of feeding in a number I'm feeding in John ( ), Mary ( ) or Sam ( ) and getting out a breakfast order at a diner that only serves eggs ( ) or coffee ( ) and has a 1 item limit per order.  I know that the number of outcomes is going to be the same for each person, so it made sense to focus on one person at a time. I imagined John's breakfast order, , as having 3 possible outcomes.   John orders eggs:  John orders coffee:  John fails to place an order at all: is undefined   Likewise, Mary and Sam have the same 3 possible outcomes: {eggs,coffee,undefined}. Since these events are independent of each other, the total number of possible outcomes is maps in total.     Exercise 3   Same, but for maps     I thought of this function like the \"favorite person\" map example from the reading. Using John as an example, I imagined 4 possible character roles in a hypothetical Hollywood love triangle:   John is in love with Mary.  John is in love with Sam.  John is a narcissist, in love with himself:  John is a psychopath, incapable of love: is undefined   Given an analogous set of 4 outcomes for Mary and Sam, the total number of possible plot outcomes is .     Exercise 4   Same, but for maps     I imagined this one as a \"mystery breakfast order\". I'm the a waiter in a diner delivering one order of eggs and one order of coffee to a table where John, Mary, and Sam are seated. The map tells me who ordered a given dish. Like before, I'll consider one example at a time. There are 4 possible outcomes for the source of the eggs:   John ordered the eggs:  Mary ordered the eggs:  Sam ordered the eggs:  Nobody ordered eggs: is undefined   Since there must likewise be 4 sources for the coffee, the total number of possible outcomes is .     Exercise 5   Same, but for maps     At this point I had observed a pattern and attempted to generalize. Following my reasoning from exercises 2-4, I notice all my answers fit a pattern:   In exercise 5, the size of the domain and codmain would each be 2. Evaluating the expression above gives us possible maps.     Exercise 6   How many maps satisfy ?    This is where I started to notice some problems with my previous reasoning. In order for me to talk about the properties of , it didn't make sense for to be \"undefined\" for an element in my domain. If I didn't get something \"out\", I wouldn't be able to feed it back in. So instead of considering all possible \"love triangles\" I identified earlier, I could narrow my search down to a more limited set of maps by excluding the \"psychopaths\" from my romance movies because they make it impossible to produce a sequel (more on that idea later).  This narrowed my search, but 27 is still too many for me too sort out by hand so I started looking for ways to break it down further. I knew I could satisfy the constraint with the identity map because clearly . I also know I could satisfy with a \"constant function\" such as the following:  Furthermore, there would need to be a total of 3 such \"constant functions\" because you'd need one for each of the 3 possible destinations. At that point it seemed clear I was still missing some. If I could construct a function with 1 arrow to each point and also a function with 3 arrows to a single point, it seemed reasonable to assume there'd be a class of maps with 2 arrows leading to a single point.  Let's consider the case where that point with two arrows leading in to be \"John\". One of the arrows leading to John has to be from himself for to be true, but the other arrow could originate at either Mary or Sam. Given these two possible maps exist for each person, we'd have maps of this type.  Putting everything together, some patterns seem to emerge when I listed these out in a table using binomials.     number of fixed points  number of maps  as binomial    1  3     2  6     3  1      Adding up all of these up gives us total of possible maps.     Exercise 7   How many maps satisfy ?    This was made even easier by the pattern I noticed in the previous example. Given that there are only two elements in the domain, there are maps with 1 fixed point and map with 2 fixed points (namely, ) for total of .     Exercise 8   ... for which ?...    None? B has fewer choices in it than A, so when f maps from A to B it must destroy at least one of them. The map g would not be able to produce 3 outputs from only 2 inputs, so there's no possible way for the composition to cover all elements of A.     Exercise 9   ... for which ?...    I started here by considering a blank diagram that would fit the composition, and start filling it in one point at a time.   Empty diagram for      Since I know each point has to end up back where it started, the only real \"choice\" is which of the 3 middle points the path goes through.   Diagram of potential paths for first point in      Once I fix the first path, the next point only has two possible intermediary points that it can go through.   Diagram of potential paths for second point in      Given that there were 3 choices for the first path and 2 choices for the second, there's a total of paths altogether.  This also makes sense as the binomial , because we have 3 possible intermediary points and we need to choose 2 of them.     Exercise 10   [hidden]    What first clued me in that my answers to exercises 2-5 might be wrong was the hint about \"BOOKKEEPING rules\" at the very end of the section. Looking back, it's seem like my programming background may have clouded my understanding of \"map\".  I was thinking about a \"map\" like I would a \"function\" in a program. In this analogy I had interpreted \"domain\" as my \"input type\" and \"codomain\" as \"output type\". The flaw in this reasoning is that I was allowing \"functions\" to \"error\", which is not true under the definitions of \"map\" and \"domain\" that were presented. If the map produced something \"undefined\", it would be inaccurate to include in the domain of to begin with.  This means that the generalized formula I came up with earlier is \"off by 1\", and the corrected formula should be as follows:   Under these revised definitions, the answers to excercises 2-5 should be as follows:     Excercise  Size of domain  Size of codomain  Expression  Result    2  3  2  2^3  8    3  3  3  3^3  27    4  2  3  3^2  9    5  2  2  2^2  4     I can see why these definitions simplify the process of talking about \"bookkeeping\" for the number maps. It's much easier to count the maps if we limit ourselves to the ones that are well-formed to start with. I'm left wondering if there's a situation where having an \"undefined\" output token like I used might be a useful construct, but the costs seem to far outweigh the benefits.  I can also see some programming parallels here between the \"switch\" statement in C-like languages and the \"match\" statement in Rust. The Rust compiler goes an extra step to verify that every possible outcome has been handled before even attempting to complile the code you give it. This provides an extra level of assurance that these functions will behave as expected.    "
},
{
  "id": "example-3",
  "level": "2",
  "url": "article1.html#example-3",
  "type": "Example",
  "number": "2.1.1",
  "title": "Exercise 1:.",
  "body": " Exercise 1:   \"...understand how we got diagrams...\"    Okay let's start by recreating diagram (i).   The original associative law diagram (i) from L&S Article 1.      For diagram (iv), we drop set C and connect B directly to D.   Completed associative law diagram (iv) from L&S Article 1.      To get from here to diagram (v), we drop set B and connect A directly to D.   Completed associative law diagram (v) from L&S Article 1.      As expected, this diagram is an exact match of diagram (iii).   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "article1.html#example-4",
  "type": "Example",
  "number": "2.1.5",
  "title": "Exercise 2.",
  "body": " Exercise 2   How many different maps are there with domain and codomain ?...    So I approached this like I would an algebraic function like , but instead of feeding in a number I'm feeding in John ( ), Mary ( ) or Sam ( ) and getting out a breakfast order at a diner that only serves eggs ( ) or coffee ( ) and has a 1 item limit per order.  I know that the number of outcomes is going to be the same for each person, so it made sense to focus on one person at a time. I imagined John's breakfast order, , as having 3 possible outcomes.   John orders eggs:  John orders coffee:  John fails to place an order at all: is undefined   Likewise, Mary and Sam have the same 3 possible outcomes: {eggs,coffee,undefined}. Since these events are independent of each other, the total number of possible outcomes is maps in total.   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "article1.html#example-5",
  "type": "Example",
  "number": "2.1.6",
  "title": "Exercise 3.",
  "body": " Exercise 3   Same, but for maps     I thought of this function like the \"favorite person\" map example from the reading. Using John as an example, I imagined 4 possible character roles in a hypothetical Hollywood love triangle:   John is in love with Mary.  John is in love with Sam.  John is a narcissist, in love with himself:  John is a psychopath, incapable of love: is undefined   Given an analogous set of 4 outcomes for Mary and Sam, the total number of possible plot outcomes is .   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "article1.html#example-6",
  "type": "Example",
  "number": "2.1.7",
  "title": "Exercise 4.",
  "body": " Exercise 4   Same, but for maps     I imagined this one as a \"mystery breakfast order\". I'm the a waiter in a diner delivering one order of eggs and one order of coffee to a table where John, Mary, and Sam are seated. The map tells me who ordered a given dish. Like before, I'll consider one example at a time. There are 4 possible outcomes for the source of the eggs:   John ordered the eggs:  Mary ordered the eggs:  Sam ordered the eggs:  Nobody ordered eggs: is undefined   Since there must likewise be 4 sources for the coffee, the total number of possible outcomes is .   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "article1.html#example-7",
  "type": "Example",
  "number": "2.1.8",
  "title": "Exercise 5.",
  "body": " Exercise 5   Same, but for maps     At this point I had observed a pattern and attempted to generalize. Following my reasoning from exercises 2-4, I notice all my answers fit a pattern:   In exercise 5, the size of the domain and codmain would each be 2. Evaluating the expression above gives us possible maps.   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "article1.html#example-8",
  "type": "Example",
  "number": "2.1.9",
  "title": "Exercise 6.",
  "body": " Exercise 6   How many maps satisfy ?    This is where I started to notice some problems with my previous reasoning. In order for me to talk about the properties of , it didn't make sense for to be \"undefined\" for an element in my domain. If I didn't get something \"out\", I wouldn't be able to feed it back in. So instead of considering all possible \"love triangles\" I identified earlier, I could narrow my search down to a more limited set of maps by excluding the \"psychopaths\" from my romance movies because they make it impossible to produce a sequel (more on that idea later).  This narrowed my search, but 27 is still too many for me too sort out by hand so I started looking for ways to break it down further. I knew I could satisfy the constraint with the identity map because clearly . I also know I could satisfy with a \"constant function\" such as the following:  Furthermore, there would need to be a total of 3 such \"constant functions\" because you'd need one for each of the 3 possible destinations. At that point it seemed clear I was still missing some. If I could construct a function with 1 arrow to each point and also a function with 3 arrows to a single point, it seemed reasonable to assume there'd be a class of maps with 2 arrows leading to a single point.  Let's consider the case where that point with two arrows leading in to be \"John\". One of the arrows leading to John has to be from himself for to be true, but the other arrow could originate at either Mary or Sam. Given these two possible maps exist for each person, we'd have maps of this type.  Putting everything together, some patterns seem to emerge when I listed these out in a table using binomials.     number of fixed points  number of maps  as binomial    1  3     2  6     3  1      Adding up all of these up gives us total of possible maps.   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "article1.html#example-9",
  "type": "Example",
  "number": "2.1.11",
  "title": "Exercise 7.",
  "body": " Exercise 7   How many maps satisfy ?    This was made even easier by the pattern I noticed in the previous example. Given that there are only two elements in the domain, there are maps with 1 fixed point and map with 2 fixed points (namely, ) for total of .   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "article1.html#example-10",
  "type": "Example",
  "number": "2.1.12",
  "title": "Exercise 8.",
  "body": " Exercise 8   ... for which ?...    None? B has fewer choices in it than A, so when f maps from A to B it must destroy at least one of them. The map g would not be able to produce 3 outputs from only 2 inputs, so there's no possible way for the composition to cover all elements of A.   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "article1.html#example-11",
  "type": "Example",
  "number": "2.1.13",
  "title": "Exercise 9.",
  "body": " Exercise 9   ... for which ?...    I started here by considering a blank diagram that would fit the composition, and start filling it in one point at a time.   Empty diagram for      Since I know each point has to end up back where it started, the only real \"choice\" is which of the 3 middle points the path goes through.   Diagram of potential paths for first point in      Once I fix the first path, the next point only has two possible intermediary points that it can go through.   Diagram of potential paths for second point in      Given that there were 3 choices for the first path and 2 choices for the second, there's a total of paths altogether.  This also makes sense as the binomial , because we have 3 possible intermediary points and we need to choose 2 of them.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "article1.html#example-12",
  "type": "Example",
  "number": "2.1.17",
  "title": "Exercise 10.",
  "body": " Exercise 10   [hidden]    What first clued me in that my answers to exercises 2-5 might be wrong was the hint about \"BOOKKEEPING rules\" at the very end of the section. Looking back, it's seem like my programming background may have clouded my understanding of \"map\".  I was thinking about a \"map\" like I would a \"function\" in a program. In this analogy I had interpreted \"domain\" as my \"input type\" and \"codomain\" as \"output type\". The flaw in this reasoning is that I was allowing \"functions\" to \"error\", which is not true under the definitions of \"map\" and \"domain\" that were presented. If the map produced something \"undefined\", it would be inaccurate to include in the domain of to begin with.  This means that the generalized formula I came up with earlier is \"off by 1\", and the corrected formula should be as follows:   Under these revised definitions, the answers to excercises 2-5 should be as follows:     Excercise  Size of domain  Size of codomain  Expression  Result    2  3  2  2^3  8    3  3  3  3^3  27    4  2  3  3^2  9    5  2  2  2^2  4     I can see why these definitions simplify the process of talking about \"bookkeeping\" for the number maps. It's much easier to count the maps if we limit ourselves to the ones that are well-formed to start with. I'm left wondering if there's a situation where having an \"undefined\" output token like I used might be a useful construct, but the costs seem to far outweigh the benefits.  I can also see some programming parallels here between the \"switch\" statement in C-like languages and the \"match\" statement in Rust. The Rust compiler goes an extra step to verify that every possible outcome has been handled before even attempting to complile the code you give it. This provides an extra level of assurance that these functions will behave as expected.   "
},
{
  "id": "sec-session2",
  "level": "1",
  "url": "sec-session2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Session 2",
  "body": " Session 2  It feels kind of silly to post solutions to a problem set that includes the answers already, but this seems like a good opportunity to validate my generalization from last week.   Problems on the number of maps from one set to another   How many maps...    We have answers here, so let's confirm the results of the generalization from Article 1:     #    Expression  Result  Correct    1  4  1   1  YES    2  1  4   4  YES    3  0  4   1  YES    4  4  0   0  YES    5  0  0   \"it depends\"  \"mostly\"     The generalization seems to hold up, provided we define our exponential operator in such a way that . This is a common practice, but I've also seen situations where is left undefined instead. In this context, the answer of 1 to problem 5 makes more sense than than the alternative. In programming terms, it seems perfectly reasonable to think of \"no op\" as a \"function\" so there should be an analogous \"null map\" that maps from nothing to nothing.    "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-session2.html#example-13",
  "type": "Example",
  "number": "2.2.1",
  "title": "Problems on the number of maps from one set to another.",
  "body": " Problems on the number of maps from one set to another   How many maps...    We have answers here, so let's confirm the results of the generalization from Article 1:     #    Expression  Result  Correct    1  4  1   1  YES    2  1  4   4  YES    3  0  4   1  YES    4  4  0   0  YES    5  0  0   \"it depends\"  \"mostly\"     The generalization seems to hold up, provided we define our exponential operator in such a way that . This is a common practice, but I've also seen situations where is left undefined instead. In this context, the answer of 1 to problem 5 makes more sense than than the alternative. In programming terms, it seems perfectly reasonable to think of \"no op\" as a \"function\" so there should be an analogous \"null map\" that maps from nothing to nothing.   "
},
{
  "id": "sec-session3",
  "level": "1",
  "url": "sec-session3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Session 3",
  "body": " Session 3  This week's reading basically confirmed my generalization from Article 1. I found it somewhat interesting how I instictively happened to use a \"vector norm\" notation, , for the size of domain and codomain while L&S goes through both \"number sign\", , and \"absolute value\", . It seems so natural to want a symbol for \"number of elements\".  For present, I suppose I'll follow the book's convention and save myself two extra characters. It does leave me wondering what kind of distance metrics might be useful for talking about the \"sameness\" of two maps.   Exercise 1   ...Two of the expressions make sense...    So the trick with the map composition is to evaluate them from \"right to left\". The expression for (a) of could be translated into a sequence of steps as follows:   Apply map  Apply map  Apply map  Apply map   Notice how the codomain of each step matches the domain of the following step. Our composite map follows a path from , so it's domain is the \"source\" and codomain is the \"destination\" . Alternatively written, .  Moving on to (b), something interesting happens when we attempt to list out the steps of :   Apply map  Apply map  Apply map   Notice how the codomain for step 2 of is not the same as the domain of in step 3. This map composition is not well defined because the map will not have a valid input to work with.  Having already identified the one that \"doesn't make sense\", let's move directly onto identifying the domain and codomain of the final composition (c) . Applied from right to left, this gives us:   As expected, the domains and codomains link up correctly at each step. This means that the domain of is (same as the domain of the first map applied, ) and the codomain is (same as the codomain of the last map applied, ).     Exercise 2   ...follow the arrows in the diagram with your finger...    Let's start by recreating the source diagram:   Recreation of diagram used in L&S Session 3 Exercise 2      For composition (a), the path would look like this:   Recreation of finger tracing steps for L&S Session 3 Exercise 2 Part (a)      For composition (b) we can only trace out the first two steps. The final map fails because the arrow is pointing the wrong direction.   Recreation of finger tracing steps for L&S Session 3 Exercise 2 Part (b)      Our final composition is interesting in that takes us through map twice.   Recreation of finger tracing steps for L&S Session 3 Exercise 2 Part (c)        "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec-session3.html#example-14",
  "type": "Example",
  "number": "2.3.1",
  "title": "Exercise 1.",
  "body": " Exercise 1   ...Two of the expressions make sense...    So the trick with the map composition is to evaluate them from \"right to left\". The expression for (a) of could be translated into a sequence of steps as follows:   Apply map  Apply map  Apply map  Apply map   Notice how the codomain of each step matches the domain of the following step. Our composite map follows a path from , so it's domain is the \"source\" and codomain is the \"destination\" . Alternatively written, .  Moving on to (b), something interesting happens when we attempt to list out the steps of :   Apply map  Apply map  Apply map   Notice how the codomain for step 2 of is not the same as the domain of in step 3. This map composition is not well defined because the map will not have a valid input to work with.  Having already identified the one that \"doesn't make sense\", let's move directly onto identifying the domain and codomain of the final composition (c) . Applied from right to left, this gives us:   As expected, the domains and codomains link up correctly at each step. This means that the domain of is (same as the domain of the first map applied, ) and the codomain is (same as the codomain of the last map applied, ).   "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-session3.html#example-15",
  "type": "Example",
  "number": "2.3.2",
  "title": "Exercise 2.",
  "body": " Exercise 2   ...follow the arrows in the diagram with your finger...    Let's start by recreating the source diagram:   Recreation of diagram used in L&S Session 3 Exercise 2      For composition (a), the path would look like this:   Recreation of finger tracing steps for L&S Session 3 Exercise 2 Part (a)      For composition (b) we can only trace out the first two steps. The final map fails because the arrow is pointing the wrong direction.   Recreation of finger tracing steps for L&S Session 3 Exercise 2 Part (b)      Our final composition is interesting in that takes us through map twice.   Recreation of finger tracing steps for L&S Session 3 Exercise 2 Part (c)       "
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

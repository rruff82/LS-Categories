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
  "id": "article2",
  "level": "1",
  "url": "article2.html",
  "type": "Section",
  "number": "3.1",
  "title": "Article 2: Isomorphisms, Part 1",
  "body": " Article 2: Isomorphisms, Part 1  Time to undo things! I think I'm coming into this section with a decent grasp of what an isomorphism is already, but this idea that there are two inverses instead of just one still feels a little weird to me. I find myself reminding myself that this something I already do, but now I'm just being more specific with my language.  If teaching has taught me anything, it's that people sometimes have very different ideas about what is meant by seemingly simple phrases like \"the opposite of two\". It's often too easy to fall into a trap in assuming that since I'm thinking of two as a position on the number line and the opposite of that is defined relative to the origin, but \"negative two\" is really only one possible answer. If the question \"what's the oppositve of two?\" had beem asked in the kitchen instead of a math class, there's a case to be made that \"one half\" is actually the more appropriate response. The opposite of doubling a recipe is halving one. There might even be situations where it may be helpful to think of \"opposite\" as both the reciprocal and negation, as you would with slopes of perpendicular lines.  For now, I think I need to be paying attention to the domains and codomains of the maps because that's where I was getting tripped up earlier.   Exercise 1   Show that...is an isomorphism.    For the reflexive property (R), we can note that acts as it's own inverse. Since it leaves every object in place, applying it a second time would also do nothing so . If we define and , then the statements and hold true and is an isomorphism.  For the symmetric property (S), we're given that is an isomorphism with inverse . By the definition of inverse, we know and . These are precisely the two statements that define as the inverse of , just with the order reversed. By including both possible composition orders in the definition, it guarantees that is the inverse of if and only if is the inverse of .  For the transitive property, we're given that and are both isomorphisms. Let be the inverse of such that and , and let be the inverse of such that and . Consider the composition :   Consider . By the associative property, we have . Since , it follows that .  Consider . By the associative property, we have . Since , it follows that   Given and , we can then conclude that is an isomorphism with an inverse of .      Exercise 2   Suppose and are both inverses...    By definition, being an inverse implies and . Likewise, being an inverse implies and .  Suppose that . There would need to exist some with . Denote these values and for some with .  Consider the point: . Since , we must have . However, since we can also write this as . By the associative property, . Having shown that and , this contradicts our earlier assumption that and completes our proof that by contradiction.     Exercise 3   If has an inverse, then satistfies the two cancellation laws...    Part (a) is given in the text, so lets focus on (b). If , it follows that .  By the associative property, and . Thus, . By similar reasoning, .  It follows that if and only if which completes our proof.     Exercise 4   For each of the five maps above, decide whether it is invertable...    Let's break it down one map at time.    with has a well-defined inverse of .   with has a well-defined inverse of .   with does not have a well-defined inverse. We can't ever recover the negative values after squaring them.   with also does not have a well-defined inverse. Limiting the codomain to the produced outputs doesn't change the fact that we're losing sign information through the map.   with feels like a trick question. For most intents and purposes, we should have but the domain and codomain don't look right here. Specifically, we have a problem where is undefined and another problem where for . Based on these observations, I'd have to conclude that is not invertable.   Having still not entirely convinced myself these are correct, I thought it might be helpful to look at the graphs. I started with the first pair to make sure its what I expected.   Comparison of graphs for Article II, Exercise 4.1      One of the way's I think of my inverse function is as \"a reflection over the line \". This works nicely for a visual confirmation because I can tell that this relationship will hold for the rest of the lines. My confidence in being invertible is very high.  Now let's take a look at the relation between and :   Comparison of graphs for Article II, Exercise 4.2-4.4      Notice how the inverse function only replicates half of the parabola when reflected over the diagonal. My justification for thinking that (2) is an isomorphism but (3) and (4) are not is that every point in the domain needs to have an inverse that these can be matched up with a point in the codomain (both \"onto\" and \"one-to-one\"). By including negative numbers in our domain, we're essentially allowing un-invertable points to be passed in.  Now let's take a look at the final functions:   Comparison of graphs for Article II, Exercise 4.5      On the surface, this looks like precisely the function we're looking for. It looks like a pretty good \"mirror image\". The problem comes when consider the domain and codomain. The map is only valid for positive values, so let's crop and zoom in our previous graph.   Cropped and zoomed graph for Article II, Exercise 4.5      Notice how the graph of seemingly has an asymptote at and gets \"cut-off\" when it hits the x-axis. For us to consider this as an inverse map, the domain of the inverse should match the codomain of the map and vice versa. Even though these maps meet my reflection criteria, the fact that is undefined for and when domain and codomain are supposed to both be disqualifies it from being considered an inverse to the map .  Perhaps what I should really be doing is looking at the compositions. We can express as or we can express as . These expressions both simplify to just , but the holes left in the map when we divide by zero at or don't just disappear.    While I'm in the process of undo-ing things, I need to work on undo-ing my tendancy to rush things like this. I need to remind myself that learing this stuff isn't a race. I'm going to use the subdivisions in Article II to break this up into smaller sections so I can give it more time to sink in.  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "article2.html#example-16",
  "type": "Example",
  "number": "3.1.1",
  "title": "Exercise 1.",
  "body": " Exercise 1   Show that...is an isomorphism.    For the reflexive property (R), we can note that acts as it's own inverse. Since it leaves every object in place, applying it a second time would also do nothing so . If we define and , then the statements and hold true and is an isomorphism.  For the symmetric property (S), we're given that is an isomorphism with inverse . By the definition of inverse, we know and . These are precisely the two statements that define as the inverse of , just with the order reversed. By including both possible composition orders in the definition, it guarantees that is the inverse of if and only if is the inverse of .  For the transitive property, we're given that and are both isomorphisms. Let be the inverse of such that and , and let be the inverse of such that and . Consider the composition :   Consider . By the associative property, we have . Since , it follows that .  Consider . By the associative property, we have . Since , it follows that   Given and , we can then conclude that is an isomorphism with an inverse of .    "
},
{
  "id": "example-17",
  "level": "2",
  "url": "article2.html#example-17",
  "type": "Example",
  "number": "3.1.2",
  "title": "Exercise 2.",
  "body": " Exercise 2   Suppose and are both inverses...    By definition, being an inverse implies and . Likewise, being an inverse implies and .  Suppose that . There would need to exist some with . Denote these values and for some with .  Consider the point: . Since , we must have . However, since we can also write this as . By the associative property, . Having shown that and , this contradicts our earlier assumption that and completes our proof that by contradiction.   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "article2.html#example-18",
  "type": "Example",
  "number": "3.1.3",
  "title": "Exercise 3.",
  "body": " Exercise 3   If has an inverse, then satistfies the two cancellation laws...    Part (a) is given in the text, so lets focus on (b). If , it follows that .  By the associative property, and . Thus, . By similar reasoning, .  It follows that if and only if which completes our proof.   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "article2.html#example-19",
  "type": "Example",
  "number": "3.1.4",
  "title": "Exercise 4.",
  "body": " Exercise 4   For each of the five maps above, decide whether it is invertable...    Let's break it down one map at time.    with has a well-defined inverse of .   with has a well-defined inverse of .   with does not have a well-defined inverse. We can't ever recover the negative values after squaring them.   with also does not have a well-defined inverse. Limiting the codomain to the produced outputs doesn't change the fact that we're losing sign information through the map.   with feels like a trick question. For most intents and purposes, we should have but the domain and codomain don't look right here. Specifically, we have a problem where is undefined and another problem where for . Based on these observations, I'd have to conclude that is not invertable.   Having still not entirely convinced myself these are correct, I thought it might be helpful to look at the graphs. I started with the first pair to make sure its what I expected.   Comparison of graphs for Article II, Exercise 4.1      One of the way's I think of my inverse function is as \"a reflection over the line \". This works nicely for a visual confirmation because I can tell that this relationship will hold for the rest of the lines. My confidence in being invertible is very high.  Now let's take a look at the relation between and :   Comparison of graphs for Article II, Exercise 4.2-4.4      Notice how the inverse function only replicates half of the parabola when reflected over the diagonal. My justification for thinking that (2) is an isomorphism but (3) and (4) are not is that every point in the domain needs to have an inverse that these can be matched up with a point in the codomain (both \"onto\" and \"one-to-one\"). By including negative numbers in our domain, we're essentially allowing un-invertable points to be passed in.  Now let's take a look at the final functions:   Comparison of graphs for Article II, Exercise 4.5      On the surface, this looks like precisely the function we're looking for. It looks like a pretty good \"mirror image\". The problem comes when consider the domain and codomain. The map is only valid for positive values, so let's crop and zoom in our previous graph.   Cropped and zoomed graph for Article II, Exercise 4.5      Notice how the graph of seemingly has an asymptote at and gets \"cut-off\" when it hits the x-axis. For us to consider this as an inverse map, the domain of the inverse should match the codomain of the map and vice versa. Even though these maps meet my reflection criteria, the fact that is undefined for and when domain and codomain are supposed to both be disqualifies it from being considered an inverse to the map .  Perhaps what I should really be doing is looking at the compositions. We can express as or we can express as . These expressions both simplify to just , but the holes left in the map when we divide by zero at or don't just disappear.   "
},
{
  "id": "article2-p2",
  "level": "1",
  "url": "article2-p2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Article 2: Isomorphisms, Part 2",
  "body": " Article 2: Isomorphisms, Part 2  Choosing to break this article into subsections means that I can take my time with the only excercise. With that in mind, I'm going to use the opportunity to work on improving my latex skills by attempting to enumerate the diagrams of these solutions instead of just counting them. Sounds like fun, huh?   Exercise 5   ...how many maps are there with ?...    Let's begin by reproducing the internal diagram of :   Recreation of diagram from Article II, Exercise 5      Since I want , I know that needs to send each element of to something that will return to that value after applying . It seems reasonable to assume that the \"possible arrows\" for must come from the reversed arrows of as shown here:   Diagram from Article II, Exercise 5 but with reversed arrows      Since there are three options for where sends , two options for where it sends , and these choices are independent of each other, the total number of possibilities is the product: . This lends them nicely to a 3x2 grid where the column is the choice of where to send and row is the choice of where to send .   Grid of potential solutions for in Article II, Exercise 5      Now, that we've drawn all possible choices for , let's choose one and see how many options we might have for with the same property . I'll start by taking a single one:   One possible solution to from Article II, Exercise 5      Like before, I know my map must contain the reverse of the arrows from my chosen map , but fixing those arrows still leaves 3 points that are unaccounted for in the map. For each of those 3 possible sources, there are two possible destinations.   Possible choices for given a choice of      Since those choices are independent of each other, that means the total number of combinations is .   Grid of potential maps for given my chosen      With that, we've completed the exercise (and then some).    "
},
{
  "id": "example-20",
  "level": "2",
  "url": "article2-p2.html#example-20",
  "type": "Example",
  "number": "3.2.1",
  "title": "Exercise 5.",
  "body": " Exercise 5   ...how many maps are there with ?...    Let's begin by reproducing the internal diagram of :   Recreation of diagram from Article II, Exercise 5      Since I want , I know that needs to send each element of to something that will return to that value after applying . It seems reasonable to assume that the \"possible arrows\" for must come from the reversed arrows of as shown here:   Diagram from Article II, Exercise 5 but with reversed arrows      Since there are three options for where sends , two options for where it sends , and these choices are independent of each other, the total number of possibilities is the product: . This lends them nicely to a 3x2 grid where the column is the choice of where to send and row is the choice of where to send .   Grid of potential solutions for in Article II, Exercise 5      Now, that we've drawn all possible choices for , let's choose one and see how many options we might have for with the same property . I'll start by taking a single one:   One possible solution to from Article II, Exercise 5      Like before, I know my map must contain the reverse of the arrows from my chosen map , but fixing those arrows still leaves 3 points that are unaccounted for in the map. For each of those 3 possible sources, there are two possible destinations.   Possible choices for given a choice of      Since those choices are independent of each other, that means the total number of combinations is .   Grid of potential maps for given my chosen      With that, we've completed the exercise (and then some).   "
},
{
  "id": "article2-p3",
  "level": "1",
  "url": "article2-p3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Article 2: Isomorphisms, Part 3",
  "body": " Article 2: Isomorphisms, Part 3  As I wrap up Article 2, I keep thinking back to the last expression in Exercise 4 and wonder if there's a better way of articulating what I saw. I'm starting to see more of the connection with the injective (one-to-one) and surjective (onto) properties I typically associate with isomorphisms are effectively guaranteed by the definitions of retraction and section.  I also find the symbol choice of in this part of Article 2 somewhat curious. The programmer in me wants to associate with a \"type\" or \"template\", while the mathematician in me is quietly screaming \"TOPOLOGY!\". I suppose I'll have to keep going to find out who's right-er.   Exercise 6   If the map has a retraction, ...    Essentially the argument is the same as the preceeding proof with minor substitutions. We're given that has a retraction, so we have some with the property .   Possible compositions given has a retraction.      This external diagram implies that we can define a map by using the composition . All that remains is to verify that it satistfies the required equation:   And that completes the proof.     Exercise 7   Suppose the map has a section, ...    Let's get our bearings straight with a diagram. We know has a section satisfying . We also have a set with a pair of maps and .   External diagram of given information in Article 2 Exercise 7.      Now lets further assume that , so that we have some such that . Consider the point defined by . If , then it must also hold true that for all . If we expand this, we get the following:       This contradicts our earlier assumption that and completes the proof. It's a little easier to see what's going on if we rearrange the diagram some:   Diagram of compositions induced by assumptions of Article 2 Exercise 7.      As long as , then . Since we've defined as a section of , it means that . Therefore, holds if and only if .     Exercise 8   ...the composite of two maps, each having sections, ...    Suppose we have composable maps and with respective sections and . By definition, and .  Based on this information, the composition has a section determined by the reversed composition of the sections . All we need to do is to show that .       It's easy to see why this order reversal is necessary by examining a diagram:   External diagram of given information in Article 2 Exercise 8.         Exercise 9   Suppose is a retraction of ...    Knowing that is a retraction of tells us that . If we define the map , we can prove that through the use of the associative property.      That completes the proof that is idempotent.  If we further assume that is an isomorphism, then we have some inverse function such that and . Since this inverse is unique, it follows that . Consequently, .     Exercise 10   If are both isomorphisms...    I think this one is a little easier to see with a diagram.   External diagram of given information in Article 2 Exercise 10.      Basically, to go backward to from , the order of inverses needs to also be reversed. We can prove this algebraically also.  Since is an isomorphism, it follows that and . Likewise, being an isomorphism implies and . The composition can be shown to sasify the conditions for being the inverse of .  First, we must demonstrate that :     Second, we must demonstrate that :     This complete our proof that      Exercise 11   If ...    Any that maps each element in to a unique element in should do the trick here.   Hypothetical for Article 2 Exercise 11      This has a unique inverse that reverses each of these arrows:   Corresponding for Article 2 Exercise 11      If we have , we'd be unable to define an isomorphism from because we don't have enough points to match them up one by one. One of those points in will have two arrows leading in and cause us to lose information about where we came from in the process:   Illustration of invertability problem with         Exercise 12   How many isomorphisms are there...    Essentially, the number of isomorphisms is a permutation problem. If we decide on a fixed order of elements in , each choice uses up the respective point in that it gets matched to. Therefore, we have 3 choices for Fatima, 2 choices for Omer, and 1 choice for Alysia, or possible choices all together.  The number of automorphisms should be the same, namely 6. It doesn't matter if we're assigning Fatima to or , it's precisely the same number of choices.  The number 27 in this context is the total number of possible maps from a set of 3 elements to another set of 3 elements: . This is the formula we arrived at after Article 1. Clearly \"the number of invertable maps\" should be less than \"the total number of maps\" because not every map will be invertable.    "
},
{
  "id": "example-21",
  "level": "2",
  "url": "article2-p3.html#example-21",
  "type": "Example",
  "number": "3.3.1",
  "title": "Exercise 6.",
  "body": " Exercise 6   If the map has a retraction, ...    Essentially the argument is the same as the preceeding proof with minor substitutions. We're given that has a retraction, so we have some with the property .   Possible compositions given has a retraction.      This external diagram implies that we can define a map by using the composition . All that remains is to verify that it satistfies the required equation:   And that completes the proof.   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "article2-p3.html#example-22",
  "type": "Example",
  "number": "3.3.3",
  "title": "Exercise 7.",
  "body": " Exercise 7   Suppose the map has a section, ...    Let's get our bearings straight with a diagram. We know has a section satisfying . We also have a set with a pair of maps and .   External diagram of given information in Article 2 Exercise 7.      Now lets further assume that , so that we have some such that . Consider the point defined by . If , then it must also hold true that for all . If we expand this, we get the following:       This contradicts our earlier assumption that and completes the proof. It's a little easier to see what's going on if we rearrange the diagram some:   Diagram of compositions induced by assumptions of Article 2 Exercise 7.      As long as , then . Since we've defined as a section of , it means that . Therefore, holds if and only if .   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "article2-p3.html#example-23",
  "type": "Example",
  "number": "3.3.6",
  "title": "Exercise 8.",
  "body": " Exercise 8   ...the composite of two maps, each having sections, ...    Suppose we have composable maps and with respective sections and . By definition, and .  Based on this information, the composition has a section determined by the reversed composition of the sections . All we need to do is to show that .       It's easy to see why this order reversal is necessary by examining a diagram:   External diagram of given information in Article 2 Exercise 8.       "
},
{
  "id": "example-24",
  "level": "2",
  "url": "article2-p3.html#example-24",
  "type": "Example",
  "number": "3.3.8",
  "title": "Exercise 9.",
  "body": " Exercise 9   Suppose is a retraction of ...    Knowing that is a retraction of tells us that . If we define the map , we can prove that through the use of the associative property.      That completes the proof that is idempotent.  If we further assume that is an isomorphism, then we have some inverse function such that and . Since this inverse is unique, it follows that . Consequently, .   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "article2-p3.html#example-25",
  "type": "Example",
  "number": "3.3.9",
  "title": "Exercise 10.",
  "body": " Exercise 10   If are both isomorphisms...    I think this one is a little easier to see with a diagram.   External diagram of given information in Article 2 Exercise 10.      Basically, to go backward to from , the order of inverses needs to also be reversed. We can prove this algebraically also.  Since is an isomorphism, it follows that and . Likewise, being an isomorphism implies and . The composition can be shown to sasify the conditions for being the inverse of .  First, we must demonstrate that :     Second, we must demonstrate that :     This complete our proof that    "
},
{
  "id": "example-26",
  "level": "2",
  "url": "article2-p3.html#example-26",
  "type": "Example",
  "number": "3.3.11",
  "title": "Exercise 11.",
  "body": " Exercise 11   If ...    Any that maps each element in to a unique element in should do the trick here.   Hypothetical for Article 2 Exercise 11      This has a unique inverse that reverses each of these arrows:   Corresponding for Article 2 Exercise 11      If we have , we'd be unable to define an isomorphism from because we don't have enough points to match them up one by one. One of those points in will have two arrows leading in and cause us to lose information about where we came from in the process:   Illustration of invertability problem with       "
},
{
  "id": "example-27",
  "level": "2",
  "url": "article2-p3.html#example-27",
  "type": "Example",
  "number": "3.3.15",
  "title": "Exercise 12.",
  "body": " Exercise 12   How many isomorphisms are there...    Essentially, the number of isomorphisms is a permutation problem. If we decide on a fixed order of elements in , each choice uses up the respective point in that it gets matched to. Therefore, we have 3 choices for Fatima, 2 choices for Omer, and 1 choice for Alysia, or possible choices all together.  The number of automorphisms should be the same, namely 6. It doesn't matter if we're assigning Fatima to or , it's precisely the same number of choices.  The number 27 in this context is the total number of possible maps from a set of 3 elements to another set of 3 elements: . This is the formula we arrived at after Article 1. Clearly \"the number of invertable maps\" should be less than \"the total number of maps\" because not every map will be invertable.   "
},
{
  "id": "session4",
  "level": "1",
  "url": "session4.html",
  "type": "Section",
  "number": "3.4",
  "title": "Session 4: Division of maps: Isomorphisms",
  "body": " Session 4: Division of maps: Isomorphisms  While reading this section, I appreciated the fact that \"just reverse the arrows\" was the official description of isomorphisms on sets. It makes me feel like my answers to Article 2 are at least on the right track. I think my main goal for this week is to better understand what \"respects the combining-rules\" really means.   Exercise 1   Finish checking that is an isomorphism...    Let's start with first. The composition is applied from right to left, which means we double first then halve.   Next we check , where we halve first and double after:   This proof seems kind of trivial since multiplication on is commutative.     Exercise 2   Find an isomorphism ...    Let's start by organizing some data. Perhaps a table of each map will reveal some insight into the structure.   Function table for     even  odd    even  even  odd    odd  odd  even      Function table for     positive  negative    positive  positive  negative    negative  negative  positive     These two tables mirror each other quite nicely, which suggests that ordering of options shown here is probably the correct choice of . Let's go ahead and define as follows:   Internal diagram of our potential isomorphism      In order for us to show that this respects the combining rules, we need to verify that for all .   Combining rule validation table for    For even, even:      Confirmed ✓    For odd, even:      Confirmed ✓      For even, odd:      Confirmed ✓    For odd, odd:      Confirmed ✓      Suppose instead we had used the map given by the alternative assignment:   Internal diagram of alternative map choice      When and are both even, but . Thus, this map fails to preserve the combining rule .     Exercise 3   ...Unmask the imposters...    Let's start with (a): given by .  While it seems like \"subtract one\" would be a reasonable inverse, this is not an isomorphism because it fails to respect the combining-rule . Consider the case where and . We have and so . However, this is not the same as , which evaluates to instead.  The map in (b) and the map in (c) are both closely related because they share a common definition of , but differ in the domain and codomain.  Again there's an obvious inverse function of \"square root\", but the domains and codomains are what concern me. Notable about (b) is that it fails to map \"onto\" the entire codomain, because the map never produces any negative numbers as an output. The map in (c) resolves this by limiting the codomain to non-negative values, but it still fails to \"one-to-one\" because both 1 and -1 produce an output of 1.  The map in (d) and (e) likewise have similar definitions.  The map defined by the given expression acts as its own inverse: . Where (d) and (e) differ is in the \"combining-rule\". If we have , then a little algebra can show that . This means that both the identity rules and the combining-rules are satisfied for (d), making it the only genuine isomorphism in the list. The map in (e) fails to uphold the combining rule because . In the case where and , we have but .  Finally we have the map (f), which isn't even a map with the specified domain and codomain because the cube of a negative number is still negative. Had the map been defined with the correct codomain, , then we'd potentially be able to define an inverse map by using the \"cube root\" function.    As I was proof reading this session, I noticed a couple small errors in the 3rd exercise. One of these was a misread problem, but the other was a little more subtle. In an effort to get the most out of this as a learning experience, I thought it might be valuable to talk about what I learned from my mistakes.   Meta-Exercise   As I was proof reading, I noticed an error in Exercise 3 Part (e). It was a simple case of me not reading the question as precisely as needed. I think I was so excited to show (d) was an isomorphism that I didn't give (e) the amount of skepticism it deserved. I mistakely read the domain as instead of which made finding a counter-example trivial relative to the actual problem.  As I was looking over my solution to fix this, I noticed something else kind of odd. My solution began with \"Let's go one at a time\" but I had addressed some of the problems in pairs. There's something that felt natural about approaching them this way, but it also seemed kind of ironic that I had failed to produce a isomorphism between my problems and solutions in a section that was all about matching things up.  All of this started to get my thinking about the solutions to these problems as a map . Obviously this map is not invertable, but it made me wonder if the \"Hints\" to this section provided sufficient information about the functions to identify each one. Is there some set of descriptions that would establish a one-to-one relationship with these problems?    The first hint tells us that only one of these maps is a \"genuine isomorphism\", which I concluded was (d). The last hint says that one is \"not even a map\", which I concluded is (f). The hint that \"[s]ome... dont respect the combining rules\" explains why I rejected (a) and (e). It also seems natural to ask \"does it have a section?\" and \"does it have a retraction?\".   Table of selected map properties for Exercise 3    Item  is a map?  has a section?  has a retraction?  respects combining rules?    (a)  Yes  Yes  Yes  No    (b)  Yes  No  No  N\/A    (c)  Yes  Yes  No  N\/A    (d)  Yes  Yes  Yes  Yes    (e)  Yes  Yes  Yes  No    (f)  No  N\/A  N\/A  N\/A     These four questions are almost enough to identify every problem except for distinguishing between (a) and (e). The best description of the difference is that (a) fails to preserve the combining-rules in every case while (e) might pass or fail the combining-rules depending on its input. This is a very subtle difference that I probably would have overlooked had I not made the mistake that I did.    "
},
{
  "id": "example-28",
  "level": "2",
  "url": "session4.html#example-28",
  "type": "Example",
  "number": "3.4.1",
  "title": "Exercise 1.",
  "body": " Exercise 1   Finish checking that is an isomorphism...    Let's start with first. The composition is applied from right to left, which means we double first then halve.   Next we check , where we halve first and double after:   This proof seems kind of trivial since multiplication on is commutative.   "
},
{
  "id": "example-29",
  "level": "2",
  "url": "session4.html#example-29",
  "type": "Example",
  "number": "3.4.2",
  "title": "Exercise 2.",
  "body": " Exercise 2   Find an isomorphism ...    Let's start by organizing some data. Perhaps a table of each map will reveal some insight into the structure.   Function table for     even  odd    even  even  odd    odd  odd  even      Function table for     positive  negative    positive  positive  negative    negative  negative  positive     These two tables mirror each other quite nicely, which suggests that ordering of options shown here is probably the correct choice of . Let's go ahead and define as follows:   Internal diagram of our potential isomorphism      In order for us to show that this respects the combining rules, we need to verify that for all .   Combining rule validation table for    For even, even:      Confirmed ✓    For odd, even:      Confirmed ✓      For even, odd:      Confirmed ✓    For odd, odd:      Confirmed ✓      Suppose instead we had used the map given by the alternative assignment:   Internal diagram of alternative map choice      When and are both even, but . Thus, this map fails to preserve the combining rule .   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "session4.html#example-30",
  "type": "Example",
  "number": "3.4.8",
  "title": "Exercise 3.",
  "body": " Exercise 3   ...Unmask the imposters...    Let's start with (a): given by .  While it seems like \"subtract one\" would be a reasonable inverse, this is not an isomorphism because it fails to respect the combining-rule . Consider the case where and . We have and so . However, this is not the same as , which evaluates to instead.  The map in (b) and the map in (c) are both closely related because they share a common definition of , but differ in the domain and codomain.  Again there's an obvious inverse function of \"square root\", but the domains and codomains are what concern me. Notable about (b) is that it fails to map \"onto\" the entire codomain, because the map never produces any negative numbers as an output. The map in (c) resolves this by limiting the codomain to non-negative values, but it still fails to \"one-to-one\" because both 1 and -1 produce an output of 1.  The map in (d) and (e) likewise have similar definitions.  The map defined by the given expression acts as its own inverse: . Where (d) and (e) differ is in the \"combining-rule\". If we have , then a little algebra can show that . This means that both the identity rules and the combining-rules are satisfied for (d), making it the only genuine isomorphism in the list. The map in (e) fails to uphold the combining rule because . In the case where and , we have but .  Finally we have the map (f), which isn't even a map with the specified domain and codomain because the cube of a negative number is still negative. Had the map been defined with the correct codomain, , then we'd potentially be able to define an inverse map by using the \"cube root\" function.   "
},
{
  "id": "example-31",
  "level": "2",
  "url": "session4.html#example-31",
  "type": "Example",
  "number": "3.4.9",
  "title": "Meta-Exercise.",
  "body": " Meta-Exercise   As I was proof reading, I noticed an error in Exercise 3 Part (e). It was a simple case of me not reading the question as precisely as needed. I think I was so excited to show (d) was an isomorphism that I didn't give (e) the amount of skepticism it deserved. I mistakely read the domain as instead of which made finding a counter-example trivial relative to the actual problem.  As I was looking over my solution to fix this, I noticed something else kind of odd. My solution began with \"Let's go one at a time\" but I had addressed some of the problems in pairs. There's something that felt natural about approaching them this way, but it also seemed kind of ironic that I had failed to produce a isomorphism between my problems and solutions in a section that was all about matching things up.  All of this started to get my thinking about the solutions to these problems as a map . Obviously this map is not invertable, but it made me wonder if the \"Hints\" to this section provided sufficient information about the functions to identify each one. Is there some set of descriptions that would establish a one-to-one relationship with these problems?    The first hint tells us that only one of these maps is a \"genuine isomorphism\", which I concluded was (d). The last hint says that one is \"not even a map\", which I concluded is (f). The hint that \"[s]ome... dont respect the combining rules\" explains why I rejected (a) and (e). It also seems natural to ask \"does it have a section?\" and \"does it have a retraction?\".   Table of selected map properties for Exercise 3    Item  is a map?  has a section?  has a retraction?  respects combining rules?    (a)  Yes  Yes  Yes  No    (b)  Yes  No  No  N\/A    (c)  Yes  Yes  No  N\/A    (d)  Yes  Yes  Yes  Yes    (e)  Yes  Yes  Yes  No    (f)  No  N\/A  N\/A  N\/A     These four questions are almost enough to identify every problem except for distinguishing between (a) and (e). The best description of the difference is that (a) fails to preserve the combining-rules in every case while (e) might pass or fail the combining-rules depending on its input. This is a very subtle difference that I probably would have overlooked had I not made the mistake that I did.   "
},
{
  "id": "session5",
  "level": "1",
  "url": "session5.html",
  "type": "Section",
  "number": "3.5",
  "title": "Session 5: Division of maps: Sections and retractions",
  "body": " Session 5: Division of maps: Sections and retractions  Determine some witty remark to put here later.   Exercise 1   Show that... if then ...    For part (a), the hint suggests contradiction might be a good approach. Let's assume that and there exists some pair of points such that but .   Diagram of determination problem (a) in Session 5 Exercise 1      In this situation, there's no possible map here with because can't send possibly send to two different destinations ( and ).  Now let's consider the converse relationship in (b) where we know that for all .   Diagram of determination problem (b) in Session 5 Exercise 1      In this situation, we can construct a map that has our desired property . I'd imagine it like taking an image of the maps and over the set and defining as by the collection of arrows that have an origin at and destination .  Obviously defining in this way will potentially leave the possibility of arrows having duplicates, but the property ensures that if any two arrows share the same origin they must share the same destination.  From a meta-perspective, it makes sense that the converse holds true for use to this practically as a definition. When we say \" is determined by \", we want it to be true if and only if it satisfies the properties we've defined it to have.     Exercise 2   Show that... there is at least one in for which ...    I think the key idea in part (a) here is that the point precisely satisfies the properties we want for establishing the existence of . As long as there is some map with then we can define and it follows directly that .  Proving the converse in (b) seems a little trickier. I think I'd want to approach this like I did with \"Exercise 1\" and consider making an image by applying to each element .  If we already know that for each there is at least one such that , we can begin to construct a map by creating a collection of arrows with origin and destination .   Diagram of problem in Session 5 Exercise 2      The above definition of given by should satisfy the property since . We can rest assured we're not missing any origin points in because we've already assumed that each each corresponds to at least one , and we can safely assume that no has more than one destination in because we found them by iterating over to begin with.     Exercise 3   Draw... all the sections of .    Let's start here by reproducing the diagram of :   Internal diagram of map in Session 5 Exercise 3      Since there's only two points in , we're need to have two arrows with one originating at each. The left arrow needs to have one of four possible destinations, since there are four points in A that get mapped there by . The right arrow needs to have one of two possible destination from the points stacked above it. Since these choices are independent, we're looking for a total of maps.   Possible sections of in Session 5 Exercise 3        Upon finishing the exercises, I've chosen to not to retract my sarcastic pun above.  Okay, yeah, that's partly because I'm lazy, but I think it's also a good metaphor for what I learned about this week. Writing these posts is a multi-stage process that resembles a sequence of map compositions. I read (at least some of) the section, work out the exercises, then come back and revise. What you see at the end is the composition, but not necessarily each step along the way. At the same time, some qualities of the end product itself may restrict the process leading to it but others leave flexibility.  This week's reading seemed to be about exactly how flexible these maps could be before they start to lose information.  I could have removed the remark at the start of this and replaced it with something else. Yet, the fact that I'm now discussing it means it must be there.  This seems exceptionally well fitting to how my proofs this week worked. I'm essentially arguing that these maps exists because I can describe a set of rules to construct them. Whether you believe me or not, well, that's another story...  "
},
{
  "id": "example-32",
  "level": "2",
  "url": "session5.html#example-32",
  "type": "Example",
  "number": "3.5.1",
  "title": "Exercise 1.",
  "body": " Exercise 1   Show that... if then ...    For part (a), the hint suggests contradiction might be a good approach. Let's assume that and there exists some pair of points such that but .   Diagram of determination problem (a) in Session 5 Exercise 1      In this situation, there's no possible map here with because can't send possibly send to two different destinations ( and ).  Now let's consider the converse relationship in (b) where we know that for all .   Diagram of determination problem (b) in Session 5 Exercise 1      In this situation, we can construct a map that has our desired property . I'd imagine it like taking an image of the maps and over the set and defining as by the collection of arrows that have an origin at and destination .  Obviously defining in this way will potentially leave the possibility of arrows having duplicates, but the property ensures that if any two arrows share the same origin they must share the same destination.  From a meta-perspective, it makes sense that the converse holds true for use to this practically as a definition. When we say \" is determined by \", we want it to be true if and only if it satisfies the properties we've defined it to have.   "
},
{
  "id": "example-33",
  "level": "2",
  "url": "session5.html#example-33",
  "type": "Example",
  "number": "3.5.4",
  "title": "Exercise 2.",
  "body": " Exercise 2   Show that... there is at least one in for which ...    I think the key idea in part (a) here is that the point precisely satisfies the properties we want for establishing the existence of . As long as there is some map with then we can define and it follows directly that .  Proving the converse in (b) seems a little trickier. I think I'd want to approach this like I did with \"Exercise 1\" and consider making an image by applying to each element .  If we already know that for each there is at least one such that , we can begin to construct a map by creating a collection of arrows with origin and destination .   Diagram of problem in Session 5 Exercise 2      The above definition of given by should satisfy the property since . We can rest assured we're not missing any origin points in because we've already assumed that each each corresponds to at least one , and we can safely assume that no has more than one destination in because we found them by iterating over to begin with.   "
},
{
  "id": "example-34",
  "level": "2",
  "url": "session5.html#example-34",
  "type": "Example",
  "number": "3.5.6",
  "title": "Exercise 3.",
  "body": " Exercise 3   Draw... all the sections of .    Let's start here by reproducing the diagram of :   Internal diagram of map in Session 5 Exercise 3      Since there's only two points in , we're need to have two arrows with one originating at each. The left arrow needs to have one of four possible destinations, since there are four points in A that get mapped there by . The right arrow needs to have one of two possible destination from the points stacked above it. Since these choices are independent, we're looking for a total of maps.   Possible sections of in Session 5 Exercise 3       "
},
{
  "id": "session6",
  "level": "1",
  "url": "session6.html",
  "type": "Section",
  "number": "3.6",
  "title": "Session 6: Two general aspects or uses of maps",
  "body": " Session 6: Two general aspects or uses of maps  This week's reading didn't have any official exercises in it, but it also seemed important so I wanted to make sure I gave it the same level of attention as the others. I find that I need to continually reminding myself that math is not a race and that I should take advantage of current privilege to truly take things slow here. My purpose isn't to get through the excercises in this book; it's to understand the deeper ideas behind it.  This session is filled with beautiful mathematical writing.  I think math courses need more content like this. At the same time, both the student and teacher in me recognize that this is one of the first things that would be cut from the syllabus if the class ran short on time. It makes me sad that our system's focus on measurable learning objectives means that philosophical discussions are treated as dispensible.  In much the same way as the authors describe science as maps being used to understand reality, the education system uses assessments to understand what's going on inside a student's head. Since we can't observe someone's state of mind, we alter their environment stimuli and see how they respond. This presents problems when we're using map composition to turn one of many complex mental models down to a multiple choice question for the exam. As long as a student could distinguish between \"sort\" and \"partition\" by the end of this unit, we don't really care how it impacted their broader understanding of world around them.  I think there's a hidden exercise in this session. I'll mark it as an example here so you can avoid spoilers if desired.   Session 6 Hidden Exercise   What do you notice? What do you wonder?    After reading through this session, I noticed something very interesting about the last diagram. I'll recreate it here for reference.   The last diagram in L&S Session 6      What struck me as interesting about this map was how closely it described a book . There's only a finite number of \"words\" in the \"language\" that the book is written using, and we can index them with positive integers describing their sequence in the book.  This observation struck me as interesting because my reading of this book works the same as the sampling process. You could generate a map from time to the index of the word that I'm reading at the time, and compose this map with the book map to find out what word I'm reading. This would reveal my non-linear path through the book, rereading sections as needed to answer the problems I'm working on.  It makes me wonder if this session is actually an exercise in meta-mathematics . Maybe the reason the authors intended to sow seeds of curiousity about their ommission and for me look at the book as a system that can be studied using category theory itself. The chapters of the book act as a sort for the exercises, but the fact that this chapter doesn't exercises have any means it's not a partition .  I think it's kind of funny that this section of the book about sections would be a counter-example to the book's exercises having a section.    "
},
{
  "id": "example-35",
  "level": "2",
  "url": "session6.html#example-35",
  "type": "Example",
  "number": "3.6.1",
  "title": "Session 6 Hidden Exercise.",
  "body": " Session 6 Hidden Exercise   What do you notice? What do you wonder?    After reading through this session, I noticed something very interesting about the last diagram. I'll recreate it here for reference.   The last diagram in L&S Session 6      What struck me as interesting about this map was how closely it described a book . There's only a finite number of \"words\" in the \"language\" that the book is written using, and we can index them with positive integers describing their sequence in the book.  This observation struck me as interesting because my reading of this book works the same as the sampling process. You could generate a map from time to the index of the word that I'm reading at the time, and compose this map with the book map to find out what word I'm reading. This would reveal my non-linear path through the book, rereading sections as needed to answer the problems I'm working on.  It makes me wonder if this session is actually an exercise in meta-mathematics . Maybe the reason the authors intended to sow seeds of curiousity about their ommission and for me look at the book as a system that can be studied using category theory itself. The chapters of the book act as a sort for the exercises, but the fact that this chapter doesn't exercises have any means it's not a partition .  I think it's kind of funny that this section of the book about sections would be a counter-example to the book's exercises having a section.   "
},
{
  "id": "session7",
  "level": "1",
  "url": "session7.html",
  "type": "Section",
  "number": "3.7",
  "title": "Session 7: Isomorphisms and coordinates",
  "body": " Session 7: Isomorphisms and coordinates  It turns out that last week's lack of exercises wasn't as much of an anomaly as I thought it was. After realizing that this week's session didn't have any exercises either, I scanned ahead and noticed that there are several sessions like this before eventually reaching a \"Quiz\" and \"Test\". I'm not sure how I plan to handle those yet, but I think I'm going to keep with my chill pace for now. This session did include several side questions throughout that I can treat as I would the exercises.   Aside 1   What, approximately, is for the point in the picture?    I took a modern approach and used technology to provide a more accurate estimation.    I began by holding the page as flat as I could while taking a photo with my phone and uploaded to the cloud.    I downloaded this photo from my PC and opened it in GIMP .    I used the cursor to identify the following coordinates in pixels: , , , .    Next I calculated the distances from to and from to . Specifically, and .    With this information in hand, I can set up a ratio to determine . Solving results in a solution of .    This seems like a reasonable estimate based on the diagram.     Aside 2   What are the choice of origin, positive direction, and unit of 'distance' involved in specifying this isomorphism?...    Oooh this is a fun one! Let's presume we meet some alien species and are trying to sync up our timelines. We're going to need both space and time coordinates if we really want to do this right. One possibility is for both parties to use \"the big bang\" as a point of origin and \"the light cone\" for a direction and magnitude. This choice makes converting easy, but potentially imprecise because of the sheer size of those values.  A much more practical approach would be to use the meeting time and location as a point of origin, use physical constants to communicate SI units, then work backwards to calculate the local time for each party using a Lorentz transformation. We'd just need to where they came from and how fast they traveled to convert their home civilization's time to their current time.  I think the point that the authors were trying to communicate was that our choice of units and magnitude for \"time\" are very specific to our origin on planet Earth. If we're talking about units of \"years\" as being \"one orbit around the Sun\" and the origin as a socially defined \"common era\", then an alien race from another plant would likely have totally different system of dating then us. However, most SI units are based on physical properties of our universe. Even if this species chose a different set of base units than us, we could match up measurements of certain elements to develop an isomorphism between our two systems.     Aside 3   ...rational explanation for the curious bracketing...    The first thing that jumps out at me about the bracket is that the sums of the adjacent ranks are constant:   8 Player Bracket from L&S Session 7      In other words, the best player is alway paired with the worst player, the next best with the next worst, and so on until all pairs have been assigned. However, the fun doesn't stop there.  The bracket also appears to balance \"skill gap\" between the top half and the bottom half. The winner of the match-up with the highest rank differential goes on to face the winner of the match with the lowest differential in the next round. Those differentials sum to a constant much like the ranks did.   8 player bracket with rank differentials      Between those two conditions, that should be enough to determine the 4 and 16 player brackets. The four player one is easy, since it's essentially embeeded in the original.   4 player bracket      To make the 16 player bracket, I'm going to start by pairing off players based on rank: The player in rank 1 should be paired with the player in rank 16, rank 2 with rank 15, rank 3 with rank 14, and so on until all 8 pairs have been assigned. Since these pairings go from largest score differential to smallest, we can assign the pairs to each of the \"ranks\" in the 8 player bracket to extend it further.   16 player bracket      This works out nicely because if the top 8 players all win their match-ups in the first round of the 16-player bracket, they'd wind up in a bracket that is basically identical to their placement in the 8-player bracket. Likewise, if the top four players continue to win then we end up in a situation identical to the 4-player bracket. It has a nice recursively defined structure.    "
},
{
  "id": "example-36",
  "level": "2",
  "url": "session7.html#example-36",
  "type": "Example",
  "number": "3.7.1",
  "title": "Aside 1.",
  "body": " Aside 1   What, approximately, is for the point in the picture?    I took a modern approach and used technology to provide a more accurate estimation.    I began by holding the page as flat as I could while taking a photo with my phone and uploaded to the cloud.    I downloaded this photo from my PC and opened it in GIMP .    I used the cursor to identify the following coordinates in pixels: , , , .    Next I calculated the distances from to and from to . Specifically, and .    With this information in hand, I can set up a ratio to determine . Solving results in a solution of .    This seems like a reasonable estimate based on the diagram.   "
},
{
  "id": "example-37",
  "level": "2",
  "url": "session7.html#example-37",
  "type": "Example",
  "number": "3.7.2",
  "title": "Aside 2.",
  "body": " Aside 2   What are the choice of origin, positive direction, and unit of 'distance' involved in specifying this isomorphism?...    Oooh this is a fun one! Let's presume we meet some alien species and are trying to sync up our timelines. We're going to need both space and time coordinates if we really want to do this right. One possibility is for both parties to use \"the big bang\" as a point of origin and \"the light cone\" for a direction and magnitude. This choice makes converting easy, but potentially imprecise because of the sheer size of those values.  A much more practical approach would be to use the meeting time and location as a point of origin, use physical constants to communicate SI units, then work backwards to calculate the local time for each party using a Lorentz transformation. We'd just need to where they came from and how fast they traveled to convert their home civilization's time to their current time.  I think the point that the authors were trying to communicate was that our choice of units and magnitude for \"time\" are very specific to our origin on planet Earth. If we're talking about units of \"years\" as being \"one orbit around the Sun\" and the origin as a socially defined \"common era\", then an alien race from another plant would likely have totally different system of dating then us. However, most SI units are based on physical properties of our universe. Even if this species chose a different set of base units than us, we could match up measurements of certain elements to develop an isomorphism between our two systems.   "
},
{
  "id": "example-38",
  "level": "2",
  "url": "session7.html#example-38",
  "type": "Example",
  "number": "3.7.3",
  "title": "Aside 3.",
  "body": " Aside 3   ...rational explanation for the curious bracketing...    The first thing that jumps out at me about the bracket is that the sums of the adjacent ranks are constant:   8 Player Bracket from L&S Session 7      In other words, the best player is alway paired with the worst player, the next best with the next worst, and so on until all pairs have been assigned. However, the fun doesn't stop there.  The bracket also appears to balance \"skill gap\" between the top half and the bottom half. The winner of the match-up with the highest rank differential goes on to face the winner of the match with the lowest differential in the next round. Those differentials sum to a constant much like the ranks did.   8 player bracket with rank differentials      Between those two conditions, that should be enough to determine the 4 and 16 player brackets. The four player one is easy, since it's essentially embeeded in the original.   4 player bracket      To make the 16 player bracket, I'm going to start by pairing off players based on rank: The player in rank 1 should be paired with the player in rank 16, rank 2 with rank 15, rank 3 with rank 14, and so on until all 8 pairs have been assigned. Since these pairings go from largest score differential to smallest, we can assign the pairs to each of the \"ranks\" in the 8 player bracket to extend it further.   16 player bracket      This works out nicely because if the top 8 players all win their match-ups in the first round of the 16-player bracket, they'd wind up in a bracket that is basically identical to their placement in the 8-player bracket. Likewise, if the top four players continue to win then we end up in a situation identical to the 4-player bracket. It has a nice recursively defined structure.   "
},
{
  "id": "session8",
  "level": "1",
  "url": "session8.html",
  "type": "Section",
  "number": "3.8",
  "title": "Session 8: Pictures of a map",
  "body": " Session 8: Pictures of a map  Rather than having exercises of its own, this session was focused on solving the exercises from Article II. Since I'd already worked out these problems, all that remains for this week is to proofread.   Article II, Exercise 5 Proofreading  (Add the rest of the arrows yourself.)   My diagram of all 6 sections from earlier matchs up with this incomplete diagram perfectly:   Likewise, I correctly arrived at a count of 8 retractions and drew those too:   If there's something to be critical about myself here, it would be that I was perhaps a little lax in assuming the domains and codomains of my maps were the same. I jumped right into diagrams of without specifying what it was. In my defense, this information was implicit in the diagrams themselves but the authors took an extra effort to explicitly articulate the qualities they were checking for in the map.     Article II, Exercise 8 Proofreading  Prove that the composite of two maps that have sections has a section.   I must admit, it took me several attempts to verify that my solution was equivalent to the book's with direct substitutions. I had used instead of the respective .   I think I actually prefer my notation here over the authors because it makes the connection between the functions and sections more clear. I kept forgetting whether or matched up with or . Using the notation makes the reversed composition ordering of the sections more readily apparent.    Based on what I saw in this session, I think I was on the right track with my solutions to the exercises from Article II. It's nice to have this little checkpoint to validate my earlier work. I'm usually the type that likes to try to solve the exercises in my head just to see if I can, but then I miss out on moments for reflection like this.  "
},
{
  "id": "example-39",
  "level": "2",
  "url": "session8.html#example-39",
  "type": "Example",
  "number": "3.8.1",
  "title": "Article II, Exercise 5 Proofreading.",
  "body": " Article II, Exercise 5 Proofreading  (Add the rest of the arrows yourself.)   My diagram of all 6 sections from earlier matchs up with this incomplete diagram perfectly:   Likewise, I correctly arrived at a count of 8 retractions and drew those too:   If there's something to be critical about myself here, it would be that I was perhaps a little lax in assuming the domains and codomains of my maps were the same. I jumped right into diagrams of without specifying what it was. In my defense, this information was implicit in the diagrams themselves but the authors took an extra effort to explicitly articulate the qualities they were checking for in the map.   "
},
{
  "id": "example-40",
  "level": "2",
  "url": "session8.html#example-40",
  "type": "Example",
  "number": "3.8.2",
  "title": "Article II, Exercise 8 Proofreading.",
  "body": " Article II, Exercise 8 Proofreading  Prove that the composite of two maps that have sections has a section.   I must admit, it took me several attempts to verify that my solution was equivalent to the book's with direct substitutions. I had used instead of the respective .   I think I actually prefer my notation here over the authors because it makes the connection between the functions and sections more clear. I kept forgetting whether or matched up with or . Using the notation makes the reversed composition ordering of the sections more readily apparent.   "
},
{
  "id": "session9",
  "level": "1",
  "url": "session9.html",
  "type": "Section",
  "number": "3.9",
  "title": "Session 9: Retracts and idempotents",
  "body": " Session 9: Retracts and idempotents  At last! The exercises have returned!  The reading this week was interesting in how it approached the relationship between \"size of sets\" and \"properties of maps\". The art of counting without counting seemed to be a recurring theme.   Exercise 1:   ...unless the set has a point and has none...    So means that there exists some map . In the category of sets, we know that the number of possible maps from is related to the size of the sets by a formula we arrived at in Session 2: . The only time when this expression for number of maps evaluates to 0 is when and .  Another way of looking at this might to consider the contrapositive of this statement. If we know that there does not exist a map from to , that means there must be some origin point in for the map to act on but no destination point in to send it to. Not having a place to send the point to directly implies . If we also had then we'd have a \"null map\", so the non-existance of a map also implies must be non-empty.     Exercise 2:   ...Show that (R) ... [and] (T) ...    Let's start with the reflexive property (R): . This notation indicates that there exist maps such that with . Clearly the map already mets both these conditions since .  To prove the transitive property (T), we can construct a retraction for the composition of the functions using a composition of their retractions. If , then there exist maps such that with . Likewise, , then there exist maps such that with .  Given these , we can define and define . Note that can be evaluated as follows using the associative property:     This completes the proof that .     Exercise 3:   ... Use these maps to construct an isomorphism .    So we're given that both and \"split the same idempotent\" .  The definition of \"splitting an idempotent\" tells us that with and . Given these maps, we're trying to establish a composition that goes from to using as a step in between. To get from to we can use map , and then to get from to we can use map .  Let us define by . This map should be a well-defined isomorphism with the inverse map given by . To prove this, we must show that and .  By the associative property, the first expression can be simplified as follows:        Likewise, the second expression can be similarly simplified:        These two conditions are sufficient to demonstrate that is an isomorphism.    "
},
{
  "id": "example-41",
  "level": "2",
  "url": "session9.html#example-41",
  "type": "Example",
  "number": "3.9.1",
  "title": "Exercise 1:.",
  "body": " Exercise 1:   ...unless the set has a point and has none...    So means that there exists some map . In the category of sets, we know that the number of possible maps from is related to the size of the sets by a formula we arrived at in Session 2: . The only time when this expression for number of maps evaluates to 0 is when and .  Another way of looking at this might to consider the contrapositive of this statement. If we know that there does not exist a map from to , that means there must be some origin point in for the map to act on but no destination point in to send it to. Not having a place to send the point to directly implies . If we also had then we'd have a \"null map\", so the non-existance of a map also implies must be non-empty.   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "session9.html#example-42",
  "type": "Example",
  "number": "3.9.2",
  "title": "Exercise 2:.",
  "body": " Exercise 2:   ...Show that (R) ... [and] (T) ...    Let's start with the reflexive property (R): . This notation indicates that there exist maps such that with . Clearly the map already mets both these conditions since .  To prove the transitive property (T), we can construct a retraction for the composition of the functions using a composition of their retractions. If , then there exist maps such that with . Likewise, , then there exist maps such that with .  Given these , we can define and define . Note that can be evaluated as follows using the associative property:     This completes the proof that .   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "session9.html#example-43",
  "type": "Example",
  "number": "3.9.3",
  "title": "Exercise 3:.",
  "body": " Exercise 3:   ... Use these maps to construct an isomorphism .    So we're given that both and \"split the same idempotent\" .  The definition of \"splitting an idempotent\" tells us that with and . Given these maps, we're trying to establish a composition that goes from to using as a step in between. To get from to we can use map , and then to get from to we can use map .  Let us define by . This map should be a well-defined isomorphism with the inverse map given by . To prove this, we must show that and .  By the associative property, the first expression can be simplified as follows:        Likewise, the second expression can be similarly simplified:        These two conditions are sufficient to demonstrate that is an isomorphism.   "
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

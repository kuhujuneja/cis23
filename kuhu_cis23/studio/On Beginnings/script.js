

window.addEventListener('load', function(event) {
    // Gather all the buttons.
    var buttons = document.querySelectorAll(".clickable")

    // Attach a click handler to each button.
    // Now each button will respond to "updateStyles()" function defined below.
    buttons.forEach(function(button) {
        button.addEventListener('click', updateStyles)
    })
});


function updateStyles(event) {
    // Element clicked on can be accessed with:
    // console.log(event.target)

    // Gather all other buttons to deactivate the color.
    var buttons = document.querySelectorAll(".clickable")
    buttons.forEach((button) => {
        button.classList.remove('activate-color');
    })

    // Button of interest is updated last, because if it was
    // first it be deactivated like the rest of the buttons
    event.target.classList.add('activate-color');

  var textElement = document.getElementById("text");

  if (event.target.id === "img1") {
    textElement.innerHTML = "<img src=\"1.svg\" class=\"handwriting1\"> <span class='reading-text'>I believe the poem is an act of the mind. I think it is easier to talk about the end of a poem than it is to talk about its beginning. Because the poem ends on the page, but it begins off the page, it begins in the mind. The mind acts, the mind wills a poem, often against our own will; somehow this happens, somehow a poem gets written in the middle of a chaotic holiday party that has just run out of ice, and it's your house. </span> ";
  } else if (event.target.id === "img2") {
    textElement.innerHTML = "<img src=\"2.svg\" class=\"handwriting2\"><span class='reading-text'>Now here is something really interesting (to me), something you can use at a standing-up-only party when everyone is tired of hearing there are one million three-thousand-two-hundred-ninety-five words used by the Esimo for snow. This is what Ezra Pound learned from Ernest Fenollosa: Some languages are so constructed—English among them—that we each only really speak one sentence in our lifetime. That sentence begins with your first words, toddling around the kitchen, and ends with your last words right before you step into the limousine, or in a nursing home, the night-duty attendant vaguely on hand. Or, if you are blessed, they are heard by someone who knows you and loves you and will be sorry to hear the sentence end.</span>";
  }
  else if (event.target.id === "img3") {
    textElement.innerHTML = "<img src=\"3.svg\" class=\"handwriting3\"><span class='reading-text'>I will tell you what I miss: I miss watching a movie and at the end, huge scrolled words come on the screen and say: The End. I miss finishing a novel and there on the last page, at a discrete distance from the last words of the last sentence, are the dark letters spelling The End.</span> ";
  }
  else if (event.target.id === "img4") {
    textElement.innerHTML = "<img src=\"4.svg\" class=\"handwriting4\"><span class='reading-text'>In life, the number of beginnings is exactly equal to the number of endings: no one has yet to begin a life who will not end it.</span>";
  }
  else if (event.target.id === "img5") {
    textElement.innerHTML = "<img src=\"5.svg\" class=\"handwriting5\"><span class='reading-text'>Roland Barthes suggests there are three ways to finish any piece of writing: the ending will have the last word or the ending will be silent or the ending will execute a pirouette, do something unexpectedly incongruent.</span>";
  }
  else if (event.target.id === "img6") {
    textElement.innerHTML = "<img src=\"6.svg\" class=\"handwriting6\"><span class='reading-text'>Bachelard’s sentence simply says this: origins (beginnings) have consequences (endings).</span>";
  }
  else if (event.target.id === "img7") {
    textElement.innerHTML = "<img src=\"7.svg\" class=\"handwriting7\"><span class='reading-text'>I have flipped through books, reading hundreds of opening and closing lines, across ages, across cultures, across aesthetic schools, and I have discovered that first lines are remarkably similar, even repeated, and that last lines are remarkably similar, even repeated. Of course in all cases they remain remarkably distinct, because the words belong to completely different poems. And i began to realize, reading these first and last lines, that there are not only the first and last lines of the lifelong sentence we each speak but also the first and last lines of the long piece of language delivered to use by others, by those we listen to. And in the best of all possible lives, that beginning and that end are the same: in poem after poem I encountered words that mark the first something made out of language that we hear as children repeated night after night, like a refrain: I love you. I am here with you. Don’t be afraid. Go to sleep now. And I encountered words that mark the last something made out of language that we hope to hear on earth: I love you. I am here with you. Don’t be afraid. Go to sleep now.</span> ";
  }
  else if (event.target.id === "img8") {
    textElement.innerHTML = "<img src=\"8.svg\" class=\"handwriting8\"><span class='reading-text'>Paul Valéry also described his perception of first lines so vividly, and to my mind so accurately, that i have never forgotten it: the opening line of a poem, he said, is like finding a fruit on the ground, a piece of fallen fruit you have never seen before, and the poet’s task is to create the tre from which such a fruit would fall. </span>";
  }
  else if (event.target.id === "img9") {
    textElement.innerHTML = "<img src=\"9.svg\" class=\"handwriting9\"><span class='reading-text'>It was its own thrill. I didn’t ignore them, I read them, even if only silently, with a deep sense of feeling: both the feeling of being replete, a feeling of satisfaction, and the feeling of loss, the sadness of having finished the book. </span> ";
  }
  else if (event.target.id === "img10") {
    textElement.innerHTML = "<img src=\"10.svg\" class=\"handwriting10\"><span class='reading-text'>Gaston Bachelard says the single most succinct and astonishing thing: We begin in admiration and we end by organizing our disappointment. The moment of admiration is the experience of something unfiltered, vital and fresh—it could also be horror—and the moment of organization is both the onset of disappointment and its dignification; the least we can do is dignify our knowingness, the loss of some vitality through familiarization, by admiring not the thing itself but how we can organize it, think about it. </span>";
  }
  else if (event.target.id === "img11") {
    textElement.innerHTML = "<img src=\"11.svg\" class=\"handwriting11\"><span class='reading-text'>An act of the mind. To move, to make happen, to make manifest. Be an act of Congress. A state of real existence rather than possibility. And poets love possibility! They love to wonder and explore. Hard lot! But the poem, no matter how full of possibility, has to exist! To conduct oneself, to behave. How a poem acts marks its individual character. A poem by Glandolyn Blue does not sound like a poem by Timothy Sure. to pretend, feign, impersonate. That, too, yes and always, because self-consciousness is its own pretension, and has been from its beginning; the human mind is capable of a great elastic theatre. As the poet Ralph angel puts it, “The poem is an interpretation of weird theatrical shit.” the weird theatrical shit is what goes on around us every day of our lives; an animal of only instinct, Johnny Ferret, has in his actions drama, but no theater; theater requires that you draw a circle around the action and observe it from outside the circle; in other words, self-consciousness is theatre.</span> ";
  }
  else if (event.target.id === "img12") {
    textElement.innerHTML = "<img src=\"12.svg\" class=\"handwriting12\"><span class='reading-text'>When I told Mr. Angel about the lifelong sentence, he said: “That’s a lot of semicolons!” he is absolutely right; the sentence would be unwieldy and awkward and resemble the novel of a savant, but the next time you use a semicolon (which, by the way, is the least-used mark of punctuation in all of poetry) you should stop and be thankful that there exists this little thing, invented by a human being—an Italian as a matter of fact—that allows us to go on and keep on connecting speech that for all apparent purposes is unrelated. </span>";
  }
  else if (event.target.id === "img13") {
    textElement.innerHTML = "<img src=\"13.svg\" class=\"handwriting13\"><span class='reading-text'>Easy and appropriate thing for a painter to say. Cy Twombly uses text in some of his drawings and paintings, usually poetry, usually Dante. Many men and women have written long essays and lectures on the ideas they see expressed in Twombly’s work.</span>";
  }
  else if (event.target.id === "img14") {
    textElement.innerHTML = "<img src=\"14.svg\" class=\"handwriting14\"><span class='reading-text'>The poem is the consequence of its origins. Give me the fruit and I will take from it a see and plant it and watch grow the tree from which it fell. </span> ";
  }
  else if (event.target.id === "img15") {
    textElement.innerHTML = "<img src=\"15.svg\" class=\"handwriting15\"><span class='reading-text'>I have never, in my life, read a poem that ended with the words The End. Why is that, I wonder. I think perhaps the brevity of poems compared to novels makes one feel that there has been no great sustention of energy, no marathon worthy of pulling tape across the finish line. And then I found a poem of mine that I had carefully written by hand in the sixth grade, and at the bottom of the page, in India ink, beautifully apart from the rest of the text, were the words The End. And I realized children very often denote the end because it is indeed a great achievement for them to have written anything, and they are completely unaware of the number of stories and poems that have already been written; they know some, of course, but have not yet found out the extent to which they are not the only persons residing on the planet. And so they sign their poems and stories like kings. Which is a wonderful thing.</span> ";
  }
  else if (event.target.id === "img16") {
    textElement.innerHTML = "<img src=\"16.svg\" class=\"handwriting16\"><span class='reading-text'>Paul Valéry, the French poet and thinker, once said that no poem is ever ended, that every poem is merely abandoned. This saying is also attributed to Stéphane Mallarmé, for where quotations begin is in a cloud.</span>";
  }
  else if (event.target.id === "img17") {
    textElement.innerHTML = "<img src=\"17.svg\" class=\"handwriting17\"><span class='reading-text'>But there is no book I know of on the subject of how poems begin. How can the origin be traced when there is no form or shape that precedes it to trace? It is exactly like tracing the moment of the big bang—we can go back to a nanosecond before the beginning, before the universe burst into being, but we can’t go back to the precise beginning because that would precede knowledge, and we can’t “know” anything before “knowing” itself was born. </span> ";
  }
  else if (event.target.id === "img18") {
    textElement.innerHTML = "<img src=\"18.svg\" class=\"handwriting18\"><span class='reading-text'>But it is growing damp and I must go in. Memory’s fog is rising. Among Emily Dickinson’s last words (in a letter). A woman whom everyone thought of as shut-in, homebound, cloistered, spoke as if she had been out, exploring the earth, her whole life, and it was finally time to go in. And it was. </span>";
  }
  else if (event.target.id === "img19") {
    textElement.innerHTML = "<img src=\"19.svg\" class=\"handwriting19\"><span class='reading-text'>The painter Cy Twombly quotes John Crowe Ransom, on a scrap of paper: “The image cannot be disposed of a primordial freshness which ideas can never claim.”</span>";
  }
   else if (event.target.id === "img20") {
    textElement.innerHTML = "<img src=\"20.svg\" class=\"handwriting20\"><span class='reading-text'>I believe many fine poems begin with ideas, but if you tell too many faces this, or tell it too loudly, they will get the wrong idea. </span>";
  }
  else if (event.target.id === "img21") {
    textElement.innerHTML = "<img src=\"21.svg\" class=\"handwriting21\"><span class='reading-text'>Would not speak to each other. Because the lines of a poem are speaking to each other, not you to them or they to you. </span>   ";
  }
  else if (event.target.id === "img22") {
    textElement.innerHTML = "<img src=\"22.svg\" class=\"handwriting22\"><span class='reading-text'>In poetry, the number of beginnings so far exceeds the number of endings that we cannot even conceive of it. Not every poem is finished—one poem is abandoned, another catches fire and is carried away by the wind, which may be an ending, but it is the ending of a poem without an end. </span>";
  }
  else if (event.target.id === "img23") {
    textElement.innerHTML = "<img src=\"23.svg\" class=\"handwriting23\"><span class='reading-text'>Everyone knows that if you query poets about how their poems begin, the answer is always the same: a phrase, a line, a scrap of language, a rhythm, an image, something seen, heard, witnessed, or imagined. And the lesson is always the same, and young poets recognize this to be one of the most important lessons they can learn: if you have any idea for a poem, an exact grid of intent, you are on the wrong path, a dead-end alley, at the top of a cliff you haven’t even climbed. This is a lesson that can only be learned by trial and error.</span>";
  }
  else if (event.target.id === "img24") {
    textElement.innerHTML = "<img src=\"24.svg\" class=\"handwriting24\"><span class='reading-text'>Barbara Henstein Smith, in her book Poetic Closure: A Study of How Poems End, says this: “Perhaps all we can say, and even this may be too much, is that varying degrees or states of tension seem to be involved in all our experiences, and that the most gratifying ones are those in which whatever tensions are created are also released. Or, to use another familiar set of terms, an experience is gratifying to the extent that those expectations that are aroused are also fulfilled.”</span>";
  }
  else if (event.target.id === "img25") {
    textElement.innerHTML = "<img src=\"25.svg\" class=\"handwriting25\"><span class='reading-text'>I am afraid there is no way around this. It is the one try inevitable thing. And if you believe that, then you are conceding that in the beginning was the act, not the word.</span>  ";
  }
  else if (event.target.id === "img26") {
    textElement.innerHTML = "<img src=\"26.svg\" class=\"handwriting26\"><span class='reading-text'>In the beginning was the Word. Western civilization rests upon those words. And yet there is a lively group of thinkers who believe that in the beginning was the Act. that nothing can precede action—no breath before act, no thought before act, no pervasive love before some kind of act.  </span> ";
  }
  else if (event.target.id === "img27") {
    textElement.innerHTML = "<img src=\"27.svg\" class=\"handwriting27\"><span class='reading-text'>You might say a poem is a semicolon, a living semicolon, what connects the first line to the last, the act of keeping together that whose nature is to fly apart. Between the first and last lines there exists—a poem—and if it were not for the poem that intervenes, the first and last lines of a poem would not speak to each other.</span>  ";
  }

  
}
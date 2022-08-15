// GSE MWU20 code

const episodeObject = {
  ep792: "Oh, by the way… Congratulations on your promotion! Oh, thank you. It’s a big change. You’ll have a lot more meetings to attend. That’s right. I’m sure my calendar is filling up as we speak. Good luck with that! Thanks. I’ve got a lot of work ahead of me. Well, everyone knows how hard you’ve been working... You’ve definitely earned it.  Thanks. I appreciate it.",
  ep793: "Did you get the photos of the shirts I sent? Uh, yeah… looking at them right now. All right, which shirt do you think I should buy? The yellow one or the pink one? To be honest, I don’t think you should buy either of them. Why not? They’re really popular! I just don’t know if they’re your style. What do you mean? Can I be honest here? OK... I don’t think you’re going to look good in either of these. They’re way too bright.",
  ep794: "Martin’s still coming, right? Yeah, but he had another meeting before this one. He said it might overlap. OK. Let’s wait a few more minutes to see if he joins. Oh wait, I just got a message from him. He said the other meeting is not going to end for another fifteen minutes. OK, let’s go ahead and start the meeting then. Can you see the slides?",
  ep795: "How are your parents doing? Oh! Good, good. They just got vaccinated yesterday. Oh, cool. It’s nice that they went together.  Yeah. My dad’s afraid of needles, so I think he was happy that my mom went with him. How’s your family? They’re good. My mom’s supposed to get the vaccine next week, actually. Oh, that’s good."

}


// EP strings
const ep792 = "Oh, by the way… Congratulations on your promotion! Oh, thank you. It’s a big change. You’ll have a lot more meetings to attend. That’s right. I’m sure my calendar is filling up as we speak. Good luck with that! Thanks. I’ve got a lot of work ahead of me. Well, everyone knows how hard you’ve been working... You’ve definitely earned it.  Thanks. I appreciate it."
const ep793 = "Did you get the photos of the shirts I sent? Uh, yeah… looking at them right now. All right, which shirt do you think I should buy? The yellow one or the pink one? To be honest, I don’t think you should buy either of them. Why not? They’re really popular! I just don’t know if they’re your style. What do you mean? Can I be honest here? OK... I don’t think you’re going to look good in either of these. They’re way too bright."

// gets number of phrases
ep793.toLowerCase().split("as well").length - 1


// testing how many of a letter in an object
// let i = 0
// for (let key in obby) {
//     console.log(key[i])
//     i++
// }

const mwu20 = ["as well", "years old", "years ago", "all right", "so much", "come up with", "right now", "come back", "come out", "focus on", "high school", "come in", "in order", "in addition", "no longer", "pick up", "go back to", "very much", "pointed out", "know how"];

for (let i = 0; i < mwu20.length; i++) {
  let word = mwu20[i];
  let total = episodeObject.ep793.toLowerCase().split(mwu20[i]).length - 1;
  console.log(`${i +1}. ${word}: ${total}`)
}

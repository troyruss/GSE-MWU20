// GSE MWU20 code

const episodeObject = {
  ep792: "Oh, by the way… Congratulations on your promotion! Oh, thank you. It’s a big change. You’ll have a lot more meetings to attend. That’s right. I’m sure my calendar is filling up as we speak. Good luck with that! Thanks. I’ve got a lot of work ahead of me. Well, everyone knows how hard you’ve been working... You’ve definitely earned it.  Thanks. I appreciate it.",
  ep793: "Did you get the photos of the shirts I sent? Uh, yeah… looking at them right now. All right, which shirt do you think I should buy? The yellow one or the pink one? To be honest, I don’t think you should buy either of them. Why not? They’re really popular! I just don’t know if they’re your style. What do you mean? Can I be honest here? OK... I don’t think you’re going to look good in either of these. They’re way too bright.",
  ep794: "Martin’s still coming, right? Yeah, but he had another meeting before this one. He said it might overlap. OK. Let’s wait a few more minutes to see if he joins. Oh wait, I just got a message from him. He said the other meeting is not going to end for another fifteen minutes. OK, let’s go ahead and start the meeting then. Can you see the slides?",
  ep795: "How are your parents doing? Oh! Good, good. They just got vaccinated yesterday. Oh, cool. It’s nice that they went together.  Yeah. My dad’s afraid of needles, so I think he was happy that my mom went with him. How’s your family? They’re good. My mom’s supposed to get the vaccine next week, actually. Oh, that’s good.",
  ep796: "He told me he’d send it tomorrow by noon. OK, good. Alright, it’s 4:30, so we should wrap up. Yeah.  Should we have another meeting soon or... ? Yeah. Will you be free on Thursday... 2pm? I think that should work. OK. I’ll schedule a follow-up meeting on Thursday. If you need to cancel, just let me know. Thanks. Sounds good.",
  ep797: "Dan? Hey! Oh my gosh! How have you been? I’ve been good! You? I’ve been doing well! I don’t even know where to start... I know, I know. How long has it been? Let me think... Five? Has it really been five years? Yeah, I think so! OK. So I have to ask... Are you still living with Alex? Oh, that’s a long story.",
  ep798: "Can you hear me OK? Yes, but there’s a lot of noise in the background. Do you know how to reduce background noise? Sorry, we’re next to a busy road here and there’s a lot of traffic at the moment. How can I fix that? There should be an icon shaped like a gear on the top right corner of your screen. Click on that. Hmm... OK. Let me see... Ah! Background noise filter... I guess I should enable that. Any better? Much better! Alright, let’s get started.",
  ep799: "I forgot to ask! Did you book your flights yet? Yes! I just got the tickets yesterday. I can’t wait until I’m there! Me too. Is there anything special you wanted to do? Mostly I’m just looking forward to hanging out with you guys. It’ll be great to finally spend some time again together face-to-face. Definitely! If you think of anything you want to do, I can prepare that. Uh, let me know. I can book tickets… I can make reservations for stuff… Oh, thanks! Actually, there was something I wanted to ask about."
}


// EP strings
const ep792 = "Oh, by the way… Congratulations on your promotion! Oh, thank you. It’s a big change. You’ll have a lot more meetings to attend. That’s right. I’m sure my calendar is filling up as we speak. Good luck with that! Thanks. I’ve got a lot of work ahead of me. Well, everyone knows how hard you’ve been working... You’ve definitely earned it.  Thanks. I appreciate it."
const ep793 = "Did you get the photos of the shirts I sent? Uh, yeah… looking at them right now. All right, which shirt do you think I should buy? The yellow one or the pink one? To be honest, I don’t think you should buy either of them. Why not? They’re really popular! I just don’t know if they’re your style. What do you mean? Can I be honest here? OK... I don’t think you’re going to look good in either of these. They’re way too bright."

// gets number of phrases
ep793.toLowerCase().split("as well").length - 1


// // testing how many of a letter in an object
// let i = 0
// for (let key in obby) {
//     console.log(key[i])
//     i++
// }

// // Iterating through episodeObject
// for (let episode in episodeObject) {
//   console.log(episodeObject[episode])
// }

const mwu20 = ["as well", "years old", "years ago", /all right|alright/, "so much", /come up with|came up with|coming up with/, "right now", /come back|came back|coming back/, /come out|came out|coming out/, /focus on|focused on|focusing on/, "high school", /come in|came in|coming in/, "in order", "in addition", "no longer", /pick up|picked up|picking up/, /go back to|went back to|going back to/, "very much", /point out|pointed out|pointing out/, /know how|knew how|knowing how/];

// for (let i = 0; i < mwu20.length; i++) {
//   let word = mwu20[i];
//   let total = episodeObject.ep793.toLowerCase().split(mwu20[i]).length - 1;
//   console.log(`${i +1}. ${word}: ${total}`)
// }


/* loops through episode object, 
then loops through MultiWordUnit top 20, 
outputs episode # with
   MWU ranking, 
   MWU phrase, 
   and the total # of that phrase in the ep*/
for (let episode in episodeObject) {
  console.log(episode)
  for (let i = 0; i < mwu20.length; i++) {
    let word = mwu20[i];
    let total = episodeObject[episode].toLowerCase().split(mwu20[i]).length - 1;
    console.log(`   ${i +1}. ${word}: ${total}`)
  }
}


// // join episode string to remove spaces, seems regex works for MWUs and we get accurate count
// let test = "I pointed out that he was pointing out the problem with the point out."
// splitted = test.split(" ")
// splitted.join("").split(/pointout|pointedout|pointingout/).length -1
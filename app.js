// GSE MWU20 code

const episodeObject = {
  ep792: "Oh, by the way… Congratulations on your promotion! Oh, thank you. It’s a big change. You’ll have a lot more meetings to attend. That’s right. I’m sure my calendar is filling up as we speak. Good luck with that! Thanks. I’ve got a lot of work ahead of me. Well, everyone knows how hard you’ve been working... You’ve definitely earned it.  Thanks. I appreciate it.",
  ep793: "Did you get the photos of the shirts I sent? Uh, yeah… looking at them right now. All right, which shirt do you think I should buy? The yellow one or the pink one? To be honest, I don’t think you should buy either of them. Why not? They’re really popular! I just don’t know if they’re your style. What do you mean? Can I be honest here? OK... I don’t think you’re going to look good in either of these. They’re way too bright.",
  ep794: "Martin’s still coming, right? Yeah, but he had another meeting before this one. He said it might overlap. OK. Let’s wait a few more minutes to see if he joins. Oh wait, I just got a message from him. He said the other meeting is not going to end for another fifteen minutes. OK, let’s go ahead and start the meeting then. Can you see the slides?",
  ep795: "How are your parents doing? Oh! Good, good. They just got vaccinated yesterday. Oh, cool. It’s nice that they went together.  Yeah. My dad’s afraid of needles, so I think he was happy that my mom went with him. How’s your family? They’re good. My mom’s supposed to get the vaccine next week, actually. Oh, that’s good.",
  ep796: "He told me he’d send it tomorrow by noon. OK, good. Alright, it’s 4:30, so we should wrap up. Yeah.  Should we have another meeting soon or... ? Yeah. Will you be free on Thursday... 2pm? I think that should work. OK. I’ll schedule a follow-up meeting on Thursday. If you need to cancel, just let me know. Thanks. Sounds good.",
  ep797: "Dan? Hey! Oh my gosh! How have you been? I’ve been good! You? I’ve been doing well! I don’t even know where to start... I know, I know. How long has it been? Let me think... Five? Has it really been five years? Yeah, I think so! OK. So I have to ask... Are you still living with Alex? Oh, that’s a long story.",
  ep798: "Can you hear me OK? Yes, but there’s a lot of noise in the background. Do you know how to reduce background noise? Sorry, we’re next to a busy road here and there’s a lot of traffic at the moment. How can I fix that? There should be an icon shaped like a gear on the top right corner of your screen. Click on that. Hmm... OK. Let me see... Ah! Background noise filter... I guess I should enable that. Any better? Much better! Alright, let’s get started.",
  ep799: "I forgot to ask! Did you book your flights yet? Yes! I just got the tickets yesterday. I can’t wait until I’m there! Me too. Is there anything special you wanted to do? Mostly I’m just looking forward to hanging out with you guys. It’ll be great to finally spend some time again together face-to-face. Definitely! If you think of anything you want to do, I can prepare that. Uh, let me know. I can book tickets… I can make reservations for stuff… Oh, thanks! Actually, there was something I wanted to ask about.",
  ep800: "I’ll start early tomorrow to prepare. Oh, that’s right! Good luck with the presentation! Thank you! I’m going to need it. The CEO’s attending, right? Yeah. Thanks for reminding me. Well... I’m sure you’ll do great. You have nothing to worry about. I hope you’re right.",
  ep801: "So, I’ll be staying with my cousins for the rest of the month. Oh, OK. You’re pretty close to them, right? Oh, yeah. We grew up together. But they moved to the country ten years ago. They usually come to the city to visit us, so this is actually the first time I’ve been out here. Ah, cool. What’s it like there? I hear some noises in the background. Noises? Maybe their dogs? No, I hear like… running water or something. Oh! That’s probably the stream. It’s right behind the house.  Ah, that’s cool! Yeah, it’s really peaceful here. Are there shops or restaurants in the area? No, not really. There’s a gas station nearby where we can get snacks and stuff. But anything else is at least a 30-minute drive away.  Wow, that sounds so different from where I’m living.",
  ep802: "Were there any updates on the Summer Spectacular project? Yes, I was just about to get to that. I’ve mapped out the development schedule for the project. That’s great. What sort of time frame are we looking at? Eight months. Hmm. That’s a little longer than I’d hoped. Is there any way to get it done faster? Hmm... it’s a little tight as is. I’ve allocated twenty days for design. I could shorten that by a few days, but not much more. It’s alright. It’s best not to rush that. OK.",
  ep803: "Hey! What’s up? Hi! I just got your care package!  That was quick! I’m glad it arrived in one piece. I can’t thank you enough for this. It’s been a really rough couple of weeks, so the gesture alone really cheered me up. Aw. It’s my pleasure. It’s the least I can do right now, seeing as I can’t come over in person. It really means a lot to me. Thank you. You’d do the same for me. By the way, was the chocolate OK? I was a little worried about it melting.",
  ep804: "I wanted to ask you about the launch event. I was wondering if you had any contacts in event planning. I know just the guy for that. He did the big opening party for the new branch. His name is Mark Wozniak. Oh! I remember that party. It was really good. Let me put you in touch with him.  Great! That’s really helpful. My pleasure.",
  ep805: "I just sent you the picture! Oh! Let me check… Seriously? Is something wrong? It’s nothing. You probably don’t want to hear about it. Oh, I’m OK… As long as you want to, you can tell me about it. Yeah? It’s just my brother is so annoying… Are you sure you want to hear this? If I start talking about it, I’m going to go on a rant.  Don’t worry about it! Just let it out. Alright. Well, he borrowed my car this morning, which is fine because I didn’t really need it today. But anyway, like fifteen minutes later after borrowing it, he texts me saying he spilled coffee all over the passenger seat. Oh, no... Yeah. And there’s more. Listen to this message I just got… “Sorry. Left the car windows open and it rained. Do you have any fans we could use to dry it out?” What? Wow. That’s really frustrating.",
  ep806: "Alan joined your team last term, correct? That’s right. He joined us in July. How’s he working out? Really well, actually. He’s meeting his deadlines, hitting all of his targets… Well, that’s good to hear. I remember last month you mentioned the quality of his writing wasn’t quite up to standard. Are his reports improving? Definitely. I think last month he was still getting used to the job. His reports this month have been stellar. Great.",
  ep807: "So how’s life? I’m so busy these days. Me too! With work, family, everything else… I can’t get a break. I know! I feel like I have no free time anymore. Yeah. I can’t wait until I can take a vacation. I just want to take a week off to sleep.",
  ep808: "Do you play any instruments? Yeah. I play the bass. Cool! What kind of music do you play? Mostly jazz and blues. I love jazz. What about you? Do you play any instruments? I’m learning how to play the piano. It’s fun, but I’m not very good yet. How long have you been playing? About two months.",
  ep809: "So, are you excited for Halloween? You know I don’t like Halloween! All that ghost and vampire stuff freaks me out. It’s the best holiday of the year! Strange things happen around Halloween, you know. Don’t even start. Seriously! Last night, I heard footsteps and voices outside this room. OK, give it a rest. The voices sounded like… Happy Halloween! Happy Halloween! Are you messing with me? This isn’t funny. I’m sorry! I just wanted to get you in the Halloween spirit! I thought this camera filter was pretty cool. That’s not OK! I was getting really scared! I said I’m sorry! Why are you making up stories to scare me? Well, I really did hear strange things last night. OK. That’s enough, Sam. You’re not going to scare me again. No, really! I was sitting right here and I heard… that. Do you hear that too? Yeah… OK, now I’m scared. Maybe I should…  Sam? OK, the joke’s over. Sam?",
  ep810: "We need to choose a location for our new office. Between Westlake and Barton, I think we should choose Barton. It’s less expensive. Samantha, what do you think? Well… I see your point, but I disagree. OK... Barton is cheaper, but Westlake is more convenient. It’s closer to the airport and the factory. Hmm. Westlake is almost twice as expensive as Barton though. That’s right, but most of our clients are in Westlake. It may be more difficult to hire staff in Barton too. Hmm, I hadn’t thought about that.",
  ep811: "When do you want to meet? Would next Saturday be alright? Oh, I’m usually at the animal rescue shelter on Saturdays. Oh, wow! I didn’t know you did that. I’ve always wanted to get involved in something like that. Are you looking for volunteers? Yeah, we always need more help. Is there a day that works for you? Hmm. I can volunteer on Mondays.  That’s perfect! We don’t have enough people during the week. I’ll talk to the organizer and let you know. Great! I can’t wait! So… about meeting up…",
  ep812: "What’s something you think you’re very good at? I think I’m best at coordinating a team. Working remotely can make it challenging to communicate with a large team and ensure that everyone is on the same page, but this is something I was able to do quite successfully in my last job. Yeah, it’s not easy. How about any areas you feel you need to improve on? I’m working to improve my programming skills. It’s not something I really needed in my last role, but that’s what my team did. I think it’s important to have a good understanding of the nature of your team’s work, even if it’s not something that you do yourself. I like that philosophy. One more question…",
  ep813: "I’m so excited about our trip to Washington DC next year! Me too! I’d love to visit the Smithsonian if we have time. Of course! There’s no way we’re missing that. Do you think we could also visit Philadelphia while we’re there? That should be doable. I think we can get there in two or three hours if we rent a car. Cool. Maybe we can stay overnight. That sounds like a plan!",
  ep814: "Alright, next we’ve got Andrew with updates on our Seattle expansion. Sorry, I can’t hear you. I think your mic is muted. Can you hear me now? Yes, but there seems to be a bit of an echo. Sorry about that. How is it now? No, I can still hear an echo. Could you try putting headphones on? How’s that? I think it’s better now. Alright. So regarding the Seattle expansion…",
  ep815: "OK, I’ve got the photo open now. Good. First, you need to click on edit and then select crop. OK, edit and then crop. Got it. Then you need to select the area of the picture you want to keep. Alright. Do I click OK now? Before you do that, make sure you check the image resolution. There should be a number at the top. It says 300 pixels per inch. Is that OK? Yeah, you got it. You can click OK and you’re done. Thank you! I’m such a newbie at this kind of stuff. I really appreciate the help. Any time. I’m more than happy to help you.",
  ep816: "Are you getting ready for the holidays? I am, though I still need to do a deep clean of my apartment. In the winter? Yeah. It’s the custom around this time of year. In Japan, people usually do a deep clean of their homes before New Year’s. I guess it’s nice to start the year with a clean apartment. How about over there in Norway? Do you have any special traditions for the winter holidays? Well, it’s funny you mention cleaning. It’s tradition to hide your brooms before Christmas Eve here. I guess you won’t be doing much cleaning then!",
  ep817: "I can’t believe it’s almost January already. I know. It’s been quite the challenging year. Yeah, I’m glad this year is over, though I feel like I’ve learned a lot. I completely agree. This has really been a year of growth for me. Sometimes we need hard times to learn. I took a lot of things for granted before. Me too. For one thing, I definitely speak with my family a lot more than I used to. Same here. I definitely have my priorities straight now."
}


// // EP strings
// const ep792 = "Oh, by the way… Congratulations on your promotion! Oh, thank you. It’s a big change. You’ll have a lot more meetings to attend. That’s right. I’m sure my calendar is filling up as we speak. Good luck with that! Thanks. I’ve got a lot of work ahead of me. Well, everyone knows how hard you’ve been working... You’ve definitely earned it.  Thanks. I appreciate it."
// const ep793 = "Did you get the photos of the shirts I sent? Uh, yeah… looking at them right now. All right, which shirt do you think I should buy? The yellow one or the pink one? To be honest, I don’t think you should buy either of them. Why not? They’re really popular! I just don’t know if they’re your style. What do you mean? Can I be honest here? OK... I don’t think you’re going to look good in either of these. They’re way too bright."

// // gets number of phrases
// ep793.toLowerCase().split("as well").length - 1


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

// Array of MWU20 -- each item is string or regex (for MWUs with various inflections)
const mwu20 = ["as well", "years old", "years ago", /all right|alright/, "so much", /come up with|came up with|coming up with/, "right now", /come back|came back|coming back/, /come out|came out|coming out/, /focus on|focused on|focusing on/, "high school", /come in|came in|coming in/, "in order", "in addition", "no longer", /pick up|picked up|picking up/, /go back to|went back to|going back to/, "very much", /point out|pointed out|pointing out/, /know how|knew how|knowing how/];

// for (let i = 0; i < mwu20.length; i++) {
//   let word = mwu20[i];
//   let total = episodeObject.ep793.toLowerCase().split(mwu20[i]).length - 1;
//   console.log(`${i +1}. ${word}: ${total}`)
// }

// Frequency counter for total MWUs
let freqCounter = {}

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
    freqCounter[word] = freqCounter[word] + total || total;
  }
  for (let freq in freqCounter) {
    console.log(`${freq}: ${freqCounter[freq]}`)
  }
}


// // join episode string to remove spaces, seems regex works for MWUs and we get accurate count
// let test = "I pointed out that he was pointing out the problem with the point out."
// splitted = test.split(" ")
// splitted.join("").split(/pointout|pointedout|pointingout/).length -1
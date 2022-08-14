// GSE MWU20 code

// EP strings
const ep792 = "Oh, by the way… Congratulations on your promotion! Oh, thank you. It’s a big change. You’ll have a lot more meetings to attend. That’s right. I’m sure my calendar is filling up as we speak. Good luck with that! Thanks. I’ve got a lot of work ahead of me. Well, everyone knows how hard you’ve been working... You’ve definitely earned it.  Thanks. I appreciate it."
const ep793 = "Did you get the photos of the shirts I sent? Uh, yeah… looking at them right now. All right, which shirt do you think I should buy? The yellow one or the pink one? To be honest, I don’t think you should buy either of them. Why not? They’re really popular! I just don’t know if they’re your style. What do you mean? Can I be honest here? OK... I don’t think you’re going to look good in either of these. They’re way too bright."

// gets number of phrases
ep793.toLowerCase().split("as well").length - 1


// testing how many of a letter in an object
let i = 0
for (let key in obby) {
    console.log(key[i])
    i++
}

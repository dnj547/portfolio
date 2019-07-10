cards = [
  "You were just born in Tampa, FL!",
  "You moved to Texas!",
  "You moved to Louisiana!",
  "You graduated from high school as valedictorian!",
  "image",
  "You're attending college at LSU! What are you majoring in?",
  "The correct answer was something artsy! You’re majoring in graphic design. Is that a good decision?",
  "The correct answer was no! You’re bad at art. You’ve changed your major to accounting. Is accounting fun?",
  "No, accounting is not fun, are you crazy?? But you’re doing it anyway! Is it a good decision?",
  "The correct answer was yes! You got an accounting internship at PwC in New York City! How excited are you?",
  "The correct answer was :D! You got a job offer from PwC after the internship and graduated from LSU! What will you do?",
  "The correct answer was obviously move to NYC!",
  "image",
  "You’ve moved to NYC and started your job at PwC! How’s it going?",
  "You’re an impostor! Everyone can tell! :D But you’ve discovered you have a passion for something… What is it?",
  "The correct answer was programming! You’ve decided you want to learn how to code and switch careers. How will you do it?",
  "The smart answer was stay at PwC, but you decided to leave and do it on your own! How long will it take you to learn how to code?",
  "The correct answer was a lifetime!",
  "image",
  "One year later… You’ve all but given up on teaching yourself how to code. What do you do next?",
  "You applied to Flatiron School, and you got in! Was this a good decision?",
  "The correct answer was 1000x yes! You’re a student at Flatiron School. How’s it going?",
  "The correct answer was I LOVE IT! You’ve finally learned how to code! You’re about to graduate from Flatiron School! What will you do next?",
  "The correct answer was juggle in space because no one will hire you! You’ve only just graduated from a bootcamp! Haha, you thought you’d find a job that easily??",
  "Woohoo, you’re a juggler in space! Did you have a good life?",
  "image"
]
responses = [
  [":)",":("],
  [":)",":("],
  [":)",":("],
  [":)",":D"],
  ["Play again"],
  ["Something artsy", "Something mathy"],
  ["No", "Yes"],
  ["No", "Yes"],
  ["No", "Yes"],
  [":)",":D"],
  ["Move to NYC, Duh!", "Decline the offer and stay in Louisiana"],
  ["Yes it was!"],
  ["Play again"],
  ["Very well!", "I'm an impostor and everyone can tell"],
  ["Programming", "Juggling in space"],
  ["Stay at PwC and learn how to code in my spare time", "Leave PwC and learn how to code on my own"],
  ["6 months","A lifetime"],
  ["Oh", "Duh"],
  ["Play again"],
  ["Apply to a coding bootcamp", "Follow your real dream of being a juggler in space"],
  ["Yes", "1000x yes!"],
  ["Yeah, I guess so", "I LOVE it!"],
  ["Get a job", "Juggle in space"],
  ["Well yes", "Uhhhhh"],
  ["Yes!", "No, I hated it"],
  ["Play again", "I've got a job for you!"]
]

cards.each do |card|
  Card.create(card_text: card)
end

responses.each_with_index do |responses, index|
  card = index+1
  responses.each do |response|
    Response.create(response_text: response, card_id: card)
  end
end

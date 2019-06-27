cards = [
  "You were just born in Tampa, FL!",
  "image",
  "You moved to Texas!",
  "image",
  "You moved to Louisiana!",
  "image",
  "You graduated from Bossier City High School as valedictorian!",
  "image",
  "You just started college at LSU!",
  "You're majoring in graphic design. But why? You miss math.",
  "You changed your major to Accounting! How fun! What an exciting subject!",
  "image",
  "You just got an internship at an PwC (a fantastic accounting firm) in New York City!",
  "image",
  "You finished the internship and graduated from college! Go you!"
]
responses = [
  ["Cool","Wow, what a nightmare"],
  ["Move to Texas"],
  ["Awesome","Not cool, man"],
  ["Move to Louisiana"],
  ["The food is good there","Mardi Gras!","Eww... swamps..."],
  ["Grow up already!"],
  ["Show off...","Wow!"],
  ["Again!"],
  ["Cool!","Geaux Tigers!","LSU Sux"],
  ["Change Major"],
  ["Yeah!","Bro...","Accounting, really?"],
  ["Hahaha","Come on, it can't be that bad"],
  ["Yasssssss!","Sounds awful!"],
  ["PwC!","Oh right they messed up the Oscars"],
  ["Again!"]
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

export type Card = {
icon: string;
name: string;
desc: string;
};
export const RawCards: Card[] = [
{icon:'🂡', name: 'Ace of Spades',
desc: 'Now is the time to conserve energy and resources. A project fails, but gain an Abundance. or Now is the time for hurried labour and final efforts. A project finishes early, but gain a Scarcity.'},
{icon:'🂱', name:'Ace of Hearts',
desc: 'What group has the highest status in the community? What must people do to gain inclusion in this group? or Are there distinct family units in the community? If so, what family structures are common?'},
{icon:'🃁', name:'Ace of Diamonds', 
desc: 'A contingent within the community demand to be heard. Who are they? What are they asking for? or A contingent within the community have acted on their frustrations. What have they damaged, and why did they damage it? Is it permanent?'},
{icon:'🃑', name:'Ace of Clubs',
desc: 'The community becomes obsessed with a single project. Which one? Why? Choose one: \
• They decide to take more time to ensure that it is perfect. Add 3 weeks to the project die. \
• They drop everything else to work on it. All other projects fail.\
If there are no projects underway, the community becmoes obsessed with a grandioise vision. Hold a discussion about this vision, in addition to your regular action for the week.'},
{icon:'🂢', name: 'Two of Spades',
desc: 'A headstrong community member takes charge of the community’s work efforts. A project fails, and then a different project finishes early. or A headstrong community member tries to take control of the community. How are they prevented from doing this? Due to the conflict, project dice are not reduced this week.'},
{icon:'🂲', name: 'Two of Hearts',
desc: 'There’s a large body of water on the map. Where is it? What does it look like? or here’s a giant, man-made structure on the map. Where is it? Why is it abandoned?'},
{icon:'🃂', name: 'Two of Diamonds', 
desc: 'Someone new arrives. Who? Why are they in distress? or Someone leaves the community. Who? What are they looking for?'},
{icon:'🃒', name: 'Two of Clubs', 
desc: 'Someone returns to the community. Who? Where were they? or You find a body. Do people recognize who it is? What happened?'},
{icon:'🂣', name: 'Three of Spades',
desc: 'Someone comes up with an ingenious solution to a big problem and as a result a project finishes early. What was their idea? or Someone comes up with a plan to ensure safety and comfort during the coldest months. Start a project related to this.'},
{icon:'🂳', name: 'Three of Hearts',
desc: 'Someone new arrives. Who? or Two of the community’s younger members get into a fight. What provoked them?'},
{icon:'🃃', name: 'Three of Diamonds', 
desc: 'Summer is a time for production and tending to the earth. Start a project related to food production. or Summer is a time for conquest and the gathering of might. Start a project related to military readiness and conquest.'},
{icon:'🃓', name: 'Three of Clubs',
desc: 'Someone leaves the community after issuing a dire warning. Who? What is the warning? or Someone issues a dire warning, and the community leaps into action to avoid disaster. What is the warning? Start a contentious project that relates to it.'},
{icon:'🂤', name: 'Four of Spades', 
desc: 'All the animals and young children are crying and won’t stop. Hold a discussion about this, in addition to your regular action for the week. or A great atrocity is revealed. What is it? Who uncovers it?'},
{icon:'🂴', name: 'Four of Hearts',
desc: 'What important and basic tools does the community lack? or Where are you storing your food? Why is this a risky place to store things?'},
{icon:'🃄', name: 'Four of Diamonds',
desc: 'The eldest among you dies. What caused the death? or The eldest among you is very sick. Caring for them and searching for a cure requires the help of the entire community. Do not reduce project dice this week.'},
{icon:'🃔', name: 'Four of Clubs', 
desc: 'The strongest among you dies. What caused the death? or The weakest among you dies. Who’s to blame for their death? '},
{icon:'🂥', name: 'Five of Spades',
desc: 'Winter elements destroy a food source. If this was your only food source, add a Scarcity. or Winter elements leave everyone cold, tired, and miserable. Project dice are not reduced this week.'},
{icon:'🂵', name: 'Five of Hearts',
desc: 'There is a disquieting legend about this place. What is it? or Alarming weather patterns destroy something. How and what?'},
{icon:'🃅', name: 'Five of Diamonds',
desc: 'A project finishes early. What led to its early completion? or The weather is nice and people can feel the potential all around them. Start a new project.'},
{icon:'🃕', name: 'Five of Clubs',
desc: 'The Parish arrives. Who are they? Why have they chosen your community, and for what? or A small gang of marauders is making its way through local terrain. How many are there? What weapons do they carry?'},
{icon:'🂦', name: 'Six of Spades',
desc: 'The time has come to consolidate your efforts and your borders. Projects located outside the settlement fail, and all remaining projects are reduced by 2 this week. or Someone finds a curious opportunity on the edge of the map. Start a project related to this discovery.'},
{icon:'🂶', name: 'Six of Hearts',
desc: 'Are there children in your community? If there are, what is their role in the community? or How old are the eldest members of the community? What special needs do they have?'},
{icon:'🃆', name: 'Six of Diamonds',
desc: 'Outsiders arrive in the area. Why are they a threat? How are they vulnerable? or Outsiders arrive in the area. How many? How are they greeted?'},
{icon:'🃖', name: 'Six of Clubs',
desc: 'Introduce a dark mystery among the members of the community. or Conflict flares up among community members and as a result, a project fails.'},
{icon:'🂧', name: 'Seven of Spades',
desc: 'What is winter like in this area? How do community members react to the weather?'},
{icon:'🂷', name: 'Seven of Hearts',
desc: 'Where does everyone sleep? Who is unhappy with this arrangement, and why? or What natural predators roam this area? Are you safe?'},
{icon:'🃇', name: 'Seven of Diamonds',
desc: 'Introduce a mystery at the edge of the map. or An unattended situation becomes problematic and scary. What is it? How does it go awry?'},
{icon:'🃗', name: 'Seven of Clubs', 
desc: 'A project just isn’t working out as expected. Radically change the nature of this project (don\'t modify the project die). When it resolves, you\'ll be responsible for telling the community how it went. or Something goes foul and supplies are ruined. Add a new Scarcity.'},
{icon:'🂨', name: 'Eight of Spades',
desc: 'Winter is harsh, and desperation gives rise to fear mongering. Choose one: \
• Spend the week calming the masses and dispelling their violent sentiments. The week ends immediately.\
• Declare war on someone or something. This counts as starting a project.'},
{icon:'🂸', name: 'Eight of Hearts',
desc: 'An old piece of machinery is discovered, broken but perhaps repairable. What is it? What would it be useful for? or An old piece of machinery is discovered, cursed and dangerous. How does the community destroy it?'},
{icon:'🃈', name: 'Eight of Diamonds',
desc: 'Someone tries to take control of the community by force. Do they succeed? Why do they do this? or A headstrong community member decides to put one of their ideas in motion. Start a foolish project.'},
{icon:'🃘', name: 'Eight of Clubs',
desc: 'Someone sabotages a project, and the project fails as a result. Who did this? Why? or Someone is caught trying to sabotage the efforts of the community. How does the community respond?'},
{icon:'🂩', name: 'Nine of Spades',
desc: 'Someone goes missing. They’re alone in the winter elements. Choose one: \
• The community organizes constant search parties and eventually the person is found. Project dice are not reduced this week. \
• No one ever hears from that person again.'},
{icon:'🂹', name: 'Nine of Hearts',
desc: 'A charismatic young girl convinces many to help her with an elaborate scheme. What is it? Who joins her endeavors? Start a project to reflect. or A charismatic young girl tries to tempt many into sinful or dangerous activity. Why does she do this? How does the community respond?'},
{icon:'🃉', name: 'Nine of Diamonds',
desc: 'A project fails. Which one? Why? or Something goes foul and supplies are ruined.'},
{icon:'🃙', name: 'Nine of Clubs',
desc: 'The community works constantly and as a result a project finishes early. or A group goes out to explore the map more thoroughly, and finds something that had been previously overlooked.'},
{icon:'🂪', name: 'Ten of Spades', 
desc: 'In preparation for the coming year, the community begins a huge undertaking. \
Start a project that will take at least 5 weeks to complete.'},
{icon:'🂺', name: 'Ten of Hearts',
desc: 'There’s another community somewhere on the map. Where are they? What sets them apart from you? or What belief or practice helps to unify your community?'},
{icon:'🃊', name: 'Ten of Diamonds',
desc: 'You discover a cache of supplies or resources. Add a new Abundance. or A Scarcity has gone unaddressed for too long! Start a project that will alleviate that Scarcity.'},
{icon:'🃚', name: 'Ten of Clubs', 
desc: 'Harvest is here and plentiful. Add an Abundance. or Cold autumn winds drive out your enemies. Remove a threatening force from the map and the area.'},
{icon:'🂫', name: 'Jack of Spades',
desc: 'An infected outsider arrives, seeking amnesty. They have some much-needed resources with them. Choose one: \
• Welcome them into the community. Remove a Scarcity, but also introduce an infection into the community. \
• Bar them from entry. What Scarcity could they have addressed? How does its need become more dire this week?'},
{icon:'🂻', name: 'Jack of Hearts', 
desc: 'You see a good omen. What is it? or You see a bad omen. What is it?'},
{icon:'🃋', name: 'Jack of Diamonds',
desc: 'Predators and bad omens are afoot. You are careless and someone goes missing under ominous circumstances. Who? or Predators and bad omens are afoot. What measures do you take to keep everyone safe and under surveillance? Do not reduce project dice this week.'},
{icon:'🃛', name: 'Jack of Clubs',
desc: 'A project finishes early. Which one? Why? \
If there are no projects underway, restlessness creates animosity, and animosity leads to violence. Who gets hurt?'},
{icon:'🂭', name: 'Queen of Spades',
desc: 'You see a good omen. What is it?'},
{icon:'🂽', name: 'Queen of Hearts', 
desc: 'What’s the most beautiful thing in this area? or What’s the most hideous thing in this area?'},
{icon:'🃍', name: 'Queen of Diamonds', 
desc: 'A project finishes early. Which one? Why? \
If there are no projects underway, boredom leads to a quarrel. A fight breaks out between two people. What is it about?'},
{icon:'🃝', name: 'Queen of Clubs',
desc: 'Disease spreads through the community. Choose one: \
• You spend the week quarantining and treating the disease. Project dice are not reduced this week.\
• Nobody knows what to do about it. Add “Health and Fertility” as a Scarcity.'},
{icon:'🂮', name: 'King of Spades', 
desc: 'The Frost Shepherds arrive. The game is over.'},
{icon:'🂾', name: 'King of Hearts',
desc: 'A young boy starts digging in the ground, and discovers something unexpected. What is it? or An old man confesses to past crimes and atrocities. What has he done?'},
{icon:'🃎', name: 'King of Diamonds',
desc: 'Summer is fleeting. Discard the top two cards off the top of the deck and take two actions this week.'},
{icon:'🃞', name: 'King of Clubs',
desc: 'A natural disaster strikes the area. What is it? Choose one:\
• You focus on getting everyone to safety. Remove an Abundance and a project fails.\
• You focus on protecting your supplies and hard work at any cost. Several people die as a result.'},
] ;



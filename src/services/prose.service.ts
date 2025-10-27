import { Injectable } from '@angular/core';
import { ExamQuestion, ProseFragment } from '../models/prose.model';

@Injectable({ providedIn: 'root' })
export class ProseService {
  getExamQuestions(): ExamQuestion[] {
    return [
      {
        id: 1,
        question:
          'According to contemporary trauma theory, particularly the work of Cathy Caruth, the narrative structure of the "unclaimed experience" is most accurately characterized by:',
        options: [
          'A linear, teleological progression toward narrative closure and psychic integration.',
          'The repetitive intrusion of literal, unassimilated fragments of the event, often manifesting as non-metaphorical lacunae in the diegesis.',
          'A nostalgic reconfiguration of the past through allegorical representation.',
          'The complete repression of the event, resulting in a narrative devoid of any affective trace.',
        ],
      },
      {
        id: 2,
        question:
          'In phenomenological analyses of habit and spatiality (after Merleau-Ponty), "motor intentionality" refers to the body\'s pre-cognitive grasp of its environment. How does this concept apply to the architectural uncanny in spaces of repeated duress?',
        options: [
          'The space becomes an object of explicit, conscious navigation, heightening rational awareness.',
          'Habitual movements become estranged, and the body\'s implicit "I can" is disrupted by a latent "I cannot," transforming familiar space into a field of potential threat.',
          'The body develops an enhanced proprioceptive map, leading to greater efficiency of movement and comfort.',
          'The architectural features are perceived purely as aesthetic symbols, detached from bodily experience.',
        ],
      },
      {
        id: 3,
        question:
          'Wittgenstein\'s assertion in the Tractatus Logico-Philosophicus, "Whereof one cannot speak, thereof one must be silent," when applied to the poetics of erasure, suggests that silence in a text functions primarily as:',
        options: [
          'A simple absence of semantic content, indicating a failure of authorial expression.',
          'A rhetorical pause used for dramatic emphasis within an otherwise coherent linguistic framework.',
          'A performative act that delineates the boundaries of the sayable, gesturing toward a presence (e.g., of trauma, power) that language itself cannot contain.',
          'An ironic commentary on the logocentrism inherent in Western philosophical traditions.',
        ],
      },
    ];
  }

  getProseFragments(): ProseFragment[] {
    return [
      // Part 1: Dissociation
      { id: 1, text: 'A fine-grained analysis of the methodologies employed...', initialDelay: 500, typingSpeed: 30, perspective: 'first-person', className: 'text-sm text-stone-500' },
      { id: 2, text: 'the methodologies...', initialDelay: 1000, typingSpeed: 80, perspective: 'first-person', className: 'text-sm text-stone-600' },
      { id: 3, text: 'the meth-- ', initialDelay: 1200, typingSpeed: 150, perspective: 'first-person', className: 'text-sm text-stone-700' },
      { id: 4, text: '', clearPrevious: true, initialDelay: 2000, typingSpeed: 1 },

      // Scene 1: The Arrival
      { id: 1001, text: `INT. HOUSE - ENTRYWAY - NIGHT\n\nA Man's silhouette fills the doorway.\n\nHe steps inside. The door clicks shut.\n\nHe holds a set of keys. He drops them into a ceramic bowl on a table.\n\nThe SOUND of metal striking ceramic rings out.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 60, className: 'text-lg text-stone-400' },
      { id: 5, text: 'That sound.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 6, text: 'It was the tuning fork for the whole evening.', perspective: 'first-person', initialDelay: 1500, typingSpeed: 70, className: 'text-2xl' },
      { id: 1002, text: `INT. KITCHEN - CONTINUOUS\n\nA Woman stands at a sink full of dishwater.\n\nHer shoulders rise sharply toward her ears, then lower.\n\nThe low, intermittent BUZZ of the ballast in the kitchen fluorescent light is the only sound.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 7, text: 'The whole house waits. The pipes, the floorboards, the air itself. Waiting.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 75, className: 'text-2xl' },
      { id: 1003, text: `INT. LIVING ROOM - CONTINUOUS\n\nThe Man walks from the entryway. The SOUND of leather shoes on hardwood.\n\nSeven steps.\n\nThe fifth floorboard CREAKS.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 12, text: 'I learned to count.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl' },
      { id: 13, text: 'A child\'s game to measure the distance of an incoming storm.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl' },
      { id: 14, text: '(a pause to look at the mail)', perspective: 'first-person', initialDelay: 1000, typingSpeed: 120, className: 'text-xl text-stone-500' },
      { id: 16, text: 'There it is.', perspective: 'first-person', initialDelay: 1500, typingSpeed: 90, className: 'text-xl' },
      { id: 17, text: 'One sound tells you everything you need to know.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 70, className: 'text-xl' },

      // Scene 2: The Car
      { id: 1004, text: `EXT. SUBURBAN STREET - DAY\n\nA gray sedan turns onto a tree-lined street.\n\nINT. CAR - CONTINUOUS\n\nThe Man's knuckles are white on the steering wheel.\n\nThe Woman looks out the passenger window. Houses blur past.\n\nThe only sound is the engine and the tires on asphalt.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 23, text: 'This silence isn\'t empty. It\'s full of pressure. It pushes on my eardrums. Makes the air thick and hard to breathe.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1005, text: `INT. GARAGE - DAY\n\nThe car pulls into the garage. The engine cuts out.\n\nCLICK. The driver's seatbelt unbuckles.\n\nThe car door is pushed open, then SLAMMED shut. The sound echoes off concrete walls.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 22, text: 'A close is a close. A slam is a statement. You learn the difference.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 70, className: 'text-2xl' },

      // Scene 3: Body and Mind
      { id: 27, text: 'the lock. did i check the lock.', perspective: 'first-person', initialDelay: 1000, typingSpeed: 100, className: 'text-lg text-stone-400' },
      { id: 28, text: 'i can see my hand turning it but can i feel it. what if i only thought about it.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 80, className: 'text-lg text-stone-400 ml-4' },
      { id: 1006, text: `INT. LIVING ROOM - NIGHT\n\nThe Woman sits on the sofa. A book rests on her lap, spine-up.\n\nHer eyes do not move from the wall opposite her.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 31, text: 'You build a little watchtower in your head. It’s always staffed.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 80, className: 'text-3xl' },
      { id: 34, text: '(the words are stones thrown at a window)', perspective: 'first-person', initialDelay: 3000, typingSpeed: 110, className: 'text-xl text-stone-500' },
      { id: 35, text: 'Why are you so sensitive.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 140, className: 'text-xl text-stone-500' },
      { id: 36, text: 'It was a joke.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 100, className: 'text-xl text-stone-500' },
      { id: 37, text: 'You need to relax.~~You need to learn how to take a joke.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl text-stone-500' },

      // Scene 4: The Unread Book
      { id: 1051, text: `INT. LIVING ROOM - NIGHT\n\nShe is reading. A novel. The cover is a watercolor of a coastline.\n\nHe walks into the room, stops behind her chair. She can feel his shadow over her shoulder.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 300, text: 'Don\'t look up. Keep reading the words. The words are a wall.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1052, text: `He picks up the book from the end table. The one she finished last week.\n\nHe reads the back cover. A small, dismissive sound escapes his lips.\n\n                        MAN
          Another one of these? Sad women in
          cardigans looking at the sea.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 301, text: 'He makes my thoughts feel cheap. Secondhand.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 85, className: 'text-2xl' },
      { id: 1053, text: `He puts the book down, but not where he found it. He puts it on a different stack, spine-in.\n\nHe leaves. She keeps staring at the page. The words have rearranged themselves into nonsense.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 302, text: 'I lost my place. I am always losing my place.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-2xl' },

      // Scene 5: The Dinner Party
      { id: 1007, text: `INT. FRIEND'S HOUSE - DINING ROOM - NIGHT\n\nLaughter. The CLINK of wine glasses.\n\nThe Man and Woman enter. His hand rests on the small of her back, fingers pressing lightly into the fabric of her dress. He smiles at the HOST.\n\n                        MAN
          Doesn't she look incredible?`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 151, text: 'I have a laugh for this. For them. I built it from parts of old laughs, from before. It sounds almost real.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1008, text: `INT. DINING ROOM - LATER\n\nAround the table, the Woman smiles. She passes the bread basket. She laughs at a story.\n\nUnder the table, the Man's hand rests on her knee.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 153, text: 'His thumb presses down. Just a little. A reminder. A full stop at the end of a sentence I didn\'t know I was writing.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 155, text: 'We must look so happy. Like a photograph from a magazine.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 80, className: 'text-2xl' },

      // Scene 6: The Story
      { id: 1084, text: `INT. DINING ROOM - LATER\n\nThe other guests are gone. The Man is pouring two glasses of wine.\n\nHe is in a good mood. The evening was a success.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1300, text: 'He performs well. He makes people laugh. They see a charming, successful man.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-xl' },
      { id: 1301, text: 'They see the man I saw, at the beginning.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 85, className: 'text-xl' },
      { id: 1085, text: `                        MAN
          Did you hear that story I told about
          our trip to Italy? The one with the
          lost luggage.\n\n                        WOMAN
          Yes, it was funny.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1302, text: 'It was a good story. Well-told.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1086, text: `                        MAN
          They loved it. But you know what's
          funny? That's not what happened.\n\nHe smiles, takes a sip of wine.\n\n                        MAN
          I changed the ending. Made you seem
          a little more... helpless. It gets a
          better laugh.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1303, text: 'He edits my memories. And serves them to strangers.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-3xl' },
      { id: 1087, text: `He swirls the wine in his glass, watching the red liquid cling to the sides.\n\n                        MAN
          It's just storytelling, right?\n\nHe looks at her, waiting for her to agree.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1304, text: 'And I nod. Because the story he tells outside this house is the one that matters. The only one anyone will ever hear.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },
      
      // Scene 7: The Thermostat
      { id: 1059, text: `INT. HOUSE - NIGHT\n\nThe house is cold. A deep, penetrating cold that settles in the bones.\n\nThe Woman walks to the thermostat in the hallway. The display reads 62°F.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 500, text: 'I am always cold now.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 90, className: 'text-2xl' },
      { id: 1060, text: `She reaches out, her finger hovering over the 'up' arrow.\n\nA floorboard CREAKS upstairs. His study. He is home.\n\nHer hand drops to her side.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 501, text: 'It\'s wasteful, he says. The bill. He talks about the cost of things.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-xl' },
      { id: 502, text: 'He doesn\'t talk about the cost of being cold.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 85, className: 'text-xl' },
      { id: 1061, text: `She goes back to the living room. She pulls a knitted afghan over her legs.\n\nIt is thin. It does not help.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 503, text: 'You learn to live with it. A constant, low-grade shiver.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },

      // Scene 8: The Plate
      { id: 1009, text: `INT. KITCHEN - NIGHT\n\nThe Woman clears the table. She holds a blue floral plate.\n\nShe turns from the sink. The Man stands in the doorway. He hasn't made a sound.\n\nHis arms are crossed. He watches her.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 69, text: 'Something closed in my throat. A fist made of air.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 70, className: 'text-3xl' },
      { id: 1010, text: `The Woman’s hand convulses. Her fingers go slack.\n\nThe plate falls. It HITS the tile floor with a sharp CRACK.\n\nIt breaks into two clean halves.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 53, text: '(my hand didn\'t slip. it just...let go.)', perspective: 'first-person', initialDelay: 2000, typingSpeed: 120, className: 'text-xl text-stone-500' },
      { id: 1011, text: `The Man's expression remains neutral. He walks over. Bends down. Picks up the two halves, one in each hand.\n\nHe holds them out, palms up. A gap of an inch between them.\n\nHe looks at the Woman. She is still by the sink.\n\nThe only sound is the slow, metallic TICK of the oven as it cools.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 56, text: 'This silence. It\'s a ringing in my ears. I\'d rather he yell. Yelling has an end. This doesn\'t.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1012, text: `After a minute, he places the two pieces on the counter, side by side, perfectly aligned.\n\nHis footsteps recede at a steady pace.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 80, className: 'text-lg text-stone-400' },
      { id: 59, text: 'Later, on my hands and knees, I swept up the tiny glittering shards you couldn\'t see.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-xl' },

      // Scene 9: The Quiet Inventory
      { id: 1013, text: `INT. HOUSE - VARIOUS - DAY\n\nA white ring of condensation on a wood nightstand.\n\nA book on the floor, its spine cracked open.\n\nA fork in the sink, three of its tines bent at an odd angle.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 42, text: 'The house keeps a record of things.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 100, className: 'text-2xl' },
      { id: 62, text: 'it\'s the stress from his job.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-lg text-stone-400' },
      { id: 63, text: 'he doesn\'t mean it.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 80, className: 'text-lg text-stone-400' },
      { id: 64, text: 'if i were just quieter.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 100, className: 'text-lg text-stone-400' },
      { id: 65, text: 'if i had been better.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 120, className: 'text-lg text-stone-400' },
      { id: 66, text: 'he didn\'t mean it', perspective: 'first-person', initialDelay: 1500, typingSpeed: 150, className: 'text-lg text-stone-400' },

      // Scene 10: The Bathroom
      { id: 1014, text: `INT. BATHROOM - NIGHT\n\nThe door is locked. A heavy CHUNK of the bolt sliding home.\n\nThe ventilation fan WHIRS. A wall of white noise.\n\nThe Woman sits on the cold edge of the porcelain tub. She stares at the hexagonal floor tiles.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 163, text: 'Two hundred and fourteen. If you don\'t count the chipped ones under the sink.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 90, className: 'text-xl' },
      { id: 1015, text: `She stands. Looks at her face in the medicine cabinet mirror.\n\nShe leans in. Her breath fogs the glass, obscuring the reflection.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 165, text: 'I don\'t recognize my own eyes.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-xl' },
      { id: 166, text: 'They look like two dark smudges. Two holes.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl' },

      // Scene 11: Sleep
      { id: 1016, text: `INT. BEDROOM - NIGHT\n\nThe room is dark. The Woman lies on the far edge of her side of the bed. The Man breathes beside her, a slow, deep rhythm.\n\nShe lies perfectly still. She listens to his breathing until it has been steady for a long time.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 172, text: 'I haven\'t slept, not really, in years. I just go under. And wait to come back up.', perspective: 'first-person', initialDelay: 5000, typingSpeed: 80, className: 'text-2xl' },
      { id: 173, text: 'I dream of houses where all the doors are painted shut.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 80, className: 'text-2xl' },
      { id: 174, text: 'Or I am running through water, and my legs are so heavy, so heavy.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-2xl' },

      // Scene 12: The Open Window
      { id: 1062, text: `INT. BEDROOM - NIGHT\n\nRain drums against the glass. A window is slightly ajar. A cold, wet draft snakes into the room.\n\nThe Woman wakes up. She is shivering.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 600, text: 'I know I closed it. I check them all before bed. It is part of the ritual.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1063, text: `She gets out of bed. Her feet are bare on the cold floor.\n\nShe pushes the window shut. The latch CLICKS into place.\n\nBeside her, in the bed, the Man shifts. He does not wake up.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 601, text: 'Did he open it after I was asleep?', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-xl' },
      { id: 602, text: 'Or did I forget? Is my memory failing again?', perspective: 'first-person', initialDelay: 2000, typingSpeed: 85, className: 'text-xl' },
      { id: 603, text: 'It is easier to believe I forgot.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 90, className: 'text-xl' },
      { id: 604, text: 'It is a kinder story to tell yourself.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 80, className: 'text-xl' },

      // Scene 13: The Question
      { id: 1017, text: `INT. KITCHEN - NIGHT\n\nThe refrigerator door opens. Cold light floods the dark kitchen. The Man stands in its glow, holding a carton of milk.\n\nHe turns to the Woman at the kitchen table.\n\n                        MAN
          Did you buy milk?`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 70, text: 'I saw him use it for his coffee this morning. I know it\'s not empty.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-3xl' },
      { id: 71, text: 'The question isn\'t a question. It\'s a test.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 100, className: 'text-3xl' },
      { id: 72, text: 'And I\'ve already failed.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-3xl' },

      // Scene 14: The Phone Call
      { id: 1018, text: `INT. LIVING ROOM - NIGHT\n\nThe phone RINGS. The screen lights up: "SISTER."\n\nThe RUSTLE of a newspaper turning stops.\n\nThe Woman answers. Her voice is a pitch higher than usual.\n\n                        WOMAN
          Hi! Everything's fine... No, nothing
          much, just reading. Yes, he's fine
          too. Everything is fine.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 101, text: 'I can hear my own voice from a great distance. It sounds like a stranger\'s. Cheerful. False.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1019, text: `She hangs up. The call lasted ninety-three seconds.\n\nThe Man neatly folds his newspaper, places it on the coffee table.\n\n                        MAN
          What did she want?`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 181, text: '"Nothing," I said. "Just checking in."', perspective: 'first-person', initialDelay: 2000, typingSpeed: 100, className: 'text-2xl' },
      { id: 182, text: 'He nodded, a slow, deliberate motion. His eyes didn\'t leave my face.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 110, className: 'text-2xl' },
      
      // NEW SCENE: The Canceled Plans
      { id: 1090, text: `INT. HALLWAY - EVENING\n\nShe is putting on her coat, grabbing her purse. A rare night out with a friend.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1091, text: `He walks out of the living room, rubbing his temples. He leans against the doorframe.`, perspective: 'third-person', initialDelay: 2000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1092, text: `                        MAN
          My head is splitting. I don't think I
          should be alone.`, perspective: 'third-person', initialDelay: 2000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 183, text: 'A familiar weight settles in my stomach.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 184, text: 'I can call an uber...~~I can just ask Sarah to come here instead.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 75, className: 'text-xl' },
      { id: 1093, text: `                        MAN
          No, it's fine. You go. I'll be fine.
          Probably.\n\nHe closes his eyes, as if in immense pain.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 185, text: 'The unspoken threat. If something happens, it\'s your fault.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1094, text: `She takes her coat off. She pulls out her phone.\n\nHer fingers type the text message she has typed a dozen times before:\n\n"So sorry, have to cancel..."`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      
      // Scene 15: The "Joke"
      { id: 1064, text: `INT. CAR - DAY\n\nThey are driving. Sunlight flashes between trees.\n\nHe is telling a story about a colleague at work. He is animated, charming.\n\nShe is listening. She smiles at the right moments.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 700, text: 'This is a good day. A day without incident. I hoard these days like currency.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1065, text: `He glances at her, a smile playing on his lips.\n\n                        MAN
          ...so I told him, you have to manage
          expectations. It's like with my wife.
          I don't expect brilliance, just...
          a general lack of catastrophe.\n\nHe laughs. It's a light, easy sound.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 701, text: 'It was a joke.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 100, className: 'text-3xl' },
      { id: 702, text: 'I have to remember that. It was a joke.', perspective: 'first-person', initialDelay: 1500, typingSpeed: 90, className: 'text-3xl' },
      { id: 703, text: 'So I laugh. A small, polite sound. The sound you make when you understand the punchline.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1066, text: `He reaches over and pats her knee.\n\n                        MAN
          See? She gets it. She has a sense
          of humor.\n\nThe car turns onto their street. The moment passes.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 704, text: 'But the words don\'t pass. They hang in the air inside the car. Like smoke.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },

      // Scene 16: The Bruise
      { id: 1020, text: `INT. BATHROOM - MORNING\n\nSunlight streams through the small window, casting a sharp, bright rectangle on the tiled floor.\n\nThe Woman stands before the mirror in a tank top.\n\nOn her left arm, just above the elbow: a dark, plum-colored bruise.\n\nShe touches the edge of it with two fingertips. She does not press down.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 192, text: 'The bruise is just a map. Of a place I have to live.', perspective: 'first-person', initialDelay: 5000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1021, text: `She goes to her closet. She thumbs past short-sleeved shirts.\n\nShe chooses a gray sweater with long sleeves.\n\nINT. KITCHEN - LATER\n\nAt breakfast, the Man butters his toast. His gaze moves from his toast to the coffee pot, to the window. It does not fall on her.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 194, text: 'He doesn\'t see it, or he sees through it.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 100, className: 'text-2xl' },
      { id: 195, text: 'I don\'t know which is worse.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-2xl' },
      
      // Scene 17: The Mail
      { id: 1067, text: `INT. ENTRYWAY - AFTERNOON\n\nThe mail lies on the ceramic dish. A catalog, bills, a postcard.\n\nThe Woman sorts through it. She finds a letter addressed to her. From her old university alumni association.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 800, text: 'A letter. For me. It feels like a message from another country.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1068, text: `Later, the Man comes home. He picks up the mail.\n\nHe thumbs through it. He stops at her letter. It is still sealed.\n\nHe holds it up to the light.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 801, text: 'A casual gesture. An act of ownership.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-3xl' },
      { id: 1069, text: `                        MAN
          What's this?\n\n                        WOMAN
          Just from the alumni office. Probably
          asking for money.\n\nShe tries to keep her voice light. Uninterested.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 802, text: 'It\'s not a lie. But it feels like one.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-xl' },
      { id: 1070, text: `He tosses it back on the table.\n\n                        MAN
          Right.\n\nHe walks away. But she knows he has logged it. Stored it. Another piece of information.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 803, text: 'Nothing is private. Privacy is a privilege you earn. And I am always in debt.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      
      // Scene 18: The Password
      { id: 1075, text: `INT. OFFICE - NIGHT\n\nThe Woman sits at the laptop. It's an old model, her own.\n\nShe is trying to log into her email. The password isn't working.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1100, text: 'Password incorrect. Password incorrect.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-xl font-mono' },
      { id: 1101, text: 'But it is correct. It has been the same for ten years.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 85, className: 'text-xl' },
      { id: 1076, text: `She tries again. And again. The login box freezes her out.\n\nShe hears him in the kitchen. The sound of a cupboard closing.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1102, text: 'He offered to "fix" it for me last week. Said it was running slow.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1077, text: `She clicks on 'Forgot Password.'\n\nThe security question appears on the screen:\n\n"What is the name of your first pet?"`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1103, text: 'He knows the answer to that. I told him stories about that dog.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1078, text: `She tries to reset it. The recovery email is sent to an address she doesn't recognize.\n\nHis address.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1104, text: 'He built a wall and gave himself the only key.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-3xl' },
      { id: 1105, text: 'For my own security, he would say.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl text-stone-500' },

      // Scene 19: The Receipt
      { id: 1022, text: `INT. GROCERY STORE - NIGHT\n\nFluorescent lights BUZZ. The aisles are empty.\n\nThe Woman pushes a cart. One wheel wobbles, SHUDDERING against the linoleum.\n\nShe places items inside: a gallon of milk, a loaf of bread, a bar of soap, a bottle of red wine, a box of bandages.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 65, className: 'text-lg text-stone-400' },
      { id: 113, text: 'GROCERY MART - 11:32 PM', perspective: 'first-person', initialDelay: 5000, typingSpeed: 80, className: 'text-xl font-mono' },
      { id: 114, text: 'MILK 1GAL........3.49', perspective: 'first-person', initialDelay: 1500, typingSpeed: 100, className: 'text-xl font-mono ml-4' },
      { id: 115, text: '(i got the wrong kind again. stupid.)', perspective: 'first-person', initialDelay: 1000, typingSpeed: 90, className: 'text-lg text-stone-400 ml-8' },
      { id: 116, text: 'BREAD, WHEAT.....2.99', perspective: 'first-person', initialDelay: 1500, typingSpeed: 100, className: 'text-xl font-mono ml-4' },
      { id: 117, text: '(the one you like)', perspective: 'first-person', initialDelay: 1000, typingSpeed: 90, className: 'text-lg text-stone-400 ml-8' },
      { id: 118, text: 'SOAP, IVORY......4.15', perspective: 'first-person', initialDelay: 1500, typingSpeed: 100, className: 'text-xl font-mono ml-4' },
      { id: 119, text: '(it makes my skin feel tight and dry)', perspective: 'first-person', initialDelay: 1000, typingSpeed: 90, className: 'text-lg text-stone-400 ml-8' },
      { id: 120, text: 'WINE, RED........9.99', perspective: 'first-person', initialDelay: 1500, typingSpeed: 100, className: 'text-xl font-mono ml-4' },
      { id: 121, text: '(a truce in a bottle. maybe it will work this time.)', perspective: 'first-person', initialDelay: 1000, typingSpeed: 90, className: 'text-lg text-stone-400 ml-8' },
      { id: 122, text: 'BANDAGES, BOX....5.29', perspective: 'first-person', initialDelay: 1500, typingSpeed: 100, className: 'text-xl font-mono ml-4' },
      { id: 123, text: '(just in case. always just in case.)', perspective: 'first-person', initialDelay: 1000, typingSpeed: 120, className: 'text-lg text-stone-400 ml-8' },
      { id: 124, text: 'SUBT............25.91', perspective: 'first-person', initialDelay: 2500, typingSpeed: 100, className: 'text-xl font-mono' },
      { id: 125, text: 'TAX...............2.14', perspective: 'first-person', initialDelay: 1000, typingSpeed: 100, className: 'text-xl font-mono' },
      { id: 126, text: 'TOTAL...........28.05', perspective: 'first-person', initialDelay: 1000, typingSpeed: 150, className: 'text-xl font-mono' },
      
      // NEW SCENE: The Budget
      { id: 1088, text: `INT. DINING ROOM - NIGHT\n\nThe table is covered in papers. Bank statements. Receipts. Spreadsheets.\n\nThe Man sits with a calculator. He highlights a line on a statement.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      // FIX: Used backticks for the string to handle the inner single quotes correctly.
      { id: 1400, text: `He calls these 'financial check-ins.'`, perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1089, text: `                        MAN
          This one. From Tuesday. Four-fifty.
          What was that?\n\nHe doesn't sound angry. He sounds... curious. Like an auditor.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1401, text: 'It was a coffee. I bought a coffee while waiting for my prescription.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-xl' },
      { id: 1402, text: `'It's not about the four dollars,' he says. 'It's about the principle. The small leaks that sink the ship.'`, perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1403, text: 'I feel like a child being scolded for buying a candy bar.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-xl' },
      { id: 1404, text: 'my own money~~it\'s not my own money anymore. It\'s ours. And I am a line item.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },

      // Scene 20: The Misplaced Wallet
      { id: 1025, text: `INT. BEDROOM - MORNING\n\nThe Man is getting dressed. He pats his pants pockets. Once, then again, harder.\n\nHis movements become sharp, agitated.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 201, text: 'The air changes. A shift in barometric pressure.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 202, text: 'The quiet before the... not the storm. A front. A cold front moving through the house.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 85, className: 'text-2xl' },
      { id: 1026, text: `                        MAN
          Where's my wallet?\n\nHe doesn't look at her. He speaks to the room. The question hangs in the air, heavy.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 203, text: 'My mind begins its frantic inventory. The checklist. Where did I see it last? On the dresser? In the kitchen? Did I move it when I was cleaning?', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-xl' },
      { id: 204, text: 'It becomes a trial. I am the sole witness, and I am unreliable.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-xl' },
      { id: 1027, text: `He starts opening drawers. Not just looking. Tossing things aside. A tide of receipts and loose change.\n\nThe SOUND of wood slamming shut echoes.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 205, text: 'You start to believe you did it. Your memory becomes a faulty hard drive, corrupting its own files. The brain rewrites itself to make the narrative fit: I am at fault.', perspective: 'first-person', initialDelay: 3500, typingSpeed: 75, className: 'text-2xl' },
      { id: 1028, text: `He finds it in his other jacket pocket. He pulls it out. Looks at it.\n\nHe doesn't apologize.\n\n                        MAN
          Hmph.\n\nHe puts on the jacket and leaves. The front door closes with a definitive click.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 206, text: 'The silence he leaves behind is worse than the noise. It is full of the echo of what he thinks of you. Careless. Stupid. An obstacle.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },

      // Scene 21: The Wrong Word
      { id: 1029, text: `INT. DINING ROOM - NIGHT\n\nDinner is over. They are talking. The conversation is light, neutral. Work. The news.\n\nA ceasefire. A truce in the long war.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 250, text: 'It\'s a minefield. You learn to walk carefully. To choose your words like you\'re choosing a path.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1030, text: `She uses the word 'interesting' to describe a movie he mentioned watching.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 251, text: 'Interesting.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 100, className: 'text-3xl' },
      { id: 252, text: 'The wrong word. I knew it the second it left my mouth.', perspective: 'first-person', initialDelay: 1500, typingSpeed: 90, className: 'text-3xl' },
      { id: 1031, text: `                        MAN
          Interesting? What does that mean?
          You think it's stupid.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 253, text: 'It is not a question. It is a verdict.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-2xl' },
      { id: 1032, text: `                        WOMAN
          No, I just... I meant it made me
          think. It was complex.\n\nHer voice is quiet. She tries to backtrack, to explain. But the words get tangled.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 254, text: 'It\'s quicksand. The more you struggle, the faster you sink. He\'s not listening to my words. He\'s listening to the intention he\'s already assigned to them.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 70, className: 'text-2xl' },
      { id: 1033, text: `He pushes his chair back. It SCRAPES loudly against the floor.\n\nHe stands up and leaves the room without another word.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 255, text: 'And I sit there. With the cooling food. And the echo of one wrong word.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },

      // Scene 22: The Car Keys
      { id: 1054, text: `INT. KITCHEN - MORNING\n\nThe Woman is dressed to go out. Her purse is on her shoulder. She is looking for her car keys.\n\nThey are not in the ceramic bowl.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 400, text: 'A small panic. A flutter in the chest. They are always in the bowl.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-xl' },
      { id: 1055, text: `She checks the counter. The table. Her purse again.\n\nThe Man is at the table, reading the paper. He doesn't look up.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 401, text: 'Don\'t ask. Don\'t ask him. Asking is a concession. A defeat.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1056, text: `                        WOMAN
          Have you seen my keys?\n\nHe slowly lowers the paper. He looks at her over the top of it. His eyes are blank.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 402, text: 'The silence stretches. A test of nerve. I always fail.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1057, text: `                        MAN
          Which keys?\n\nHe takes a slow sip of his coffee.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 403, text: 'He knows which keys. He is making me say it. Making me explain my own small life to him.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1058, text: `                        WOMAN
          My car keys. I have that appointment.\n\n                        MAN
          Oh. Those.\n\nHe reaches into his pocket and pulls them out. He places them on the table. Gently.\n\n                        MAN
          Must have picked them up by mistake.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 404, text: 'He doesn\'t make mistakes.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 100, className: 'text-3xl' },

      // Scene 23: The Gift
      { id: 1034, text: `INT. LIVING ROOM - NIGHT\n\nTwo days have passed in near-silence.\n\nThe Man holds a small, elegantly wrapped box. He hands it to the Woman.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 230, text: 'This is the part that confuses people. The part that confuses me.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1035, text: `She unwraps it. Inside is a delicate silver necklace. A single pearl.\n\n                        MAN
          I saw it and thought of you.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 231, text: 'It\'s beautiful. Of course it\'s beautiful. The cage is always gilded.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1036, text: `He fastens it around her neck. His fingers are cold on her skin.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 232, text: 'The weight of it. Not heavy, but it feels heavy. A little anchor.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl' },
      { id: 233, text: 'I\'m sorry, his eyes say. I\'m sorry, the gift says. It will be better now.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 85, className: 'text-xl' },
      { id: 234, text: 'But "sorry" is just a pause. A breath before the next sentence.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 90, className: 'text-xl' },
      { id: 1037, text: `She looks at her reflection in the dark TV screen. The pearl glows against her skin.\n\n                        WOMAN
          Thank you. It's lovely.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 235, text: 'I will wear it. And when his friends see it, they will see a man who loves his wife. And I will smile. And they will believe it.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 75, className: 'text-2xl' },
      
      // NEW SCENE: The Compliment
      { id: 1095, text: `INT. BEDROOM - NIGHT\n\nShe is wearing a new dress for a work dinner he is hosting.\n\nShe turns from the mirror.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1096, text: `                        MAN
          You look nice. That color is good
          on you.`, perspective: 'third-person', initialDelay: 2000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 236, text: 'A moment of relief. A simple, kind sentence.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1097, text: `He walks closer, adjusting his tie in the mirror.\n\n                        MAN
          It's much more flattering than that
          other thing you wear. The shapeless
          one. You should get rid of that.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 237, text: 'And there it is. The gift with a price tag.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 238, text: 'One compliment, one criticism. Perfectly balanced.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 85, className: 'text-2xl' },
      { id: 239, text: 'a kindne--~~a cruel kindness.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl' },

      // Scene 24: The Neighbor
      { id: 1079, text: `EXT. FRONT YARD - DAY\n\nThe Woman is weeding a flowerbed. The sun is warm.\n\nA neighbor, SUSAN, waves from across the street.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1200, text: 'Susan. She is kind. Her laugh carries across the lawns.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-xl' },
      { id: 1080, text: `Susan crosses the street, holding a small pot of herbs.\n\n                        SUSAN
          Thought you might like some basil!
          Mine went crazy this year.\n\n                        WOMAN
          Oh, thank you, that's so thoughtful.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1201, text: 'A normal conversation. An exchange between neighbors. It feels foreign. Dangerous.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1081, text: `The front door opens. The Man steps out onto the porch. He has a mug of coffee in his hand.\n\nHe smiles. It does not reach his eyes.\n\n                        MAN
          Susan. Good to see you.\n\nHis presence changes the air. The warmth of the sun feels distant.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1202, text: 'Susan\'s smile falters. Just for a second.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-xl' },
      { id: 1082, text: `                        SUSAN
          Just dropping this off. Well, I should
          get back.\n\nShe leaves quickly. The conversation is over.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 75, className: 'text-lg text-stone-400' },
      { id: 1203, text: 'He watches her go. Then he looks at me. Then at the basil.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1083, text: `                        MAN
          Nice of her.\n\nHe goes back inside. The screen door SLAPS shut behind him.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1204, text: 'Later, I will find the pot of basil in the outdoor trash can, its leaves crushed under a coffee filter full of wet grounds.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },

      // Scene 25: The Stain
      { id: 1038, text: `INT. KITCHEN - MORNING\n\nThe Woman is pouring coffee. Her hand shakes slightly. A single, dark drip lands on the white countertop.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 210, text: 'I see it. A tiny brown planet in a sea of white. My heart does a little jump.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-xl' },
      { id: 1039, text: `She grabs a sponge immediately. Wipes it. A faint shadow remains.\n\nShe scrubs harder. Her knuckles are white.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 211, text: 'It\'s not about the coffee. It\'s never about the coffee.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 85, className: 'text-2xl' },
      { id: 212, text: 'It\'s about perfection. A house with no stains. A life with no flaws.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 80, className: 'text-2xl' },
      { id: 1040, text: `The Man enters. He walks to the counter, pours his own coffee.\n\nHis eyes land on the spot. He doesn\'t say anything.\n\nHe just runs his finger over it. Once.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 213, text: 'That one gesture. It says everything.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-3xl' },
      { id: 214, text: 'You failed. Another small failure.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 80, className: 'text-3xl' },
      { id: 215, text: 'And these small failures, they add up. They become evidence. For a case you don\'t even know you\'re defending.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-xl' },
      
      // Scene 26: The Plant
      { id: 1071, text: `INT. LIVING ROOM - DAY\n\nOn the windowsill, a small potted fern. Its fronds are yellowing at the tips.\n\nThe Woman touches a leaf. It feels brittle.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 900, text: 'I read three books about ferns. About light, and soil, and humidity.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-xl' },
      { id: 901, text: 'It was a small, green thing I could control.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 85, className: 'text-xl' },
      { id: 1072, text: `The Man enters, holding a watering can.\n\n                        MAN
          Looks a little dry. I gave it some
          water for you.\n\nHe smiles. A helpful smile.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 902, text: 'The soil is already dark and damp. I watered it this morning.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1073, text: `He pours a generous amount of water into the pot. It overflows the saucer, spilling onto the painted wood of the sill.\n\nHe doesn't notice. Or pretends not to.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 903, text: 'He is drowning it. With kindness.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-3xl' },
      { id: 1074, text: `                        WOMAN
          Thank you.\n\n                        MAN
          Anything to help.\n\nHe leaves the watering can on the floor and walks out.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 904, text: 'I watch the water pool and start to warp the paint. Another small thing to fix. Another small failure.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },

      // NEW SCENE: The "Helpful" Suggestion
      { id: 1098, text: `INT. SPARE ROOM / OFFICE - DAY\n\nThe Woman is at a desk, sketching in a notebook. The room is hers, a little messy, full of her books and papers.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 905, text: 'This is my space. The one corner of the house that\'s mine.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1099, text: `He comes in, silently. Watches her for a moment.\n\n                        MAN
          Just focusing on your little hobby?`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 906, text: 'The word \'little\'. A pinprick.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 85, className: 'text-xl' },
      // FIX: Changed duplicate id `1100` to `10992` to ensure uniqueness.
      { id: 10992, text: `He picks up one of her pencils from a jar.\n\n                        MAN
          You know, if you organized these by
          hardness, you'd be much more
          efficient.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 907, text: `Before she can protest, he's taking them all out of the jar. Arranging them in a neat row on her desk.\n\nHer chaos, ordered by his logic.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 908, text: 'It\'s not help. It\'s an invasion. A restructuring of my small world into his ordered one.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },
      
      // Scene 27: Old Photographs
      { id: 1041, text: `INT. ATTIC - DAY\n\nStriations of light cut through the grimy window.\n\nThe Woman sits on the floor, an old shoebox in her lap.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 240, text: 'Before. There was a "before." It feels like a story someone told me about a different person.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1042, text: `She pulls out a photograph. A younger version of herself, laughing, arm-in-arm with a friend on a beach.\n\nHer hair is wild from the wind.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 241, text: 'Look at her. She doesn\'t know. She has no idea.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 85, className: 'text-xl' },
      { id: 242, text: 'She isn\'t listening for footsteps. She\'s just... there.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 80, className: 'text-xl' },
      { id: 1043, text: `Another photo. Her and the Man, early on. They are smiling at the camera. He has his arm around her. It looks like a normal couple. Happy.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 243, text: 'We were. I think we were. Or was I just rewriting the beginning to make the middle make sense?', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },
      { id: 244, text: 'You sand down the sharp edges of the past. So you can hold it without cutting yourself.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },
      { id: 1044, text: `She puts the photos back in the box. She closes the lid. The sound is soft, final.\n\nShe sits in the quiet half-light of the attic for a long time.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },

      // NEW SCENE: The Childhood Story
      { id: 1120, text: `INT. LIVING ROOM - NIGHT\n\nThey are with friends. The Man is telling a story from the Woman's childhood. One she told him long ago.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1121, text: `                        MAN
          ...so there she was, five years old,
          and she'd climbed the whole tree by
          herself. But then she got scared.
          Wouldn't come down until her father
          got the big ladder.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1122, text: 'He tells it well. Everyone laughs. But it\'s wrong.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1123, text: 'I wasn\'t scared. I stayed up there for an hour because I liked the view.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 80, className: 'text-xl' },
      { id: 1124, text: 'I came down on my own.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl' },
      { id: 1125, text: `He has taken my memory and changed it. Made me weaker. Made me need rescuing.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1126, text: 'And I just smile. Because his version is a better story. And that is what matters.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 75, className: 'text-2xl' },
      
      // NEW SCENE: The Drive Home
      { id: 1130, text: `INT. CAR - NIGHT\n\nThey are driving home from a party. The roads are dark and slick with rain.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1131, text: `She had talked to an old college friend for too long. He is angry.`, perspective: 'third-person', initialDelay: 2000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1132, text: 'The silence again. But this time it has a soundtrack. The rhythmic thump of the windshield wipers.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1133, text: `He takes a corner too fast. The tires SCREECH. Her body is thrown against the door.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1134, text: 'My hand flies to the dashboard to brace myself.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 90, className: 'text-xl' },
      { id: 1135, text: `                        MAN
          Careful.\n\nHis voice is calm. He didn't lose control. He just let it slip for a moment. On purpose.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 1136, text: 'A reminder. That he is in control. Of this car. Of everything.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      
      // Scene 28: The Weather
      { id: 1045, text: `EXT. HOUSE - NIGHT\n\nA storm is raging. WIND howls. RAIN lashes against the windows.`, perspective: 'third-person', initialDelay: 1000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 220, text: 'I used to love storms. It felt like the world was alive.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 1046, text: `INT. LIVING ROOM - CONTINUOUS\n\nThe power flickers. The lights go out.\n\nA sudden, deep darkness.`, perspective: 'third-person', initialDelay: 3000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 221, text: 'The darkness outside is nothing compared to the darkness inside.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 85, className: 'text-2xl' },
      { id: 1047, text: `A flash of LIGHTNING illuminates the room for a split second.\n\nThe Man is standing by the window, looking out. His face is a mask.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 222, text: 'In those flashes, you see things clearly. For just a moment.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-xl' },
      { id: 223, text: 'He likes the storm. He likes the power. It matches something inside him.', perspective: 'first-person', initialDelay: 2500, typingSpeed: 80, className: 'text-xl' },
      { id: 1048, text: `The power comes back on. The lights are too bright.\n\nThe Man turns from the window and looks at her. He smiles.\n\n                        MAN
          Cozy, isn't it?`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 224, text: 'And I say yes. Because what else can you say.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-2xl' },
      
      // Scene 29: Coda
      { id: 1049, text: `INT. LIVING ROOM - PRESENT DAY\n\nA thick, dark blue rug covers the hardwood floor, including the fifth floorboard.\n\nThe house is quiet.`, perspective: 'third-person', initialDelay: 2000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 260, text: 'Sometimes I press down with my heel, trying to find it.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 80, className: 'text-2xl' },
      { id: 261, text: 'I can\'t hear it anymore. But I still listen for it.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 90, className: 'text-2xl' },
      { id: 1050, text: `INT. ENTRYWAY - CONTINUOUS\n\nThe silence in the house is empty now, not waiting.\n\nThe blue ceramic bowl on the table is empty. It holds only a fine layer of settled quiet.`, perspective: 'third-person', initialDelay: 4000, typingSpeed: 70, className: 'text-lg text-stone-400' },
      { id: 262, text: 'But I still check the lock. Twice.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 130, className: 'text-2xl' },
      { id: 263, text: 'The tired groan of the ice maker, cycling on and off.', perspective: 'first-person', initialDelay: 4000, typingSpeed: 100, className: 'text-xl' },
      { id: 264, text: 'The same, constant cycle.', perspective: 'first-person', initialDelay: 2000, typingSpeed: 120, className: 'text-xl' },
      { id: 265, text: 'It sounds different when you\'re the only one listening.', perspective: 'first-person', initialDelay: 3000, typingSpeed: 80, className: 'text-xl' },
    ];
  }
}
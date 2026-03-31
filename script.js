/* =========================================
   1. MASSIVE DATABASE OF WORDS (100 Words)
   ========================================= */
const wordDatabase = [
    { word: "Abate", pos: "verb", definition: "To decrease in force or intensity.", roots: "Old French: abattre (to beat down)", example: "We waited for the storm to abate before leaving." },
    { word: "Aberration", pos: "noun", definition: "A departure from what is normal, usual, or expected.", roots: "Latin: aberrare (to wander away)", example: "The sudden drop in temperature was an aberration for June." },
    { word: "Abstruse", pos: "adjective", definition: "Difficult to understand; obscure.", roots: "Latin: abstrudere (to conceal)", example: "The professor's lecture on quantum physics was too abstruse for the freshmen." },
    { word: "Acumen", pos: "noun", definition: "The ability to make good judgments and quick decisions.", roots: "Latin: acuere (to sharpen)", example: "Her business acumen led the company to record profits." },
    { word: "Alacrity", pos: "noun", definition: "Brisk and cheerful readiness.", roots: "Latin: alacer (lively)", example: "He accepted the invitation to the party with alacrity." },
    { word: "Ameliorate", pos: "verb", definition: "To make something bad or unsatisfactory better.", roots: "Latin: melior (better)", example: "The new medication helped to ameliorate the patient's symptoms." },
    { word: "Anachronism", pos: "noun", definition: "A thing belonging to a period other than that in which it exists.", roots: "Greek: ana- (backward) + khronos (time)", example: "The modern wristwatch in the medieval movie was a glaring anachronism." },
    { word: "Anomalous", pos: "adjective", definition: "Deviating from what is standard, normal, or expected.", roots: "Greek: anōmalos (uneven)", example: "The researchers were confused by the anomalous test results." },
    { word: "Antipathy", pos: "noun", definition: "A deep-seated feeling of dislike; aversion.", roots: "Greek: anti- (against) + pathos (feeling)", example: "They made no effort to hide their mutual antipathy." },
    { word: "Apathy", pos: "noun", definition: "Lack of interest, enthusiasm, or concern.", roots: "Greek: a- (without) + pathos (feeling)", example: "Voter apathy resulted in a historically low turnout for the election." },
    { word: "Ascetic", pos: "adjective", definition: "Characterized by severe self-discipline and abstention from all forms of indulgence.", roots: "Greek: askētēs (monk)", example: "The monk lived an ascetic life in the mountains." },
    { word: "Assuage", pos: "verb", definition: "To make an unpleasant feeling less intense.", roots: "Latin: suavis (sweet)", example: "A warm cup of tea can help assuage a sore throat." },
    { word: "Audacious", pos: "adjective", definition: "Showing a willingness to take surprisingly bold risks.", roots: "Latin: audacia (boldness)", example: "The CEO made an audacious decision to acquire their biggest competitor." },
    { word: "Banal", pos: "adjective", definition: "So lacking in originality as to be obvious and boring.", roots: "French: ban (proclamation)", example: "The pop song's lyrics were completely banal and predictable." },
    { word: "Bellicose", pos: "adjective", definition: "Demonstrating aggression and willingness to fight.", roots: "Latin: bellum (war)", example: "The dictator's bellicose speeches alarmed neighboring countries." },
    { word: "Benign", pos: "adjective", definition: "Gentle; kindly; not harmful in effect.", roots: "Latin: bene (well) + gignere (to bear)", example: "The doctor assured her that the tumor was benign." },
    { word: "Bolster", pos: "verb", definition: "To support or strengthen; prop up.", roots: "Old English: bolster (pillow)", example: "The general brought in reinforcements to bolster the defensive line." },
    { word: "Bombastic", pos: "adjective", definition: "High-sounding but with little meaning; inflated.", roots: "Greek: bombux (silk)", example: "His bombastic speech failed to impress the educated audience." },
    { word: "Burgeon", pos: "verb", definition: "To begin to grow or increase rapidly; flourish.", roots: "Old French: burjon (a bud)", example: "The small startup began to burgeon into a major tech enterprise." },
    { word: "Cacophony", pos: "noun", definition: "A harsh, discordant mixture of sounds.", roots: "Greek: kakos (bad) + phone (sound)", example: "A cacophony of deafening alarm bells echoed through the corridors." },
    { word: "Capricious", pos: "adjective", definition: "Given to sudden and unaccountable changes of mood or behavior.", roots: "Italian: capriccio (sudden start)", example: "The capricious weather made it difficult to plan a picnic." },
    { word: "Castigate", pos: "verb", definition: "To reprimand someone severely.", roots: "Latin: castigare (to punish)", example: "The teacher castigated the student for cheating on the exam." },
    { word: "Catalyst", pos: "noun", definition: "A person or thing that precipitates an event.", roots: "Greek: kataluein (to dissolve)", example: "The protests served as a catalyst for political reform." },
    { word: "Caustic", pos: "adjective", definition: "Able to burn or corrode organic tissue; sarcastic in a scathing way.", roots: "Greek: kaiein (to burn)", example: "His caustic sense of humor often offended people." },
    { word: "Chicanery", pos: "noun", definition: "The use of trickery to achieve a political, financial, or legal purpose.", roots: "French: chicaner (to quibble)", example: "The politician was notorious for his financial chicanery." },
    { word: "Cogent", pos: "adjective", definition: "Clear, logical, and convincing.", roots: "Latin: cogere (to drive together)", example: "The lawyer presented a cogent argument that won the case." },
    { word: "Complaisant", pos: "adjective", definition: "Willing to please others; obliging; agreeable.", roots: "French: complaire (to acquiesce)", example: "The complaisant staff made our hotel stay incredibly relaxing." },
    { word: "Conciliatory", pos: "adjective", definition: "Intended or likely to placate or pacify.", roots: "Latin: conciliare (to bring together)", example: "He sent a box of chocolates as a conciliatory gesture." },
    { word: "Confound", pos: "verb", definition: "To cause surprise or confusion in someone.", roots: "Latin: confundere (to pour together)", example: "The complex math problem continued to confound the students." },
    { word: "Connoisseur", pos: "noun", definition: "An expert judge in matters of taste.", roots: "French: connaître (to know)", example: "She is a connoisseur of fine wines." },
    { word: "Contention", pos: "noun", definition: "Heated disagreement; an assertion maintained in argument.", roots: "Latin: contendere (to strive with)", example: "The main point of contention was how to divide the budget." },
    { word: "Contrite", pos: "adjective", definition: "Feeling or expressing remorse or penitence.", roots: "Latin: contritus (ground down)", example: "He wrote a contrite apology letter after breaking the vase." },
    { word: "Conundrum", pos: "noun", definition: "A confusing and difficult problem or question.", roots: "Unknown origin (possibly mock-Latin)", example: "Trying to balance work and family life is a common conundrum." },
    { word: "Convoluted", pos: "adjective", definition: "Extremely complex and difficult to follow.", roots: "Latin: convolvere (to roll together)", example: "The movie's convoluted plot left the audience completely lost." },
    { word: "Craven", pos: "adjective", definition: "Contemptibly lacking in courage; cowardly.", roots: "Middle English: cravant (defeated)", example: "The craven soldier abandoned his post during the battle." },
    { word: "Credulous", pos: "adjective", definition: "Having or showing too great a readiness to believe things.", roots: "Latin: credere (to believe)", example: "The con artist easily tricked the credulous tourists." },
    { word: "Decorum", pos: "noun", definition: "Behavior in keeping with good taste and propriety.", roots: "Latin: decorus (seemly)", example: "Please maintain a level of decorum during the courtroom proceedings." },
    { word: "Deference", pos: "noun", definition: "Humble submission and respect.", roots: "Latin: deferre (to carry away/submit)", example: "He bowed his head in deference to the king." },
    { word: "Delineate", pos: "verb", definition: "To describe or portray something precisely.", roots: "Latin: delineare (to outline)", example: "The contract clearly delineates the responsibilities of both parties." },
    { word: "Deride", pos: "verb", definition: "To express contempt for; ridicule.", roots: "Latin: deridere (to scoff at)", example: "Critics derided the movie as the worst of the year." },
    { word: "Desultory", pos: "adjective", definition: "Lacking a plan, purpose, or enthusiasm.", roots: "Latin: desultorius (skipping about)", example: "They engaged in a few minutes of desultory conversation before sitting in silence." },
    { word: "Diaphanous", pos: "adjective", definition: "Light, delicate, and translucent.", roots: "Greek: dia- (through) + phainein (to show)", example: "She wore a diaphanous dress that caught the summer breeze." },
    { word: "Dichotomy", pos: "noun", definition: "A division or contrast between two things that are represented as being entirely different.", roots: "Greek: dikhotomia (a cutting in half)", example: "There is often a false dichotomy presented between science and art." },
    { word: "Didactic", pos: "adjective", definition: "Intended to teach, particularly in having moral instruction as an ulterior motive.", roots: "Greek: didaskein (to teach)", example: "The children's book was overly didactic and lacked a fun storyline." },
    { word: "Diffident", pos: "adjective", definition: "Modest or shy because of a lack of self-confidence.", roots: "Latin: diffidere (to fail to trust)", example: "The diffident student rarely raised her hand in class." },
    { word: "Digress", pos: "verb", definition: "Leave the main subject temporarily in speech or writing.", roots: "Latin: digress- (stepped away)", example: "I have allowed myself to digress from the main point of this essay." },
    { word: "Dilatory", pos: "adjective", definition: "Slow to act; intended to cause delay.", roots: "Latin: dilatorius (delaying)", example: "The lawyer used dilatory tactics to postpone the trial." },
    { word: "Dilettante", pos: "noun", definition: "A person who cultivates an area of interest without real commitment or knowledge.", roots: "Italian: dilettare (to delight)", example: "He was a wealthy dilettante who dabbled in painting and poetry." },
    { word: "Dirge", pos: "noun", definition: "A lament for the dead, especially one forming part of a funeral rite.", roots: "Latin: dirige (direct! - from a psalm)", example: "The choir sang a mournful dirge as the casket was lowered." },
    { word: "Disabuse", pos: "verb", definition: "Persuade someone that an idea or belief is mistaken.", roots: "French: désabuser", example: "I must disabuse you of the notion that this will be an easy task." },
    { word: "Discern", pos: "verb", definition: "Perceive or recognize something.", roots: "Latin: discernere (to separate)", example: "It was difficult to discern the shape of the building in the heavy fog." },
    { word: "Disparate", pos: "adjective", definition: "Essentially different in kind; not allowing comparison.", roots: "Latin: disparatus (separated)", example: "The group consisted of people from widely disparate backgrounds." },
    { word: "Dissemble", pos: "verb", definition: "Conceal one's true motives, feelings, or beliefs.", roots: "Latin: dissimulare (to disguise)", example: "An honest person finds it difficult to dissemble when asked a direct question." },
    { word: "Dissonance", pos: "noun", definition: "Lack of harmony among musical notes or ideas.", roots: "Latin: dissonantia", example: "Cognitive dissonance occurs when your beliefs clash with your actions." },
    { word: "Dogmatic", pos: "adjective", definition: "Inclined to lay down principles as incontrovertibly true.", roots: "Greek: dogma (opinion)", example: "The manager was highly dogmatic and refused to listen to alternative ideas." },
    { word: "Ebullient", pos: "adjective", definition: "Cheerful and full of energy.", roots: "Latin: ebullire (to boil over)", example: "She sounded ebullient after finding out she got the promotion." },
    { word: "Eclectic", pos: "adjective", definition: "Deriving ideas, style, or taste from a broad and diverse range of sources.", roots: "Greek: eklegein (to pick out)", example: "His eclectic music collection included classical, jazz, and heavy metal." },
    { word: "Efficacy", pos: "noun", definition: "The ability to produce a desired or intended result.", roots: "Latin: efficacia", example: "The clinical trials proved the efficacy of the new vaccine." },
    { word: "Elegy", pos: "noun", definition: "A poem of serious reflection, typically a lament for the dead.", roots: "Greek: elegeia", example: "The poet wrote a moving elegy for his fallen comrade." },
    { word: "Elicit", pos: "verb", definition: "Evoke or draw out a response, answer, or fact from someone.", roots: "Latin: elicere (to draw out)", example: "The comedian's joke failed to elicit a laugh from the crowd." },
    { word: "Eloquent", pos: "adjective", definition: "Fluent or persuasive in speaking or writing.", roots: "Latin: eloqui (to speak out)", example: "Her eloquent speech moved many people to tears." },
    { word: "Embellish", pos: "verb", definition: "Make something more attractive by the addition of decorative details or features.", roots: "Old French: bel (beautiful)", example: "He tended to embellish his fishing stories to make them sound more exciting." },
    { word: "Empirical", pos: "adjective", definition: "Based on, concerned with, or verifiable by observation or experience rather than theory.", roots: "Greek: empeiria (experience)", example: "They collected empirical data to prove their scientific hypothesis." },
    { word: "Endemic", pos: "adjective", definition: "Regularly found among particular people or in a certain area.", roots: "Greek: endēmos (native)", example: "Malaria is endemic in many tropical regions." },
    { word: "Enervate", pos: "verb", definition: "Cause someone to feel drained of energy or vitality.", roots: "Latin: enervare (to weaken)", example: "The hot, humid weather completely enervated the hikers." },
    { word: "Engender", pos: "verb", definition: "Cause or give rise to a feeling, situation, or condition.", roots: "Latin: ingenerare (to generate)", example: "The leader's deceitful actions engendered a deep mistrust among the citizens." },
    { word: "Enigma", pos: "noun", definition: "A person or thing that is mysterious, puzzling, or difficult to understand.", roots: "Greek: ainigma (riddle)", example: "How the ancient pyramids were built remains an enigma." },
    { word: "Ephemeral", pos: "adjective", definition: "Lasting for a very short time.", roots: "Greek: ephēmeros (short-lived)", example: "Fashions are highly ephemeral; what is in style today is gone tomorrow." },
    { word: "Equanimity", pos: "noun", definition: "Mental calmness, composure, and evenness of temper, especially in a difficult situation.", roots: "Latin: aequanimitas (even mind)", example: "She accepted both her victories and her defeats with equal equanimity." },
    { word: "Equivocate", pos: "verb", definition: "Use ambiguous language so as to conceal the truth or avoid committing oneself.", roots: "Latin: aequivocus (ambiguous)", example: "When asked about the missing funds, the politician began to equivocate." },
    { word: "Erudite", pos: "adjective", definition: "Having or showing great knowledge or learning.", roots: "Latin: erudire (to instruct)", example: "The erudite professor could speak fluently in seven different languages." },
    { word: "Esoteric", pos: "adjective", definition: "Intended for or likely to be understood by only a small number of people with a specialized knowledge.", roots: "Greek: esōterikos (inner)", example: "They engaged in an esoteric debate about 17th-century philosophy." },
    { word: "Eulogy", pos: "noun", definition: "A speech or piece of writing that praises someone highly, typically someone who has just died.", roots: "Greek: eulogia (praise)", example: "He delivered a beautiful eulogy at his best friend's funeral." },
    { word: "Euphemism", pos: "noun", definition: "A mild or indirect word or expression substituted for one considered to be too harsh or blunt.", roots: "Greek: euphēmos (auspicious)", example: "'Passed away' is a common euphemism for 'died'." },
    { word: "Exacerbate", pos: "verb", definition: "Make a problem, bad situation, or negative feeling worse.", roots: "Latin: exacerbare (to provoke)", example: "Scratching the mosquito bite will only exacerbate the itching." },
    { word: "Exculpate", pos: "verb", definition: "Show or declare that someone is not guilty of wrongdoing.", roots: "Latin: ex- (out from) + culpa (blame)", example: "The new DNA evidence will hopefully exculpate the wrongly accused man." },
    { word: "Exigent", pos: "adjective", definition: "Pressing; demanding.", roots: "Latin: exigere (to enforce)", example: "The exigent circumstances required an immediate response from the police." },
    { word: "Exonerate", pos: "verb", definition: "Absolve someone from blame for a fault or wrongdoing.", roots: "Latin: exonerare (to free from a burden)", example: "The official investigation completely exonerated the mayor of any corruption." },
    { word: "Explicit", pos: "adjective", definition: "Stated clearly and in detail, leaving no room for confusion or doubt.", roots: "Latin: explicitus (unfolded)", example: "The instructions were explicit: do not press the red button." },
    { word: "Extraneous", pos: "adjective", definition: "Irrelevant or unrelated to the subject being dealt with.", roots: "Latin: extraneus (external)", example: "Please edit your essay to remove any extraneous information." },
    { word: "Extrapolate", pos: "verb", definition: "Extend the application of a method or conclusion to an unknown situation.", roots: "Latin: extra- (outside) + polare (to polish/adjust)", example: "We can extrapolate future population growth based on current trends." },
    { word: "Facetious", pos: "adjective", definition: "Treating serious issues with deliberately inappropriate humor; flippant.", roots: "Latin: facetia (jest)", example: "I wasn't trying to be facetious; it was a genuine question." },
    { word: "Fallacy", pos: "noun", definition: "A mistaken belief, especially one based on unsound argument.", roots: "Latin: fallere (to deceive)", example: "The idea that lightning never strikes twice in the same place is a fallacy." },
    { word: "Fatuous", pos: "adjective", definition: "Silly and pointless.", roots: "Latin: fatuus (foolish)", example: "He ignored the fatuous comments made by the internet trolls." },
    { word: "Fawning", pos: "adjective", definition: "Displaying exaggerated flattery or affection; obsequious.", roots: "Old English: fagnian (to rejoice)", example: "The celebrity was surrounded by fawning admirers." },
    { word: "Felicitous", pos: "adjective", definition: "Well chosen or suited to the circumstances; pleasing and fortunate.", roots: "Latin: felicitas (happiness)", example: "The warm sunny weather was a felicitous addition to the outdoor wedding." },
    { word: "Fervent", pos: "adjective", definition: "Having or displaying a passionate intensity.", roots: "Latin: fervere (to boil)", example: "He is a fervent supporter of animal rights." },
    { word: "Fledgling", pos: "noun", definition: "A person or organization that is immature, inexperienced, or underdeveloped.", roots: "Old English: flycge (ready to fly)", example: "The government provided grants to help fledgling tech startups." },
    { word: "Flout", pos: "verb", definition: "Openly disregard a rule, law, or convention.", roots: "Dutch: fluiten (to whistle/play the flute)", example: "Many motorcyclists openly flout the speed limit on that stretch of highway." },
    { word: "Foment", pos: "verb", definition: "Instigate or stir up an undesirable or violent sentiment or course of action.", roots: "Latin: fovere (to heat/cherish)", example: "The rebels secretly met to foment a revolution." },
    { word: "Forestall", pos: "verb", definition: "Prevent or obstruct an anticipated event or action by taking action ahead of time.", roots: "Old English: foresteall (an ambush)", example: "Vitamins can help forestall the onset of a cold." },
    { word: "Fortuitous", pos: "adjective", definition: "Happening by accident or chance rather than design; lucky.", roots: "Latin: forte (by chance)", example: "Meeting her childhood friend at the airport in Tokyo was entirely fortuitous." },
    { word: "Fractious", pos: "adjective", definition: "Irritable and quarrelsome; difficult to control.", roots: "Latin: frangere (to break)", example: "The tired children became highly fractious as bedtime approached." },
    { word: "Frugal", pos: "adjective", definition: "Sparing or economical with regard to money or food.", roots: "Latin: frugi (economical)", example: "By being frugal and cooking at home, she saved enough for a vacation." },
    { word: "Furtive", pos: "adjective", definition: "Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble.", roots: "Latin: furtum (theft)", example: "He cast a furtive glance at his notes during the closed-book exam." },
    { word: "Gainsay", pos: "verb", definition: "Deny or contradict a fact or statement.", roots: "Old English: gegn- (against) + secgan (say)", example: "There is no way to gainsay the tremendous impact she had on the company." },
    { word: "Garrulous", pos: "adjective", definition: "Excessively talkative, especially on trivial matters.", roots: "Latin: garrire (to chatter)", example: "The garrulous cab driver talked nonstop for the entire 45-minute ride." },
    { word: "Goad", pos: "verb", definition: "Provoke or annoy someone so as to stimulate some action or reaction.", roots: "Old English: gād (spearhead)", example: "The older boys tried to goad him into jumping off the high dive." },
    { word: "Grandiloquent", pos: "adjective", definition: "Pompous or extravagant in language, style, or manner, especially in a way that is intended to impress.", roots: "Latin: grandis (great) + loqui (to speak)", example: "The politician's grandiloquent speech lacked any real substance or policy plans." },
    { word: "Gregarious", pos: "adjective", definition: "Fond of company; sociable.", roots: "Latin: grex (a flock)", example: "Dolphins are highly gregarious animals that live in large pods." }
];
/* =========================================
   LEARN MODE LOGIC
   ========================================= */
// This variable keeps track of the word currently on the screen
let currentLearnWord = null;

function loadNewLearnWord() {
    // 1. Look through the database and find words that are NOT in the learned list
    const unlearnedWords = wordDatabase.filter(w => !userData.learnedWords.includes(w.word));
    
    // 2. If the user has learned every single word, show a completion message
    if (unlearnedWords.length === 0) {
        document.getElementById('learn-word').innerText = "All Caught Up!";
        document.getElementById('learn-pos').innerText = "";
        document.getElementById('learn-def').innerText = "You have learned all available words. Time to practice!";
        document.getElementById('learn-roots').innerText = "";
        document.getElementById('learn-example').innerText = "";
        return;
    }

    // 3. Pick a random word from the remaining unlearned words
    const randomIndex = Math.floor(Math.random() * unlearnedWords.length);
    currentLearnWord = unlearnedWords[randomIndex];

    // 4. Inject that word's data into the HTML text
    document.getElementById('learn-word').innerText = currentLearnWord.word;
    document.getElementById('learn-pos').innerText = currentLearnWord.pos;
    document.getElementById('learn-def').innerText = currentLearnWord.definition;
    document.getElementById('learn-roots').innerText = currentLearnWord.roots;
    document.getElementById('learn-example').innerText = currentLearnWord.example;
}

// ACTION 1: The "Next / Skip" Button
// If clicked, it just runs the load function again to get a new random word, but doesn't save anything.
document.getElementById('btn-next-word').addEventListener('click', loadNewLearnWord);

// ACTION 2: The "Mark as Learned" Button
document.getElementById('btn-mark-learned').addEventListener('click', () => {
    // Check to make sure a word is actually loaded and we haven't learned it yet
    if (currentLearnWord && !userData.learnedWords.includes(currentLearnWord.word)) {
        
        // Add the word to our saved array
        userData.learnedWords.push(currentLearnWord.word);
        
        // Reward the user with 10 XP
        userData.xp += 10; 
        
        // Save the updated data to the browser (using the save function from the main code)
        saveUserData();
        
        // Immediately load the next random word
        loadNewLearnWord(); 
    }
});
/* =========================================
   5. ADVANCED PRACTICE MODE LOGIC
   ========================================= */
let currentQuizWord = null;
let currentQuizType = "";

function loadPracticeQuiz() {
    const practiceContainer = document.getElementById('practice-container');
    const practiceEmpty = document.getElementById('practice-empty');
    
    // Still requires at least 4 learned words to generate 4 options
    if (userData.learnedWords.length < 4) {
        practiceContainer.classList.add('hidden');
        practiceEmpty.classList.remove('hidden');
        return;
    }

    practiceContainer.classList.remove('hidden');
    practiceEmpty.classList.add('hidden');
    
    // Reset UI
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('btn-next-quiz').classList.add('hidden');
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = ""; 

    // 1. Pick 1 random learned word as the target
    const targetWordString = userData.learnedWords[Math.floor(Math.random() * userData.learnedWords.length)];
    currentQuizWord = wordDatabase.find(w => w.word === targetWordString);

    // 2. Randomly decide the Quiz Type (0, 1, or 2)
    const quizTypes = ['find_def', 'find_word', 'fitb'];
    currentQuizType = quizTypes[Math.floor(Math.random() * quizTypes.length)];

    const questionTextEl = document.querySelector('.quiz-question');
    let options = [];
    let correctAnswer = "";

    // -- QUIZ TYPE 1: Multiple Choice Definition --
    if (currentQuizType === 'find_def') {
        questionTextEl.innerHTML = `What is the definition of: <strong class="highlight">${currentQuizWord.word}</strong>?`;
        correctAnswer = currentQuizWord.definition;
        options.push(correctAnswer);
        
        while(options.length < 4) {
            let randomWord = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];
            if(!options.includes(randomWord.definition)) options.push(randomWord.definition);
        }
    } 
    // -- QUIZ TYPE 2: Match Word to Definition --
    else if (currentQuizType === 'find_word') {
        questionTextEl.innerHTML = `Which word means: <br><em style="color:var(--text-main); font-size:16px;">"${currentQuizWord.definition}"</em>?`;
        correctAnswer = currentQuizWord.word;
        options.push(correctAnswer);
        
        while(options.length < 4) {
            let randomWord = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];
            if(!options.includes(randomWord.word)) options.push(randomWord.word);
        }
    } 
    // -- QUIZ TYPE 3: Fill in the Blank --
    else if (currentQuizType === 'fitb') {
        // This uses Regex to find the word in the example sentence and replace it with a blank line
        const blankSentence = currentQuizWord.example.replace(new RegExp(currentQuizWord.word, 'ig'), "________");
        questionTextEl.innerHTML = `Fill in the blank: <br><em style="color:var(--text-main); font-size:16px;">"${blankSentence}"</em>`;
        correctAnswer = currentQuizWord.word;
        options.push(correctAnswer);
        
        while(options.length < 4) {
            let randomWord = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];
            if(!options.includes(randomWord.word)) options.push(randomWord.word);
        }
    }

    // Shuffle the options array so the correct answer isn't always the first button
    options = options.sort(() => Math.random() - 0.5);

    // Create buttons for the options
    options.forEach(optionText => {
        const btn = document.createElement('button');
        btn.className = 'btn option-btn';
        btn.innerText = optionText;
        
        btn.addEventListener('click', () => handleQuizAnswer(btn, optionText === correctAnswer, correctAnswer));
        
        optionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(selectedBtn, isCorrect, correctAnswer) {
    // Disable all buttons after guess
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        feedback.innerText = "🎉 Correct! +5 XP";
        feedback.style.color = "var(--primary-green-shadow)";
        userData.xp += 5; // Track Score
        saveUserData();
    } else {
        selectedBtn.classList.add('wrong');
        feedback.innerText = "❌ Incorrect. Keep practicing!";
        feedback.style.color = "red";
        
        // Highlight the correct answer for feedback
        buttons.forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    document.getElementById('btn-next-quiz').classList.remove('hidden');
}

// Keep your existing event listener attached
document.getElementById('btn-next-quiz').addEventListener('click', loadPracticeQuiz);

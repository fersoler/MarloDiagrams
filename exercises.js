diagExercises = [
    // GET FAMILIAR WITH BUTTONS
    // 1 EXAMPLE CREATE
    ["Creation 0.1",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Toto-Toto p q diagram go to creation, write p in Subj and q in Pred. Select Type T-T and press Create».",
    // 3. Goal diagram
    {sub: "p", all: ["q"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "a", "b"], "prem", "a ↔ b"]        
    ]],
	// GET FAMILIAR WITH BUTTONS
    // 2 EXAMPLE CREATE
    ["Creation 0.2",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Toto-Toto p ¬q diagram go to creation, write p in Subj and ¬q in Pred. Select Type T-T and press Create».",
    // 3. Goal diagram
    {sub: "p", all: ["¬q"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "a", "¬b"], "prem", "a XOR b"]        
    ]],
	// GET FAMILIAR WITH BUTTONS
    // 3 EXAMPLE CREATE
    ["Creation 0.3",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Toto-Part p q diagram go to creation, write p in Subj and q in Pred. Select Type T-P and press Create».",
    // 3. Goal diagram
    {sub: "p", all: ["q"], in: [[]], out: ["q"]},
    // 4. Hints
    [
        [["new_all_some", "a", "b"], "prem", "a → b"]        
    ]],
	// GET FAMILIAR WITH BUTTONS
    // 4 EXAMPLE CREATE
    ["Creation 0.4",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Toto-Part p ¬q diagram go to creation, write p in Subj and ¬q in Pred. Select Type T-P and press Create».",
    // 3. Goal diagram
    {sub: "p", all: ["¬q"], in: [[]], out: ["¬q"]},
    // 4. Hints
    [
        [["new_all_some", "a", "¬b"], "prem", "a → ¬b"]        
    ]],
	// GET FAMILIAR WITH BUTTONS
    // 4 EXAMPLE CREATE
    ["Creation 0.5",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Toto-Part ¬p q diagram go to creation, write ¬p in Subj and q in Pred. Select Type T-P and press Create».",
    // 3. Goal diagram
    {sub: "¬p", all: ["q"], in: [[]], out: ["q"]},
    // 4. Hints
    [
        [["new_all_some", "¬a", "b"], "prem", "a ∨ b"]        
    ]],
	// GET FAMILIAR WITH BUTTONS
    // 4 EXAMPLE CREATE
    ["Creation 0.6",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Part-Toto s p diagram go to creation, write s in Subj and p in Pred. Select Type P-T and press Create».",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[], ["p"]], out: []},
    // 4. Hints
    [
        [["new_some_all", "a", "b"], "prem", "a ← b"]        
    ]],
	// GET FAMILIAR WITH BUTTONS
    // 4 EXAMPLE CREATE
    ["Creation 0.7",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Part-Toto ¬r ¬t diagram go to creation, write ¬r in Subj and ¬t in Pred. Select Type P-T and press Create».",
    // 3. Goal diagram
    {sub: "¬r", all: [], in: [[], ["¬t"]], out: []},
    // 4. Hints
    [
        [["new_some_all", "¬a", "¬b"], "prem", "¬a ← ¬b"]        
    ]],
	// GET FAMILIAR WITH BUTTONS
    // 4 EXAMPLE CREATE
    ["Creation 0.8",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Part-Part p s diagram go to creation, write p in Subj and s in Pred. Select Type P-P and press Create».",
    // 3. Goal diagram
    {sub: "p", all: [], in: [[], ["s"]], out: ["s"]},
    // 4. Hints
    [
        [["new_some_some", "a", "b"], "prem", "Some a are b"]        
    ]],
	
	// GET FAMILIAR WITH BUTTONS
    // 4 EXAMPLE CREATE
    ["Creation 0.9",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Part-Part s ¬p diagram go to creation, write s in Subj and ¬p in Pred. Select Type P-P and press Create».",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[], ["¬p"]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_some_some", "a", "¬b"], "prem", "Some a are not b"]        
    ]],
	// GET FAMILIAR WITH BUTTONS
    // 4 EXAMPLE CREATE
    ["Creation 0.10",
    // 1. Type
    "creation",
    // 2. Instructions
    "To create a new Toto-Part s ¬p diagram go to creation, write s in Subj and ¬p in Pred. Select Type T-P and press Create».",
    // 3. Goal diagram
    {sub: "s", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_all_some", "a", "¬b"], "prem", "No a is b"]        
    ]],
	
		
    // FIRST EXAMPLE CONVERSION
    ["Conversion 1",
    // 1. Type GET FAMILIAR WITH THE BUTTONS. CONVERSION
    "conversion",
    // 2. Instructions
    "Diagram D1 represents «Some m are p». To convert it so that the subject is p write below Conversion: Diagram 1, literal p and press Convert.",
    // 3. Goal diagram
    {sub: "p", all: [], in: [[],["m"]], out: ["m"]},
    // 4. Hints
    [
        [["new_some_some", "m", "p"], "prem", "Some m are p"]        
    ]],
	
	["Conversion 2",
    // 1. Type GET FAMILIAR WITH THE BUTTONS
    "conversion",
    // 2. Instructions
    "Diagram D1 represents «All m are q». To convert it so that the subject is q write below Conversion: Diagram 1, literal q and press Convert.",
    // 3. Goal diagram
    {sub: "q", all: [], in: [[], ["m"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "m", "q"], "prem", "All m are q"]        
    ]],
	
	["Conversion 3",
    // 1. Type GET FAMILIAR WITH THE BUTTONS
    "conversion",
    // 2. Instructions
    "Diagram D1 represents «some p are all m». To convert it so that the subject is m write below Conversion: Diagram 1, literal m and press Convert.",
    // 3. Goal diagram
    {sub: "m", all: ["p"], in: [[]], out: ["p"]},
    // 4. Hints
    [
        [["new_some_all", "p", "m"], "prem", "Some p are m"]        
    ]],
	
	["Conversion 4",
    // 1. Type GET FAMILIAR WITH THE BUTTONS
    "conversion",
    // 2. Instructions
    "Diagram D2 represents «No p are q». To convert it so that the subject is ¬q write below Conversion: Diagram 2, literal ¬q and press Convert.",
    // 3. Goal diagram
    {sub: "¬q", all: [], in: [[], ["p"]], out: []},
    // 4. Hints
    [
		[["new_all_some", "q", "¬p"], "prem", "All q is ¬p"],  
        [["new_all_some", "p", "¬q"], "prem", "No p are q"]        
    ]],
	
	["Conversion 5",
    // 1. Type GET FAMILIAR WITH THE BUTTONS
    "conversion",
    // 2. Instructions
    "To convert D4 so that the subject is s write below Conversion: Diagram 4, literal s and press Convert.",
    // 3. Goal diagram
    {sub: "s", all: ["m","p"], in: [[]], out: ["m","p"]},
    
	// 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"],
        [["conv",2,"m"]],
        [["inf",1,3]]
    ]],
	
	["Conversion 6",
    // 1. Type GET FAMILIAR WITH THE BUTTONS
    "conversion",
    // 2. Instructions
    "To convert D5 so that the subject is s write below Conversion: Diagram 5, literal s and press Convert.",
    // 3. Goal diagram
    {sub: "s", all: ["m","p"], in: [[]], out: ["m","p"]},
    
	// 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"],
        [["conv",2,"m"]],
        [["inf",1,3]],
		[["conv",4,"p"]]
    ]],
	
		
	["Transform 1",
    // 1. Type GET FAMILIAR WITH THE BUTTONS. TRANSFORMATION
    "conversion",
    // 2. Instructions
    "To transform D1 write 1 below transformation and press Tranform.",
    // 3. Goal diagram
    {sub: "¬p", all: ["¬m"], in: [[]], out: ["¬m"]},
    
	// 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"]        
    ]],
	
	["Transform 2",
    // 1. Type GET FAMILIAR WITH THE BUTTONS
    "Transformation",
    // 2. Instructions
    "To transform D2 write 2 below transformation and press Tranform.",
    // 3. Goal diagram
    {sub: "¬m", all: ["¬s"], in: [[]], out: ["¬s"]},
    
	// 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"]        
    ]],
	// EXAMPLE transform
    ["Transform 3",
    // 1. Type
    "transformation",
    // 2. Instructions
    "Use the transform operation with D1 to get a diagram with ¬b in the subject.",
    // 3. Goal diagram
    {sub: "¬b", all: ["¬a"], in: [[]], out: ["¬a"]},
    // 4. Hints
    [
        [["new_all_some", "a", "b"], "prem", "All a are b"]
    ]],
    // EXAMPLE transform 2
    ["Transform 4",
    // 1. Type
    "transformation",
    // 2. Instructions
    "Diagram D1 means that all Londoners (l) are English (e). Use the transform operation to get a diagram that means that all non-English are not Londoners.",
    // 3. Goal diagram
    {sub: "¬e", all: ["¬l"], in: [[]], out: ["¬l"]},
    // 4. Hints
    [
        [["new_all_some", "l", "e"], "prem", "All l are e"]
    ]],
		
	["Extraction 1",
    // 1. Type GET FAMILIAR WITH THE BUTTONS
    "Extraction",
    // 2. Instructions
    "To remove m from diagram 5 go to extraction, then write 5 in Diagram and m in literal and press Extract.",
    // 3. Goal diagram
    {sub: "s", all: ["p"], in: [[]], out: ["p"]},
    // 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"],
        [["conv",2,"m"]],
        [["inf",1,3]],
		[["conv",4,"s"]]
    ]],
	
	["Extraction 2",
    // 1. Type GET FAMILIAR WITH THE BUTTONS
    "Extraction",
    // 2. Instructions
    "To remove m from diagram 5 go to extraction, then write 5 in Diagram and m in literal and press Extract.",
    // 3. Goal diagram
    {sub: "p", all: [], in: [[],["s"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"],
        [["conv",2,"m"]],
        [["inf",1,3]],
		[["conv",4,"p"]]
    ]],
	
	["Inference 1",
    // 1. Type GET FAMILIAR WITH THE BUTTONS. INFERENCE
    "Inference",
    // 2. Instructions
    "Write below Inference the numbers 1 and 2 to synthesize D1 and D2 using the Infer button.",
    // 3. Goal diagram
    {sub: "m", all: ["p","s"], in: [[]], out: ["p","s"]},
    // 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "m", "s"], "prem", "All m are s"]
    ]],
	
	["Inference 2",
    // 1. Type GET FAMILIAR WITH THE BUTTONS. INFERENCE
    "Inference",
    // 2. Instructions
    "Write below Inference the numbers 1 and 3 to synthesize D1 and D3 using the Infer button.",
    // 3. Goal diagram
    {sub: "m", all: ["p"], in: [[],["s"]], out: ["p"]},
    // 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"],
		[["conv",2,"m"]]
    ]],
	
	// EXAMPLE 4
    ["Inference 3",
    // 1. Type
    "inference",
    // 2. Instructions
    "Use the inference operation with diagrams D1 and D2.",
    // 3. Goal diagram
    {sub: "a", all: ["c"], in: [[],["b"]], out: ["b","c"]},
    // 4. Hints
    [
        [["new_all_some", "a", "c"], "prem", "All a are c"],
        [["new_some_some", "a", "b"], "prem", "Some a are b"]        
    ]],
	
	
		
	// FIRST EXAMPLE
    // 0. Name of the example (free)
    ["Creation 1",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Diagram D1 represents «All platypuses are oviparous». It is a «Toto-Parte» (T-P) diagram. Create a diagram with p and v representing «All primates are vertebrates».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "p", all: ["v"], in: [[]], out: ["v"]},
    // 4. Hints
    [
        [["new_all_some", "p", "o"], "prem", "All p are o"]
    ]],  // first example finishes
    // SECOND EXAMPLE
    ["Creation 2",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «Some m are p». It is a «Parte-Parte» (P-P) diagram. Create a diagram with m and e representing «In some metazoans digestion is extracellular».",
    // 3. Goal diagram
    {sub: "m", all: [], in: [[],["e"]], out: ["e"]},
    // 4. Hints
    [
        [["new_some_some", "m", "p"], "prem", "Some m are p"]        
    ]],
	// THIRD EXAMPLE
    ["Creation 3",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «some arachnids are carnivores». It is a «Parte-Parte» (P-P) diagram. Create a diagram representing «Some carnivores are arachnids».",
    // 3. Goal diagram
    {sub: "c", all: [], in: [[],["a"]], out: ["a"]},
    // 4. Hints
    [
        [["new_some_some", "a", "c"], "prem", "Some a are c"]        
    ]],
	// FOURTH EXAMPLE
    ["Creation 4",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «some b are not c». It is a «Parte-Parte» (P-P) diagram. Create a diagram with m and e representing «In some metazoans digestion is not extracellular».",
    // 3. Goal diagram
    {sub: "m", all: [], in: [[],["¬e"]], out: ["¬e"]},
    // 4. Hints
    [
        [["new_some_some", "a", "¬c"], "prem", "Some a are not c"]        
    ]],
	// FIFTH EXAMPLE
    // 0. Name of the example (free)
    ["Creation 5",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Diagram D1 represents «No p are q». It is a «Toto-Parte» (T-P) diagram. Create a diagram with p and b representing «No poriferous has a brain».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "p", all: ["¬b"], in: [[]], out: ["¬b"]},
    // 4. Hints
    [
        [["new_all_some", "p", "¬q"], "prem", "All p are q"]
    ]],  // first example finishes
	// SIXTH EXAMPLE
    // 0. Name of the example (free)
    ["Creation 6",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Diagram D1 represents «If and only if p, then q». It is a «Toto-Toto» (T-T) diagram. Create a diagram with m and d representing «if and only if there are males and females -m- a species is dioecious -d-».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "m", all: ["d"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "p", "q"], "prem", "p = q"]
    ]],  // first example finishes
	// SEVENTH EXAMPLE
    // 0. Name of the example (free)
    ["Creation 7",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Diagram D1 represents «Or p or q, but not both». It is a «Toto-Toto» (T-T) diagram. Create a diagram with e and o representing «Being even is the opposite of being odd».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "e", all: ["¬o"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "p", "¬q"], "prem", "p = ¬q"]
    ]],  // first example finishes
	// EIGHTH EXAMPLE
    // 0. Name of the example (free)
    ["Creation 8",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Diagram D1 represents the inclusive disjunction «Or p or q». It is a «Toto-Parte» (T-P) diagram. Create a diagram with d and a representing «She has diabetes or anorexia».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬d", all: ["a"], in: [[]], out: ["a"]},
    // 4. Hints
    [
        [["new_all_some", "¬p", "q"], "prem", "Or p or q"]
    ]],  // first example finishes
	
	// NINTH EXAMPLE
    // 0. Name of the example (free)
    ["Creation 9",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Diagram D1 represents the inclusive disjunction «Or r or s». It is a «Toto-Parte» (T-P) diagram. Create a diagram with v and b representing «He has a virus or bacteria».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬v", all: ["b"], in: [[]], out: ["b"]},
    // 4. Hints
    [
        [["new_all_some", "¬r", "s"], "prem", "Or r or s"]
    ]],  // first example finishes
	
	// TENTH EXAMPLE
    // 0. Name of the example (free)
    ["Creation 10",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Diagram D1 represents the proposition «Only among English there are Londoners». It is a «Parte-Toto» (P-T) diagram. Create a diagram with s and a representing «Only among Spaniards are there Andalusians».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "e", all: [], in: [[],["a"]], out: []},
    // 4. Hints
    [
        [["new_some_all", "e", "l"], "prem", "e ← l"]
    ]],  // first example finishes
	// ELEVENTH EXAMPLE. FIRST WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 11",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with b and v representing «Birds are vertebrate».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "b", all: ["v"], in: [[]], out: ["v"]},
    // 4. Hints with no clues
    []],  // first example finishes	
	// 12 EXAMPLE. FIRST WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 12",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with p and f representing «No primates flies».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "p", all: ["¬f"], in: [[]], out: ["¬f"]},
    // 4. Hints with no clues
    []],  // first example finishes
	// 13 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 13",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with p and h representing «Some politicians are not honest».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "p", all: [], in: [[],["¬h"]], out: ["¬h"]},
    // 4. Hints
    []],  // first example finishes
	// 14 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 14",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with l and n representing «If I'm not going to London I'm going to New York».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬l", all: ["n"], in: [[]], out: ["n"]},
    // 4. Hints
    []],  // first example finishes
	// 15 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 15",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with d and f representing «Those who do not dance do not have fun».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬d", all: ["¬f"], in: [[]], out: ["¬f"]},
    // 4. Hints
    []],  // first example finishes	
	// 16 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 16",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with b and l representing «You need to breathe to live» (use negative variables).",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬b", all: ["¬l"], in: [[]], out: ["¬l"]},
    // 4. Hints
    []],  // first example finishes	
	// 17 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 17",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with s and f representing «If you don't study then you fail».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬s", all: ["f"], in: [[]], out: ["f"]},
    // 4. Hints
    []],  // first example finishes	
	// 18 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 18",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with s and p representing «Only among those who study there are people who pass the exam».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "s", all: [], in: [[],["p"]], out: []},
    // 4. Hints
    []],  // first example finishes
	// 19 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 19",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with s and u representing «only among those who do not study there are people who do not understand anything».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬s", all: [], in: [[],["¬u"]], out: []},
    // 4. Hints
    []],  // first example finishes
	// 20 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 20",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with s (smoker) and t (smell of tobacco) representing « All smokers smell of tobacco».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "s", all: ["t"], in: [[]], out: ["t"]},
    // 4. Hints
    []],  // first example finishes
	// 21 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 21",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with s (smoker) and t (smell of tobacco) representing «No non-smoker smells of tobacco».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬s", all: ["¬t"], in: [[]], out: ["¬t"]},
    // 4. Hints
    []],  // first example finishes	
	// 22 EXAMPLE
    ["Creation 22",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «Some m are not p». Create a diagram representing «the converse of this proposition».",
    // 3. Goal diagram
    {sub: "¬p", all: [], in: [[],["m"]], out: ["m"]},
    // 4. Hints
    [
        [["new_some_some", "m", "¬p"], "prem", "Some m are not p"]        
    ]],
	// 23 EXAMPLE
    ["Creation 23",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «All ¬p are q». Create a diagram representing «the converse of this proposition».",
    // 3. Goal diagram
    {sub: "q", all: [], in: [[],["¬p"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "¬p", "q"], "prem", "All ¬p are q"]        
    ]],
	// 24 EXAMPLE
    ["Creation 24",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents « No p are q». Create a diagram representing «the converse of this proposition».",
    // 3. Goal diagram
    {sub: "¬q", all: [], in: [[],["p"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "p", "¬q"], "prem", "All p are ¬q"]        
    ]],
	// 25 EXAMPLE
    ["Creation 25",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «Only among Europeans are there French». Create a diagram representing «the converse of this proposition».",
    // 3. Goal diagram
    {sub: "f", all: ["e"], in: [[]], out: ["e"]},
    // 4. Hints
    [
        [["new_some_all", "e", "f"], "prem", "e ← f"]        
    ]],
	// 26 EXAMPLE
    ["Creation 26",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «Only among vertebrates are there mammals». Create a diagram representing «the converse of this proposition».",
    // 3. Goal diagram
    {sub: "v", all: ["m"], in: [[]], out: ["m"]},
    // 4. Hints
    [
        [["new_some_all", "m", "v"], "prem", "m ← v"]        
    ]],
	// 27 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 27",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with b and l representing «You need to breathe to live» (Do not use negative variables).",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "l", all: ["b"], in: [[]], out: ["b"]},
    // 4. Hints
    []],  // first example finishes
	// 28 EXAMPLE
    ["Creation 28",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «All p are q». Create a diagram representing «the transformation of this proposition(similar to modus tollens)».",
    // 3. Goal diagram
    {sub: "¬q", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_all_some", "p", "q"], "prem", "All p are q"]        
    ]],
	// 29 EXAMPLE
    ["Creation 29",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «All ¬r are s». Create a diagram representing «the transformation of this proposition(similar to modus tollens)».",
    // 3. Goal diagram
    {sub: "¬s", all: ["r"], in: [[]], out: ["r"]},
    // 4. Hints
    [
        [["new_all_some", "¬r", "s"], "prem", "All ¬r are s"]        
    ]],
	// 30 EXAMPLE
    ["Creation 30",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «All ¬r are s». Create a diagram representing «the conversion of this proposition».",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[], ["¬r"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "¬r", "s"], "prem", "All ¬r are s"]        
    ]],
	// 31 EXAMPLE
    ["Creation 31",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «All q are ¬t». Create a diagram representing «the transformation of this proposition(similar to modus tollens)».",
    // 3. Goal diagram
    {sub: "t", all: ["¬q"], in: [[]], out: ["¬q"]},
    // 4. Hints
    [
        [["new_all_some", "q", "¬t"], "prem", "q → ¬t"]        
    ]],
	// 32 EXAMPLE
    ["Creation 32",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «If and only if ¬q then ¬p». Create a diagram representing «the transformation of this proposition(similar to modus tollens)».",
    // 3. Goal diagram
    {sub: "q", all: ["p"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "¬p", "¬q"], "prem", "¬p ↔ ¬q"]        
    ]],
	// 33 EXAMPLE
    ["Creation 33",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «If and only if q then ¬p». Create a diagram representing «the transformation of this proposition(similar to modus tollens)».",
    // 3. Goal diagram
    {sub: "p", all: ["¬q"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "q", "¬p"], "prem", "q ↔ ¬p"]        
    ]],
	// 34 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 34",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with e as the subject and r as the predicate representing «If you don't hatch from eggs, you're not a reptile. Do not use negative variables.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "e", all: [], in: [[],["r"]], out: []},
    // 4. Hints
    []],  // first example finishes	
	// 35 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 35",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with e and r representing «If you don't hatch from eggs, you're not a reptile. Use negative variables.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬e", all: ["¬r"], in: [[]], out: ["¬r"]},
    // 4. Hints
    []],  // first example finishes
	// 36 EXAMPLE
    ["Creation 36",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «¬e → ¬r». Create a diagram representing «the transformation of this proposition(similar to modus tollens)».",
    // 3. Goal diagram
    {sub: "r", all: ["e"], in: [[]], out: ["e"]},
    // 4. Hints
    [
        [["new_all_some", "¬e", "¬r"], "prem", "¬e → ¬r"],      
	]],  // first example finishes
	
	// 37 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 37",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with s and h representing «Socrates is mortal».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "s", all: ["m"], in: [[]], out: ["m"]},
    // 4. Hints
    []],  // first example finishes	
	// 38 EXAMPLE
    ["Creation 38",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «Socrates is mortal». Create a diagram representing «the transformation of this proposition(similar to modus tollens)».",
    // 3. Goal diagram
    {sub: "¬m", all: ["¬s"], in: [[]], out: ["¬s"]},
    // 4. Hints
    [
        [["new_all_some", "s", "m"], "prem", "Socrates is mortal"],      
	]],  // first example finishes
	
	// 39 EXAMPLE
    ["Creation 39",
    // 1. Type
    "creation",
    // 2. Instructions
    "Create a diagram representing «the conversion of this proposition».",
    // 3. Goal diagram
    {sub: "¬s", all: [], in: [[],["¬m"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "¬m", "¬s"], "prem", "¬m → ¬s"],      
	]],  // first example finishes
	// 40 EXAMPLE. WITHOUT CLUES
    // 0. Name of the example (free)
    ["Creation 40",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a diagram with h and p representing «only if there is no pain can there be happiness» Do not use negative subject.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "h", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    []],  // first example finishes
	// 41 EXAMPLE
    ["Creation 41",
    // 1. Type
    "creation",
    // 2. Instructions
    "Create a diagram representing «the conversion of this proposition».",
    // 3. Goal diagram
    {sub: "¬p", all: [], in: [[],["h"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "h", "¬p"], "prem", "h → ¬p"],      
	]],  // first example finishes
	// 42 EXAMPLE
    ["Creation 42",
    // 1. Type
    "creation",
    // 2. Instructions
    "Create a diagram representing «the transformation of this proposition» Do not use negative subject.",
    // 3. Goal diagram
    {sub: "p", all: ["¬h"], in: [[]], out: ["¬h"]},
    // 4. Hints
    [
        [["new_some_all", "¬p", "h"], "prem", "¬p ← h"],      
	]],  // first example finishes
	// 43 EXAMPLE
    ["Creation 43",
    // 1. Type
    "creation",
    // 2. Instructions
    "Create a diagram representing «the transformation of this proposition» Use negative subject.",
    // 3. Goal diagram
    {sub: "¬h", all: [], in: [[],["p"]], out: []},
    // 4. Hints
    [
        [["new_some_all", "¬p", "h"], "prem", "¬p ← h"],      
	]],  // first example finishes
	// 43 EXAMPLE
    ["Creation 43",
    // 1. Type
    "creation",
    // 2. Instructions
    "Create a diagram representing «the conversion of this proposition».",
    // 3. Goal diagram
    {sub: "h", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_some_all", "¬p", "h"], "prem", "¬p ← h"],      
	]],  // first example finishes
	// 44 EXAMPLE. WITHOUT CLUES. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 44",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "If a variable is accompanied by the subscript x it means Toto and if not, Parte. Create the diagram for «ax bx».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "a", all: ["b"], in: [[]], out: []},
    // 4. Hints
    []],  // first example finishes
		// 45 EXAMPLE. WITHOUT CLUES. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 45",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "If a variable is accompanied by the subscript x it means Toto and if not, Parte. Create the diagram for «ax b».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "a", all: ["b"], in: [[]], out: ["b"]},
    // 4. Hints
    []],  // first example finishes
	// 46 EXAMPLE. WITHOUT CLUES. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 46",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "If a variable is accompanied by the subscript x it means Toto and if not, Parte. Create the diagram for «ax ¬b».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "a", all: ["¬b"], in: [[]], out: ["¬b"]},
    // 4. Hints
    []],  // first example finishes
	// 47 EXAMPLE. WITHOUT CLUES. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 47",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "If a variable is accompanied by the subscript x it means Toto and if not, Parte. Create the diagram for «¬ax b».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬a", all: ["b"], in: [[]], out: ["b"]},
    // 4. Hints
    []],  // first example finishes	
	// 48 EXAMPLE. WITHOUT CLUES. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 48",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "If a variable is accompanied by the subscript x it means Toto and if not, Parte. Create the diagram for «a ¬bx».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "a", all: [], in: [[], ["¬b"]], out: []},
    // 4. Hints
    []],  // first example finishes
	// 49 EXAMPLE. WITHOUT CLUES. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 49",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "If a variable is accompanied by the subscript x it means Toto and if not, Parte. Create the diagram for «¬a¬b».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬a", all: [], in: [[], ["¬b"]], out: ["¬b"]},
    // 4. Hints
    []],  // first example finishes	
	// 50 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 50",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Pay attention to the diagrams and create the diagram for «a¬c» with the same Toto-Part rules. ax=Toto a. a= Part of a.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "a", all: [], in: [[], ["¬c"]], out: ["¬c"]},
    // 4. Hints
    [
        [["new_all_some", "a", "c"], "prem", "ax c"],
		[["new_some_some", "a", "c"], "prem", "ac"],
        [["new_all_some", "a", "¬c"], "prem", "ax ¬c"]
		
	]],  // first example finishes
	 
	// 51 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 51",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Pay attention to the diagrams and create the diagram for «¬ac» with the same Toto-Part rules. ax=Toto a. a= Part of a.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "a", all: [], in: [[], ["¬c"]], out: ["¬c"]},
    // 4. Hints
    [
        [["new_all_some", "¬a", "c"], "prem", "¬ax c"],
		[["new_some_some", "¬a", "¬c"], "prem", "¬a¬c"],
        [["new_all_some", "¬a", "¬c"], "prem", "¬ax c"]
		
	]],  // first example finishes
	
	// 52 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 52",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Pay attention to the diagrams and create the diagram for «acx» with the same Toto-Part rules. ax=Toto a. a= Part of a.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "a", all: [], in: [[], ["c"]], out: []},
    // 4. Hints
    [
        [["new_all_all", "a", "c"], "prem", "ax cx"],
		[["new_some_some", "a", "c"], "prem", "ac"],
        [["new_all_some", "a", "c"], "prem", "ax c"]
		
	]],  // first example finishes
	 
	// 53 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 53",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Pay attention to the diagrams and create the diagram for «¬abx» with the same Toto-Part rules. ax=Toto a. a= Part of a.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬a", all: [], in: [[], ["b"]], out: []},
    // 4. Hints
    [
        [["new_all_all", "¬a", "b"], "prem", "¬ax bx"],
		[["new_some_some", "¬a", "b"], "prem", "¬ab"],
        [["new_all_some", "¬a", "b"], "prem", "¬ax b"]
		
	]],  // first example finishes
	 
	// 54 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 54",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Pay attention to the diagrams and create the diagram for «cx¬b» with the same Toto-Part rules. ax=Toto a. a= Part of a.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "c", all: ["¬b"], in: [[]], out: ["¬b"]},
    // 4. Hints
    [
        [["new_all_all", "c", "¬b"], "prem", "¬ax ¬bx"],
		[["new_some_some", "c", "¬b"], "prem", "c¬b"],
        [["new_some_all", "c", "¬b"], "prem", "c ¬bx"]
		
	]],  // first example finishes
	 
	// 55 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 55",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Pay attention to the diagrams and create the diagram for «r¬s» with the same Toto-Part rules. ax=Toto a. a= Part of a.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "r", all: [], in: [[],["¬s"]], out: ["¬s"]},
    // 4. Hints
    [
        [["new_all_all", "r", "¬s"], "prem", "rx ¬sx"],
		[["new_all_some", "r", "¬s"], "prem", "rx¬s"],
        [["new_some_all", "r", "¬s"], "prem", "r ¬sx"]
		
	]],  // first example finishes
	 
	// 56 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 56",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬m", all: [], in: [[],["¬v"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "m", "v"], "prem", "mx v"],
		[["new_some_all", "v", "m"], "prem", "v mx"],
        [["new_all_some", "¬v", "¬m"], "prem", "¬vx ¬m"]
		
	]],  // first example finishes
	
	// 57 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 57",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬p", all: [], in: [[],["q"]], out: []},
    // 4. Hints
    [
        [["new_some_all", "p", "¬q"], "prem", "p ¬qx"],
		[["new_all_some", "¬q", "p"], "prem", "¬qxp"],
        [["new_all_some", "q", "¬p"], "prem", "qx ¬p"]
		
	]],  // first example finishes
	
	
	// 58 EXAMPLE. MARLO NOTATION
    // 0. Name of the example (free)
    ["Creation 58",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬p", all: ["¬s"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "s", "p"], "prem", "sx px"],
		[["new_all_all", "p", "s"], "prem", "px sx"],
        [["new_all_all", "¬s", "p"], "prem", "¬sx ¬px"]
		
	]],  // first example finishes
	
	// 59 EXAMPLE. MARLO NOTATION.COMPLETE THE SERIE.
    // 0. Name of the example (free)
    ["Creation 59",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "t", all: ["¬r"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "¬r", "t"], "prem", "¬rx tx"],
		[["new_all_all", "¬t", "r"], "prem", "¬tx rx"],
        [["new_all_all", "r", "¬t"], "prem", "rx ¬tx"]
		
	]],  // first example finishes
	
	// 59 EXAMPLE. MARLO NOTATION.COMPLETE THE SERIE.
    // 0. Name of the example (free)
    ["Creation 60",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "m", all: ["¬r"], in: [[]], out: []},
    // 4. Hints
    [
        [["new_all_all", "r", "¬m"], "prem", "rx ¬mx"],
		[["new_all_all", "¬m", "r"], "prem", "¬mx rx"],
        [["new_all_all", "¬r", "m"], "prem", "¬rx mx"]
		
	]],  // first example finishes
	
	// 59 EXAMPLE. MARLO NOTATION.COMPLETE THE SERIE.
    // 0. Name of the example (free)
    ["Creation 61",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "p", all: [], in: [[], ["¬d"]], out: []},
    // 4. Hints
    [
        [["new_all_some", "¬d", "p"], "prem", "¬dx p"],
		[["new_all_some", "¬p", "d"], "prem", "¬px d"],
        [["new_some_all", "d", "¬p"], "prem", "d ¬px"]
		
	]],  // first example finishes
	
	// 60 EXAMPLE. MARLO NOTATION.COMPLETE THE SERIE.
    // 0. Name of the example (free)
    ["Creation 62",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "v", all: ["n"], in: [[]], out: ["n"]},
    // 4. Hints
    [
        [["new_some_all", "¬v", "¬n"], "prem", "¬v ¬nx"],
		[["new_all_some", "¬n", "¬v"], "prem", "¬nx ¬vx"],
        [["new_some_all", "n", "v"], "prem", "n vx"]
		
	]],  // first example finishes
	
	// 61 EXAMPLE. MARLO NOTATION.COMPLETE THE SERIE.
    // 0. Name of the example (free)
    ["Creation 63",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "¬t", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_some_all", "¬p", "¬t"], "prem", "¬p ¬tx"],
		[["new_some_all", "t", "p"], "prem", "t px"],
        [["new_all_some", "p", "t"], "prem", "px t"]
		
	]],  // first example finishes
	
	// 62 EXAMPLE. MARLO NOTATION. COMPLETE THE SERIE.
    // 0. Name of the example (free)
    ["Creation 64",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Create a fourth diagram that is equivalent to the previous ones.",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "g", all: ["¬f"], in: [[]], out: ["¬f"]},
    // 4. Hints
    [
        [["new_all_some", "f", "¬g"], "prem", "fx ¬g"],
		[["new_some_all", "¬f", "g"], "prem", "¬f gx"],
        [["new_some_all", "¬g", "f"], "prem", "¬gx f"]
		
	]],  // first example finishes
	
	    
    // EXAMPLE BARBARA
    ["Syllogism Barbara",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «All s are p»",
    // 3. Goal diagram
    {sub: "s", all: ["p"], in: [[]], out: ["p"]},
    // 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"],
        [["conv",2,"m"]],
        [["inf",1,3]]
    ]],
	
	// EXAMPLE CELARENT
    ["Syllogism Celarent",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «No s is p»",
    // 3. Goal diagram
    {sub: "s", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_all_some", "m", "¬p"], "prem", "No m are p"],
        [["new_all_some", "s", "m"], "prem", "All s are m"],
        [["conv",2,"m"]],
        [["inf",1,3]]
    ]],
	
	// EXAMPLE DARII
    ["Syllogism Darii",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["p"]], out: ["p"]},
    // 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"],
        [["new_some_some", "s", "m"], "prem", "Some s are m"],
        [["conv",2,"m"]]        
    ]],
	// EXAMPLE FERIO
    ["Syllogism Ferio",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are not p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["¬p"]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_all_some", "m", "¬p"], "prem", "No m are p"],
        [["new_some_some", "s", "m"], "prem", "Some s are m"]                
    ]],
	
	// EXAMPLE CESARE
    ["Syllogism Cesare",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «No s is p»",
    // 3. Goal diagram
    {sub: "s", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_all_some", "p", "¬m"], "prem", "No p are m"],
        [["new_all_some", "s", "m"], "prem", "All s are m"],
        [["trans",1]],
        [["conv",2,"m"]]
    ]],
	
		// EXAMPLE CAMESTRES
    ["Syllogism Camestres",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «No s is p»",
    // 3. Goal diagram
    {sub: "s", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_all_some", "s", "m"], "prem", "All s are m"],
        [["new_all_some", "p", "¬m"], "prem", "No p is m"],
        [["trans",2]],
        [["conv",1,"m"]]
    ]],
	
	// EXAMPLE FESTINO
    ["Syllogism Festino",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are not p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["¬p"]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_all_some", "p", "¬m"], "prem", "No p are m"],
        [["new_some_some", "s", "m"], "prem", "Some s are m"],
        [["trans",1]],
    ]],
	
	// EXAMPLE BAROCO
    ["Syllogism Baroco",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are not p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["¬p"]], out: ["¬p"]},
    // 4. Hints
    [
        [["new_all_some", "p", "m"], "prem", "All p are m"],
        [["new_some_some", "s", "¬m"], "prem", "Some s are not m"],
    ]],
	
	// EXAMPLE DARAPTI
    ["Syllogism Darapti",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["p"]], out: ["p"]},
     // 4. Hints
    [
        [["new_all_some", "m", "s"], "prem", "All m are s"],
        [["new_all_some", "m", "p"], "prem", "All m are p"],
    ]],
	// EXAMPLE DISAMIS
    ["Syllogism Disamis",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["p"]], out: ["p"]},
     // 4. Hints
    [
        [["new_some_some", "m", "p"], "prem", "Some m are p"],
        [["new_all_some", "m", "s"], "prem", "All m are s"],
    ]],
	// EXAMPLE DATISI
    ["Syllogism Datisi",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["p"]], out: ["p"]},
     // 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "Some m are p"],
        [["new_some_some", "m", "s"], "prem", "Some m are s"],
    ]],
	        
	// EXAMPLE FELAPTON
    ["Syllogism Felapton",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are not p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["¬p"]], out: ["¬p"]},
     // 4. Hints
    [
        [["new_all_some", "m", "¬p"], "prem", "No m are p"],
        [["new_all_some", "m", "s"], "prem", "All m are s"],
    ]],		
	
	// EXAMPLE FERISON
    ["Syllogism Ferison",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are not p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["¬p"]], out: ["¬p"]},
     // 4. Hints
    [
        [["new_all_some", "m", "¬p"], "prem", "No m are p"],
        [["new_some_some", "m", "s"], "prem", "Some m are s"],
    ]],	
	
	// EXAMPLE BOCARDO
    ["Syllogism Bocardo",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are not p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["¬p"]], out: ["¬p"]},
     // 4. Hints
    [
        [["new_some_some", "m", "¬p"], "prem", "Some m are not p"],
        [["new_all_some", "m", "s"], "prem", "All m are s"],
    ]],	
	
	// EXAMPLE BAMALIP
    ["Syllogism Bamalip",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are (all) p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["p"]], out: []},
    // 4. Hints
    [
		[["new_all_some", "p", "m"], "prem", "All p are m"],
        [["new_all_some", "m", "s"], "prem", "All m are s"]
        
    ]],
	
	// EXAMPLE CAMENES
    ["Syllogism Camenes",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «No s are p»",
    // 3. Goal diagram
    {sub: "s", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
		[["new_all_some", "s", "m"], "prem", "All s are m"],
        [["new_all_some", "m", "¬p"], "prem", "No m are p"]
        
    ]],
	// EXAMPLE FRESISON
    ["Syllogism Fresison",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are not p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["¬p"]], out: ["¬p"]},
    // 4. Hints
    [
		[["new_all_some", "p", "¬m"], "prem", "No p are m"],
        [["new_some_some", "m", "s"], "prem", "Some m are p"]
        
    ]],
	
	// EXAMPLE FESAPO
    ["Syllogism Fesapo",
    // 1. Type
    "syllogism",
    // 2. Instructions
    "Complete the syllogism to get «Some s are not p»",
    // 3. Goal diagram
    {sub: "s", all: [], in: [[],["¬p"]], out: ["¬p"]},
    // 4. Hints
    [
		[["new_all_some", "p", "¬m"], "prem", "No p are m"],
        [["new_all_some", "m", "s"], "prem", "all m are p"]
        
    ]],
	
	// EXAMPLE PROPOSITIONAL LOGIC
    ["propositional logic 1",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "If I don't go to Paris, I go to Rome. If I go to Rome I visit the Vatican. Therefore, if I don't go to Paris, I visit the Vatican «¬px v».",
    // 3. Goal diagram
    {sub: "¬p", all: ["v"], in: [[]], out: ["v"]},
    // 4. Hints
    [
		[["new_all_some", "¬p", "r"], "prem", "¬px r"],
        [["new_all_some", "r", "v"], "prem", "rx v"]
        
    ]],
	
	// EXAMPLE PROPOSITIONAL LOGIC
    ["propositional logic 2",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "If it is divisible by four then it is a multiple of two. If it ends in three, it is not a multiple of two. So if it ends in three, it's not divisible by four «tx ¬f».",
    // 3. Goal diagram
    {sub: "t", all: ["¬f"], in: [[]], out: ["¬f"]},
    // 4. Hints
    [
		[["new_all_some", "f", "m"], "prem", "fx m"],
        [["new_all_some", "t", "¬m"], "prem", "tx ¬m"]
        
    ]],
	
	// EXAMPLE PROPOSITIONAL LOGIC
    ["propositional logic 3",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "No s is q. All p is q. All ¬p is r. Therefore: All ¬r is ¬s, or «¬rx¬s».",
    // 3. Goal diagram
    {sub: "¬r", all: ["¬s"], in: [[]], out: ["¬s"]},
    // 4. Hints
    [
		[["new_all_some", "s", "¬q"], "prem", "sx¬q"],
        [["new_all_some", "p", "q"], "prem", "pxq"],
		[["new_all_some", "¬p","r"], "prem", "¬pxr"]
        
    ]],
	// EXAMPLE PROPOSITIONAL LOGIC
    
	["propositional logic 4",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "If it's red, it's poisonous. It is soft or red. If it's bitter, it's not soft. So if it's bitter, it's poisonous «bx p».",
    // 3. Goal diagram
    {sub: "b", all: ["p"], in: [[]], out: ["p"]},
    // 4. Hints
    [
		[["new_all_some", "r", "p"], "prem", "rx p"],
        [["new_all_some", "¬s", "r"], "prem", "¬sx r"],
		[["new_all_some", "b", "¬s"], "prem", "bx ¬s"]
        
    ]],
	
	
	// EXAMPLE PROPOSITIONAL LOGIC. BICONDITIONAL
    ["propositional logic 5",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "Complete to get the conclusion «a ↔ b» = «ax bx».",
    // 3. Goal diagram
    {sub: "b", all: ["a"], in: [[]], out: []},
    // 4. Hints
    [
		[["new_all_some", "a", "b"], "prem", "ax b"],
        [["new_all_some", "b", "a"], "prem", "bx a"]
        
    ]],
		
	// EXAMPLE PROPOSITIONAL LOGIC. 
    ["propositional logic 6",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "Complete to get the conclusion «¬p → q».",
    // 3. Goal diagram
    {sub: "¬p", all: ["q"], in: [[]], out: ["q"]},
    // 4. Hints
    [
		[["new_all_some", "¬t", "r"], "prem", "t ∨ r"],
        [["new_all_some", "t", "q"], "prem", "t → q"],
		[["new_all_some", "r", "p"], "prem", "r → p"]
	]],
	
	
	// EXAMPLE PROPOSITIONAL LOGIC. 
    ["propositional logic 7",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "Complete to get the conclusion «q → (s ∧ ¬r)».",
    // 3. Goal diagram
    {sub: "q", all: ["s","¬r"], in: [[]], out: ["s","¬r"]},
    // 4. Hints
    [
		[["new_all_some", "q", "s"], "prem", "q → s"],
        [["new_all_some", "q", "¬r"], "prem", "q → ¬r"]
	]],
	
	// EXAMPLE PROPOSITIONAL LOGIC. 
    ["propositional logic 8",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "Only among Europeans there are French. Only among the French there are Parisians.So if you're not European you're not Parisian",
    // 3. Goal diagram
    {sub: "¬e", all: ["¬p"], in: [[]], out: ["¬p"]},
    // 4. Hints
    [
		[["new_some_all", "e", "f"], "prem", "e fx"],
        [["new_some_all", "f", "p"], "prem", "f px"]
	]],
	
	// EXAMPLE PROPOSITIONAL LOGIC. 
    ["propositional logic 9",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "Only among vertebrates there are primates. All humans are primates. All primates are vertebrates. So only among vertebrates there are humans",
    // 3. Goal diagram
    {sub: "v", all: [], in: [[], ["h"]], out: []},
    // 4. Hints
    [
		[["new_some_all", "v", "p"], "prem", "v px"],
        [["new_all_some", "h", "p"], "prem", "hx p"],
		[["new_all_some", "p", "v"], "prem", "px v"]
	]],
	
	// EXAMPLE PROPOSITIONAL LOGIC. 
    ["propositional logic 10",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "Only among mammals are there primates. No bird is a mammal. All humans are primates. So only among those who are not birds are there humans.",
    // 3. Goal diagram
    {sub: "¬b", all: [], in: [[], ["h"]], out: []},
    // 4. Hints
    [
		[["new_some_all", "m", "p"], "prem", "m px"],
        [["new_all_some", "b", "¬m"], "prem", "bx ¬m"],
		[["new_all_some", "h", "p"], "prem", "hx p"]
	]],
	
	// EXAMPLE PROPOSITIONAL LOGIC. 
    ["propositional logic 11",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    "No human being has feathers. Only if you have feathers are you oviparous. Pigeons are oviparous. Therefore, only among beings that are not pigeons are there humans.",
    // 3. Goal diagram
    {sub: "¬p", all: [], in: [[], ["h"]], out: []},
    // 4. Hints
    [
		[["new_all_some", "h", "¬f"], "prem", "hx ¬f"],
        [["new_some_all", "f", "o"], "prem", "f ox"],
		[["new_all_some", "p", "o"], "prem", "px o"]
	]],
	
	// EXAMPLE PROPOSITIONAL LOGIC. 
    ["propositional logic 12",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    " -1 r ∨ s, -2 ¬p → ¬r, -3 m → s, -4 ¬p ∨ t. Therefore: t → s. ",
    // 3. Goal diagram
    {sub: "t", all: ["s"], in: [[]], out: ["s"]},
    // 4. Hints
    [
		[["new_all_some", "¬r", "s"], "prem", "r ∨ s"],
        [["new_all_some", "¬p", "¬r"], "prem", "¬p → ¬r"],
		[["new_all_some", "m", "s"], "prem", "m → s"],
		[["new_all_some", "p", "¬t"], "prem", "¬p ∨ t"]
	]],
	
	// EXAMPLE PROPOSITIONAL LOGIC. 
    ["propositional logic 13",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    " -1 p → q, -2 ¬q → ¬t. Therefore: (t ∨ p) → q. Note: Use q as the subject of the diagram of the conclusion.",
    // 3. Goal diagram
    {sub: "q", all: [], in: [[], ["p"], ["t"]], out: []},
    // 4. Hints
    [
		[["new_all_some", "p", "q"], "prem", "p → q"],
        [["new_all_some", "¬q", "¬t"], "prem", "¬q → ¬t"]		
	]],
	
	// EXAMPLE PROPOSITIONAL LOGIC "HARD"
    ["propositional logic 14",
    // 1. Type
    "propositional calculus",
    // 2. Instructions
    " Complete to get the conclusion «¬r → s» or «¬rx s» from the premises.",
    // 3. Goal diagram
    {sub: "¬r", all: ["s"], in: [[]], out: ["s"]},
    // 4. Hints
    [
		[["new_all_some", "¬p", "q"], "prem", "p ∨ q"],
        [["new_all_some", "¬s", "¬p"], "prem", "s ∨ ¬p"],
		[["new_all_some", "¬r", "¬q"], "prem", "r ∨ ¬q"]
        
    ]],
	
	
			
	
]; // final de la lista completa
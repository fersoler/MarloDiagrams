diagExercises = [
    // FIRST EXAMPLE
    // 0. Name of the example (free)
    ["Creation 1",
    // 1. Type (important "creation" type in this kind)
    "creation", 
    // 2. Instructions (message for the user)
    "Diagram D1 represents «All m are p». It is a «Toto-Parte» (T-P) diagram. Create a diagram representing «All a are b».",
    // 3. Goal diagram (the exercise ends with the user gets this diagram)
    {sub: "a", all: ["b"], in: [[]], out: ["b"]},
    // 4. Hints
    [
        [["new_all_some", "m", "p"], "prem", "All m are p"]
    ]],  // first example finishes
    // SECOND EXAMPLE
    ["Creation 2",
    // 1. Type
    "creation",
    // 2. Instructions
    "Diagram D1 represents «Some m are p». It is a «Parte-Parte» (P-P) diagram. Create a diagram representing «Some a are b».",
    // 3. Goal diagram
    {sub: "a", all: [], in: [[],["b"]], out: ["b"]},
    // 4. Hints
    [
        [["new_some_some", "m", "p"], "prem", "Some m are p"]        
    ]],
    // THIRD EXAMPLE
    ["Conversion 1",
    // 1. Type
    "conversion",
    // 2. Instructions
    "Diagram D1 represents «Some m are p». Convert it so that the subject is p.",
    // 3. Goal diagram
    {sub: "p", all: [], in: [[],["m"]], out: ["m"]},
    // 4. Hints
    [
        [["new_some_some", "m", "p"], "prem", "Some m are p"]        
    ]],
    // EXAMPLE 4
    ["Inference 1",
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
    // EXAMPLE transform
    ["Transform 1",
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
    ["Transform 2",
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
]; // final de la lista completa
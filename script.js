let domExample = document.createElement("div");
let domExampleH2 = document.createElement("h2");
let domExamplePara = document.createElement("p");

domExampleH2.textContent = "DOM";
domExamplePara.textContent = "DOM eller Document Object Model går att beskriva som en hierarki utav elementen i en HTML fil. De högst upp i detta hierarki trädet är ofta taggarna <html> och <body> där diverse andra element läggs och sedna i många fall ärver och påverkas utav de attribut som ges till <html> och <body>. Inspekteras koden ser man att denna kontainer inte finns i HTML texten då den är skapad utav JavaScript som manipulerar bland annad DOM."
domExample.classList.add("container");
document.body.appendChild(domExample);
domExample.appendChild(domExampleH2);
domExample.appendChild(domExamplePara);
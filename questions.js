const questions = [
    {
      question: "What is the type of Pokémon Pikachu?",
      options: ["Fire", "Electric", "Water", "Grass"],
      answer: "Electric",

    },
    {
      question: "How many evolutions does Pokémon Eevee have?",
      options: ["3", "5", "7", "8"],
      answer: "8"
    },
    {
      question: "What is the Pokémon number 25 in the National Pokédex?",
      options: ["Pikachu", "Bulbasaur", "Charizard", "Magikarp"],
      answer: "Pikachu"
    },
    {
      question: "What is 'Pokémon' a contraction of?",
      options: ["Pocket Monsters", "Power Monsters", "Poke Monsters", "Potion Monsters"],
      answer: "Pocket Monsters"
    },
    {
      question: "What type of Pokémon is Charizard?",
      options: ["Fire", "Water", "Electric", "Grass"],
      answer: "Fire"
    },
    {
      question: "Which Pokémon evolves into Charizard?",
      options: ["Charmeleon", "Squirtle", "Bulbasaur", "Pikachu"],
      answer: "Charmeleon"
    },
    {
      question: "Which was the first Pokémon caught by Ash Ketchum?",
      options: ["Pikachu", "Caterpie", "Charmander", "Squirtle"],
      answer: "Caterpie"
    },
    {
      question: "How many types of Pokémon are there?",
      options: ["16", "18", "20", "22"],
      answer: "18"
    },
    {
      question: "What is the name of the player's rival in Pokémon Red and Blue?",
      options: ["Gary", "Blue", "Red", "Oak"],
      answer: "Blue"
    },
    {
      question: "Which type of stone is needed to evolve Eevee into Jolteon?",
      options: ["Thunder Stone", "Fire Stone", "Water Stone", "Leaf Stone"],
      answer: "Thunder Stone"
    },
    {
      question: "Which legendary Pokémon is known as 'the guardian of the seas'?",
      options: ["Lugia", "Kyogre", "Groudon", "Rayquaza"],
      answer: "Kyogre"
    },
    {
      question: "What is the name of the Pokémon Professor in Pokémon Sword and Shield?",
      options: ["Professor Oak", "Professor Birch", "Professor Elm", "Professor Magnolia"],
      answer: "Professor Magnolia"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const feedbackElement = document.getElementById('feedback');
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
      feedbackElement.textContent = "Correct answer!";
      score++;
    } else {
      feedbackElement.textContent = "Wrong answer. The correct answer was: " + question.answer;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = '';
    feedbackElement.textContent = "You scored " + score + " out of " + questions.length + " questions.";
  }
  
  showQuestion();


  
// Function to generate a random number between 1 and six
const randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// Function to create the image path for the dice images
const generateImgPath = (imgNum) => {
    return `images/dice${imgNum}.png`
};

// Show information box
$("#info").click(function() {
    $(".info-box").css("display", "block");
    $("#info").css("background-color", "#e0d8de");
});

// Close information box
$("#close").click(function() {
    $(".info-box").css("display", "none");
    $("#info").css("background-color", "#4b3b47");
});

// Play button
$("#play").click(function() {
    // Assign random numbers to two variables
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();

    // Generate the two images paths
    const diceImg1 = generateImgPath(randomNumber1);
    const diceImg2 = generateImgPath(randomNumber2);

    // Select the images html element
    const selectImg1 = document.querySelector(".img1");
    const selectImg2 = document.querySelector(".img2");

    // Set the images src attribute to display the new random image
    selectImg1.setAttribute("src", diceImg1);
    selectImg2.setAttribute("src", diceImg2);

    // Check which player has won and display the answer to the user
    if (randomNumber1 > randomNumber2) {
        $("h1").text("Player 1 wins!");
    }
    else if (randomNumber1 < randomNumber2) {
        $("h1").text("Player 2 wins!");
    }
    else {
        $("h1").text("Draw!");
    };
});

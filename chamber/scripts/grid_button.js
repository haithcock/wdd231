gridButton.addEventListener('click', () => {
    console.log("gridButton clicked");
    gridChoice = "grid";
    cards.setAttribute('class', gridChoice);
});

listButton.addEventListener('click', () => {
    console.log("listButton clicked");
    gridChoice = "list";
    cards.setAttribute('class', gridChoice);
});
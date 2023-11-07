document.addEventListener("DOMContentLoaded", function() {
    var zindex = 10;
  
    var cards = document.querySelectorAll("div.card");
    var cardsContainer = document.querySelector("div.cards");
  
    cards.forEach(function(card) {
      card.addEventListener("click", function(e) {
        e.preventDefault();
  
        var isShowing = false;
  
        if (card.classList.contains("show")) {
          isShowing = true;
        }
  
        if (cardsContainer.classList.contains("showing")) {
          // A card is already in view
          var showingCard = document.querySelector("div.card.show");
          showingCard.classList.remove("show");
  
          if (isShowing) {
            // This card was showing - reset the grid
            cardsContainer.classList.remove("showing");
          } else {
            // This card isn't showing - bring it to the front
            card.style.zIndex = zindex;
            card.classList.add("show");
          }
  
          zindex++;
        } else {
          // No cards in view
          cardsContainer.classList.add("showing");
          card.style.zIndex = zindex;
          card.classList.add("show");
          zindex++;
        }
      });
    });
  });
  
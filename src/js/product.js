// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const API_URL = "https://corebiz-test.herokuapp.com/api/v1/products";

// Para isso, usaremos o "fetch".
// Corrija a linha abaixo, para que a requisição funcione.
fetch(API_URL)
  .then(response => response.text())
  .then(result => {

    // Aqui, estamos pegando o resultado da requisição e parseando em JSON, 
    // para que fique mais fácil e amigável, tratarmos esses dados.
    const data = JSON.parse(result);

    // Percorrendo array
    data.map(element => {
      // Desestruture objeto, trazendo os seguintes dados:
      // Foto, nome, rating e preço.
      const { imageUrl,
              productName,
              stars,
              price } = element;

      // Pegue a linha do container onde serão exibidos os cards.
      row = document.getElementById("product");

      div = document.createElement("div");
      div.className = "col-lg-3 col-md-12";

      card = document.createElement("div");
      card.className = "card mb-4 box-shadow";

      div.appendChild(card);

      image = document.createElement("img");
      image.className = "card-img-top";
      image.setAttribute("src", imageUrl);

      card.appendChild(image);

      cardBody = document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);

      cardText = document.createElement("div");
      cardText.className = "card-text";
      cardBody.appendChild(cardText);

      // Precisamos agora, listar o tipo, o nome e o preço.
      propertyName = document.createElement("p");
      propertyName.className = "property-name"
      propertyName.innerHTML = productName;
      cardText.appendChild(propertyName);
      
      propertyType = document.createElement("p");
      propertyType.className = "property-type";
      
      if(stars > 0){
        var i;
        for(i = 0; i <= stars; i++){
          starsProduct = document.createElement("span");
          starsProduct.className = "fas fa-star"
          propertyType.appendChild(starsProduct);
        };
      }
      cardText.appendChild(propertyType);

      propertyPrice = document.createElement("p");
      propertyPrice.className = "property-price"
      propertyPrice.innerHTML = `por R$ ${price}`;
      cardText.appendChild(propertyPrice);

      btn = document.createElement("button");
      btn.className = "btn btn-primary"
      btn.innerHTML = "COMPRAR";
      cardText.appendChild(btn);

      //
      // row
      //   div
      //     card
      //       image
      //       cardBody
      //         cardText
      //           propertyName
      //           propertyType
      //           propertyPrice
      //           button

      row.appendChild(div);
      // [ ... ]
    });
  });

// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const API_URL = "https://corebiz-test.herokuapp.com/api/v1/products";

// Para isso, usaremos o "fetch", conforme você deve ter visto nas aulas online.
// Corrija a linha abaixo, para que a requisição funcione.
fetch(API_URL)
  .then(response => response.text())
  .then(result => {

    // Aqui, estamos pegando o resultado da requisição e parseando em JSON, 
    // para que fique mais fácil e amigável, tratarmos esses dados.
    const data = JSON.parse(result);

    // Como é mesmo que percorremos um array? 'hm
    data.map(element => {
      // Desestruture seu objeto, trazendo os seguintes dados:
      // Foto, tipo, nome e preço da propriedade.

      const { imageUrl,
              productName,
              stars,
              price } = element;

      // Pegue a linha do container onde serão exibidos os cards.
      row = document.getElementById("product");

      // Agora, crie um elemento "div" com a class "col-md-3" do Bootstrap.
      div = document.createElement("div");
      div.className = "col-md-3";

      // Boa! Agora, precisamos criar a "div" do card a ser exibido. Ao criar, atribua a class "card mb-4 box-shadow".
      card = document.createElement("div");
      card.className = "card mb-4 box-shadow";

      div.appendChild(card);
      // Humm... Agora que já temos o card, que tal começarmos a popular as informações?
      // Crie um elemento "img" e, atribua a class como "card-img-top";
      // Não se esqueça que sua imagem precisa ser referenciada!
      image = document.createElement("img");
      image.className = "card-img-top";
      image.setAttribute("src", imageUrl);

      card.appendChild(image);

      // Legal! Agora, já podemos começar a construir o "corpo" do card. Bora lá!
      // Obs.: atribua a class "card-body" do Bootstrap, para que fique bonitão. :)
      cardBody = document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);

      // Beleza, corpo criado. Seguindo nossa estrutura, o próximo elemento seria os textos, para exibir
      // o tipo da propriedade, nome e preço. Mas, antes, vamos criar um elemento "div" para manter isso
      // tudo organizado. Você pode atribuir a class "card-text" do Bootstrap!
      cardText = document.createElement("div");
      cardText.className = "card-text";
      cardBody.appendChild(cardText);

      
      // Uffa! Finalmente os elementos da proriedade!
      // Precisamos agora, listar o tipo, o nome e o preço.
      propertyName = document.createElement("p");
      propertyName.className = "property-name"
      propertyName.innerHTML = productName;
      cardText.appendChild(propertyName);
      
      propertyType = document.createElement("p");
      propertyType.className = "property-type";
      propertyType.innerHTML = stars;
      cardText.appendChild(propertyType);
      
      propertyPrice = document.createElement("p");
      propertyPrice.className = "property-price"
      propertyPrice.innerHTML = `por R$ ${price}`;
      cardText.appendChild(propertyPrice);

      btn = document.createElement("button");
      btn.className = "btn btn-primary"
      btn.innerHTML = "COMPRAR";
      cardText.appendChild(btn);

      // AOBA! Temos agora, todos os elementos necessários para percorrer a resposta da API e,
      // anexar um ao outro para exibição ao usuário. Para "anexar" os elementos, nós usaremos
      // o método "appendChild". Se liga na estrutura do componente, para que tudo seja exibido
      // corretamente:
      //
      // row
      //   div
      //     card
      //       image
      //       cardBody
      //         cardText
      //           propertyType
      //           propertyName
      //           propertyPrice

      row.appendChild(div);
      // [ ... ]
    });
  });
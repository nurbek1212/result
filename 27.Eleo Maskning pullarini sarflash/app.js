
let product_json = {
    1:{
        'img':'01.big-mac.jpg',
        'title':'Big Mac',
        'price':2
    },
    2:{
        'img':'02.flip-flops.jpg',
        'title':'Flip Flops',
        'price':3
    },
    3:{
        'img':'03.coca-cola-pack.jpg',
        'title':'Coca-Cola Pack',
        'price':5
    },
    4:{
        'img':'04.movie-ticket.jpg',
        'title':'Movie Ticket',
        'price':12
    },
    5:{
        'img':'05.book.jpg',
        'title':'Book',
        'price':15
    },
    6:{
        'img':'06.lobster-dinner.jpg',
        'title':'Lobster Dinner',
        'price':45
    },
    7:{
        'img':'07.video-game.jpg',
        'title':'Video Game',
        'price':60
    },
    8:{
        'img':'08.amazon-echo.jpg',
        'title':'Amazon Echo',
        'price':99
    },
    9:{
        'img':'09.year-of-netflix.jpg',
        'title':'Year Of Netflix',
        'price':100
    },
    10:{
        'img':'10.air-jordans.jpg',
        'title':'Air Jordans',
        'price':125
    },
    11:{
        'img':'11.airpods.jpg',
        'title':'Airpods',
        'price':199
    },
    12:{
        'img':'12.gaming-console.jpg',
        'title':'Gaming Console',
        'price':299
    },
    13:{
        'img':'13.drone.jpg',
        'title':'Drone',
        'price':350
    },
    14:{
        'img':'14.smartphone.jpg',
        'title':'Smartphone',
        'price':699
    },
    15:{
        'img':'15.bike.jpg',
        'title':'Bike',
        'price':800
    },
    16:{
        'img':'16.kitten.jpg',
        'title':'Kitten',
        'price':1500
    },
    17:{
        'img':'17.puppy.jpg',
        'title':'Puppy',
        'price':1500
    },
    18:{
        'img':'18.auto-rickshaw.jpg',
        'title':'Auto Rickshaw',
        'price':2300
    },
    19:{
        'img':'19.horse.jpg',
        'title':'Horse',
        'price':2500
    },
    20:{
        'img':'20.acre-of-farmland.jpg',
        'title':'Acre of Farmland',
        'price':3000
    },
    21:{
        'img':'21.designer-handbag.jpg',
        'title':'Designer Handbag',
        'price':5500
    },
    22:{
        'img':'22.hot-tub.jpg',
        'title':'Hot Tub',
        'price':6000
    },
    23:{
        'img':'23.luxury-wine.jpg',
        'title':'Luxury Wine',
        'price':7000
    },
    24:{
        'img':'24.diamond-ring.jpg',
        'title':'Diamond Ring',
        'price':10000
    },
    25:{
        'img':'25.jet-ski.jpg',
        'title':'Jet Ski',
        'price':12000
    },
    26:{
        'img':'26.rolex.jpg',
        'title':'Rolex',
        'price':15000
    },
    27:{
        'img':'27.ford-f-150.jpg',
        'title':'Ford F-150',
        'price':30000
    },
    28:{
        'img':'28.tesla.jpg',
        'title':'Tesla',
        'price':75000
    },
    29:{
        'img':'29.monster-truck.jpg',
        'title':'Monster Truck',
        'price':150000
    },
    30:{
        'img':'30.ferrari.jpg',
        'title':'Ferrari',
        'price':250000
    },
    31:{
        'img':'31.single-family-home.jpg',
        'title':'Single Family Home',
        'price':300000
    },
    32:{
        'img':'32.gold-bar.jpg',
        'title':'Gold Bar',
        'price':700000
    },
    33:{
        'img':'33.mcdonalds-franchise.jpg',
        'title':'McDonalds Franchise',
        'price':1500000
    },
    34:{
        'img':'34.superbowl-ad.jpg',
        'title':'Superbowl',
        'price':5250000
    },
    35:{
        'img':'35.yacht.jpg',
        'title':'Yacht',
        'price':7500000
    },
    36:{
        'img':'36.m1-abrams.jpg',
        'title':'M1 Abrams',
        'price':8000000
    },
    37:{
        'img':'37.formula-1-car.jpg',
        'title':'Formula 1',
        'price':15000000
    },
    38:{
        'img':'38.apache-helicopter.jpg',
        'title':'Apache Helicopter',
        'price':31000000
    },
    39:{
        'img':'39.mansion.jpg',
        'title':'Mansion',
        'price':45000000
    },
    40:{
        'img':'40.make-a-movie.jpg',
        'title':'Make a Movie',

        'price':100000000
    },
    41:{
        'img':'41.boeing-747.jpg',
        'title':'Boeing 747',
        'price':148000000
    },
    42:{
        'img':'42.mona-lisa.jpg',
        'title':'Mona Lisa',
        'price':780000000
    },
    43:{
        'img':'43.skyscraper.jpg',
        'title':'Skyscraper',
        'price':850000000
    },
    44:{
        'img':'44.cruise-ship.jpg',
        'title':'Cruise Ship',
        'price':930000000
    },
    45:{
        'img':'45.nba-team.jpg',
        'title':'NBA Team',
        'price':2120000000
    },
}




let product = document.querySelector('.praduct');
let many = document.querySelector('.many');
let elonMoney = 350000000000;

for (let i = 1; i <= 45; i++) {
  let div = document.createElement('div');
  div.classList.add('pradact-item');

  div.innerHTML = `
    <img src="photos/${product_json[i]['img']}" class="pradact-imge">
    <h2 class="pradact-name">${product_json[i]['title']}</h2>
    <p class="pradact-price">$${product_json[i]['price']}</p>
    <div class="pradact-control">
      <button class="sell-button">Sell</button>
      <input type="text" class="count">
      <button class="buy-button">Buy</button>
    </div>
  `;

  let buyButton = div.querySelector('.buy-button');
  let sellButton = div.querySelector('.sell-button');
  let countInput = div.querySelector('.count');

  buyButton.addEventListener('click', () => {
    let cou = parseInt(countInput.value) || 0;
    let price = product_json[i]['price'];
    let total = cou * price;

    if (total > elonMoney) {

      sellButton.style.bacgroundColor = "red"

    }

    elonMoney -= total;
    many.textContent = `$${elonMoney.toLocaleString()}`;
    
    
  });

  sellButton.addEventListener('click', () => {
    let cou = parseInt(countInput.value) || 0;
    let price = product_json[i]['price'];
    let total = cou * price;
    elonMoney += total;
    many.textContent = `$${elonMoney.toLocaleString()}`;
  });

  product.appendChild(div);
}

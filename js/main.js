// MODAL
var body = document.querySelector("body");
var openCart = document.getElementById("openCart");
var closeCart = document.getElementById("closeCart");
var counter = document.getElementById("counter");
var count = 0;


openCart.addEventListener("click", () => {
  body.classList.add("active");
});
closeCart.addEventListener("click", () => {
  body.classList.remove("active");
});

// TIME
var time = document.getElementById("time");
var currentDate = new Date();
var month;
switch (currentDate.getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
}
var day;
switch (currentDate.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
time.innerHTML = `${currentDate.getHours()}:${currentDate.getMinutes()} ${day}<br/>${month}-${currentDate.getDate()}-${currentDate.getFullYear()}`;

// CURRENCY
var currency = document.getElementById("currency");
var currencySelected = `$`;
currency.addEventListener("change", () => {
  if (currency.value == "$CAD") {
    currencySelected = `$`;
  } else if (currency.value == "$USD") {
    currencySelected = `$`;
  } else if (currency.value == "€EURO") {
    currencySelected = `€`;
  }
  displayItems();
  displayCart();
});

// GLOBAL VARIABLES
var chosenItems = [];
chosenItems = items;

var cart = [];

// CONSTRUCTORS
// product
function Item(
  id,
  name,
  image,
  price,
  quantity,
  type,
  maxPerCustomer,
  shippingPrice,
  reviews,
  description,
  qtyPurchased
) {
  (this.id = id),
    (this.name = name),
    (this.image = image),
    (this.price = price),
    (this.quantity = quantity),
    (this.type = type),
    (this.maxPerCustomer = maxPerCustomer),
    (this.shippingPrice = shippingPrice),
    (this.reviews = reviews),
    (this.description = description),
    (this.qtyPurchased = qtyPurchased);
  // price converted according to currency
  this.priceConverted = function () {
    if (currency.value == "$CAD") {
      return price;
    } else if (currency.value == "$USD") {
      return (price * 0.73).toFixed(2);
    } else if (currency.value == "€EURO") {
      return (price * 0.67).toFixed(2);
    }
  };
  // shipping converted according to currency
  this.shippingConverted = function () {
    if (currency.value == "$CAD") {
      return shippingPrice;
    } else if (currency.value == "$USD") {
      return (shippingPrice * 0.73).toFixed(2);
    } else if (currency.value == "€EURO") {
      return (shippingPrice * 0.67).toFixed(2);
    }
  };
  // average rating
  this.avrgRating = function () {
    var total = 0;
    for (var av = 0; av < this.reviews.length; av++) {
      total += Number(this.reviews[av].evaluation);
      return total / Number(reviews.length);
    }
  };
}
// review
function Review(id, user, comment, evaluation) {
  (this.id = id),
    (this.user = user),
    (this.comment = comment),
    (this.evaluation = evaluation);
}
// cart items
function CartItem(id, name, price, shipping, qty, max) {
  (this.id = id),
    (this.name = name),
    (this.price = price),
    (this.shipping = shipping),
    (this.qty = qty),
    (this.max = max),
  // price converted according to currency
  this.priceConv = function () {
      if (currency.value == "$CAD") {
        return price;
      } else if (currency.value == "$USD") {
        return (price * 0.73).toFixed(2);
      } else if (currency.value == "€EURO") {
        return (price * 0.67).toFixed(2);
      }
    };
  // shipping converted according to currency
  this.shippingConv = function () {
    if (currency.value == "$CAD") {
      return shipping;
    } else if (currency.value == "$USD") {
      return (shipping * 0.73).toFixed(2);
    } else if (currency.value == "€EURO") {
      return (shipping * 0.67).toFixed(2);
    }
  };
}

// REVIEWS
var reviews = [];
reviews.push(
  new Review(
    "L1",
    "Anna",
    "This yellow armchair is not just a piece of furniture; it's a mood enhancer. It brings a sense of joy and cheerfulness to the room, elevating the ambiance with its sunny disposition. Whether placed in a cozy reading nook or as a vibrant accent in a more neutral setting, the yellow armchair is a testament to the transformative power of well-designed furniture.",
    5
  )
);
reviews.push(
  new Review(
    "L2",
    "Samantha",
    "The fabric is like a soft cloud you can't resist diving into. It's not just a sofa; it's a cozy nest that's got your back after a long day. The color, this light blue magic, is the kind of timeless cool that goes with anything. It's like the James Dean of sofas – classic but effortlessly stylish.",
    5
  )
);
reviews.push(
  new Review(
    "L3",
    "Andrew",
    "Whoever thought that muddy green was a good idea needs a reality check. It's like the sofa is actively trying to suck the life out of the room. I've seen more exciting shades in a hospital waiting area. Plus, good luck trying to match it with anything remotely stylish – this sofa is a solo act, and not in a good way.",
    1
  )
);
reviews.push(
  new Review(
    "L4",
    "Alina",
    "First off, the size is just right for a cozy setup. It doesn't hog the entire space, but it's not dwarfed by the room either. It's like the Goldilocks of sofas – not too big, not too small, just medium. Perfect for a lazy Netflix binge or a chill game night.",
    4
  )
);
reviews.push(
  new Review(
    "L5",
    "Adrian",
    "First things first, the design is as basic as it gets. It's like the IKEA of chairs without the cool Swedish factor. No funky shapes, no eye-catching patterns – just your run-of-the-mill chair that blends into the background like a wallflower at a party.",
    2
  )
);
reviews.push(
  new Review(
    "K1",
    "Haille",
    "Let's talk about the uncomfortable table – the furniture equivalent of an awkward conversation. First off, the design seems to have skipped the comfort memo altogether. It's like they took the concept of ergonomics and decided to play a game of hide-and-seek.",
    1
  )
);
reviews.push(
  new Review(
    "K3",
    "Joel",
    "The surface is a delight – spacious enough to accommodate your needs without overwhelming the room. Its smooth finish not only makes it easy to clean but also provides a sleek backdrop for whatever purpose you have in mind, be it a family dinner or a productive work session.",
    5
  )
);
reviews.push(
  new Review(
    "K4",
    "Alisa",
    "Comfort is a bit of a non-issue because, let's face it, you're not really sitting on the table. But if we're talking about height, it seems to hit that standard mark where you're not reaching for the stars or stooping down like you're inspecting the floor. It's a table – you can comfortably eat without feeling like you're doing acrobatics.",
    4
  )
);
reviews.push(
  new Review(
    "K5",
    "Nathalie",
    "These plates can handle the heat, literally. Chuck them in the dishwasher, they come out unscathed. They're not those delicate divas that chip at the slightest provocation; they're in it for the long haul.",
    4
  )
);
reviews.push(
  new Review(
    "K6",
    "Alex",
    "Aesthetically, they're low-key, and that's a good thing. They let your food be the star of the show. Whether you're throwing a dinner party or just munching on some pizza, these plates don't steal the spotlight – they're the backstage crew, making sure everything runs smoothly.",
    5
  )
);
reviews.push(
  new Review(
    "D1",
    "Artem",
    "Size-wise, they're the Goldilocks of containers. Not too big to take up all your cupboard space, and not too small that you're playing a game of culinary Tetris every time you need something. They're just right, creating order without turning your kitchen into a storage unit.",
    5
  )
);
reviews.push(
  new Review(
    "D2",
    "Nelya",
    "Installation is a breeze. No engineering degree required. The shelf comes with all the necessary hardware, and it's like a puzzle piece that fits seamlessly into your wall decor. You'll have it up and displaying your treasures in no time.",
    4
  )
);
reviews.push(
  new Review(
    "D3",
    "Sanira",
    "Durability is a strong suit. It's not a fragile piece that crumbles under the responsibility of holding a living thing. Whether you're prone to overwatering or forget to water altogether, this plant pot is like a resilient guardian, supporting your plant through thick and thin.",
    4
  )
);
reviews.push(
  new Review(
    "D4",
    "Ali",
    "First things first, the design is like, 'Whoa!' It's not just a plain ol' jar; it's got some curves, maybe a bit of flair. It's like the cool friend in the flower squad, stealing a bit of the limelight for itself.",
    5
  )
);
reviews.push(
  new Review(
    "B1",
    "Elena",
    "The design is a head-scratcher. It's not just a bed; it's a puzzle of discomfort. The frame is like a maze under there – stubbing toes and shins become a nightly adventure. It's like the designer went for a 'how many ways can we make this inconvenient' vibe.",
    3
  )
);
reviews.push(
  new Review(
    "B2",
    "Jeff",
    "Comfort is where this bed truly shines. The mattress is a cloud of bliss, cradling you in the perfect balance of softness and support. It's like sleeping on a hug. No more tossing and turning – this bed invites you into a world of uninterrupted, restful sleep.",
    5
  )
);
reviews.push(
  new Review(
    "B3",
    "Michael",
    "This bookshelf isn't just a piece of furniture; it's a showcase for your imagination. With its stunning design, perfect size, durability, and functional features, it transforms your space into a haven for book lovers. It's not just a bookshelf; it's a celebration of the written word and a stylish addition to your home.",
    4
  )
);

// ITEM OBJECTS
var items = [];
items.push(
  new Item(
    "L001",
    "Yellow Sofa",
    "images/sofa1.jpg",
    78.32,
    12,
    "living room",
    2,
    14.99,
    [reviews[0]],
    "This chair is like a ray of sunlight captured in furniture form. The vibrant yellow hue is impossible to ignore, instantly transforming any room into a cheerful haven. It's not just a chair; it's a mood lifter.",
    0
  )
);
items.push(
  new Item(
    "L002",
    "Light Blue Sofa",
    "images/sofa2.jpg",
    119.12,
    8,
    "living room",
    1,
    15.34,
    [reviews[1]],
    "The design of this sofa is both timeless and chic. The gentle curves and clean lines give the sofa a classic touch, while the light blue upholstery adds a contemporary flair. It's like a sophisticated statement piece that effortlessly blends into any decor.",
    0
  )
);
items.push(
  new Item(
    "L003",
    "Dark Green Sofa",
    "images/sofa3.jpg",
    229.46,
    24,
    "living room",
    2,
    15.34,
    [reviews[2]],
    "The design is a perfect marriage of classic and contemporary elements. The dark green upholstery complements the clean lines and elegant curves, making it a versatile addition to various interior styles. It's like a timeless piece of art that seamlessly integrates into your decor.",
    0
  )
);
items.push(
  new Item(
    "L004",
    "Cushion Chair",
    "images/armchair1.jpg",
    45.32,
    22,
    "living room",
    5,
    12.99,
    [reviews[3]],
    "A cushion chair is a comfortable and stylish seating option designed for relaxation and leisure. Characterized by its plush and padded construction, this chair offers a luxuriously soft and supportive seating experience. The design typically features a well-padded seat, backrest, and often armrests, providing a cocoon-like feeling for the user.",
    0
  )
);
items.push(
  new Item(
    "L005",
    "Blue Armchair",
    "images/armchair2.jpg",
    51.32,
    42,
    "living room",
    1,
    11.54,
    [reviews[4]],
    "A blue armchair is a chic and inviting piece of furniture that combines style with comfort. This chair typically features a well-defined structure with a comfortably padded seat, backrest, and armrests. The use of a soothing blue color adds a touch of elegance and versatility to the chair, making it suitable for various interior design themes.",
    0
  )
);
items.push(
  new Item(
    "K001",
    "Tea Table",
    "images/table1.jpg",
    149.31,
    8,
    "dining",
    4,
    15.65,
    [reviews[5]],
    "In addition to its practical functionality, a tea table is a key element in interior design, tying together various elements within a room. The choice of material, color, and design can significantly impact the overall look and feel of the space. Tea tables are available in a variety of shapes, including rectangular, square, round, or oval, providing options to suit different room layouts and personal preferences.",
    0
  )
);
items.push(
  new Item(
    "K003",
    "Dining Table",
    "images/table4.jpg",
    231.34,
    15,
    "dining",
    3,
    12.43,
    [reviews[6]],
    "A dining table is a central and essential piece of furniture in a dining room or eating area, providing a designated space for meals, gatherings, and shared moments. This versatile piece is designed to accommodate a variety of dining experiences, from everyday family meals to formal dinners and entertaining guests.",
    0
  )
);
items.push(
  new Item(
    "K004",
    "Wooden Table",
    "images/table3.jpg",
    76.99,
    23,
    "dining",
    4,
    14.67,
    [reviews[7]],
    "The tabletop, often the focal point, may feature intricate detailing, a smooth and polished surface, or a rustic finish, depending on the desired aesthetic. The material choice, whether it's rich hardwood, sleek glass, or durable metal, contributes to the overall character of the table. Some tables showcase artistic inlays or patterns, adding an extra layer of visual interest.",
    0
  )
);
items.push(
  new Item(
    "K005",
    "Golden Plates",
    "images/plates1.jpg",
    59.24,
    65,
    "dining",
    6,
    5.99,
    [reviews[8]],
    "Ceramic plates are culinary canvases, combining practicality with aesthetic appeal to enhance the dining experience. Crafted from durable ceramic materials, these plates serve as versatile and stylish vessels for presenting a variety of culinary creations.",
    0
  )
);
items.push(
  new Item(
    "K006",
    "Ceramic Plates",
    "images/plates2.jpg",
    23.4,
    3,
    "dining",
    4,
    5.99,
    [reviews[9]],
    "Ceramic plates are culinary companions that seamlessly blend form and function, enhancing the joy of dining through their thoughtful design and timeless elegance. Crafted with precision from durable ceramic materials, these plates are a testament to the artistry and craftsmanship that goes into creating essential tableware.",
    0
  )
);
items.push(
  new Item(
    "D001",
    "Containers",
    "images/containers1.jpg",
    10.99,
    37,
    "decoration",
    11,
    3.99,
    [reviews[10]],
    "Kitchen containers are the silent organizers of culinary chaos, bringing order and efficiency to the heart of the home. These versatile storage solutions come in a variety of shapes, sizes, and materials, designed to keep ingredients fresh, accessible, and neatly arranged within the bustling kitchen space.",
    0
  )
);
items.push(
  new Item(
    "D002",
    "Wall Shelf",
    "images/decoration2.jpg",
    29.59,
    12,
    "decoration",
    3,
    7.65,
    [reviews[11]],
    "A wall shelf is a versatile and stylish storage solution that combines functionality with decorative flair. Mounted on the wall, these shelves not only serve as practical storage but also contribute to the overall aesthetics of a room, adding a touch of organization and design.",
    0
  )
);
items.push(
  new Item(
    "D003",
    "Plant Pot",
    "images/decoration3.jpg",
    19.99,
    27,
    "decoration",
    2,
    3.99,
    [reviews[12]],
    "A plant pot is a vessel that transforms living spaces into thriving ecosystems of natural beauty. Crafted with both functionality and aesthetics in mind, these pots serve as nurturing homes for a diverse array of plants, cultivating an environment where the botanical world meets artistic expression.",
    0
  )
);
items.push(
  new Item(
    "D004",
    "White Vase",
    "images/table2.jpg",
    69.34,
    30,
    "decoration",
    3,
    7.89,
    [reviews[13]],
    "A white vase is a timeless and elegant piece of decor that effortlessly blends simplicity with sophistication. Crafted from materials like ceramic, porcelain, glass, or even contemporary materials like resin or acrylic, a white vase exudes a sense of purity and versatility, making it a versatile addition to any interior setting.",
    0
  )
);
items.push(
  new Item(
    "B001",
    "Wooden Bed",
    "images/bed1.jpg",
    189.99,
    13,
    "bedroom",
    4,
    19.32,
    [reviews[14]],
    "A wooden bed is a timeless and inviting centerpiece that seamlessly combines warmth, durability, and natural beauty to create a cozy and comfortable sleeping environment. Crafted from various types of wood, such as oak, walnut, maple, or pine, a wooden bed frame exhibits the richness of organic materials, enhancing the overall aesthetic of the bedroom.",
    0
  )
);
items.push(
  new Item(
    "B002",
    "White Bed",
    "images/bed2.jpg",
    239.99,
    5,
    "bedroom",
    2,
    19.99,
    [reviews[15]],
    "A white bed is a serene and timeless oasis within the bedroom, inviting a sense of tranquility and elegance into the sleeping space. This essential piece of furniture, the focal point of the room, is designed to provide comfort while offering a clean and neutral canvas for versatile styling.",
    0
  )
);
items.push(
  new Item(
    "B003",
    "Bookshelf",
    "images/bookshelf1.jpg",
    59.99,
    5,
    "bedroom",
    3,
    23.67,
    [reviews[16]],
    "A wooden bookshelf is a classic and functional piece of furniture that combines the warmth of natural materials with practical storage solutions. Crafted from various types of wood, such as oak, pine, mahogany, or walnut, a wooden bookshelf adds a touch of timeless elegance to any room while providing an organized haven for literary treasures and decorative items.",
    0
  )
);

// SORTING ITEMS
function sortItems() {
  chosenItems = [];
  var priceFilter = document.getElementById("filter");
  var dining = document.getElementById("dining");
  var bedroom = document.getElementById("bedroom");
  var livingRoom = document.getElementById("livingRoom");
  var decoration = document.getElementById("decoration");
  // Sorting by price
  for (var i = 0; i < items.length; i++) {
    if (priceFilter.value == "All") {
      chosenItems.push(items[i]);
    } else if (
      priceFilter.value == "Under $50" &&
      items[i].priceConverted() <= 50
    ) {
      chosenItems.push(items[i]);
    } else if (
      priceFilter.value == "$50 - $100" &&
      items[i].priceConverted() > 50 &&
      items[i].priceConverted() <= 100
    ) {
      chosenItems.push(items[i]);
    } else if (
      priceFilter.value == "$100 - $200" &&
      items[i].priceConverted() > 100 &&
      items[i].priceConverted() <= 200
    ) {
      chosenItems.push(items[i]);
    } else if (
      priceFilter.value == "$200 And More" &&
      items[i].priceConverted() > 200
    ) {
      chosenItems.push(items[i]);
    }
    //  Sorting by category
    for (var j = 0; j < chosenItems.length; j++) {
      var index;
      if (dining.checked && chosenItems[j].type !== "dining") {
        index = chosenItems.indexOf(chosenItems[j]);
        chosenItems.pop(index);
      } else if (bedroom.checked && chosenItems[j].type !== "bedroom") {
        index = chosenItems.indexOf(chosenItems[j]);
        chosenItems.pop(index);
      } else if (livingRoom.checked && chosenItems[j].type !== "living room") {
        index = chosenItems.indexOf(chosenItems[j]);
        chosenItems.pop(index);
      } else if (decoration.checked && chosenItems[j].type !== "decoration") {
        index = chosenItems.indexOf(chosenItems[j]);
        chosenItems.pop(index);
      }
    }
  }
}

// More information(max per hand, id and etc) of products is shown with a function showMoreInfo() by clicking moreinfo button
// DISPLAYING ITEMS
document.getElementById("filter").addEventListener("change", () => {
  displayItems();
});
document.getElementById("allTypes").addEventListener("change", () => {
  displayItems();
});
document.getElementById("dining").addEventListener("change", () => {
  displayItems();
});
document.getElementById("bedroom").addEventListener("change", () => {
  displayItems();
});
document.getElementById("livingRoom").addEventListener("change", () => {
  displayItems();
});
document.getElementById("decoration").addEventListener("change", () => {
  displayItems();
});
function displayItems() {
  sortItems();
  var itemsOutput = document.getElementById("itemsOutput");
  itemsOutput.innerHTML = "";
  for (var i = 0; i < chosenItems.length; i++) {
    // Container for items
    var wholeItem = document.createElement("div");
    wholeItem.className = "wholeItem";
    wholeItem.setAttribute("id", `${i}`);
    wholeItem.style.boxShadow = "5px 5px 10px gray";
    itemsOutput.appendChild(wholeItem);
    // Image for items
    var img = document.createElement("img");
    img.src = chosenItems[i].image;
    img.style.width = "300px";
    img.style.height = "400px";
    wholeItem.appendChild(img);
    // Button for more info
    var moreInfo = document.createElement("button");
    moreInfo.innerHTML = "More Info";
    moreInfo.setAttribute("class", "moreinfoBtn");
    moreInfo.setAttribute("id", i);
    wholeItem.appendChild(moreInfo);
    // Item name and price
    var itemInfo = document.createElement("div");
    itemInfo.className = "itemInfo";
    var itemName = document.createElement("div");
    itemName.innerHTML = `${chosenItems[i].name}`;
    var itemPrice = document.createElement("div");
    itemPrice.innerHTML = `${currencySelected}${chosenItems[i].priceConverted()}`;
    wholeItem.appendChild(itemInfo);
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);
    // Purchase button
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    var purchaseButton = document.createElement("button");
    purchaseButton.className = "purchase-button";
    purchaseButton.setAttribute("id", `${i}`);
    purchaseButton.innerHTML = "ADD TO CART";
    buttonContainer.appendChild(purchaseButton);
    wholeItem.appendChild(buttonContainer);
  }

  // Event listener for more info
  var moreinfoBtn = document.querySelectorAll(".moreinfoBtn");
  for (var btnInfo = 0; btnInfo < moreinfoBtn.length; btnInfo++) {
    moreinfoBtn[btnInfo].addEventListener("click", (e) => {
      showMoreInfo(e.target.id);
    });
  }
  // Event listener for adding to cart
  var allBtns = document.querySelectorAll(".purchase-button");
  for (var m = 0; m < chosenItems.length; m++) {
    var qty = 0;
    allBtns[m].addEventListener("click", (e) => {
      count++;
      qty++;
      addToCart(e.target.id);
      counter.innerHTML = count;
    });
  }
}
displayItems();

// SHOWING MORE INFO
function showMoreInfo(btn) {
  for (var b = 0; b < chosenItems.length; b++) {
    if (btn == b) {
      // containers
      var containerForInfo = document.createElement("div");
      containerForInfo.setAttribute("class", "infoContainer");
      var mainInfo = document.createElement("div");
      mainInfo.setAttribute("class", "mainInfo");
      // close button
      var closeBtn = document.createElement("button");
      closeBtn.innerHTML = "HIDE INFO";
      closeBtn.setAttribute("class", "infoBtnClose");
      closeBtn.addEventListener("click", () => {
        body.removeChild(containerForInfo);
      });
      mainInfo.appendChild(closeBtn);
      // info
      var productInfo = document.createElement("div");
      productInfo.style.margin = "2rem";
      productInfo.style.color = "white";
      productInfo.innerHTML = `Product ID: ${chosenItems[b].id} <br/>
      Product Name: ${chosenItems[b].name} <br/>
      Product Price: $${chosenItems[b].price}(CAD) <br/>
      Product Quantity: ${chosenItems[b].quantity} <br/>
      Product Type: ${chosenItems[b].type} <br/>
      Maximum Per Customer: ${chosenItems[b].maxPerCustomer} <br/>
      Shipping Price: $${chosenItems[b].shippingPrice}(CAD) <br/>
      Description: ${chosenItems[b].description} <br/>
      Average Rating: ${chosenItems[b].avrgRating()} <br/>`;
      mainInfo.append(productInfo);
      containerForInfo.appendChild(mainInfo);
      body.appendChild(containerForInfo);
    }
  }
}

// ADDING TO CART
function addToCart(btn) {
  for (var n = 0; n < chosenItems.length; n++) {
    if (btn == n) {
      // creating new object
      var newItem = new CartItem(
        chosenItems[n].id,
        chosenItems[n].name,
        chosenItems[n].price,
        chosenItems[n].shippingPrice,
        0,
        chosenItems[n].maxPerCustomer
      );
      cart.push(newItem);
      // adding quantity and checking max
      for (var h = 0; h < cart.length; h++) {
        if (chosenItems[n].id == cart[h].id && cart[h].qty >= 1) {
          var index = cart.indexOf(newItem);
          cart.splice(index, 1);
          cart[h].qty++;
          if (cart[h].qty > cart[h].max) {
            cart[h].qty--;
            count--
            alert("Your have reached the max amount per customer");
          }
        }
      }
      newItem.qty++;
      displayCart();
    }
  }
}

// DISPLAYING CART
function displayCart() {
  var cartOutput = document.getElementById("cartOutput");
  cartOutput.innerHTML = "";

  // Columns
  var firstRow = document.createElement("div");
  firstRow.setAttribute("id", "firstRow");
  var nameColumn = document.createElement("div");
  var priceColumn = document.createElement("div");
  var qtyColumn = document.createElement("div");
  var subttlColumn = document.createElement("div");
  var removeColumn = document.createElement("div");
  nameColumn.setAttribute("class", "columnName");
  priceColumn.setAttribute("class", "columnName");
  qtyColumn.setAttribute("class", "columnName");
  subttlColumn.setAttribute("class", "columnName");
  removeColumn.setAttribute("class", "columnName");
  nameColumn.innerHTML = "Product ID";
  priceColumn.innerHTML = "Price";
  qtyColumn.innerHTML = "Quantity";
  subttlColumn.innerHTML = "Subtotal";
  removeColumn.innerHTML = "blank";
  firstRow.appendChild(nameColumn);
  firstRow.appendChild(priceColumn);
  firstRow.appendChild(qtyColumn);
  firstRow.appendChild(subttlColumn);
  firstRow.appendChild(removeColumn);
  cartOutput.appendChild(firstRow);
  // Displaying "cart is empty" if cart has no elements
  if (cart.length == 0) {
    cartOutput.innerHTML = "Your Cart Is Empty";
    firstRow.removeChild(nameColumn);
    firstRow.removeChild(priceColumn);
    firstRow.removeChild(qtyColumn);
    firstRow.removeChild(subttlColumn);
    firstRow.removeChild(removeColumn);
  }
  // Item rows
  for (var itemsCart = 0; itemsCart < cart.length; itemsCart++) {
    // by id
    var listItem = document.createElement("li");
    listItem.innerHTML = cart[itemsCart].id;
    nameColumn.appendChild(listItem);
    // by price
    var priceItem = document.createElement("div");
    priceItem.innerHTML = `${currencySelected}${cart[itemsCart].priceConv()}`;
    priceColumn.appendChild(priceItem);
    // by quantity
    var qtyItem = document.createElement("div");
    qtyItem.innerHTML = cart[itemsCart].qty;
    qtyColumn.appendChild(qtyItem);
    // by subtotal
    var subttlItem = document.createElement("div");
    subttlItem.innerHTML = `${currencySelected}${(
      cart[itemsCart].priceConv() * cart[itemsCart].qty
    ).toFixed(2)}`;
    subttlColumn.appendChild(subttlItem);
    // button for removing items from cart
    var btnRemoveFromCart = document.createElement("button");
    btnRemoveFromCart.setAttribute("class", "btnRemoveFromCart");
    btnRemoveFromCart.innerHTML = "REMOVE";
    btnRemoveFromCart.setAttribute("id", cart[itemsCart].id);
    btnRemoveFromCart.addEventListener("click", (e) => {
      removeFromCart(e.target.id);
    });
    removeColumn.appendChild(btnRemoveFromCart);
  }
  displayOrderSummary();
}

// REMOVING FROM CART
function removeFromCart(id) {
  for (var t = 0; t < cart.length; t++) {
    if (id == cart[t].id) {
      if (cart[t].qty == 1) {
        cart.splice(t, 1);
        count--
      } else {
        cart[t].qty--;
        count--
      }
      counter.innerHTML = count
      displayCart();
    }
  }
}

// ORDER SUMMARY
function displayOrderSummary() {
  // variables
  var summaryOutput = document.getElementById("orderSummary");
  var subtotalItems = 0;
  var estimatedShipping = 0;
  var subtotalAll = 0;
  var tax = 0;
  var total = 0;
  // calculations
  for (var i = 0; i < cart.length; i++) {
    subtotalItems += cart[i].priceConv() * cart[i].qty;
    estimatedShipping += cart[i].shippingConv() * cart[i].qty;
    subtotalAll = subtotalItems + estimatedShipping;
    tax += subtotalAll * 0.13;
    total = tax + subtotalAll;
  }
  // output
  summaryOutput.innerHTML = "";
  summaryOutput.innerHTML = `Items Subtotal: ${currencySelected}${subtotalItems.toFixed(
    2
  )}<br/>
  Estimated Shipping: ${currencySelected}${estimatedShipping.toFixed(
    2
  )} <br/> <br/>
  Subtotal: ${currencySelected}${subtotalAll.toFixed(2)} <br/>
  Estimated Tax: ${currencySelected}${tax.toFixed(2)} <br/>
  Order Total: ${currencySelected}${total.toFixed(2)} `;
  //  Displaying nothing if cart is empty
  if (cart.length == 0) {
    summaryOutput.innerHTML = "";
  }
}

// REVIEWS
// Validation is put in reviews, instead of cart, as it makes cart functionality better in my opinion
function generateReviews() {
  var reviewOutput = document.getElementById("itemInfo");
  reviewOutput.innerHTML = "";
  for (var r = 0; r < items.length; r++) {
    // container for a whole review
    var wholeReview = document.createElement("div");
    wholeReview.setAttribute("class", "reviewInfo");
    // container for info
    var containerForInfo = document.createElement("div");
    // name
    var reviewName = document.createElement("div");
    reviewName.innerHTML = items[r].name;
    containerForInfo.appendChild(reviewName);
    // img
    var reviewImage = document.createElement("img");
    reviewImage.src = items[r].image;
    reviewImage.style.width = "300px";
    reviewImage.style.height = "300px";
    containerForInfo.appendChild(reviewImage);
    wholeReview.appendChild(containerForInfo);
    // reviews
    var containerForReview = document.createElement("div");
    containerForReview.setAttribute("class", "reviewField");
    for (var s = 0; s < items[r].reviews.length; s++) {
      // user
      var reviewUser = document.createElement("div");
      reviewUser.innerHTML = items[r].reviews[s].user;
      containerForReview.appendChild(reviewUser);
      // comment
      var reviewComment = document.createElement("div");
      reviewComment.innerHTML = items[r].reviews[s].comment;
      containerForReview.appendChild(reviewComment);
      // rating
      var reviewRating = document.createElement("div");
      reviewRating.innerHTML = `${items[r].reviews[s].evaluation}/5`;
      reviewRating.setAttribute("class", "rating");
      containerForReview.appendChild(reviewRating);
      wholeReview.appendChild(containerForReview);
    }
    reviewOutput.appendChild(wholeReview);
  }
}
generateReviews();

// SUBMITTING REVIEW
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  // variables
  var counterForValidation = 0;
  var itemId = document.getElementById("itemID");
  var name = document.getElementById("userName");
  var comment = document.getElementById("comment");
  var rating = document.getElementById("rating");
  // validation of name, comment and rating
  var idVld = document.getElementById("idValidation");
  var nameVld = document.getElementById("nameValidation");
  var commentVld = document.getElementById("commentValidation");
  var ratingVld = document.getElementById("ratingValidation");
  idVld.innerHTML = "";
  nameVld.innerHTML = "";
  commentVld.innerHTML = "";
  ratingVld.innerHTML = "";

  var namePattern = /^[a-zA-Z]+$/;
  var testarr = null;

  if (namePattern.test(name.value) == false || name.value == "") {
    nameVld.innerHTML = "Name should only include letters";
  } else {
    counterForValidation++;
  }
  if (comment.value == "") {
    commentVld.innerHTML = "Leave any comment";
  } else {
    counterForValidation++;
  }
  if (rating.value == "" || rating.value < 0 || rating.value > 5) {
    ratingVld.innerHTML = "Rating should be between 0 and 5";
  } else {
    counterForValidation++;
  }
  // validation of id/creating new review
  for (var letter = 0; letter < items.length; letter++) {
    if (itemId.value == items[letter].id) {
      testarr = 1;
      if (counterForValidation == 3) {
        var newReview = new Review(
          itemId.value,
          name.value,
          comment.value,
          rating.value
        );
        items[letter].reviews.push(newReview);
        console.log(items[letter].reviews[0]);
        console.log(newReview);
        alert(`Your review is succesfully submitted`);
        itemId.value = "";
        name.value = "";
        comment.value = "";
        rating.value = "";
      }
    }
  }
  if (testarr == null) {
    idVld.innerHTML = "Incorrect id";
  }
  generateReviews();
});

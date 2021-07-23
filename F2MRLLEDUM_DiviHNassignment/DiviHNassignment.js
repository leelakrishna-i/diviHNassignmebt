let rootDiv = document.getElementById('root');
let SignInDivContainer = document.createElement("div");

SignInDivContainer.classList.add("signin_container");

let signinLeftContainer = document.createElement("div");
signinLeftContainer.classList.add("signin_left_container")
SignInDivContainer.appendChild(signinLeftContainer);

let logoContainer = document.createElement('div');
logoContainer.classList.add("logo_container");
signinLeftContainer.appendChild(logoContainer);

let imgLogo = document.createElement('img');
imgLogo.classList.add("logo_image");
imgLogo.src = "https://res.cloudinary.com/leecloudla/image/upload/v1626932075/MypngFileds/image_3_1_cjroc6.png";
logoContainer.appendChild(imgLogo);

let contentContainer = document.createElement('div');
contentContainer.classList.add('content_container');

let symbol = document.createElement('i');
symbol.classList.add('fa', 'fa-quote-left', 'symbol_quote');
contentContainer.appendChild(symbol);


let pEl = document.createElement('p');
pEl.textContent = "The mission of Flex Force is simple: connect the world's professionals to make them more productive and successful.";
pEl.classList.add("text_content");
contentContainer.appendChild(pEl);

let pEl2 = document.createElement('p');
pEl2.textContent = "Founder's Name";
pEl2.classList.add("founders_name");
contentContainer.appendChild(pEl2);

let imgL = document.createElement('img');
imgL.src = "https://res.cloudinary.com/leecloudla/image/upload/v1626938855/MypngFileds/Vector_1_oawsl8.png";
imgL.classList.add("left_L_symbol");
contentContainer.appendChild(imgL);
signinLeftContainer.appendChild(contentContainer);

let signinRightContainer = document.createElement("div");
signinRightContainer.classList.add("signin_Right_container")
SignInDivContainer.appendChild(signinRightContainer);

let pEl3 = document.createElement('p');
pEl3.classList.add('have_account');
pEl3.textContent = "Already Have an Account?";
signinRightContainer.appendChild(pEl3);

let a = document.createElement('a');
a.classList.add('signin_link');
a.textContent = "Sign In";
a.href = "https://divihnregister.ccbp.tech/";
a.addEventListener("click", () => {
    itemsContainer.classList('d-none');
});
pEl3.appendChild(a);

let itemsContainer = document.createElement('div');
itemsContainer.classList.add('items_container');
signinRightContainer.appendChild(itemsContainer);

let cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards_container');
itemsContainer.appendChild(cardsContainer);

let h1El = document.createElement('h1');
h1El.textContent = "Join Us!";
h1El.classList.add('heading');
cardsContainer.appendChild(h1El);

let pEl4 = document.createElement('p');
pEl4.textContent = "To begin this journey, tell us what type of account you’d be opening.";
pEl4.classList.add('joinUs_text');
cardsContainer.appendChild(pEl4);

cardsData = [{
        pentagon: 'https://res.cloudinary.com/leecloudla/image/upload/v1626932075/MypngFileds/Polygon_2_q8e447.png',
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626953119/MypngFileds/user_a3bb0a.png",
        cardHead: 'Community  User',
        content: 'Join our professional Flex Force Community to collaborate and contribute.'
    },
    {
        pentagon: 'https://res.cloudinary.com/leecloudla/image/upload/v1626932075/MypngFileds/Polygon_2_q8e447.png',
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626944706/MypngFileds/briefcase_gzikxy.png",
        cardHead: 'Client  User',
        content: 'Gain advantage in sourcing the most suitable candidate by registering with us '
    },
    {
        pentagon: 'https://res.cloudinary.com/leecloudla/image/upload/v1626932075/MypngFileds/Polygon_2_q8e447.png',
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626944706/MypngFileds/Mask_Group_ne8loj.png",
        cardHead: 'Partner',
        content: 'Gain advantage in sourcing the most suitable candidate by registering with us '
    },
    {
        pentagon: 'https://res.cloudinary.com/leecloudla/image/upload/v1626932075/MypngFileds/Polygon_2_q8e447.png',
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626944706/MypngFileds/Mask_Group_1_a4zb9e.png",
        cardHead: 'Consultant',
        content: 'Gain advantage in sourcing the most suitable candidate by registering with us '
    },
]

for (let each of cardsData) {

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card_div');
    cardDiv.addEventListener('click', () => {
        location.href = 'https://divihndashbord.ccbp.tech/'
    });
    itemsContainer.appendChild(cardDiv);

    let iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons_div');
    iconsDiv.style.backgroundImage = `url(${each.pentagon})`;
    cardDiv.appendChild(iconsDiv);

    let iconImage = document.createElement('img');
    iconImage.classList.add('icon_img');
    iconImage.src = each.icon;
    iconsDiv.appendChild(iconImage)

    let textDiv = document.createElement('div');
    textDiv.classList.add('card_text_container');
    cardDiv.appendChild(textDiv);

    let h1El1 = document.createElement("h1");
    h1El1.classList.add('card_heading');
    h1El1.textContent = each.cardHead;
    textDiv.appendChild(h1El1);

    let cardText = document.createElement('p');
    cardText.classList.add("card_text");
    cardText.textContent = each.content;
    textDiv.appendChild(cardText);
}

rootDiv.appendChild(SignInDivContainer);
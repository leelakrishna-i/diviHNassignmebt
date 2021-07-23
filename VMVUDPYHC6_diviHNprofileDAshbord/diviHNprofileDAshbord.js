let root = document.getElementById('root');

let profileContainer = document.createElement('div');
profileContainer.classList.add('profile_container');
root.appendChild(profileContainer);

let dashBoadrContainer = document.createElement('div');
dashBoadrContainer.classList.add('dashboard_conteiner');
profileContainer.appendChild(dashBoadrContainer);

let logoContainer = document.createElement('div');
logoContainer.classList.add('logo_container');
dashBoadrContainer.appendChild(logoContainer)

let logoImg = document.createElement('img');
logoImg.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1626985165/MypngFileds/image_28_vjdap2.png';
logoImg.classList.add('logo_img');
logoContainer.appendChild(logoImg);

menuDetails = [{
        name: 'Dashboard',
        icon: ['fas', 'fa-columns']
    },
    {
        name: 'Experience',
        icon: ['fas', 'fa-briefcase']
    },
    {
        name: 'Education',
        icon: ['fas', 'fa-graduation-cap']
    },
    {
        name: 'Skills',
        icon: ['fas', 'fa-cube']
    },
    {
        name: 'Certifications',
        icon: ['fas', 'fa-medal']
    },
    {
        name: 'Interests',
        icon: ['fas', 'fa-male']
    },
    {
        name: 'Settings',
        icon: ['fas', 'fa-cogs']
    }

]
for (let each of menuDetails) {
    let itenDiv = document.createElement('div');
    itenDiv.classList.add('menu_item');
    dashBoadrContainer.appendChild(itenDiv);

    let pEl = document.createElement('p');
    pEl.classList.add('menu_text');
    pEl.textContent = each.name;
    itenDiv.appendChild(pEl);

    let i = document.createElement('i');
    i.classList.add(`${each.icon[0]}`, `${each.icon[1]}`, 'custom_icon');
    itenDiv.appendChild(i)
}

let bottomImg = document.createElement('img');
bottomImg.classList.add('bottom_img');
bottomImg.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1626985166/MypngFileds/illustration_f6blg9.png';
dashBoadrContainer.appendChild(bottomImg);

let pEl1 = document.createElement('p');
pEl1.textContent = 'Access exclusive tools & Insights now!';
pEl1.classList.add('dashbord_bottom_text');
dashBoadrContainer.appendChild(pEl1);

let bottomDiv = document.createElement('div');
bottomDiv.classList.add('bottom_div');
bottomDiv.textContent = 'Try Premium free for 1 month';
dashBoadrContainer.appendChild(bottomDiv);

let rightContainer = document.createElement('div');
rightContainer.classList.add('right_container');
profileContainer.appendChild(rightContainer);

let topBarContainer = document.createElement('div');
topBarContainer.classList.add('tob_bar_container');
rightContainer.appendChild(topBarContainer);

let searchbar = document.createElement('input');
searchbar.type = 'search';
searchbar.classList.add('search_bar');
topBarContainer.appendChild(searchbar);

topItems = [{
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626998298/MypngFileds/Vector_4_gdri4s.png",
        name: 'Home'
    },
    {
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626998058/MypngFileds/Vector_e3myza.png",
        name: 'My Network'
    },
    {
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626998058/MypngFileds/Vector_1_s2bsij.png",
        name: 'Jobs'
    },
    {
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626998059/MypngFileds/Vector_2_zefs3v.png",
        name: 'Messaging'
    },
    {
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626998059/MypngFileds/Vector_3_va9uea.png",
        name: 'Notifications'
    },
    {
        icon: "https://res.cloudinary.com/leecloudla/image/upload/v1626998059/MypngFileds/image_20_es3mu6.png",
        name: 'Me'
    }
]

for (let each of topItems) {

    let divContainer = document.createElement('div');
    divContainer.classList.add('top_icon_contaoiner');
    topBarContainer.appendChild(divContainer);

    let image = document.createElement('img');
    image.classList.add('top_icon_img');
    image.src = each.icon;
    divContainer.appendChild(image)

    let p = document.createElement('p');
    p.classList.add('icon_text');
    p.textContent = each.name;
    divContainer.appendChild(p);
}

let middlecontainer = document.createElement('div');
middlecontainer.classList.add('middlecontainer');
rightContainer.appendChild(middlecontainer);

let profileViewContainer = document.createElement('div');
profileViewContainer.classList.add('profile_view_container');
middlecontainer.appendChild(profileViewContainer);

let profileCard = document.createElement('div');
profileCard.classList.add('profile_card');
profileViewContainer.appendChild(profileCard);

let picsContainer = document.createElement('div');
picsContainer.classList.add('pics_container');
profileCard.appendChild(picsContainer);

let profilepic = document.createElement('img');
profilepic.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1627001074/MypngFileds/image_27_i0gj5b.png';
profilepic.classList.add('profile_pic');
picsContainer.appendChild(profilepic);

let camicon = document.createElement('img');
camicon.classList.add('cam_icon');
camicon.src = "https://res.cloudinary.com/leecloudla/image/upload/v1627002236/MypngFileds/camera_hvksrm.png";
picsContainer.appendChild(camicon);

let textcontainer = document.createElement('div');
textcontainer.classList.add('textcontainer');
profileCard.appendChild(textcontainer);

let profilepicName = document.createElement('p');
profilepicName.textContent = "Alexie Mark";
profilepicName.classList.add('profileName');
textcontainer.appendChild(profilepicName);

let buttoncontainer = document.createElement('div');
textcontainer.appendChild(buttoncontainer);

let button1 = document.createElement('button');
button1.textContent = 'Add profile section';
button1.classList.add('button1');
buttoncontainer.appendChild(button1);

let button2 = document.createElement('button');
button2.textContent = 'More...';
button2.classList.add('button2');
buttoncontainer.appendChild(button2);

let penimage = document.createElement('img');
penimage.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1627006267/MypngFileds/Group_nvinc1.png';
penimage.classList.add('penimage');
buttoncontainer.appendChild(penimage);

let specification = document.createElement('p');
specification.textContent = 'UI/UX Designer Paris, France';
specification.classList.add('specification');
profileCard.appendChild(specification);

let insidecard = document.createElement('div');
insidecard.classList.add('insidecard');
profileCard.appendChild(insidecard);

let hedContainer = document.createElement('div');
hedContainer.classList.add('hedContainer');
insidecard.appendChild(hedContainer);

let heading = document.createElement('h1');
heading.textContent = 'About Me';
heading.classList.add('heading');
hedContainer.appendChild(heading);

let imagepen = document.createElement('img');
imagepen.classList.add('imagepen');
imagepen.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1627006267/MypngFileds/Group_nvinc1.png';
hedContainer.appendChild(imagepen);

let paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "UX design is all about identifying and solving user problems; UI design is all about creating intuitive, aesthetically-pleasing, interactive interfaces. UX design usually comes first in the product development process, followed by UI. The UX designer maps out the bare bones of the user journey; the UI designer then fills it in with visual and interactive elements.";
insidecard.appendChild(paragraph)

let bottomCard = document.createElement('div');
bottomCard.classList.add('bottomCard');
profileViewContainer.appendChild(bottomCard);

let cardhead = document.createElement('h1');
cardhead.classList.add('cardhead');
cardhead.textContent = 'Experience';
bottomCard.appendChild(cardhead);

let bottomcardTectContent = document.createElement('div');
bottomcardTectContent.classList.add('bottomcardTectContent');
bottomCard.appendChild(bottomcardTectContent);

let teslalogo = document.createElement('img');
teslalogo.classList.add('teslalogo');
teslalogo.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1627008860/MypngFileds/image_24_a9twnh.png';
bottomcardTectContent.appendChild(teslalogo);

let bottomparagraph = document.createElement('p')
bottomparagraph.textContent = 'UI / UX Designer Tesla Intern Sep 2020 – Oct 2021 . 1yr 1 mo. Tech World, Paris, France';
bottomparagraph.classList.add('bottomparagraph');
bottomcardTectContent.appendChild(bottomparagraph);

let finalpenimg = document.createElement('img');
finalpenimg.classList.add('finalpenimg');
finalpenimg.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1627006267/MypngFileds/Group_nvinc1.png';
bottomcardTectContent.appendChild(finalpenimg);

let rightmostcontainer = document.createElement('div');
rightmostcontainer.classList.add('rightmostcontainer');
middlecontainer.appendChild(rightmostcontainer);

let smalldiv = document.createElement('div');
smalldiv.classList.add('smalldiv');
rightmostcontainer.appendChild(smalldiv);

let smalldivtext = document.getElementById('p');
smalldivtext.classList.add('samlldivtext');
smalldivtext.textContent = 'Edit public profile & URL';
smalldiv.appendChild(smalldivtext);
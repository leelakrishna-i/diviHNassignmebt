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

let a = document.createElement('a');
a.classList.add('backtext');
a.textContent = '< Back';
a.href = 'https://divihntask.ccbp.tech/';
signinRightContainer.appendChild(a)

let registerContainer = document.createElement('div')
registerContainer.classList.add('register_container');
signinRightContainer.appendChild(registerContainer);

let contentDiv = document.createElement('div');
contentDiv.classList.add('register_content_div');
registerContainer.appendChild(contentDiv);

let h1 = document.createElement('h1');
h1.classList.add('register_heading');
h1.textContent = 'Register as Community User!';
contentDiv.appendChild(h1);

let pEl4 = document.createElement('p');
pEl4.textContent = "For the purpose of industry regulation, your details are required.";
pEl4.classList.add("register_sub_text");
contentDiv.appendChild(pEl4);

let label1 = document.createElement("label");
label1.htmlFor = "usaename";
label1.classList.add('labels');
label1.textContent = "Your Fullname*";
contentDiv.appendChild(label1);

let input1 = document.createElement('input');
input1.type = 'text';
input1.id = 'usaename';
input1.placeholder = "Enter Your Fullname";
input1.classList.add('input_element');
contentDiv.appendChild(input1);

contentDiv.appendChild(document.createElement('br'));

let label2 = document.createElement("label");
label2.htmlFor = "emailAddress";
label2.classList.add('labels');
label2.textContent = "Your Email  *";
contentDiv.appendChild(label2);

let input2 = document.createElement('input');
input2.type = 'text';
input2.id = 'emailAddress';
input2.placeholder = "Enter email address";
input2.classList.add('input_element');
contentDiv.appendChild(input2);

contentDiv.appendChild(document.createElement('br'));

let label3 = document.createElement("label");
label3.htmlFor = "password";
label3.classList.add('labels');
label3.textContent = "Enter Password  *";
contentDiv.appendChild(label3);

let input3 = document.createElement('input');
input3.type = 'password';
input3.id = 'password';
input3.placeholder = "Enter email address";
input3.classList.add('input_element');
contentDiv.appendChild(input3);

contentDiv.appendChild(document.createElement('br'));

let checkboxContainer = document.createElement('div');
contentDiv.appendChild(checkboxContainer);

let input4 = document.createElement('input');
input4.type = 'checkbox';
input4.id = 'checkboxtype';
input4.placeholder = "Enter email address";
input4.classList.add('checkbox_element');
checkboxContainer.appendChild(input4);

let label4 = document.createElement("label");
label4.htmlFor = "checkboxtype";
label4.classList.add('labels');
label4.textContent = "I agree to terms & conditions";
checkboxContainer.appendChild(label4);

contentDiv.appendChild(document.createElement('br'));

let button1 = document.createElement('button');
button1.textContent = 'Register Account';
button1.addEventListener('click', () => {
    location.href = 'https://divihndashbord.ccbp.tech/'
});
button1.classList.add('account_btn');
contentDiv.appendChild(button1);

let orContainer = document.createElement("div");
orContainer.classList.add('or_container')
contentDiv.appendChild(orContainer);

orContainer.appendChild(document.createElement('hr'))
let or = document.createElement('p');
or.textContent = 'or';
or.classList.add('or_text')
orContainer.appendChild(or);
orContainer.appendChild(document.createElement('hr'))

let button2 = document.createElement('div');
button2.classList.add('google_btn');
button2.addEventListener('click', () => {
    location.href = 'https://divihndashbord.ccbp.tech/'
});
let googleImage = document.createElement('img');
googleImage.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1626979881/MypngFileds/flat-color-icons_google_maoekh.png';
googleImage.classList.add('google_img')
button2.appendChild(googleImage)
let button2text = document.createElement('p');
button2text.textContent = 'Register with Google';
button2text.classList.add('button2_text')
button2.appendChild(button2text);
contentDiv.appendChild(button2);

orContainer.appendChild(document.createElement('br'))

let button3 = document.createElement('div');
button3.classList.add('facebook_btn');
button3.addEventListener('click', () => {
    location.href = 'https://divihndashbord.ccbp.tech/'
});
let facebookImage = document.createElement('img');
facebookImage.src = 'https://res.cloudinary.com/leecloudla/image/upload/v1626980705/MypngFileds/image_7_lwm8j8.png';
facebookImage.classList.add('facebook_img');
button3.appendChild(facebookImage);
let button3text = document.createElement('p');
button3text.textContent = 'Register with Facebook';
button3text.classList.add('button3_text');
button3.appendChild(button3text);
contentDiv.appendChild(button3);




rootDiv.appendChild(SignInDivContainer);
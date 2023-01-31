const illustration = document.querySelector('.scdImg');
const heading = document.querySelector('.description_title h1');
const bodyText = document.querySelector('.teachers_description p');
const faqsToggle = document.querySelectorAll('.questionLine span');
const menuBtn = document.querySelector('.mNav_menuBtn');

// Open mobile menu
let opened = false;
menuBtn.addEventListener('click', openCloseMenu)

faqsToggle.forEach(btn => {

    let closed= true;

    btn.addEventListener('click', e => {
        const qstBody = e.currentTarget.parentElement.nextElementSibling;
        
        switch (closed) {
            case true:
                qstBody.style.display= 'block';
                e.currentTarget.textContent = '-';
                closed= false;
                break;
            case false:
                qstBody.style.display= 'none';
                e.currentTarget.textContent = '+';
                closed= true;           
        }
    })
})

const infos = [
    {
        imgUrl : 'res/images/Hello-school-hero-teacher1_contour.png',
        heading: '5 stars to Sara!',
        body: '" Sara is sunny and smiling. She helps me get confident with speaking English. Her teaching method is polite and gentle. She makes sure that students listen to each other and support each other when we talk to each other. Her speech speed was just right: not too fast, not too slow. I look forward to her next class! "'
    },
    {
        imgUrl : 'res/images/Hello-school-hero-teacher2.png',
        heading: '5 stars to Anastasia!',
        body: '" Anastasia is sunny and smiling. She helps me get confident with speaking English. Her teaching method is polite and gentle. She makes sure that students listen to each other and support each other when we talk to each other. Her speech speed was just right: not too fast, not too slow. I look forward to her next class! "'
    },
    {
        imgUrl : 'res/images/Hello-school-hero-teacher3.png',
        heading: '5 stars to Kareem!',
        body: '" Kareem is sunny and smiling. She helps me get confident with speaking English. Her teaching method is polite and gentle. She makes sure that students listen to each other and support each other when we talk to each other. Her speech speed was just right: not too fast, not too slow. I look forward to her next class! "'
    }
]
let counter = 0;
let firstClickPrev = true;
let firstClickNext = true;

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', ()=>{

    if(counter == infos.length-1){
        nextBtn.classList.add('disabled');
        return;
    }
    if(counter < infos.length-1){
        previousBtn.classList.remove('disabled');
        counter++;
        updateInfo(counter);
    }
});

const previousBtn = document.getElementById('previous');
previousBtn.addEventListener('click', ()=>{

    if(counter >= infos.length){
        counter=infos.length-1;
    }
    if(counter == 0){
        previousBtn.classList.add('disabled');
        return;
    }
    if(counter > 0){
        nextBtn.classList.remove('disabled');
        counter--;
        updateInfo(counter);
    }
});

// Open and close the mobile nav menu
function openCloseMenu() {
    const menu = document.querySelector('nav');
    const bar = document.querySelector('.mNav_menuBtn_bar');
    if(opened){
        menu.style.display = 'none';
        opened = false;
        bar.classList.remove('mNav_menuBtn_bar--opened');
    } else {
        menu.style.display = 'flex';
        opened = true;
        bar.classList.add('mNav_menuBtn_bar--opened');
    }
    
}
function updateInfo(counter) {
    illustration.setAttribute('src', infos[counter].imgUrl);
    heading.textContent = infos[counter].heading;
    bodyText.textContent = infos[counter].body;
}
let typed = new Typed(".clsDynamicText", {
    strings: ["Fullstack", "Ingeniero", "Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true
});

let TitleClick = document.querySelectorAll(".clsSubAboutMe");
let Description = document.querySelectorAll(".descriptionAbout");

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i < Description.length; i++) {
        Description[i].style.display = 'none';
    }
});

for (let index = 0; index < TitleClick.length; index++) {
    TitleClick[index].addEventListener("click", function() {
        EventoClick(index);
    });
}

function EventoClick(position) {
    for (let index = 0; index < Description.length; index++) {
        let element = Description[index];

        if (index != position) {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    }
}

document.querySelectorAll(".clsImgCertification img").forEach(ImgContainer =>{
    ImgContainer.onclick = ()=>{
        document.querySelector(".clic-Img").style.display = 'block';
        document.querySelector(".clic-Img img").src = ImgContainer.getAttribute('src')
        
        document.querySelector(".clic-Img").onclick = () =>{
            document.querySelector(".clic-Img").style.display = 'none';
        }
    } 
});

document.querySelector(".clic-Img span").onclick = () =>{
    document.querySelector(".clic-Img").style.display = 'none';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbz2KFQMsk_EN9vSH1WBGhvNa-pK4B3ZoTbBbMBebscGaENBoGQQZYmCRCiDBuPD42xq/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => CleanInputs())
      .catch(error => console.error('Error!', error.message))
  })


  function CleanInputs(){
    document.querySelector(".clsContainerPop").style.display = 'block'
    let Inputs = document.querySelectorAll(".clsFormInput");

    Inputs.forEach(input => {
        input.value = ''
    })
  }


  let CloseSuccessfull = document.querySelector(".btn-PopModal");

  if(CloseSuccessfull){
    CloseSuccessfull.addEventListener('click', ()=> {
        document.querySelector(".clsContainerPop").style.display = 'none'
    })
  }

// Menu Hamburguesa

let Men = document.querySelector(".clsMenHamburguer");
let Navbar = document.querySelector("#menu");
let isWhite = false;

Men.addEventListener("click", function() {
    toggleMenu(Navbar);
    changeImageColor();
});

function toggleMenu(Navbar) {
    Navbar.style.display = (Navbar.style.display === "none" || Navbar.style.display === "") ? "block" : "none";
}

function changeImageColor() {
    let image = document.querySelector(".clsMenHamburguer img");
    if (isWhite) {
        image.style.filter = "none"; 
    } else {
        image.style.filter = "invert(100%)";
    }

    isWhite = !isWhite;
}
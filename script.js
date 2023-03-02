
/*******************AFFICHER CONTENU DU PANIER************** */

let panier = document.querySelector('#iconCart');
let cartCheckout = document.querySelector('.cartCheckout')
panier.addEventListener('click', fnAfficherContenuPanier);
function fnAfficherContenuPanier(){
    cartCheckout.classList.toggle('open');   
}

let menuMobile = document.querySelector('#menuMobile');
let menu = document.querySelector('.menu');
menuMobile.addEventListener('click', fnAfficherMenu);
    function fnAfficherMenu(){
        menu.classList.toggle('open');
    }

let close = document.querySelector('.close');
close.addEventListener('click', fnClose);
    function fnClose(){
        menu.classList.toggle('open');
    }
/**********************A REVOIR - CODE FERMER MENU EN CLIQUANT HORS */
    function closeMenu(event){
        console.log(event.target)
        let iconMenu = document.querySelector('#menuMobile');
        let iconCloseMenu = document.querySelector('.icon-close');
        if(event.target != iconMenu && event.target != iconCloseMenu){
          
          document.querySelector('.menu').classList.remove('menu');
        }    
        
      
      }

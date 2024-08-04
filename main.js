function log(){
   var element = document.querySelectorAll('.header__contact-list')
   var modal = document.querySelector('.modal')
   var close = document.querySelector('.close')
   for(var i = 0; i <= element.length; i++){
    element[1].onclick = function(e){
        e.preventDefault()
        modal.classList.add('modal-on')
    }
   }
   close.onclick =function(){
     modal.classList.remove('modal-on')
   }
}
log()

    let count=0;
     const cartCountSpan=document.getElementById('cart-count');
     function addToCart(){
        count= count + 1;
        if(cartCountSpan){ 
        cartCountSpan.innerText=count;
        }
        document.getElementById('cart-count').addEventListener('click',addToCart);
     }
     function toggleCart(){
        const sideCart =document.getElementById('side-count');
        if(sidecart){ 
        sidecart.classList.toggle('open');
        }
     }
     function toggleSidebar(){
        const sideMenu =document.getElementById('side-menu');
        if(sideMenu){ 
        sideMenu.classList.toggle('open');
        }
     }

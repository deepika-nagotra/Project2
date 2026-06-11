<script>
    let count=0;
     const cartCountSpan=document.getElementById('cart-count');
     function addToCart(){
        count=count+1;
        cartCountSpan.innerText=count;
        document.getElementById('cart-count').addEventListener('click',addToCart);
     }
</script>
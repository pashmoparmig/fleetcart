//                          ||||||| reload window  |||||||
window.onload = function (){
    var load = document.getElementById('load')
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        load.style.display = 'none'
        document.body.style.overflow = 'auto'
    }, 500);
}
//                          ||||||| reload window  |||||||

///////////////////////////////////     alert - start   |///////////////////////////////////

function alertbox(text) {
    let alertbody = document.querySelector('.container-alert');
    alertbody.innerHTML = `            
    <div class="alertbox">
    <span class="alertclose">&times;</span>
    <h1>FleetCart</h1>
    <!-- <i class="fa-solid fa-bell"></i> -->
    <i class="fa-regular fa-bell"></i>
    <!-- <span class="notification-sign"><i class="far fa-dell"></i></span> -->
    <p>${text}</p>
</div>`;

    setTimeout(() => {
        alertbody.style.display = "none";
        alertbody.innerHTML = '';
    }, 5000);
    alertbody.style.display = "block";
}
// var text = "تم اضافة العنصر بنجاح";
// alertbox(text)
///////////////////////////////////     alert - end   ///////////////////////////////////




/////////////////////////////|||||||| nav scroll  - start ||||||||||//////////////////////////////

window.onscroll = function() {scrollFunction ()};
function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 30) {
    // document.getElementsByClassName("navbar").style.top = "2px";                  
    // document.getElementsById("navbar").style.top = "2px";                  
    // document.getElementById("navbar").style.background = "white"; 
    // document.getElementById("navbar").style.position = 'fixed';

    document.getElementById("navbar").classList.add("navbar")                
    // document.getElementById("navbar").classList.remove("mid_header")                
  } else {
    //   alert('ddd')
    // document.getElementsById("navbar").style.top = "-110px";
    document.getElementById("navbar").classList.remove("navbar")                
    document.getElementById("navbar").classList.add("mid_header")  
    // document.getElementById("navbar").style.position = 'sticky';  
  }
}
/////////////////////////////|||||||| nav scroll  - end  ||||||||||//////////////////////////////





/////////////////////////////|||||||| slidershow imges  - start ||||||||||//////////////////////////////
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides,2500); // Change image every 2 seconds
}
/////////////////////////////|||||||| slidershow imges  - end ||||||||||//////////////////////////////


//// products

let productsDOM = document.querySelector('.slid_pro1');
let products = [
    {
    id: 1,
    title: 'blue glassic Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'fashion.jpeg',
    description: 'glassic glassic glassic glassic glassic',
    price:'999',
},
    {
    id: 2,
    title: 'lap hp Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap1.png',
    description: 'Dell XPS 13 9380, 13.3" 4K UHD (3840X2160) Multi- eewwrwwew we ewe we wewewew ew',
    price:'700',
},
    {
    id: 3,
    title: 'apple whatch Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'wach1.jpeg',
    description: 'jdsnfdsndsfdfd',
    price:'1500',
},
    {
    id: 4,
    title: 'laptop del Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap.jpeg',
    description: 'Dell XPS 13 9380, 13.3" 4K UHD (3840X2160) Multi- eewwrwwew we ewe we wewewew ew',
    price:'2000',
},
    {
    id: 5,
    title: 'DELL- LAPTOBE  Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap.jpeg',
    description: 'jdsnfdsndsfdfd',
    price:'599',
},
    {
    id: 6,
    title: 'HP- hp Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap1.png',
    description: 'jdsnfdsndsfdfd',
    price:'1200',
},
    {
    id: 7,
    title: 'laptop-HP Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap.jpeg',
    description: 'jdsnfdsndsfdfd',
    price:'900',
},
    {
    id: 8,
    title: 'Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap1.png',
    description: 'jdsnfdsndsfdfd',
    price:'1150',
},
    {
    id: 9,
    title: '4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap.jpeg',
    description: 'jdsnfdsndsfdfd',
    price:'220',
},
    {
    id: 10,
    title: 'HP HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap.jpeg',
    description: 'jdsnfdsndsfdfd',
    price:'1000',
},
    {
    id: 11,
    title: 'hp-Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen',
    imgurl: 'lap1.png',
    description: 'jdsnfdsndsfdfd',
    price:'1000',
},
    {
    id: 12,
    title: 'HP  x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    imgurl: 'lap1.png',
    description: 'HP Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    price:'1000',
},
    {
    id: 13,
    title: 'لاب  لون اسود شاشاة 17 بوصة ولو حة مفاتيح مضيئة وبصة وكاميرا عاية الجودة وبطارية ممتازة',
    imgurl: 'apple lap.jpeg',
    description: 'HP Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    price:'1000',
},
    {
    id: 14,
    title: 'لاب توب اتش بي شاشاة 17 بوصة ولو حة مفاتيح مضيئة وبصة وكاميرا عاية الجودة وبطارية ممتازة',
    imgurl: 'hp lap.jpeg',
    description: 'HP Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    price:'1000',
},
    {
    id: 15,
    title: 'لاب توب ايسر لون اسود شاشاة 17 بوصة ولو حة مفاتيح مضيئة وبصة وكاميرا عاية الجودة وبطارية ممتازة',
    imgurl: 'acer lap.jpeg',
    description: 'HP Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop, Intel i7 8th Gen',
    price:'1000',
}
]

///////////////////////// function show products - start ///////////////////////////////////
function drowProductUl (){
    let productui = products.map((item) => {
        return `
        
            <div class="pro_cart1">
                <div class="img_card">
                    <img src="img/${item.imgurl}"> 
                        
                </div>
                        
                        <span class="mini_top_icon">
                            <div><i class="fa-regular fa-heart"></i></div>
                            <div><i class="fa-solid fa-shuffle"></i></div>
                        </span>

                    <div class="descr_card">
                        <div class="pro_rates"><span class="pro_rates_stars">*****</span><span class="pro_rates_number">(5)</span></div>
                        <h6 class="pro_nam">${item.title}</h6>
                        <span class="new_and_old_pric">
                            <h6 class="pro_price1">${item.price}</h6> 
                            <span class="pro_price1_old">$1500</span>
                        </span>
                    </div>        

                    <div class="btn_card" onclick = "add_to_cart(${item.id})">
                        <div >ADD TO CART</div>
                    </div>

                    <!--<div class="btn_card_pri_2">
                        <h6 class="pro_price2">$1300.99</h6>
                    </div> -->
                </div> 
        `;
    });
    productsDOM.innerHTML = productui.join("");
}
drowProductUl();
///////////////////////// function show products - end ///////////////////////////////////



///////////////////////// function add in card - start ///////////////////////////////////
let cartproductdom = document.querySelector('.carts_products')
additem_array =[]
function add_to_cart (id) {
    let deletid = typeof(id);
    let chossesitem = products.find((item)=> item.id ===id);
    cartproductdom.innerHTML += `
        <li>
            <p >${chossesitem.title}</p>
            <span>${chossesitem.price}</span> 
            <button class="delat_item"  onclick=${"remove_itemfrom_cart(deletid)"}><i class="fa-solid fa-trash"></i></button>
            <!--<hr>-->
        </li>`
        let carts_products_item = document.querySelectorAll(".carts_products li")
        document.querySelector(".length_items").innerHTML = carts_products_item.length ;
        // console.log(document.querySelector("#total_cart_price").innerHTML )
        // console.log(carts_products_item.length)
        
    // console.log(chossesitem);
    console.log(deletid + "#");


    // alert(chossesitem)
    cardprice = document.querySelector("#total_cart_price");
    cardprice.innerHTML = +cardprice.innerHTML + +chossesitem.price;
    var text = chossesitem.title;
    alertbox("تم اضافة "  + " .. " + text)


    additem_array = [...additem_array, chossesitem]
    localStorage.setItem("productcard", JSON.stringify(additem_array))
}








//             ////////////////////  function show cart list  start ////////////////////
let cartproductdiv = document.querySelector('.pris')
cartproductdiv.addEventListener('click', opencartmenu)

function opencartmenu(){
    var carts_products_item = document.querySelectorAll(".carts_products li")
    // if(cartproductdom != ""){
    if(carts_products_item.length > 0){
        // alert('"added"')
        // console.log(cartproductdom.innerText)
        // console.log(cartproductdom.title)
        // console.log(cartproductdom)
        // console.log(carts_products_item)
        if(cartproductdom.style.display == "none"){
            cartproductdom.style.display = "block";
            // alert('y')
        }
        else{
            cartproductdom.style.display = "none";
        };
    }
    else{
        // alert('no items here')
        alertbox('!!!..' + "عربة التسوق فارغة")
        cartproductdom.style.display = "none";
    }
    

    // var element = [];
    // var carts_products_pris = document.querySelectorAll('.carts_products li')
    // console.log(element)
    // for (let i = 0 ; i < carts_products_pris.length ; i++) {
    //     const element2 = element.push(carts_products_pris[i]);
    //     console.log(element2)
    //     console.log(carts_products_item)
    //     console.log(i)
    // }

    
}
//             ////////////////////  function show cart end  ////////////////////



var item_in_cart = document.querySelector(".delat_item");
// item_in_cart.addEventListener('click', remove_itemfrom_cart);

function remove_itemfrom_cart(deletid) {
    console.log(deletid)
    // console.log(typeof(id))
    
}

// console.log(user_account)
// console.log(localStorage.getItem('user_account'))


////////////////////////////////////////////////////////////////////////////////////
let user_accounttype = localStorage.getItem('user_account');
let user_accountdom = document.querySelector('.top_header ul');
if (user_accounttype === "in") {
    user_accountdom.innerHTML += `<a href="profile.html"><li><i class="fa-lg fa-regular fa-circle-user"></i> ${user_accounttype} </li></a>`;
} else {
    user_accountdom.innerHTML += '<a href="login.html"><li><i class="fa-solid fa-arrow-right-to-bracket"style="color: #423ff5;"></i> Login</li></a>';
    
}
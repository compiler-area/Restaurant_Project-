let arr=[{src:"image/pic1.jpg", name:"cheken", price:66, code:4545},{src:"image/pic2.jpg",name:"pasta", price:65, code:4645},{src:"image/pic3.jpg",name:"pizaa", price:67, code:4548},{src:"image/pic4.jpg", name:"cheken", price:66, code:4545},{src:"image/pic5.jpg",name:"pasta", price:65, code:4645},{src:"image/pic6.jpg", name:"cheken", price:66, code:4545},{src:"image/pic7.jpg",name:"pasta", price:65, code:4645},{src:"image/pic8.jpg", name:"cheken", price:66, code:4545},{src:"image/pic9.jpg",name:"pasta", price:65, code:4645} ]

const menu=document.getElementById("menu");
//const menuIfo=document.getElementById("menuIfo");
//const singleMenue=document.getElementById("singleMenue");

 for(let i=0; i<=arr.length; i++)
     {
         //creat img
       let  mealImg=document.createElement('img'); 
            mealImg.src=arr[i].src;
           mealImg.style.width='380px';
                
         //creat name
         const mealname=document.createElement("p");
                mealname.innerText="name: "+arr[i].name;
                 mealname.style.color="red";
         //creat price
         const mealprice=document.createElement("p");
                mealprice.innerText="price: "+arr[i].price;
         //creat code
         const mealcode=document.createElement("p");
                mealcode.innerText="code: " +arr[i].code;
         //creat delet button 
         let  deleatspan=document.createElement('p');
              let delettext=document.createTextNode('delet');
              deleatspan.appendChild(delettext);
                deleatspan.className='delettask';
         
         //creat singleMenue
         let singleMenue=document.createElement('div');
            singleMenue.className='singleMenue';
         //append name price code in menuIfo
         singleMenue.appendChild(mealImg);
         singleMenue.appendChild(mealname);
         singleMenue.appendChild(mealprice);
         singleMenue.appendChild(mealcode);
         singleMenue.appendChild(deleatspan);
         
         
        
        // singleMenue.appendChild(menuIfo);
        menu.appendChild(singleMenue);
         //append menuifo in menu
     // menuu.appendChild(menuIfoo);
         
          document.addEventListener('click', function(e)
{
    if(e.target.className=='delettask')
        {
             e.target.parentNode.remove();
           
           
        }
    else
        {
            console.log("");
        }
    
});
     };


         
let arr=[{src:"image/pic1.jpg", name:"hamburgare", price:30, code:4541},{src:"image/pic2.jpg",name:"meat", price:45, code:4642},{src:"image/pic3.jpg",name:"Read Curry", price:25, code:4543},{src:"image/pic4.jpg", name:"fish", price:20, code:4544},{src:"image/pic5.jpg",name:"pizaa", price:20, code:4645},{src:"image/pic6.jpg", name:"Creamy Fish ", price:66, code:4546},{src:"image/pic7.jpg",name:"seafoodPasta", price:35, code:4647},{src:"image/pic8.jpg", name:"chiken", price:30, code:4548},{src:"image/pic9.jpg",name:"Salad", price:15, code:4649} ,{src:"image/pic10.jpg", name:"Caramelchoclat ", price:10, code:4549},{src:"image/pic11.jpg", name:"choclat-Nut", price:10, code:4548},{src:"image/pic12.jpg", name:"FruitTart", price:15, code:4550},{src:"image/pic13.jpg", name:"pancake", price:10, code:4551},{src:"image/pic14.jpg", name:"MangoICream", price:15, code:4552},{src:"image/pic15.jpg", name:"Cupcake", price:10, code:4553},{src:"image/pic16.jpg", name:"latteCoffe", price:10, code:4554},{src:"image/pic17.jpg", name:"macito", price:10, code:4555},{src:"image/pic18.jpg", name:"mojito ", price:10, code:4556},{src:"image/pic19.jpg", name:" CaramelLatte", price:10, code:4557},{src:"image/pic20.jpg", name:"strawberryJuice", price:10, code:4558},{src:"image/pic21.jpg", name:"Tea", price:10, code:4559},]

const menu=document.getElementById("menu");
//const backend=document.getElementById("backend");
 for(let i=0; i<=arr.length; i++)
     {
         //creat img
       let  mealImg=document.createElement('img'); 
            mealImg.src=arr[i].src;
           mealImg.style.width='380px';
                
         //creat name
         const mealname=document.createElement("p");
                mealname.innerText=arr[i].name;
                 mealname.style.color="red";
         //creat price
         const mealprice=document.createElement("p");
                mealprice.innerText="price: "+arr[i].price+"$";
         //creat code
         const mealcode=document.createElement("p");
                mealcode.innerText="code: " +arr[i].code;
         //creat delet button 
         let  deleatcard=document.createElement('p');
              let delettext=document.createTextNode('delet');
              deleatcard.appendChild(delettext);
                deleatcard.className='delettask';
         
         //creat singleMenue
         let singleMenue=document.createElement('div');
            singleMenue.className='singleMenue';
         //append name price code in menuIfo
         singleMenue.appendChild(mealImg);
         singleMenue.appendChild(mealname);
         singleMenue.appendChild(mealprice);
         singleMenue.appendChild(mealcode);
         singleMenue.appendChild(deleatcard);
        // singleMenue.appendChild(menuIfo);
        menu.appendChild(singleMenue);
         // make on click to delet card
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

   
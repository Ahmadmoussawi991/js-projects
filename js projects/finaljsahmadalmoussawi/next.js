let products=[
    {
    id: 1,
    name: "Laptop",
    description: "A powerful and portable computer",
    price: 1200,
    rate: 4.5,
    category: "Electronics"
    },
    {
    id: 2,
    name: "Smartphone",
    description: "A feature-rich mobile phone",
    price: 800,
    rate: 4.2,
    category: "Electronics"
    },
    {
    id: 3,
    name: "Headphones",
    description: "High-quality stereo headphones",
    price: 100,
    rate: 4.0,
    category: "Electronics"
    },
    {
    id: 4,
    name: "Backpack",
    description: "Durable and stylish backpack",
    price: 50,
    rate: 4.8,
    category: "Fashion"
    }
    ]
    let name = document.getElementById("name");
let type = document.getElementById("type");
let desc = document.getElementById("desc");
let rate = document.getElementById("rate");
let price = document.getElementById("price");
let register = document.getElementById("reg");
    window.onload = () => {
        show(products);
      };
    function show(products) {
        let bodytable = document.getElementById("bodytable");
        bodytable.innerHTML = "";
        products.forEach((products, index) => {
          bodytable.innerHTML += `
          <tr>
              <td> ${products.name}</td>
              <td> ${products.description}</td>
              <td> ${products.price}</td>
              <td>${products.rate}</td>
              <td>${products.category}</td>
               </tr>`;
        });
      }
      register.onclick = function () {
        event.preventDefault();
        if (name.value !== "" && price.value !== "" && rate.value !== ""&& type.value !== "") {
          alert("Registered Successfully");
          add();
          clear()
          show(products);
          setTimeout(() => {
            alertmessagesucses("product added success")
          }, 3000);
        } else {
          alert("Please fill all the fields correctly.");
        }
      };
      function add() {
        let newproduct = {
            id:products.length+1,
            name:name.value,
            description:desc.value,
            category: type.value,
            rate: parseInt(rate.value),
          price:parseInt(price.value),
        };
        console.log(newproduct);
        products.push(newproduct);
        console.log(products);
        alert(`${name.value} has add succsefuly`);
      }
      function clear() {
        name.value = "";
        type.selectedIndex = "0";
        rate.value=""
        price.value=""
        desc.value=""
      }
      function alertmessagesucses(chat) {
        message.style.display = "block";
        message.style.background = "green";
        message.innerHTML = chat;
        setTimeout(function () {
          message.style.display = "none";
        }, 3000);
        message.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      function filterproducts() {
        let statusFilter = document.getElementById("statusFilter").value;
        let filteredDoctors = products;
        if (statusFilter !== "all") {
          filteredDoctors = products.filter(
            (products) => products.category.toUpperCase() === statusFilter.toUpperCase()
          );
        }
        show(filteredDoctors);
      }
    function sortbyrate(){
        let sortr=products.sort((a,b)=>a.rate - b.rate)
        show(sortr)
        console.log(sortr)
    }
    function sortbyprice(){
        let sortp=products.sort((a,b)=>a.price - b.price)
        show(sortp)
        console.log(sortp)
    }
    function count() {
        document.getElementById('counted').innerHTML = `Total products: ${products.length}`
    }

function avg(){
    let filteredproducts = products
    filteredproducts = products.filter(
        (products) => products.category.toUpperCase() === "Electronics".toUpperCase()
      );
      let sum=0
      filteredproducts.forEach((products, index) => {
        sum+=products.rate;
      })
      console.log(sum)
      let avgre=sum/filteredproducts.length
      document.getElementById('avgerage').innerHTML = `avg of rate of electronics: ${avgre}`
}
function total(){
    let total=0
    products.forEach((products, index) => {
      total+=products.price;
    })
    
    document.getElementById('totalp').innerHTML = `sum of all products ${total}`
}
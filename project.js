  let cartCount = localStorage.getItem("cartCount")
                    ? parseInt(localStorage.getItem("cartCount"))
                    : 0;

    document.getElementById("cart-count").innerText = cartCount;

    function addToCart(book, price){

      cartCount++;

      document.getElementById("cart-count").innerText = cartCount;

      localStorage.setItem("cartCount", cartCount);

      showToast(book + " added to cart 🛒");
    }

    document.getElementById("searchBar")
    .addEventListener("keyup", function(){

      let value = this.value.toLowerCase();

      let books = document.querySelectorAll(".book");

      books.forEach(function(book){

        let text = book.innerText.toLowerCase();

        if(text.includes(value)){
          book.style.display = "block";
        }
        else{
          book.style.display = "none";
        }

      });

    });

    function darkMode(){

      document.body.classList.toggle("dark");

      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
      );

    }


    if(localStorage.getItem("darkMode") === "true"){
      document.body.classList.add("dark");
    }
==

    function wishlist(book){

      showToast(book + " added to wishlist ❤️");

    }

    function showToast(message){

      let toast = document.getElementById("toast");

      toast.innerText = message;

      toast.style.display = "block";

      setTimeout(function(){

        toast.style.display = "none";

      },2000);

    }

    function scrollToBooks(){

      document.getElementById("books-section")
      .scrollIntoView({
        behavior:"smooth"
      });

    }

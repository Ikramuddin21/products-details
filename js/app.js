const colorItems = document.querySelectorAll(".brand-color");
const allSize = document.querySelectorAll(".size_selected");
const closeModalButton = document.querySelectorAll(".close_modal_button");
const productWrapper = document.getElementById("product_wrapper");
const selectedImage = document.getElementById("selected_image");
const addToCart = document.getElementById("add_to_cart");
const productQnt = document.getElementById("product_quentity");
const tableBody = document.getElementById("table_body");
const openModalButton = document.getElementById("open_modal_button");
const modal = document.getElementById("myModal");

const productsData = [
  {
    id: 1,
    title: "Classy Modern Smart watch",
    img: "./images/img1.png",
    price: "99",
    disPrice: "89",
    colorName: "indigo",
    color: "#816BFF",
    sizeAndPrice: [
      { size: "S", price: "99" },
      { size: "M", price: "100" },
      { size: "L", price: "101" },
      { size: "XL", price: "102" },
    ],
  },
  {
    id: 2,
    title: "Modern watch",
    img: "./images/img2.png",
    price: "94",
    disPrice: "79",
    colorName: "sky",
    color: "#1FCEC9",
    sizeAndPrice: [
      { size: "S", price: "99" },
      { size: "M", price: "100" },
      { size: "L", price: "101" },
      { size: "XL", price: "102" },
    ],
  },
  {
    id: 3,
    title: "Classy Smart watch",
    img: "./images/img3.png",
    price: "99",
    disPrice: "89",
    colorName: "cyan",
    color: "#4B97D3",
    sizeAndPrice: [
      { size: "S", price: "99" },
      { size: "M", price: "100" },
      { size: "L", price: "101" },
      { size: "XL", price: "102" },
    ],
  },
  {
    id: 4,
    title: "Smart watch",
    img: "./images/img4.png",
    price: "99",
    disPrice: "89",
    colorName: "gray",
    color: "#3B4747",
    sizeAndPrice: [
      { size: "S", price: "99" },
      { size: "M", price: "100" },
      { size: "L", price: "101" },
      { size: "XL", price: "102" },
    ],
  },
];

const imgArr = [
  "./images/img1.png",
  "./images/img2.png",
  "./images/img3.png",
  "./images/img4.png",
];

// handle brand color selected & image changes
colorItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    colorItems.forEach((el) => el.classList.remove("border"));
    colorItems.forEach((el) => el.removeAttribute("id"));

    item.classList.add("border");
    item.setAttribute("id", "selected_color");
    selectedImage.src = imgArr[index];
  });
});

// handle size selected
allSize.forEach((item) => {
  item.addEventListener("click", () => {
    allSize.forEach((el) =>
      el.classList.remove("border-[#DBDFEA]", "border-primary")
    );
    allSize.forEach((el) => el.removeAttribute("id"));

    item.classList.add("border-primary");
    item.setAttribute("id", "selected_sizeAndPrice");

    const getPrice = item.getAttribute("data");
    document.getElementById("price").innerText = `$${getPrice.split("-")[1]}`;
    console.log(getPrice, "pri");
  });
});

const cart = [];
// handle add to cart
addToCart.addEventListener("click", () => {
  const selectedColor = document.getElementById("selected_color");
  const selectedSizeAndPrice = document.getElementById("selected_sizeAndPrice");

  const color = selectedColor.getAttribute("name");
  const getSizeAndPrice = selectedSizeAndPrice.getAttribute("data");
  const getSelectedImgSrc = selectedImage.getAttribute("src");
  const [size, price] = getSizeAndPrice.split("-");

  const addToCartData = {
    size,
    price,
    color,
    id: getSelectedImgSrc.includes("img1")
      ? 1
      : getSelectedImgSrc.includes("img2")
      ? 2
      : getSelectedImgSrc.includes("img3")
      ? 3
      : 4,
    image: getSelectedImgSrc,
  };

  cart.push(addToCartData);
  productQnt.innerText = cart.length;
  getCartData(cart);
});

// handle plus button

// handle cart data
const getCartData = (cart) => {
  const dataIdWise = Object.groupBy(cart, ({ id }) => id);

  const totalQuentity = Object.values(dataIdWise).reduce(
    (acc, items) => acc + +items.length,
    0
  );

  const totalPrice = Object.values(dataIdWise).reduce(
    (acc, items) => acc + items.reduce((acc, curr) => acc + +curr.price, 0),
    0
  );

  tableBody.innerHTML = `
  ${Object.entries(dataIdWise)
    .map(([key, value]) => {
      const calculatePrice = value.reduce((acc, cur) => acc + +cur.price, 0);

      return `<tr class="border-b border-gray-200 text-secondary">
        <td
          class="px-4 py-6 text-center flex flex-col sm:flex-row items-center gap-2"
        >
          <img
            class="w-[36px] h-[40px]"
            src=${value[0].image}
            alt=""
          /><span>Classy Modern Smart watch</span>
        </td>
        <td class="px-4 py-6 text-center capitalize">${value[0].color}</td>
        <td class="px-4 py-6 font-semibold text-center">${value
          .map(({ size }) => size)
          .join(",")}</td>
        <td class="px-4 py-6 text-center">${value.length}</td>
        <td class="px-4 py-6 text-center font-semibold">$${calculatePrice}</td>
      </tr>`;
    })
    .join("")}
  <tr class="font-semibold text-secondary">
    <td class="px-4 py-6" colspan="3">Total</td>
    <td class="px-4 py-6 text-center">${totalQuentity}</td>
    <td class="px-4 py-6 text-center">$${totalPrice}</td>
  </tr>`;

  console.log(cart, "cart");
};

// open modal
openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// close modal
closeModalButton.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});

// close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

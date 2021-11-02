const pricingoptions = [
  // Item 1: Objects
  {
    title: 'Basic account',
    price: 'Free',
    bylines: ['1 Professional Template', 'Download to PDF', 'YachtLink Branding', 'Login to Account']
  },

  // Item 2: Objects
  {
    title: 'Full Access',
    price: '$ 12 / month',
    bylines: ['20+ Professional template designs', 'Login and Update CV', 'Unlimited PDF downloads', 'Mail CV from Account']
  }
];

const addPricing = () => {
  document.getElementById("pricing").innerHTML = ""; // = ""; allows for one click on get started

  for(let i=0; i < pricingoptions.length; i++){ //comparative 
    const ul=document.createElement('ul');

    ul.className = "price";

    // Title
    let newLi = document.createElement('li');
    newLi.className = "header";
    newLi.innerHTML = pricingoptions[i].title;
    ul.appendChild(newLi);

    // Pricing
    newLi = document.createElement('li');
    newLi.className = "grey";
    newLi.innerHTML = pricingoptions[i].price;
    ul.appendChild(newLi);

    // Sub-items
    pricingoptions[i].bylines.forEach(item => {
      newLi = document.createElement('li');
      newLi.innerHTML = item;
      ul.appendChild(newLi);
    });

    // Create CV button
    newLi = document.createElement('li');
    newLi.className = "grey";
    newLi.innerHTML = '<a href="#" class="button">Create CV</a>';
    ul.appendChild(newLi); 

    // Append to pricing container
    document.getElementById("pricing").appendChild(ul)
  }
}

// Login Modal

document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});
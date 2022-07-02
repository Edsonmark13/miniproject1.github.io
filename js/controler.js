function changeImage(el){

    let testimonial_list = document.getElementById("testimonial-list");

    for(let i = 0; i < testimonial_list.childElementCount; i++){
        testimonial_list.children[i].classList.add("d-none");
        el.parentElement.children[i].children[0].classList.remove("active");
    }

    for(let i = 0;  i < el.parentElement.childElementCount; i++){
        if(el == el.parentElement.children[i]){
            testimonial_list.children[i].classList.remove("d-none");
            el.children[0].classList.add("active");        
        }
    }
}

let testimonialUsers = document.getElementById("users");
let testimonialContainer = document.getElementById("testimonial-list");
let testimonials = [
  "I have been trying to learn html and javascript for the past few days, but I couldn't understand a thing. I was about to give up when I found WeLearn. This website is amazing - it walks you through step by step instructions and has a bunch of examples. It's the best way to learn html and JavaScript!",
  'I have tried many different websites to learn html and javascript, but WeLearn by far is the easiest. The design is clean and the examples are easy to follow. I love that you can see your progress on the site, so you know when you are ready for a new challenge.',
  "I've tried every css and html tutorial website there is and I just couldn't seem to find the one that worked for me. I am so happy that I found WeLearn.com it is a friendly website with great examples, but it also has all the tutorials you will ever need all in one spot!"
];
function getUsers() {
    fetch("https://randomuser.me/api/?results=3")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        //console.log(data.results[0].picture.thumbnail);

        let testimonialContainerResult = "";
        let htmlResult = "";
        for(let i = 0; i < data.results.length; i++){

            let testimonialContainerItems = '   <div class="testimonial-container-item shadow';
            testimonialContainerItems+= i == 0 ? ' ">' : ' d-none">';
            testimonialContainerItems+='    <div style="width: 100%;  font-size: 50px;" class="d-flex justify-content-start align-items-start">';
            testimonialContainerItems+='    <span><i class="fa-solid fa-quote-left text-red"></i></span>';
            testimonialContainerItems+='    </div>';
            testimonialContainerItems+='    <p class="px-5 fs-4">' + testimonials[i] +'<br><span class="fs-6">- '+ data.results[i].name.title + '. ' + data.results[i].name.first + " " + data.results[i].name.last+'</span></p>';
            testimonialContainerItems+='    <div style="width: 100%;  font-size: 50px;" class="d-flex justify-content-end align-items-start">';
            testimonialContainerItems+='        <span><i class="fa-solid fa-quote-right text-red"></i></span>';
            testimonialContainerItems+='    </div>';
            testimonialContainerItems+='    <div style="width: 100%;  font-size: 50px;" class="d-flex justify-content-center gap-2">';
            testimonialContainerItems+='        <div class="star-circle d-flex justify-content-center">';
            testimonialContainerItems+='            <i class="fa-solid fa-star text-red"></i>';
            testimonialContainerItems+='        </div>';
            testimonialContainerItems+='        <div class="star-circle d-flex justify-content-center">';
            testimonialContainerItems+='            <i class="fa-solid fa-star text-red"></i>';
            testimonialContainerItems+='        </div>';
            testimonialContainerItems+='        <div class="star-circle d-flex justify-content-center">';
            testimonialContainerItems+='            <i class="fa-solid fa-star text-red"></i>';
            testimonialContainerItems+='        </div>';
            testimonialContainerItems+='        <div class="star-circle d-flex justify-content-center">';
            testimonialContainerItems+='            <i class="fa-solid fa-star text-red"></i>';
            testimonialContainerItems+='        </div>';
            testimonialContainerItems+='        <div class="star-circle d-flex justify-content-center">';
            testimonialContainerItems+='            <i class="fa-solid fa-star text-red"></i>';
            testimonialContainerItems+='        </div>';
            testimonialContainerItems+='    </div>';
            testimonialContainerItems+='</div>';

            testimonialContainerResult += testimonialContainerItems;

            let html = '<span onmouseover="changeImage(this)">';
            html += i == 0 ? '         <img class="active"' : '         <img class=""';
            html+= ' src="'+ data.results[i].picture.medium+'" alt="">';
            html +='     </span>';

            htmlResult += html;
        }

        testimonialUsers.innerHTML = htmlResult;
        testimonialContainer.innerHTML = testimonialContainerResult;
      });
  }
  
getUsers();
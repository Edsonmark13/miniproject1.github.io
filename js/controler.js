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
            testimonialContainerItems+='    <p class="px-5 fs-4">adjalsd asdja skdja lskdja skdj alsdj jakdj alk ladh akdh ajhajsdh shg shfg';
            testimonialContainerItems+='        shdf sdhgf';
            testimonialContainerItems+='        sfhashf sj form-checksf sfk hs <br><span class="fs-6">- '+ data.results[i].name.title + '. ' + data.results[i].name.first + " " + data.results[i].name.last+'</span></p>';
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
let recommendedContainer = document.getElementById('recommended');
let popularContainer = document.getElementById('popular');
let onGoingContainer = document.getElementById('ongoing');

//loading screen
loadingScreen(recommendedContainer, 5);
loadingScreen(popularContainer, 5);
loadingScreen(onGoingContainer, 5);

getExpertize();
getUsers();

function loadingScreen(container, size){
  let loading = '';
  for(let i = 0; i < size; i++){
    loading += ' <div class=" col card ms-3" aria-hidden="true">';
    loading+='<img src="../img/placeholderimage.png" class="card-img-top" style = "border-radius: 50px; height: 60px; width: 60px; margin: auto; opacity: 50%; margin-top: 10px" alt="...">';
    loading+='<div class="card-body">';
    loading+='  <h5 class="card-title placeholder-glow">';
    loading+='    <span class="placeholder bg-secondary col-6"></span>';
    loading+='  </h5>';
    loading+='  <p class="card-text placeholder-glow">';
    loading+='    <span class="placeholder bg-secondary col-7"></span>';
    loading+='    <span class="placeholder bg-secondary col-4"></span>';
    loading+='    <span class="placeholder bg-secondary col-4"></span>';
    loading+='    <span class="placeholder bg-secondary col-6"></span>';
    loading+='    <span class="placeholder bg-secondary col-8"></span>';
    loading+='  </p>';
    loading+='</div>';
    loading+='</div>';
  }
  container.innerHTML = loading;
}

function getUsers() {
  fetch("https://randomuser.me/api/?results=20")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      console.log(data);
      recommendHightLight(data.results[0]);
      //alert(data.results.length);
      for(let i = 1; i < data.results.length; i++){
        //alert(i);
        recommend(data.results[i], i);
      }
      recommendedContainer.innerHTML = finalRecommendResults;
      popularContainer.innerHTML = finalPopularResults;
      onGoingContainer.innerHTML = finalOngoingResults;
    });
}
//recommended
let finalRecommendResults ="";
let finalPopularResults ="";
let finalOngoingResults ="";

function recommendHightLight(data){
  let result = '<div class="col-lg-5 mentor-container recommend-me shadow">';
  result +='<div class="row mt-3">';
  result +='    <div class="col-4 text-center">';
  result +='        <img src="'+data.picture.large+'" alt=""';
  result +='            class="img-fluid mentor-profile-pic">';
  result +='            <div class="row">';
  result +='                <div class="col social-links">';
  result +='                    <a href=""><i class="fa-brands fa-instagram"></i></a>';
  result +='                    <a href=""><i class="fa-brands fa-twitter"></i></a>';
  result +='                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>';
  result +='                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>';
  result +='                </div>';
  result +='            </div>';
  result +='    </div>';
  result +='    <div class="col-7">';
  result +='        <div class="row tags-container">';
  result +='            <div class="d-flex">';
  result +=                 getExpertize();
  result +='            </div>';
  result +='        </div>';
  result +='        <div class="row mt-3">';
  result +='            <h1 class="lead">'+ data.name.first + ' ' + data.name.last + ' ';
  result +='               ' + getIsVerified()+ ' ';
  result +='              </h1>';
  result +='        </div>';
  result +='        <div class="row">';
  result +='            <span style="font-size: 14px;" class="mt-2">'+ data.gender + ' ' + data.dob.age +' years old</span>';
  result +='        </div>';
  result +='        <div class="row">';
  result +='            <span style="font-size: 14px;" class="mt-2">+'+ data.phone +'</span>';
  result +='        </div>';
  result +='        <div class="row">';
  result +='            <span style="font-size: 14px;" class="mt-2">'+ data.location.country +'</span>';
  result +='        </div>';
  result +='        <div class="row ratings mt-3">';
  result +='            <div class="col">';
  result +='                <i class="fa-solid fa-star"></i>';
  result +='                <i class="fa-solid fa-star"></i>';
  result +='                <i class="fa-solid fa-star"></i>';
  result +='                <i class="fa-solid fa-star"></i>';
  result +='                <i class="fa-solid fa-star"></i>';
  result +='                <span> | (5)</span>';
  result +='            </div>';
  result +='        </div>';
  result +='        <div class="row">';
  result +='           ';
  result +='        </div>';
  result +='    </div>';
  result +='    <div class="row recommend-me-bottom-container mt-2">';
  result +='        <div class="col-6 mt-1">';
  result +='            <span class="p-3">php '+ getRatePerHour() +'/hr</span>';
  result +='        </div>';
  result +='        <div class="col-6 mt-1">';
  result +='            <span class="p-3"><a href="">Message</a></span>';
  result +='        </div>';
  result +='    </div>';
  result +='</div>';
result +='</div>';
finalRecommendResults += result;
}
function recommend(data, i){
  let result = '<div class=" col mentor-container shadow text-center">';
  result+='<div class="row mt-3">';
  result+='    <div class="col">';
  result+='        <img src="'+data.picture.large+'" alt=""';
  result+='            class="img-fluid mentor-profile-pic-1">';
  result+='    </div>';
  result+='</div>';
  result+='<div class="row tags-container">';
  result+='    <div class="d-flex justify-content-center">' + getExpertize();
  result+='    </div>';
  result+='</div>';
 result+=' <div class="row mt-1">';
  result+='    <p class="mt-1 mentor-name"><strong>'+ data.name.first + ' ' + data.name.last +'</strong> ' + getIsVerified() + '</p>';
  result+='</div>';
  result+='<div class="row">';
  result+='    <span style="font-size: 14px; margin-top: -10px;" class="">' + data.gender + ' ' + data.dob.age +' years old</span>';
  result+='</div>';
  result+='<div class="row text-dark text-light mentor-rating-price mt-1">';
  result+='    <div class="col text-end" style="font-size: 10px;">';
  result+='        <div class="col mt-1">';
  result+='            <i class="fa-solid fa-star"></i>';
  result+='            <i class="fa-solid fa-star"></i>';
  result+='            <i class="fa-solid fa-star"></i>';
  result+='            <i class="fa-solid fa-star"></i>';
  result+='        </div>';
  result+='    </div>';
  result+='    <div class="col text-start" style="font-size: 15px">';
 result+='         '+ getRatePerHour() +'/hr';
  result+='    </div>';
  result+='</div>';
  result+='<div class="row recommend-me-bottom-container-1 mt-5">';
  result+='    <div class="col-12 mt-1">';
  result+='        <span class="p-3"><a href="">Message</a></span>';
  result+='    </div>';
  result+='</div>';
result+='</div>';

if(i < 4){
  finalRecommendResults += result;
}else if( i < 9){
  finalPopularResults += result;
}else if(i < 14){
  finalOngoingResults += result;
}

}

function getExpertize(){
  let exps = ['CSS','Javascript','Bootstrap', 'HTML'];
  let rnd = Math.floor(Math.random() * exps.length);

  let result = '';
  if(rnd == 0){rnd = 1;}
  for(let i = 0; i < rnd; i++){
    result += '<span class="tag">'+ exps[i] +'</span>';
  }
  return result;
}

function getRatePerHour(){
  let ratePerHour = Math.floor(Math.random() * 1000);
  return ratePerHour < 100 ? 100 : ratePerHour;
}

function getIsVerified(){
  let rnd = Math.floor(Math.random() * 1000);
  let verifiedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">';
  verifiedIcon += '<path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>';
  return rnd % 2 == 0 ? verifiedIcon : "";
}
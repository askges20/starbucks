const searchEl = document.querySelector('.search');

//const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

/* focus 해제 */
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')

toTopEl.addEventListener('click',function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

/* lodash 이용 -> 스크롤 시 출력되는 console log 개수 제한 */
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY)
  if(window.scrollY>500){ //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else{ //배지 보이기
    badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
},300));
// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl,1,{
    delay:(index+1)*.7,
    opacity:1
  });
});


//new : 생성자(클래스)
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay:true,  //자동 재생
  loop:true   //반복 재생
});


new Swiper('.promotion .swiper-container',{
  //direction:'horizontal', //기본으로 horizontal로 설정됨
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween:10,  //슬라이드 사이 여백
  centeredSlides:true,  //1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay: {  //객체로 할당해서 추가적인 옵션 작성 가능
    delay:5000 //기본 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자가 페이지 번호 요소를 제어할 수 있는지 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',  //이전 버튼 선택자
    nextEl: '.promotion .swiper-next'   //다음 버튼 선택자
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');  //숨김
  } else {
    promotionEl.classList.remove('hide');
  }
})

function random(min, max){
  //.toFixed : 문자 데이터 반환
  //parseFloat : 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1, //무한 반복
      yoyo: true, //한번 재생된 애니메이션을 역재생
      ease: Power1.easeInOuteaseInOut,
      delay:random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
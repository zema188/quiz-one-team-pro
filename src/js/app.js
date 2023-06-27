"use strict"
// function changerActive(list) {
//     for(let i = 0; i < list.length; i++) {
//         list[i].classList.remove('active')
//     }
//     list = 0
// }
// // scroll document false

// function is_touch_device() {
//     return ('ontouchstart' in window);
//   }
  
//   function bodyFixed() { //scroll - false
//     if(is_touch_device()) {
//       document.body.classList.add('fixed')
//     } else {
//       let x=window.scrollX;
//       let y=window.scrollY;
//       window.onscroll=function(){window.scrollTo(x, y);};
//     }
//   }
  
//   function bodyNotFixed() { // scroll - true
//     if(is_touch_device()) {
//       document.body.classList.remove('fixed')
//     } else {
//       window.onscroll=function(){window.scrollTo()};
  
//     }
//   }

  
// //production block
// let category = document.querySelectorAll('.production__categorys-item')
// let categoryList = document.querySelectorAll('.production__list-w')

// function changerActive(list) {
//     for(let i = 0; i < list.length; i++) {
//         list[i].classList.remove('active')
//     }
//     list = 0
// }

// for(let i=0 ; i < category.length ; i++) {
//     category[i].addEventListener("click",
//     function() {
//         changerActive(category)
//         changerActive(categoryList)
//         category[i].classList.add('active')
//         categoryList[i].classList.add('active')
//         if(window.innerWidth < 1278) {
//             $('body,html').animate({
//                 scrollTop: $('.production__blocks').offset().top-100
//             },500);
//         }
//     })
// }

// let productionQuestion = document.querySelectorAll('.production__item-questions-item')
// let productionQuestionText = document.querySelectorAll('.production__questions-text')
// for(let i=0 ; i < productionQuestion.length ; i++) {
//     productionQuestion[i].addEventListener("click",
//     function() {
//         $(productionQuestionText[i]).slideToggle(400);
//     })
// }


// //hits swiper
// const swiperHits = new Swiper('.hits__swiper', {
//     slidesPerView: 1,
//     navigation: {
//         nextEl: '.hits__next',
//         prevEl: '.hits__prev',
//     },
//     pagination: {
//         el: '.hits__pagination',
//         type: 'bullets',
//         clickable: true,
//       },
// })


// //completed block
// let completedCategory = document.querySelectorAll('.completed__categorys-item')
// let completedCategoryList = document.querySelectorAll('.completed__list')

// for(let i=0 ; i < completedCategory.length ; i++) {
//     completedCategory[i].addEventListener("click",
//     function() {
//         changerActive(completedCategory)
//         changerActive(completedCategoryList)
//         completedCategory[i].classList.add('active')
//         completedCategoryList[i].classList.add('active')
//     })
// }

// //header
// window.onscroll = function() {headerFixed()};

// let header = document.querySelector(".header-w");

// let sticky = header.offsetTop;

// function headerFixed() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("fixed");
//     document.querySelector('.preview').style.paddingBottom = "127px"
//   } else {
//     header.classList.remove("fixed");
//     document.querySelector('.preview').style.paddingBottom = "47px"
//   }
// }
// if (window.pageYOffset >= sticky) {
//     header.classList.add("fixed");
//     document.querySelector('.preview').style.paddingBottom = "127px"
//   } else {
//     header.classList.remove("fixed");
//     document.querySelector('.preview').style.paddingBottom = "47px"
//   }

// //produce swiper
// function createSwiperProduce(number) {
//     const swiperProduce = new Swiper('.produce__swiper', {
//         slidesPerView: 1,
//         navigation: {
//             nextEl: '.produce__next',
//             prevEl: '.produce__prev',
//         },
//         allowTouchMove: false,
//         initialSlide: number,
//     })
// }
// //completed swiper
// function createSwiperCompleted(number) {
//     const swiperCompleted = new Swiper('.completed__swiper', {
//         slidesPerView: 1,
//         navigation: {
//             nextEl: '.completed__next',
//             prevEl: '.completed__prev',
//         },
//         allowTouchMove: false,
//         initialSlide: number,
//     })
// }


// //Popup close 
// document.addEventListener("click",
// function(event) {
//   event = event || window.event;
//   let target = event.target
//   if(target.classList.contains('popup')) {
//     target.classList.remove('active')
//     bodyNotFixed()
//     // bodyNotFixed()
//   }
//   if(target.classList.contains('completed__slide')) {
//     target.closest(".popup").classList.remove('active')
//     bodyNotFixed()
//   }
// }
// )

// let popupClose = document.querySelectorAll('.popup-close')
// for(let i=0 ; i < popupClose.length ; i++) {
//     popupClose[i].addEventListener("click",
//     function() {
//         popupClose[i].closest('.popup').classList.remove('active')
//         bodyNotFixed()
//     })
// }

// // create produce swiper
// let produceListItem = document.querySelectorAll('.production__item-btn')
// let producePopup = document.querySelector('.produce__popup')
// for(let i=0 ; i < produceListItem.length ; i++) {
//     produceListItem[i].addEventListener("click",
//     function() {
//         createSwiperProduce(i)
//         producePopup.classList.add('active')
//         bodyFixed()
//     })
// }

// // create competed swiper
// let completedListItem = document.querySelectorAll('.completed__list-pic')
// let completedPopup = document.querySelector('.completed__popup')
// for(let i=0 ; i < completedListItem.length ; i++) {
//     completedListItem[i].addEventListener("click",
//     function() {
//         createSwiperCompleted(i)
//         completedPopup.classList.add('active')
//         bodyFixed()
//     })
// }

// //Change preview img on popup completed

// let completedGalleryItem = document.querySelectorAll('.completed__slide-gallery-item')

// for(let i=0 ; i < completedGalleryItem.length ; i++) {
//     completedGalleryItem[i].addEventListener("click",
//     function() {
//         let previewPic = completedGalleryItem[i].closest('.completed__slide-pics').querySelector('.completed__slide-preview-pic')
//         let img = completedGalleryItem[i].innerHTML
//         previewPic.innerHTML = ""
//         previewPic.innerHTML = img
//     })
// }

// //videos
// let videoPlay = document.querySelectorAll('.videos__item-play')

// for(let i=0 ; i < videoPlay.length ; i++) {
//     videoPlay[i].addEventListener("click",
//     function() {
//         let videoItem = videoPlay[i].closest('.videos__item-content')
//         videoItem.classList.add('active')
//     })
// }

// //Menu mobile
// let nav_icon = document.querySelectorAll('#nav-icon')
// let headerMobile = document.querySelector('.header-m')
// document.querySelector('.header__menu').onclick = function() {
//   document.querySelector('.header__menu').classList.toggle('active')
//   headerMobile.classList.toggle('active')
//   for(let i = 0; i < nav_icon.length;i++) {
//     nav_icon[i].classList.toggle('open')
//   }
// }

// // Size-control
// window.addEventListener('resize', function(event){
//     if(window.innerWidth > 1278) {
//       document.querySelector('.header__menu').classList.remove('active')
//       document.querySelector('.header-m').classList.remove('active')
//       for(let i = 0; i < nav_icon.length;i++) {
//         nav_icon[i].classList.remove('open')
//       }
//     }
// })

// let formCallBtn = document.querySelectorAll('.form-btn')
// let formCall = document.querySelector('.form-call-me')
// for(let i=0 ; i < formCallBtn.length ; i++) {
//     formCallBtn[i].addEventListener("click",
//     function() {
//         formCall.classList.add('active')
//         bodyFixed()
//     })
// }


// // form call-me

// const formCallMe = document.querySelector('.form-call-me')
// formCallMe.addEventListener('submit', formSend)

// async function formSend(e) {
//     e.preventDefault();
//     let error = formValidate(formCallMe)

//     let formData = new FormData(formCallMe)
//     if(error === 0 ) {
//         formCallMe.classList.add('_sending');
//         let response = await fetch('../sendmail.php', {
//             method: 'POST',
//             body: formData
//         });
//         if(response.ok) {
//             let result = await response.json();
//             alert(result.message);
//             formCallMe.reset();
//             formCallMe.classList.remove('_sending');
//         } else {
//             alert('Ошибка!')
//             formCallMe.classList.remove('_sending');
//         }
//     } else {

//     }
// }

// function formValidate(form) {
//     let error = 0
//     let formReq = document.querySelectorAll('.req');

//     for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);
//         if(input.classList.contains('form-call-me__mail')) {
//             if(emailTest(input)) {
//                 formAddError(input)
//                 error++
//             }
//         }
//         if(input.classList.contains('form-call-me__name')) {
//             if(input.value == 0) {
//                 formAddError(input)
//                 error++
//             }
//         }
//         if(input.classList.contains('form-call-me__mob')) {
//             if(phoneTest(input)) {
//                 formAddError(input)
//                 error++
//             }
//         }
//     }
//     return error
// }

// function formAddError(input) {
//     input.classList.add('_error');
//     input.classList.add('_error')
// }

// function formRemoveError(input) {
//     input.classList.remove('_error');
//     input.classList.remove('_error')
// }

// function emailTest(input) {
//     return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(input.value)
// }

// function phoneTest(input) {
//     return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value)
// }

// // gallery click

// // check mobile
// function is_touch_device() {
//     return ('ontouchstart' in window);
// }

// let galleryPic = document.querySelectorAll('.lightbox-item')

// if(!is_touch_device()) {
//     for(let i=0 ; i < galleryPic.length ; i++) {
//         galleryPic[i].addEventListener("click",
//         function(event) {
//             event = event || window.event;
//             let target = event.target
//             let src = galleryPic[i].getAttribute('src')
//             createLightBoxPopup(src)
//             bodyFixed()
//         })
//     }
// }
// function createLightBoxPopup(name) {
//     let box = document.querySelector('.lightbox')
//     box.classList.add('active')
//     let lightboxPic = box.querySelector('.lightbox__img')
//     lightboxPic.setAttribute('src', name)
// }

// //scroll up

// function toTop() {
//     $('body,html').animate({scrollTop:0},500);
// }

// $(function() {
//     $('.up-btn').on('click', toTop);
//  })



//---------------------------------------------------------------------------------------------------
//поведение квиза
const btnStart = document.querySelector('.preview__btn-start')
const previewBlock = document.querySelector('.preview')
const quizBlock = document.querySelector('.quiz')
const quizHeader = document.querySelector('.quiz__header')
const quizFooter = document.querySelector('.quiz__footer')
const quizListBlocks = document.querySelector('.quiz__list-blocks')
const thanks = document.querySelector('.thanks')
const errorBlock = document.querySelector('.error-block')
const finalBlock = document.querySelector('.final')

const quizContentBlocks = quizBlock.querySelectorAll('.quiz__content')
let indexOfActiveQuizBlock = 0
const btnNext = quizBlock.querySelector('.btn-next')
const btnBack = quizBlock.querySelector('.btn-back')
const rangeLine = quizBlock.querySelector('.range__line').querySelector('span')
const rangeText = quizBlock.querySelector('.range__text').querySelector('span')

btnStart.onclick = function(e) {
    e.preventDefault();
    previewBlock.classList.add('animated')
    setTimeout(() => {
        quizBlock.classList.add('active')
        quizContentBlocks[indexOfActiveQuizBlock].classList.add('active')
    },600)
    
}

btnNext.onclick = function(e) {
    e.preventDefault()
    changeActiveQuizBlock(1)
}

btnBack.onclick = function(e) {
    e.preventDefault()
    changeActiveQuizBlock(-1)
}

function changeActiveQuizBlock(index) {
    quizContentBlocks[indexOfActiveQuizBlock].classList.remove('active')
    indexOfActiveQuizBlock += index
    rangeLineChangeProgress()

    if(indexOfActiveQuizBlock===quizContentBlocks.length) {
        quizContentBlocks[indexOfActiveQuizBlock-1].classList.remove('active')
        quizHeader.classList.add('hidden')
        quizFooter.classList.add('hidden')
        quizListBlocks.classList.add('hidden')
        finalBlock.classList.add('active')
        return
    }
    quizContentBlocks[indexOfActiveQuizBlock].classList.add('active')
    if(indexOfActiveQuizBlock!==0) btnBack.removeAttribute('disabled')
    if(indexOfActiveQuizBlock===0) btnBack.setAttribute('disabled', '')

    if(indexOfActiveQuizBlock!==quizContentBlocks.length-1) btnNext.classList.remove('last')
    if(indexOfActiveQuizBlock===quizContentBlocks.length-1) btnNext.classList.add('last')
    
}

// заполнение прогресса
function rangeLineChangeProgress() {
    const progress = 100/quizContentBlocks.length * indexOfActiveQuizBlock
    rangeLine.style.width = `${progress}%`
    rangeText.innerHTML = `${progress}%`
}

const nextStepRadioButton = document.querySelectorAll('.nextStep')
nextStepRadioButton.forEach(element => {
    element.addEventListener('input', function() {
        setTimeout(() => {
            changeActiveQuizBlock(1)
        },150)
    })
});


//выбор телефона
const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
  initialCountry: "auto",
  separateDialCode: true,
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "/intl-tel-input/js/utils.js?1687509211722" // just for formatting/placeholders etc
});

//отправка формы после валидации
const finalBtnSend = document.querySelector('.final__btn-send')
const agree = document.querySelector('.agree')
const mainForm = document.querySelector('#mainForm');
mainForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const countryCode = iti.getSelectedCountryData().dialCode;

    // Создаем новый объект FormData, передавая ему форму
    phoneInput.value = `${countryCode}${phoneInput.value}`;
    const formData = new FormData(event.target);

    if (!validation()) {
        finalBtnSend.classList.add('sending')
        finalBtnSend.classList.remove('is-blicked')
        fetch(event.target.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                console.log('Форма успешно отправлена');
            } else {
                console.log('Произошла ошибка при отправке формы');
            }
        })
        .then(() => {
            previewBlock.classList.remove('active')
            quizBlock.classList.remove('active')
            thanks.classList.add('active')
            
        })
        .catch(error => {
            console.log('Произошла ошибка при отправке формы');
            previewBlock.classList.remove('active')
            quizBlock.classList.remove('active')
            errorBlock.classList.add('active')
            finalBtnSend.classList.remove('sending')
            finalBtnSend.classList.add('is-blicked')
        });
    }
});

//сбор всех вопросов в массив questionsArray и отправка этих вопросов через скрытый questionsToSend
const questions = document.querySelectorAll('input[name="questions[]"]');
const questionsToSend = document.querySelector('input[name="questions"]');
const questionsArray = []
questions.forEach(element => {
    element.addEventListener('change', function() {
        const value = this.value;
        if (this.checked) {
            questionsArray.push(value);
          } else {
            const index = questionsArray.indexOf(value);
            if (index !== -1) {
                questionsArray.splice(index, 1);
            }
          }
    questionsToSend.value = questionsArray
    })
});

//даем бордер при значении в input с отдельныым вопрсом
const myQuestion = document.querySelector('input[name="myQuestion"]');
myQuestion.addEventListener('input', function() {
    if(this.value) myQuestion.classList.add('checked')
    else myQuestion.classList.remove('checked')
})

//валидация полей последней формы
function validation() {
    let errors = 0
    const inputsFinalForm = document.querySelectorAll('.final__input')
    inputsFinalForm.forEach(element => {
        if(element.getAttribute('name') == 'phone') {
            if(element.value.length === 0) {
                changeArrorClass(element, 0)
                errors++
            } else {
                changeArrorClass(element, 1)
            }
        }
        if(element.getAttribute('name') == 'name') {
            if(element.value.length === 0) {
                changeArrorClass(element, 0)
                errors++
            } else {
                changeArrorClass(element, 1)
            }
        }
        if(element.classList.contains('agree')) {
            if(!element.checked) {
                changeArrorClass(element, 0)
                errors++
            } else {
                changeArrorClass(element, 1)
            }
        }
    });
    return errors
}
const inputsFinalForm = document.querySelectorAll('.final__input')
console.log(inputsFinalForm)


// функция для добавления\удалениея класса error в инпутах 
function changeArrorClass(element, type) {
    const field = element.closest('.final__field')
    if(!type) field.classList.add('error')
    else field.classList.remove('error')
}

//запрещаем ввод чисел в поле Имя
const nameInput = document.querySelector('.final__input-name')
nameInput.addEventListener('keypress', function(event) {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);

  const regex = /^[a-zA-Zа-яА-ЯёЁ]+$/; // Регулярное выражение для проверки буквенных символов

  if (!regex.test(keyValue)) {
    event.preventDefault(); // Отмена ввода символа, если не является буквой
  }
});
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiper = new Swiper('.slider1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper.on('slideChange', function () {
  let a = swiper.realIndex + 1;
  document.getElementById('swiper1r').innerHTML = 'スライド'+ a +'を表示しています'

  if (a === 3) {
    document.getElementById('swip1tit').innerHTML = 'ウミサソリ'
  } else if (a === 2) {
    document.getElementById('swip1tit').innerHTML = 'レッドヘッドアガマ'
  } else if (a === 1) {
    document.getElementById('swip1tit').innerHTML = 'ウーパールーパー'
  }
});

const swiper2 = new Swiper('.slider2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper2.on('slideChange', function () {
  let b = swiper2.realIndex + 4;
  document.getElementById('swiper2r').innerHTML = 'スライド'+ b +'を表示しています'

  if (b === 6) {
    document.getElementById('swip2tit').innerHTML = 'マルメタピオカガエル'
  } else if (b === 5) {
    document.getElementById('swip2tit').innerHTML = 'ヒキガエル'
  } else if (b === 4) {
    document.getElementById('swip2tit').innerHTML = 'サカバンバスピス'
  }
});


import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
	errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '15文字以下で入力してください。',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
	errorMessage: '必須入力項目です。',
    },
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'email',
      errorMessage: '形式が正しくありません。',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
	errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
      errorMessage: '数字を1文字以上含む8文字以上で入力。',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
	errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
      errorMessage: '数字で入力してください。',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18以上の数字を入力してください。',
    },
    {
	    rule: 'maxNumber',
      value: 150,
      errorMessage: '150以下の数字を入力してください。',
    },
  ])
  .addField('#address', [
	{
	rule: 'required',
	errorMessage: '必須入力項目です。',
	},
	{
	rule: 'required',
  errorMessage: '必須入力項目です。',
	},
	{
	rule: 'maxLength',
	value: 30,
  errorMessage: '30文字以下で入力してください。',
	},
  ])
  
  .onSuccess(onSuccess);

  function onSuccess(event) {
    let formData = new FormData(event.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("age"));
    console.log(formData.get("address"));
  }
  
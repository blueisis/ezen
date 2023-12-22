// 카카오맵 --------------------------------------------------------------------------------------------

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = {
    center: new kakao.maps.LatLng(37.579188527133226, 126.8902011633167), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 표시할 div와 지도 옵션으로 지도를 생성

var imageSrc = './img/map_marker.png', // 마커이미지의 주소
  imageSize = new kakao.maps.Size(44, 48), // 마커이미지의 크기
  imageOption = { offset: new kakao.maps.Point(22, 24) }; // 마커이미지 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표 설정


var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption), // 마커의 이미지정보를 가지고 있는 마커이미지 생성
  markerPosition = new kakao.maps.LatLng(37.579188527133226, 126.8902011633167); // 마커가 표시될 위치입니다

var marker = new kakao.maps.Marker({ // 마커 생성
  position: markerPosition,
  image: markerImage // 마커이미지 설정 
});

marker.setMap(map); // 마커 지도 위에 표시

// 리사이즈할때
window.onresize = () => {
  map.setCenter(mapOption.center);
}

// form 이메일 전송 (emailJS) -----------------------------------------------------------------------

(function () {
  emailjs.init("ewy6TXsICPQkTq6WJ");
})();

window.onload = function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    this.contact_number.value = Math.random() * 100000 | 0; // name 값이 contact_number인 값에 5자리 숫자를 랜덤하게 생성

    emailjs.sendForm('blue', 'template_uvdizlw', this) // serviceID, templateID입력
      .then(function () {
        console.log('전송 완료');
        alert("Thank you !");
        form.reset();
      }, function (error) {
        console.log('전송 실패', error);
        alert("Please try again.");
      });
  });
}
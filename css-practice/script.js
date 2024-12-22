// 사이드 네비게이션 열기
const menuButton = document.querySelector('.menu-button');
const sideNav = document.querySelector('.side-nav');
const closeButton = document.querySelector('.close-btn');

// 햄버거 버튼 클릭 시 사이드 네비게이션 열기
menuButton.addEventListener('click', () => {
    sideNav.style.width = '50%'; // 사이드 네비게이션 너비 설정
});

// 닫기 버튼 클릭 시 사이드 네비게이션 닫기
closeButton.addEventListener('click', () => {
    sideNav.style.width = '0'; // 사이드 네비게이션 너비 0으로 설정
});

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';

}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    
}
function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}
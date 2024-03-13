const bulb = document.getElementById('bulb');
const btnOn = document.getElementById('btn-on');
const btnOff = document.getElementById('btn-off');
btnOn.addEventListener('click', () => {
 bulb.src = 'on_bulb.jpg';
});
btnOff.addEventListener('click', () => { 
    bulb.src = 'off_bulb.jpg';
}); 

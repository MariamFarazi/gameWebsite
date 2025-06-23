let game_box_1 = document.getElementById('game_box_1');
let game_box_1_left_btn = document.getElementById('game_box_1_left_btn');
let game_box_1_right_btn = document.getElementById('game_box_1_right_btn');

game_box_1_left_btn.addEventListener('click', () => {
    game_box_1.scrollLeft -= 250;
});

game_box_1_right_btn.addEventListener('click', () => {
    game_box_1.scrollLeft += 250;
});


// ===== them day & night style =====//
let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');

day_night2.style.display = "none";

day_night.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', '#fff');
    document.documentElement.style.setProperty('--color-2', '#000');
    document.documentElement.style.setProperty('--color-3', '#fff');
    day_night.style.display = 'none';
    day_night2.style.display = 'unset';
});

day_night2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', '#0e1b10');
    document.documentElement.style.setProperty('--color-2', '#fff');
    document.documentElement.style.setProperty('--color-3', '#07080e');
    day_night.style.display = 'unset';
    day_night2.style.display = 'none';
});
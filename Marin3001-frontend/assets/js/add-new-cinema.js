// JavaScript file that implement logic for add-new-cinema.html

import { CinemaAPI } from "/assets/js/cinemaAPI.js"

window.onload = (e) => {
    document.getElementById('home-button')?.addEventListener('click', () => { window.location.href = '/index.html' });
    document.getElementById('clear-all-fields-button')?.addEventListener('click', OnClearButtonClick);
    document.getElementById('create-cinema-button')?.addEventListener('click', OnCreateCinemaButonClick);
}

function OnClearButtonClick() {
    document.getElementById('name').value = '';
    document.getElementById('location').value = '';
    document.getElementById('movie').value = '';
    document.getElementById('rows').value = '';
    document.getElementById('seats').value = '';
}

async function OnCreateCinemaButonClick() {
    let cinema = {};

    cinema.id=100;

    const name = document.getElementById('name');
    if(!name) {
        alert('Name field is empty!')
        return;
    }
    cinema.name = name.value;

    const location = document.getElementById('location');
    if(!location) {
        alert('Location field is empty!')
        return;
    }
    cinema.location = location.value;

    

    const movie = document.getElementById('movie');
    if(!movie) {
        alert('Movie field is empty!')
        return;
    }
    cinema.movie = movie.value;

    
    const rows = document.getElementById('rows');
    if(!rows) {
        alert('Rows field is empty!')
        return;
    }
    cinema.rows = rows.value;

    const seats = document.getElementById('seats');
    if(!seats) {
        alert('Seats field is empty!')
        return;
    }
    cinema.seats = seats.value;
    
    const success = await CinemaAPI.AddNewCinema(cinema);
    if(success) {
        alert('Cinema successfully created')
        OnClearButtonClick();
    }
    
}
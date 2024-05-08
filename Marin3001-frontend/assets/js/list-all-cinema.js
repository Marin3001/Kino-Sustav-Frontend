// JavaScript file that implement logic for list-all-cinema.html

import { CinemaAPI } from "/assets/js/cinemaAPI.js"

window.onload = (e) => {
    document.getElementById('get-all-cinema-button')?.addEventListener('click', LoadTable);
    document.getElementById('clear-all-cinema-button')?.addEventListener('click', ClearTable);
    document.getElementById('home-button')?.addEventListener('click', () => { window.location.href = '/index.html' });
    ClearTable();
}

async function LoadTable() {
    const cinemas = await CinemaAPI.GetAllCinema();
    if(!cinemas) {
        console.error('Could not load cinemas.')
        return;
    }

    const table = document.getElementById('cinema-table');
    if(!table) {
        console.error('Could not find cinema table.')
        return;
    }


    ClearTable();

    let table_body = table.getElementsByTagName('tbody')?.[0];
    if(!table_body) {
        console.error('Could not find <tbody> in cinema table!');
        return;
    }

    // Add each row manually
    cinemas.forEach(e => {
        const row = document.createElement('tr');
        row.addEventListener('dblclick', () => { DeleteCinema(e.id) });

        

        row.innerHTML = `
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.location}</td>
                <td>${e.movie}</td>
                <td>${e.rows}</td>
                <td>${e.seats}</td>
        `
        table_body.appendChild(row)
    });

}

function ClearTable() {
    const table = document.getElementById('cinema-table');
    if(!table) {
        console.error('Could not find cinema table.')
        return;
    }
    table.innerHTML = `
    <thead>
        <tr>
            <th>Id</th>
            <th>name</th>
            <th>location</th>
            <th>movie</th>
            <th>rows</th>
            <th>seats</th>
            </tr>
    </thead>
    <tbody>

    </tbody>
    `;
}

export function DeleteCinema(cinemaId) {
    alert(`Deleting cinema with ID = ${cinemaId}`);
    CinemaAPI.DeleteCinema(cinemaId);
    ClearTable();
    LoadTable(); // Reload table
}
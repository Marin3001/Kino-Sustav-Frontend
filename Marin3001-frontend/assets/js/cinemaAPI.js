const Base_URL = 'http://localhost:5035'

class _CinemaAPI { 

    async GetAllCinema() {
        const URL = `${Base_URL}/api/Cinema`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            console.error('Could not get cinemas from the API!')
            return null;
        }

        return response.json();
    }

    // Returns true if successful and false if failed
    async AddNewCinema(cinema) {
        const URL = `${Base_URL}/api/Cinema`;
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cinema)
        });

        if(!response.ok) {
            console.error('Could not create new cinema.')
            if(response.status === 400) { /* Bad Request */
                alert(await response.text())
            }
            return false;
        }

        return true;
    }

    async DeleteCinema(cinemaId) {
        const URL = `${Base_URL}/api/Cinema/${cinemaId}`;
        const response = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            console.error(`Could not delete cinema with id = ${cinemaId}.`)
            if(response.status === 400) { /* Bad Request */
                alert(await response.text())
            }
        }
    }

}

export const CinemaAPI = new _CinemaAPI();
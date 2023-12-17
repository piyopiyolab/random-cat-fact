const main = async () => {
    console.log("script index.js loaded")
    const apiUrl = 'https://catfact.ninja/fact';


    //API CONNECTION
    const fetchCatFact = async () => {
        let error = null;
        let data = null;

        try {
            const response = await fetch(apiUrl)
            data = await response.json();

        }
        catch (error) {
            error = error.message;
            console.error(error);
        }
        finally {
            return data

        }

    }

    //End API Connection

    //Display in HTML

    const displayRandomFacts = async () => {
        const data = await fetchCatFact();
        const fact = data.fact;

        const factElt = document.getElementById('api-data');
        factElt.innerText = fact;

    }

    const btnNewFact = async () => {
        displayRandomFacts();

    }



    //init function

    fetchCatFact();
    displayRandomFacts();
    window.addEventListener('click', btnNewFact);
    // end main async
}

window.addEventListener('load', main)

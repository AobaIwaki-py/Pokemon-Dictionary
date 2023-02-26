function show_pokemon(pokemon_number){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_number}/`;
    fetch(url)
    .then(function (data) {
        return data.json(); // 読み込むデータをJSONに設定
    })
    .then(function (json) {
            const element = document.getElementById('canvas');
            const htmlString = `
                <p>Id: ${json["id"]}</p>
                <p>Name: ${json["name"]}</p>
                <img src="${json["sprites"]["front_default"]}" alt="${json["name"]}">
                `;
            element.innerHTML = htmlString;
    });
}

// on page load
window.onload = () => {
    // when the client hits the ENTER key
    document.getElementById("data").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const inputElement = document.getElementById("data");
            var pokemon_number = inputElement.value;
                show_pokemon(pokemon_number);
        }
    });
};
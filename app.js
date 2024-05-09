$(document).ready(() => {
    beforeFetch()
    $("#btn").on("click", function () {
        let pokemonInput = $("#pokemon").val().trim().toLowerCase()
        getPokemon(pokemonInput)
    })
    $('#cryBtn').on('click', playAudio)
    $('#pokemon').on('input', () => {
        let nameChosen = $("#pokemon").val().trim()
        $('#cryBtn').text(nameChosen + " " + 'cry')
        validPokemon()
        $('.result').addClass('hidden')
        $('#cry').addClass('hidden')
    })

})

// const type = ['fairy', 'dragon', 'grass', "electric", "fire", 'water' ]


async function getPokemon(pokemon) {
    if (!pokemon) {
        return
    }
    getPokemonFromApi(pokemon)
}

async function getPokemonFromApi(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}?limit=1`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        showName(data)
        console.log(data);
    } catch (error) {
        invalidPokemon()
        console.error("There was an error fetching the data ", error);
    }
}

function showName(data) {
    let { id, sprites, types } = data
    let { cries } = data
    let firstType = Object.values(types)[0]
    let firstImg = Object.values(sprites)[6]
    $("#myAudio").attr('src', cries.latest)
    $("#type").html(firstType.type.name)
    $("#id").html(id)
    $('#imgSrc').attr('src', firstImg)
    afterFetch()
}

function beforeFetch() {
    $('.result').addClass('hidden')
    $('#cry').addClass('hidden')
}

function afterFetch() {
    $('.result').removeClass('hidden')
    $('#cry').removeClass('hidden')
}

// function bgColor(type) {
//     if (type == types[])
// }

function invalidPokemon() {
    $("#errorHeader").removeClass("hidden")
}


function validPokemon() {
    $("#errorHeader").removeClass("visible")
    $("#errorHeader").addClass("hidden")

}

function playAudio() {
    let audio = $("#myAudio")[0]
    audio.play();
}

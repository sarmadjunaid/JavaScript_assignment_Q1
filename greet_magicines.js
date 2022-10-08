const magicines = ["Sarmad", "Junaid", "Khan", "Niazi"]

const show_magicines = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

const make_greet = (arr) => {
    const updated_arr = []
    for (let i = 0; i < arr.length; i++) {
        updated_arr[i] = `Greetings! ${arr[i]}`
    }
    return updated_arr
}

show_magicines(magicines)

const arr = make_greet(magicines)

show_magicines(arr)

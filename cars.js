const carInfo = (manufacture, model, ...info) => {
    return {
        "manufactureName": manufacture,
        "modal": model,
        ...info 
    }
}


const info = carInfo("Honda", "Civic", {"color": "black", "optionalFeature": "Sun roof"})

console.log(info)
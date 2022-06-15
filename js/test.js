listDict = [{name: "Lorem Ipsum", role: "Developer", img: "assets/photos/Face.jpg"}, {name: "Lorem Ipsum", gender: "Engineer", img: "assets/photos/Face2.jpg"}]
console.log(listDict[0])

function createElementGenerators() {
    var generatorsTing = document.getElementById('generators')
    var outerDiv = document.createElement("div")
    outerDiv.classList.add("person")
    
    var photoDiv = document.createElement("div")
    photoDiv.classList.add('photo')
    var photoImg = document.createElement("img")
    photoImg.src = listDict[0].img
    photoDiv.appendChild(photoImg)

    var nameDiv = document.createElement("div")
    nameDiv.classList.add('name')

    var roleDiv = document.createElement("div")
    roleDiv.classList.add('role')

    outerDiv.appendChild(photoDiv)
    outerDiv.appendChild(nameDiv)
    outerDiv.appendChild(roleDiv)


    console.log("Cimnt")
    generatorsTing.appendChild(outerDiv)

}

function createElementImplementors() {
    console.log("Cimnt")
}
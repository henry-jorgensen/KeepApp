listDict = [{name: "Lorem Ipsum", role: "Developer", img: "assets/photos/Face.jpg"}, {name: "Lorem Ipsum", gender: "Engineer", img: "assets/photos/Face2.jpg"}]
console.log(listDict[0])

function createElements(type) {
    var index
    if (type == "Generator"){
        index = 0
    } else if (type == "Implementor"){
        index = 1
    }

    var generatorsTing = document.getElementById('generators')
    var outerDiv = document.createElement("div")
    outerDiv.classList.add("person")
    
    var photoDiv = document.createElement("div")
    photoDiv.classList.add('photo')
    var photoImg = document.createElement("img")
    photoImg.src = listDict[index].img
    photoDiv.appendChild(photoImg)

    var nameDiv = document.createElement("div")
    nameDiv.classList.add('name')

    var roleDiv = document.createElement("div")
    roleDiv.classList.add('role')
    roleDiv.innerHTML = listDict[index].role
    nameDiv.innerHTML = listDict[index].name

    outerDiv.appendChild(photoDiv)
    outerDiv.appendChild(nameDiv)
    outerDiv.appendChild(roleDiv)

    generatorsTing.appendChild(outerDiv)

}
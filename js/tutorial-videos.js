
const sectionsData = [{id: 0, title: "What is Track my Kid?", completion: true }, 
                      {id: 1, title: "Download the app", completion: true}, 
                      {id: 2, title: "Register", completion: false}, 
                      {id: 3, title: "Lorem Ipsum", completion: false}, 
                      {id: 4, title: "Lorem Ipsum", completion: false}]


const videoLinks = [{id: 0, video: "https://st.depositphotos.com/8469332/53417/v/600/depositphotos_534179478-stock-video-generic-php-source-code-building.mp4"}, 
                    {id: 1, video: "./assets/videos/DroneTest.mp4"}, 
                    {id: 2, video: "https://vod-progressive.akamaized.net/exp=1656393357~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1529%2F14%2F357646800%2F1460823501.mp4~hmac=7744db304d734e705b02ef95abb987a33cb9ef078211f7c56adc95c0e71123c3/vimeo-prod-skyfire-std-us/01/1529/14/357646800/1460823501.mp4?filename=video.mp4"}, 
                    {id: 3, video: ""}, 
                    {id: 4, video: ""}]

const videoDescriptions = [{id: 0, title: "test", description: "h12"},
                           {id: 1, title: "test", description: "h12"},
                           {id: 2, title: "test", description: "h12"},
                           {id: 3, title: "test", description: "h12"},
                           {id: 4, title: "test", description: "h12"},]

const sectionNodes = document.getElementsByClassName('section')

function fillSectionsLoop(){
    for (var i = 0; i < sectionsData.length; i++){
        createSection(sectionsData[i].id, sectionsData[i].title, sectionsData[i].completion)
    }
    for (var i = 0; i < sectionNodes.length; i++){
        sectionNodes[i].addEventListener('click', clickSection)
    }
}

const sections = document.getElementById('sections')

function createSection(id, title, done){  
    const section = document.createElement('div')
    section.id = id
    section.classList.add('section')

    if (id == 0){
        section.classList.add('section-active')
    }

    var sectionTitleDiv = document.createElement('div')
    sectionTitleDiv.classList.add('section-title')
    var sectionTitle = document.createElement('p')
    sectionTitle.textContent = title
    sectionTitleDiv.appendChild(sectionTitle)

    var sectionImageDiv = document.createElement('div')
    sectionImageDiv.classList.add('section-img')
    var sectionImage = document.createElement('img')

    if(done == true){
        sectionImage.src = "assets/general-icons/Tick-Fill.png"
    } else  {
        sectionImage.src = "assets/general-icons/Tick-Outline.png"
    }
    
    sectionImageDiv.appendChild(sectionImage)
    
    section.appendChild(sectionTitleDiv)
    section.appendChild(sectionImageDiv)
    sections.appendChild(section) 
    
}

function updateVideo(id){
    video.src = videoLinks[id].video
}

function clickSection(event){   
    if(menuBool == true){
        showMenu()
    }
    
    if (event.path[1].id){
        updateVideo(event.path[1].id)
    } else {
        updateVideo(event.path[2].id)
    }

    for (var i =0; i < sectionNodes.length; i++){
        sectionNodes[i].className = sectionNodes[i].className.replace(" section-active", "")
    }
    event.currentTarget.className += " section-active"

}

fillSectionsLoop()


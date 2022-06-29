const sectionsData = [{id: 0, title: "What is Track my Kid?", completion: true }, 
                      {id: 1, title: "Download the app", completion: true}, 
                      {id: 2, title: "Register", completion: false}, 
                      {id: 3, title: "Lorem Ipsum", completion: false}, 
                      {id: 4, title: "Lorem Ipsum", completion: false}]
                      

const videoLinks = [{id: 0, route: "https://st.depositphotos.com/8469332/53417/v/600/depositphotos_534179478-stock-video-generic-php-source-code-building.mp4"}, 
                    {id: 1, route: "./assets/videos/DroneTest.mp4"}, 
                    {id: 2, route: "https://vod-progressive.akamaized.net/exp=1656393357~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1529%2F14%2F357646800%2F1460823501.mp4~hmac=7744db304d734e705b02ef95abb987a33cb9ef078211f7c56adc95c0e71123c3/vimeo-prod-skyfire-std-us/01/1529/14/357646800/1460823501.mp4?filename=video.mp4"}, 
                    {id: 3, route: "https://vod-progressive.akamaized.net/exp=1656396686~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1588%2F14%2F357941044%2F1462749183.mp4~hmac=be40ee6356901a05b3a6f270aa16517fc59d9f8b11c3ff3235a158123dc75aee/vimeo-prod-skyfire-std-us/01/1588/14/357941044/1462749183.mp4?filename=video.mp4"}, 
                    {id: 4, route: "https://vod-progressive.akamaized.net/exp=1656396732~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4611%2F14%2F373057302%2F1551388846.mp4~hmac=abbbb3447a05399a19ed6ea62982acea3ebe184a88398cb9e4429d1779543efd/vimeo-prod-skyfire-std-us/01/4611/14/373057302/1551388846.mp4?filename=video.mp4"}]

const videoDescriptions = [{id: 0, title: "What is Track my Kid", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed fringilla urna. Fusce rutrum nibh in dapibus bibendum.  Pellentesque accumsan egestas aliquam. Aliquam laoreet mauris ut libero sodales sodales. Ut vitae magna dolor. Proin consequat, arcu non vehicula ornare, massa erat cursus nisl, vulputate hendrerit sapien metus quis augue. Maecenas a diam porttitor ipsum dictum faucibus quis a dolor. Nulla lacinia tempus mauris, vel rhoncus ante pretium id. Integer non interdum nunc. Vivamus purus tortor, sollicitudin dapibus luctus placerat, venenatis eu mi. Integer urna ligula, varius id auctor eget, sollicitudin vitae enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam felis elit, congue elementum lorem et, facilisis mattis magna. Donec quis porttitor ante.\nNullam ullamcorper eu leo et suscipit. Duis dictum, nunc id pellentesque aliquet, nulla odio tincidunt risus, sed congue eros magna eget orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vitae dui eu libero sodales condimentum sed eget odio. Ut eu pretium lorem. Praesent ac volutpat mauris, id elementum diam. Aenean ac sollicitudin elit, at accumsan quam. In hac habitasse platea dictumst. Cras facilisis facilisis quam sit amet molestie. In tincidunt sagittis lacus, at cursus sem placerat sit amet. Praesent ut ligula eget odio sagittis dapibus nec nec lorem. Integer purus ante, rutrum sed tortor sit amet, semper mollis nulla. Etiam a est nec nibh molestie imperdiet a non mauris. Suspendisse eget sodales odio. Quisque nec commodo dui.\n Suspendisse aliquam ex nec est auctor ullamcorper. Nunc eget laoreet ipsum. Suspendisse consequat sed enim ultrices interdum. Sed in mi vitae velit iaculis rutrum a et leo. Nam quis semper neque, ac porta turpis. Nunc ornare ipsum tempus velit condimentum sollicitudin. Duis elementum consectetur dui. Maecenas ornare lacus at tempor dignissim. Praesent porttitor est vitae sapien convallis ornare. Etiam maximus dapibus ex, nec pellentesque lacus scelerisque vel. Nunc semper, elit et finibus dictum, diam ex dapibus lorem, a eleifend ex ligula lacinia tellus."},
                           {id: 1, title: "Download the app", description: "h12"},
                           {id: 2, title: "Register", description: "h12"},
                           {id: 3, title: "Lorem Ipsum", description: "h12"},
                           {id: 4, title: "Lorem Ipsum", description: "h12"}]

const sectionNodes = document.getElementsByClassName('section')
const videoHoverTitle = document.getElementById('video-hover-title')

const videoTextContainer = document.getElementById('video-description-container')

function fillSectionsLoop(){
    for (var i = 0; i < sectionsData.length; i++){
        createSection(sectionsData[i].id, sectionsData[i].title, sectionsData[i].completion)
    }
    for (var i = 0; i < sectionNodes.length; i++){
        sectionNodes[i].addEventListener('click', clickSection)
    }
    videoHoverTitle.textContent = sectionsData[0].title
    video.src = videoLinks[0].route
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
    videoHoverTitle.textContent = sectionsData[id].title
    video.src = videoLinks[id].route
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


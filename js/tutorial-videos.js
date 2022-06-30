const sectionsData = [{id: 0, title: "What is Track my Kid?", completion: true }, 
                      {id: 1, title: "Download the app", completion: false}, 
                      {id: 2, title: "Register", completion: false}, 
                      {id: 3, title: "Lorem Ipsum", completion: false}, 
                      {id: 4, title: "Lorem Ipsum", completion: false}]
                      

const videoLinks = [{id: 0, route: "https://st.depositphotos.com/8469332/53417/v/600/depositphotos_534179478-stock-video-generic-php-source-code-building.mp4"}, 
                    {id: 1, route: "./assets/videos/DroneTest.mp4"}, 
                    {id: 2, route: "https://cdn.videvo.net/videvo_files/video/free/2015-07/large_watermarked/Clouds_1_1_preview.mp4"}, 
                    {id: 3, route: "https://cdn.videvo.net/videvo_files/video/free/2018-01/large_watermarked/171124_H1_006_preview.mp4"}, 
                    {id: 4, route: "https://cdn.videvo.net/videvo_files/video/premium/video0238/large_watermarked/06_day_part_II_729_wide_lednik_preview.mp4"}]

const videoDetails = [{id: 0, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed fringilla urna. Fusce rutrum nibh in dapibus bibendum.  Pellentesque accumsan egestas aliquam. Aliquam laoreet mauris ut libero sodales sodales. Ut vitae magna dolor. Proin consequat, arcu non vehicula ornare, massa erat cursus nisl, vulputate hendrerit sapien metus quis augue. Maecenas a diam porttitor ipsum dictum faucibus quis a dolor. Nulla lacinia tempus mauris, vel rhoncus ante pretium id. Integer non interdum nunc. Vivamus purus tortor, sollicitudin dapibus luctus placerat, venenatis eu mi. Integer urna ligula, varius id auctor eget, sollicitudin vitae enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam felis elit, congue elementum lorem et, facilisis mattis magna. Donec quis porttitor ante. <br><br>Nullam ullamcorper eu leo et suscipit. Duis dictum, nunc id pellentesque aliquet, nulla odio tincidunt risus, sed congue eros magna eget orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vitae dui eu libero sodales condimentum sed eget odio. Ut eu pretium lorem. Praesent ac volutpat mauris, id elementum diam. Aenean ac sollicitudin elit, at accumsan quam. In hac habitasse platea dictumst. Cras facilisis facilisis quam sit amet molestie. In tincidunt sagittis lacus, at cursus sem placerat sit amet. Praesent ut ligula eget odio sagittis dapibus nec nec lorem. Integer purus ante, rutrum sed tortor sit amet, semper mollis nulla. Etiam a est nec nibh molestie imperdiet a non mauris. Suspendisse eget sodales odio. Quisque nec commodo dui.<br><br> Suspendisse aliquam ex nec est auctor ullamcorper. Nunc eget laoreet ipsum. Suspendisse consequat sed enim ultrices interdum. Sed in mi vitae velit iaculis rutrum a et leo. Nam quis semper neque, ac porta turpis. Nunc ornare ipsum tempus velit condimentum sollicitudin. Duis elementum consectetur dui. Maecenas ornare lacus at tempor dignissim. Praesent porttitor est vitae sapien convallis ornare. Etiam maximus dapibus ex, nec pellentesque lacus scelerisque vel. Nunc semper, elit et finibus dictum, diam ex dapibus lorem, a eleifend ex ligula lacinia tellus."},
                      {id: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae erat a turpis tincidunt euismod. Proin lobortis interdum fermentum. Praesent suscipit lorem ac purus hendrerit, a varius dui varius. Nam dapibus mattis lectus, vitae rutrum magna consectetur a. Maecenas efficitur consectetur arcu id consequat. Nunc quis neque sit amet nulla egestas pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis sit amet tellus ut scelerisque. Fusce luctus dui turpis, quis tincidunt leo pretium at. Nunc mollis lorem et tellus volutpat, posuere commodo sapien semper. Nullam sed imperdiet orci. Fusce dapibus porttitor turpis, eu eleifend neque interdum non. Aliquam maximus mi nulla, et gravida urna tempor sed.<br><br> Maecenas a rhoncus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare lectus sed sem facilisis molestie. In et felis tempor ligula semper iaculis quis a enim. Ut volutpat lorem sed felis convallis luctus. Ut volutpat porttitor tempus. Praesent orci leo, ultrices quis maximus ac, ornare ac odio. Sed laoreet libero et enim imperdiet faucibus. Vivamus porta nisi justo, eget lobortis diam facilisis ut."},
                      {id: 2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum purus nec pretium facilisis. Quisque vitae neque blandit, pulvinar libero sit amet, dignissim nulla. Etiam ante nunc, iaculis non egestas nec, vulputate eget magna. Aliquam nec sollicitudin erat, id mattis dui. Duis in vestibulum tellus. Ut semper eleifend sem id egestas. Ut mi justo, ullamcorper sed luctus eget, eleifend at quam. Suspendisse condimentum mi sit amet molestie pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer congue purus sit amet sollicitudin mattis.<br><br> Sed congue sed nulla non dignissim. Maecenas vel sodales justo, eget feugiat lacus. Integer faucibus viverra pretium. Praesent id lacus non nisl gravida placerat id eget risus. Ut lacinia enim nec leo dignissim, non hendrerit turpis maximus. Donec id leo sollicitudin, tristique libero eu, congue velit. Donec justo ex, dictum sed nisi consequat, venenatis mollis leo. Morbi malesuada non augue id dictum. Duis eget neque ligula. Proin fringilla nulla ante, eget luctus libero efficitur nec. Pellentesque lectus erat, sodales non dui id, pulvinar gravida tortor. Suspendisse potenti."},
                      {id: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia ornare nisi, at egestas diam interdum non. Vivamus nibh lacus, fringilla ac varius non, interdum et magna. Morbi in dolor aliquet, interdum lorem a, dictum diam. Nam tincidunt diam dolor, at luctus urna accumsan ut. Mauris quis commodo orci, id pretium velit. Sed lacus nulla, imperdiet non erat eu, sodales porta erat. In quis nisl feugiat, pharetra ipsum quis, pharetra dolor. Mauris vitae sem mauris. Fusce efficitur, nulla eu tristique suscipit, felis eros varius nisi, ut molestie nisi lectus non sem. Sed auctor magna diam, eu tincidunt velit ultricies nec. Sed posuere nisi fermentum porta efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sit amet tellus a lacus venenatis facilisis. <br><br>Aenean purus augue, maximus non velit nec, varius volutpat lorem. Fusce ultricies eros et quam aliquet sollicitudin. Sed consectetur vel turpis sed gravida. Sed sit amet purus iaculis, convallis nisl eu, fringilla erat. Vivamus accumsan nisi vehicula enim lobortis mollis. Duis elementum sollicitudin bibendum. Proin eu molestie neque, quis euismod nisl. Nunc suscipit bibendum rhoncus. Duis mi tortor, ornare convallis arcu non, dapibus blandit lectus. Curabitur ac iaculis enim. Phasellus elit nibh, rutrum ut libero sit amet, elementum faucibus tellus. Nullam consequat sagittis imperdiet. Ut ornare ornare tellus quis tristique."},
                      {id: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere efficitur vulputate. Phasellus eu aliquam lorem, id dapibus nulla. Morbi sollicitudin purus libero, sed condimentum risus scelerisque sed. Etiam pellentesque vulputate imperdiet. Cras ultrices elementum sem, quis lobortis sem placerat in. Duis egestas massa at odio auctor auctor. Donec vehicula sapien ac metus vehicula elementum. <br><br>Fusce laoreet sapien sem, ac convallis augue aliquam fermentum. In eu justo dignissim, maximus augue at, tempus risus. Curabitur sit amet libero nec augue vulputate gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc posuere lectus ut iaculis hendrerit. Vestibulum auctor justo eu sapien pulvinar, id lacinia nisl pellentesque. Cras tempus sollicitudin vestibulum. Maecenas et enim lorem. Ut ac finibus nunc. Donec nec ornare massa. Aenean dignissim varius dui quis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}]

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
    createDescription(0)

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

function createDescription(id){
    videoTextContainer.replaceChildren()

    const descHeader = document.createElement('h3')
    descHeader.classList.add('video-description-title')
    descHeader.textContent = sectionsData[id].title

    const desc = document.createElement('p')
    desc.innerHTML = videoDetails[id].description

    videoTextContainer.appendChild(descHeader)
    videoTextContainer.appendChild(desc)
}

function updateVideo(id){
    videoHoverTitle.textContent = sectionsData[id].title
    video.src = videoLinks[id].route
}

function updateCompletion(id){
    sectionsData[id].completion = true
    sectionNodes[id].childNodes[1].childNodes[0].src = "assets/general-icons/Tick-Fill.png"
}

function clickSection(event){  
    var id = this.id;
    updateVideo(id)

    createDescription(id)

    for (var i =0; i < sectionNodes.length; i++){
        sectionNodes[i].className = sectionNodes[i].className.replace(" section-active", "")
    }
    event.currentTarget.className += " section-active"
    
    setTimeout(() => {
        if(menuBool == true){
            showMenu()
        }
    }, 100);

}

fillSectionsLoop()


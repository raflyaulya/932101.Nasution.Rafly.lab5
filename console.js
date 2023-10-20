let text =
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium."

function openMod(num){
    let modhead = document.getElementById("mod-head")
    let modnews = document.getElementById("mod-news")
    let modalcontainer = document.getElementById("modal-container")
    modhead.textContent= `Новость ${num}`
    modnews.textContent= `Новость ${num}: ${text}`
    modalcontainer.style.display= "block"
}

window.onclick = function(event){
    var modalmain = document.getElementById("modal-container")
    if (event.target == modalmain){
        modalmain.style.display="none";
    }
}
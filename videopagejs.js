function selectedCategory(){
    
}

const topics = document.getElementsByClassName("topicname");
var flags = [];
for (let i = 0; i < topics.length; i++) {
    flags[i] = false;
}
for (let i = 0; i < topics.length; i++) {
    topics[i].addEventListener('click', function () {
        const top = document.getElementsByClassName("topicname")[i];
        if (flags[i]) {
            const ele = document.getElementsByClassName("options")[i];
            ele.classList.remove("enable-options");
            ele.classList.add("disable-options");
            top.querySelector('i').innerText = "expand_more";
            flags[i] = false;
        }
        else {
            const ele = document.getElementsByClassName("options")[i];
            ele.classList.remove("disable-options");
            ele.classList.add("enable-options");
            top.querySelector('i').innerText = "expand_less";
            flags[i] = true;
        }
        top.classList.toggle("selected-topic");
    })

    // video[i].addEventListener('click', )
}
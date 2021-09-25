const menssages = [
    {
        from: "Yo mero",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maxime culpa cum minima corpure ratione libero a sunt odit. Eveniet rerum odit reprehenderit dolore?",
        time: "20:20"
    },
    {
        from: "Yo mero",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing eorporis, odio voluptas quaerat facere iure ratione libero a sunt odit. Eveniet rerum odit reprehenderit dolore?",
        time: "20:22"
    },
    {
        from: "Juan Perez",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maxime culpa cum minim sunt odit. Eveniet rerum odit reprehenderit dolore?",
        time: "20:22"
    },
    {
        from: "Yo mero",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maxime culpa cum minima corporis, odio voluptas quaerat facere iure ratione libero a sunt odit. Eveniet rerum odit reprehenderit dolore?",
        time: "20:24"
    },
    {
        from: "Juan Perez",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maxime culpa cum minima corporis, odio voluptas quaerat facere iu odit reprehenderit dolore?",
        time: "20:50"
    },
    {
        from: "Yo mero",
        text:"Lorem ipsum dolor sit amet consectetur ",
        time: "20:53"
    },
]


const me = "Yo mero"

const list = document.getElementById("chatList")

function insertMessage(msg){
    const div = document.createElement('div')
    div.classList.add('space-y-2')
    if(me == msg.from){
        div.classList.add('self-end')
    }

    const from = document.createElement('p')
    from.classList.add('fromLabel')
    if(me == msg.from){
        from.classList.add('text-right')
    }
    from.innerText = msg.from

    const content = document.createElement('p')
    if(me == msg.from){
        content.classList.add('txtContent')
    }else{
        content.classList.add('txtContentTo')
    }
    content.innerText = msg.text

    const time = document.createElement('p')
    time.classList.add('timeLabel')
    if(me == msg.from){
        time.classList.add('text-right')
    }
    time.innerText = msg.time

    div.appendChild(from)
    div.appendChild(content)
    div.appendChild(time)

    return div

    
}


function init() {

    for (const msg of menssages) {
        
        const div = insertMessage(msg)
        list.appendChild(div)
        list.scrollTop = list.scrollHeight
    }

}


init()

const enviar = document.getElementById("sender")
enviar.addEventListener("click", addMessage)

function getTime(){
    return dayjs().format('hh:mm a')
    
}


function addMessage(){
    
    const text = document.getElementById('box')

    if(text.value && text.value.trim().length > 0){
        const message = text.value.trim()
        const data = {
            from: "Yo mero",
            text: message,
            time: getTime()
        }

        const div = insertMessage(data)
        list.appendChild(div)
        list.scrollTop = list.scrollHeight

        text.value = ""

        alert('cargo')
        
    }
}





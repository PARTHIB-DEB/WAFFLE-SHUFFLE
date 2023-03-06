let C=document.getElementById('cards')
let endmessage=document.getElementById('end')
let gname = document.getElementById('game-name')
let c1=document.getElementById('Card1')
let c2=document.getElementById('Card2')
let allbtn=document.getElementById('btns')
let stopbtn =document.getElementById('btn-stop')
let username = prompt("WRITE YOUR NAME:")
let color1=prompt("COLOR FOR BOX-1!!")
let color2=prompt("COLOR FOR BOX-2!!")
let arr=[username,color1,color2]
var count=1
var i=1
var score=0
setInterval(() => {
    // CODE OF SHUFFLING MECHANISM (EXTERNAL SHUFFLING)
    if (c1.style.transform === 'translateX(-32rem)')
    {
        // console.log(arr)
        c1.style.transform = 'translateX(0rem)'
        c1.style.transitionDuration = '0.5s'
        c1.style.transitionTimingFunction = 'ease-in'
        var element=arr[1]
        arr[1]=arr[2]
        c2.style.transform='translateX(0rem)'
        c2.style.transitionDuration = '0.5s'
        c2.style.transitionTimingFunction = 'ease-in'
        arr[2]=element
    }
    else
    {
        // console.log(arr)
        c1.style.transform = 'translateX(-32rem)'
        c1.style.transitionDuration = '0.5s'
        c1.style.transitionTimingFunction = 'ease-in'
        var element=arr[1]
        arr[1]=arr[2]
        c2.style.transform='translateX(32rem)'
        c2.style.transitionDuration = '0.5s'
        c2.style.transitionTimingFunction = 'ease-in'
        arr[2]=element
    }

   //  QUERY TO THE USER AND WIN-RATE
    if (count%9==0)
    {
        let ask=prompt(`In Which Box,"${element}" resides (1 / 2)??`)
        if (ask==arr.indexOf(element))
        {
            score+=5
           alert(`CONGRATS !! TOTAL : ${score}`)
        }
        else
        {
           alert(`TRY AGAIN!!`)
        }
        i+=1
        if(i>2)
        {
           i=1
        }

    }
    count+=1

    // CODE FOR TERMINATING
    stopbtn.onclick = function() {
        alert(`${arr[0]} GOT TOTAL ${score}`)
        allbtn.style.marginTop='15rem'
        C.style.display='none'
        stopbtn.style.display='none'
        gname.style.display='none'
        endmessage.style.display='block'
        endmessage.style.marginTop='-12rem'
    }
},1000);


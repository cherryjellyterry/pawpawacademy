window.addEventListener("load",function(){
    let gnb_hidden = this.document.querySelector(".gnb_hidden")
    let left_dog = document.querySelector(".left_dog")
    let right_dog = document.querySelector(".right_dog")
    let bottom_dog = document.querySelector(".bottom_dog")
    let btn_gnb = document.querySelector(".btn_gnb")
    btn_gnb.addEventListener("click",function(){
        setTimeout(function(){
            left_dog.classList.add("on")
            right_dog.classList.add("on")
            bottom_dog.classList.add("on")
        },200)
    })

    let modal_gnb = this.document.querySelector(".modal_gnb")


    btn_gnb.addEventListener("click",function(){
        modal_gnb.classList.add("on")
        gnb_hidden.classList.add("on")
        btn_gnb.classList.add("on")
    })

    let close_btn = this.document.querySelector("#close_btn")
    close_btn.addEventListener("click",function(){
        modal_gnb.classList.remove("on")
        gnb_hidden.classList.remove("on")
        left_dog.classList.remove("on")
        right_dog.classList.remove("on")
        bottom_dog.classList.remove("on")
        setTimeout(function(){
            btn_gnb.classList.remove("on")

        },500)
        
    })
    
    let btn_top = this.document.querySelector(".btn_top")
    let lastScrollTop = 0
    let hideTimeout
    let working = false

    this.window.addEventListener("scroll",function(){
        
        // 스크롤 했을 때 실행되는 동작
        
        let scrollTop = this.document.documentElement.scrollTop 
        // 위에서 스크롤바가 얼만큼 내려왔는지 계산하여 변수에 저장

        // if(scrollTop == 0){
        //     working = true
        // }else{
        //     working = false
        // }

        if(working){return}

        if(scrollTop < lastScrollTop){
            // 마우스 휠을 위로 올렸을 때 
            btn_top.classList.add("on")

            // 브라우저 성능을 위해 이미 존재하는 타이머예약을 제거(있다면)
            if(hideTimeout){
                this.clearTimeout(hideTimeout)
            }

            // 3초 뒤에 메뉴 사라지게
            hideTimeout = this.setTimeout(function(){
                btn_top.classList.remove("on")
            },3000)
        }else{
            // 마우스 휠을 아래로 내렸을 때
            btn_top.classList.remove("on")
        }



        lastScrollTop = scrollTop
    })

    // 마우스 올리고있는동안 메뉴사라지는 기능을 취소하는 기능
    btn_top.addEventListener("mouseover",function(){
        clearTimeout(hideTimeout)
    })
    btn_top.addEventListener("mouseout",()=>{
        hideTimeout = setTimeout(function(){
            btn_top.classList.remove("on")
        },3000)
    })

    // 위로 올려보내기
    btn_top.addEventListener("click",function(event){
        event.preventDefault()
        
        btn_top.classList.remove("on")
        working = true
        window.scrollTo({top:0,behavior:"smooth"})
        setTimeout(function(){
            working = false
        },1000)

    })

})
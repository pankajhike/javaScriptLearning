var istatus = document.querySelector('h5')
var btn =document.querySelector('#add')
var flag =0;

add.addEventListener('click', function(){
    if(flag==0){
        istatus.innerHTML="Friends";
        istatus.style.color='green'
        btn.innerHTML="Remove Friend"
        flag++;
    }else{
        istatus.innerHTML="Stranger";
        istatus.style.color='red'
        btn.innerHTML="Add Friend"

        flag--;
    }

})

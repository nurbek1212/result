let b = true ;
let m = [];
let waner = document.querySelector('.waner')
let loading = document.querySelector('.game-displey')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let lefta = document.querySelector('.lefta')
let righta = document.querySelector('.righta')
let games = document.querySelector('.games')
let n = 0;
let o = 0


document.querySelectorAll('.square').forEach((item,index) =>{
    item.addEventListener('click',()=>{
        if(item.textContent === ''){
            if(b){
                item.textContent = 'X'
                m[index] = 'X'
                b = false
           }
           else{
               item.textContent = 'O'
               m[index] = 'O'
               b = true
           }
           hisoblash();
        }
        
       
    })
})
function hisoblash(){
    if(m[0]+m[1]+m[2] == 'XXX'  ||
        m[3]+m[4]+m[5] == 'XXX'  ||
        m[6]+m[7]+m[8] == 'XXX'  ||
        m[0]+m[3]+m[6] == 'XXX'  ||
        m[1]+m[4]+m[7] == 'XXX'  ||
        m[2]+m[5]+m[8] == 'XXX'  ||
        m[0]+m[4]+m[8] == 'XXX'  ||
        m[2]+m[4]+m[6] == 'XXX'
    ){  n+=1
        waner.style.display = 'flex'
        waner.textContent = 'X o`yinchi g`olib 😎'
        loading.style.filter = 'blur(5px)'
        right.textContent = `${n}`
        lefta.style.color.filter = 'blur(5px)'
        righta.style.color.filter = 'blur(5px)'
    }
    
    if(m[0]+m[1]+m[2] == 'OOO'  ||
        m[3]+m[4]+m[5] == 'OOO'  ||
        m[6]+m[7]+m[8] == 'OOO'  ||
        m[0]+m[3]+m[7] == 'OOO'  ||
        m[1]+m[4]+m[7] == 'OOO'  ||
        m[2]+m[5]+m[8] == 'OOO'  ||
        m[0]+m[4]+m[8] == 'OOO'  ||
        m[2]+m[4]+m[6] == 'OOO'
    ){  o+=1
         waner.textContent = 'O o`yinchi g`olib 😎' 
         waner.style.display = 'flex'
         loading.style.filter = 'blur(5px)'
         left.textContent = `${o}`
         lefta.style.color.filter = 'blur(5px)'
         righta.style.color.filter = 'blur(5px)'
    }

    
}
window.addEventListener('keypress', run)
function run (e){
    if(e.key == 'Enter'){
        let squl = document.querySelector('.square')
        squl.forEach(element => {
            element.textContent  = ''
            waner.style.display = 'none'
            loading.style.filter = 'none'
        });
        // squl.forEach((squl) =>{
        //     squl.textContent = "";
        //     waner.style.display = 'none'
        //     loading.style.filter = 'none    '
        // });
    }
}
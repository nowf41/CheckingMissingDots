let n = 0;
let body = document.getElementById('body');
let setBG = function(cc){
    document.getElementById('body').style.background = '#' + cc;
}


window.onload = function(){
    window.alert('Enterキーを押すことで背景色が変化し、ドット抜けの確認が可能です。');
}

window.document.onkeydown = function(event){
    if (event.key === 'Enter') {
        switch(n%6){
            case 0:
                setBG('fff');break;
            case 1:
                setBG('f00');break;
            case 2:
                setBG('0f0');break;
            case 3:
                setBG('00f');break;
            case 4:
                setBG('000');break;
            case 5:
                window.alert('確認が完了しました。\nEnterキーを押すことで再度確認できます。');break;
            default:
                alert('STOPCODE 100: an unknown error has occured.');break;
        }
        console.log('n number equals : ' + n);
        n++;
    }
}
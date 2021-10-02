function sobrepor(){
    let menu = document.getElementById('menu')
    menu.classList.remove('menusobrepostoat')
    menu.classList.add('menusobreposto')
}
function fechar(){
    let menu = document.getElementById('menu')
    menu.classList.remove('menusobreposto')
    menu.classList.add('menusobrepostoat') 
}

function verificar(){
    let marcador = document.getElementsByName('marcador')
    if (marcador[0].checked == true){
        let segundo = document.getElementById('02')
        let terceiro = document.getElementById('03')

        segundo.classList.add('finali')
        segundo.classList.remove('final')

        terceiro.classList.remove('final')
        terceiro.classList.add('finali')

        let borda2  = document.getElementById('b1')
        borda2.style.border = '1px solid rgba(128, 128, 128, 0.308) '

        let borda3  = document.getElementById('b2')
        borda3.style.border = '1px solid rgba(128, 128, 128, 0.308) '


        let final = document.getElementById('01')
        final.classList.remove('finali')
        final.classList.add('final')

        let borda1  = document.getElementById('b0')
        borda1.style.border = '1px solid var(--cianomod)'
    }
    else if (marcador[1].checked == true){
        let primeiro = document.getElementById('01')
        let terceiro = document.getElementById('03')

        primeiro.classList.remove('final')
        primeiro.classList.add('finali')

        terceiro.classList.remove('final')
        terceiro.classList.add('finali')

        let borda1  = document.getElementById('b0')
        borda1.style.border = '1px solid rgba(128, 128, 128, 0.308) '

        let borda3  = document.getElementById('b2')
        borda3.style.border = '1px solid rgba(128, 128, 128, 0.308) '


        let segundo = document.getElementById('02')
        segundo.classList.remove('finali')
        segundo.classList.add('final')

        let borda2  = document.getElementById('b1')
        borda2.style.border = '1px solid var(--cianomod)'
        
    }
    else if (marcador[2].checked == true){
        let primeiro = document.getElementById('01')
        let segundo = document.getElementById('02')

        primeiro.classList.remove('final')
        primeiro.classList.add('finali')

        segundo.classList.remove('final')
        segundo.classList.add('finali')
        
        let borda0  = document.getElementById('b0')
        let borda1  = document.getElementById('b1')
        borda1.style.border = '1px solid rgba(128, 128, 128, 0.308) '
        borda0.style.border = '1px solid rgba(128, 128, 128, 0.308) '
        


        let final = document.getElementById('03')
        final.classList.remove('finali')
        final.classList.add('final')
        let borda2  = document.getElementById('b2')
        borda2.style.border = '1px solid var(--cianomod)'
    }
}

function agradecimento(){
    let alerta = document.getElementById('agradecimento')
    alerta.style.display = 'block'
}

function finalizar(){
    let alerta = document.getElementById('agradecimento')
    let menu = document.getElementById('menu')
    alerta.style.display = 'none'
    menu.classList.remove('menusobreposto')
    menu.classList.add('menusobrepostoat')
}

function abrirmenu(){
    let menu = document.getElementById('menuhamburguer');
    let fechar = document.getElementById('fecharhamburguer');
    let menumobile = document.getElementById('menumobile')
    
    menumobile.style.display = 'block'
    menumobile.style.zIndex = 100
    menu.style.display = 'none'
    fechar.style.display = 'block'
    
}
function fecharmenu(){
    let fechar = document.getElementById('fecharhamburguer');
    let menumobile = document.getElementById('menumobile');
    let menu = document.getElementById('menuhamburguer')
    
    menumobile.style.display = 'none'
    fechar.style.display = 'none'
    menu.style.display = 'block'
}



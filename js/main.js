
const imageCh = "./img/imgcharacters/";
const infoCh = [
    {
        name: 'Luffy',
        image: imageCh + 'luffy.jpg',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
    {
        name: 'Zoro',
        image: imageCh + 'zoro.jpg',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
    {
        name: 'Nami',
        image: imageCh + 'nami.png',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
    {
        name: 'Usopp',
        image: imageCh + 'usopp.jpg',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
    {
        name: 'Sanji',
        image: imageCh + 'sanji.jfif',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
    {
        name: 'Chopper',
        image: imageCh + 'Chopper.png',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
    {
        name: 'Robin',
        image: imageCh + 'robin.jpg',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
    {
        name: 'Franky',
        image: imageCh + 'franky.jpg',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
    {
        name: 'Brook',
        image: imageCh + 'brook.jpg',
        description:'Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem'
    },
]


console.log(infoCh)
    

   








function acao(){
    let modalCh = document.querySelector('.container-modal')

    modalCh.style.display = 'block';
}


function fechar(){

    
    let containerModal = document.querySelector('.container-modal')

    containerModal.style.display = 'none';

}



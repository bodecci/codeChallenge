$(document).ready(readyNow);
let counter = 0;

function readyNow() {
    console.log('in readyNow');
    $('.submitBtn').on('click', clickButton);

}

function clickButton(){
    let button = $('<button id="submitBtn>Generate</button>');
    $('.container').append(button);
    newDiv = $(`<div id="divNew"><p></>
                <button class="Swap">Swap</button>
                <button class="Delete">Delete</button>
                
            </div> `);
    $('.Swap').on('click', this.css);
    $('.Delete').on('click', this.css);
    $('.container').append(newDiv);
    clicked();
    // $('#divNew').append
    counter++;

    $('#counterId').append(button);
    $('#counterId').empty();
    $('.container').append(counter);
    $('container').empty();
    
} 

function clicked() {
    
}

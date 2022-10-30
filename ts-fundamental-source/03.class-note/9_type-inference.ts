let a: number = 11;
let arr: (number | null)[] = [0, 1, null];

window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);   //<- OK
    console.log(mouseEvent.kangaroo); //<- Error!
};

window.onscroll = function(uiEvent) {
    console.log(uiEvent.button); //<- Error!
}
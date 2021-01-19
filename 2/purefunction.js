//1.PureFunction
function addPure(a,b){
    return a+b;
}
console.log('PureFunction:',addPure(1,6));

//2.AviodSideEffect
constb=7;
function addSideEffect(a){
    returna+b;
}
console.log('SideEffect:',addSideEffect(1));
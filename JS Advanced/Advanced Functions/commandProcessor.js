function solve ()
{
    let state="";
    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(str){
        state+=str;
    }
    function removeStart(n){
        state=state.slice(n)
    }
    function removeEnd(n){  
        //-n zapochva da broi ot kraq :O
        state=state.slice(0,-n)
    }
    function print(){
        console.log(state)
    }
}
const firstZeroTest=solve();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
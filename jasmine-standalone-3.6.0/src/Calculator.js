var Calculator = function(){
    var add = function(a,b) {
        if ( !a || !b ) throw new Error('Two arguments need to be provided.')
        return a + b 
    }

    return { 
        add
    }
}
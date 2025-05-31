function sub_sum(n){
    if (n<0){
        return 0
    }
    else if(n>=5){
        return (sub_sum(n-5))+1
    }
    else if(5>n>=2){
        return (sub_sum(n-2))+1
    }
    else {
        return (sub_sum(n-1))+1
    }
}

console.log(sub_sum(3))

function sub(n){
    if (n<0){
        return 0
    }
    if (n==0){
        return 1
    }
    else{
        return sub(n-1)+sub(n-2)+sub(n-5)
    }
}

console.log(sub(3))
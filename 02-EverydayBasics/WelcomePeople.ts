function welcome (x:string[] | string) {
    if (Array.isArray(x)){
        return 'arr'+x.join(" and ")
    }
    

}
interface placeholder {
    placeholder : string,
    size : "big" | "small",
    onChange : any,
    
}
 
export  function TextInput({placeholder , size,onChange} : placeholder){
                return <input style={{
                    padding : size === "big" ? 20 : 10,
                    margin : size === "big" ? 20 : 10,
                    borderColor : "black",
                    borderWidth : 1,
                }} placeholder={placeholder} onChange={onChange}>
                </input>
}
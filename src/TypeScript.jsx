import React from 'react'

const TypeScript = () => {
    const [todo, setTodo] = useState<String>("")
  return (
    <div>
        const age : number = 5 // const age = 5
        const name: string = "Piyush" // const name = "Piyush"
        const isStudent: boolean = true
        const hobbies : string [] = ["chess","football","cricket"] // const hobbies =  ["chess","football","cricket"]
        let role : [string,number] = role["age":30]
        let game : any //if don't know typeof variable then you can declare it as a "any" or "unknow" 

        //for function

        function add(x:number , y:number){

        }
        add(10,20)

        // le printName :(name:string) : void //void returns undefined but never does't return anything
    </div>
  )
}

export default TypeScript
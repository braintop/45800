// 1. Explicit types
let age: number = 30
let fullName: string = "Daniel"
let isActive: boolean = true


console.log(age, fullName, isActive)


// 2. default parameter
function greetUser(name: string, greeting="hello"): string {
    return `${greeting} ${name}`
  }

  // 3. optional parameter
  function greetUser2(name: string, greeting?:string): string {
    return `${greeting ||  "hello"} ${name}`
  }

  console.log(greetUser("John"))//hello John
  console.log(greetUser("Jane", "Hi, we love u"))//Hi we love u jane

// 3. Interface
interface Product {
    id: number
    name: string
    price: number
    inStock: boolean
  }
  const product: Product = {
    id: 1,
    name: "Product 1",
    price: 100,
    inStock: true
  }
  console.log(product.id);

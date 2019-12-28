// changing the default parameter from undefined to user
const greeter = (name="user") => { 
    console.log('Hello ' + name)
}

greeter("Mert")
greeter();

const transaction = (type, {label, stock=0} = {}) => {
    console.log(type, label, stock)
}
/* if we don't assign an empty object {} as a default value, the app crashes
when we do not pass any argument other that "order" 

We can also assign seperate values to l"label" and "stock" params as 
a default value

*/
transaction("order");
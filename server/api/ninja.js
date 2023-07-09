export default defineEventHandler(async(event) =>{

    // const  { name }= getQuery(event)

    // const { age }=await readBody(event)

    const { data }=await $fetch('https://api.currencyapi.com/v3/latest?apikey=yeKZgGXvJ22WY0Ikn178wHOkmwgWHIyrnN05ngTk')

return{
        message: data
  
}
})
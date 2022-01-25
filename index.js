const  express =require("express")
const  request =require("request-promise")

const app=express()
const PORT =process.env.PORT||5000
const apiKey="b43e91fb824752147e573249b55d477a"
const BaseUrl=`http://api.scraperapi.com?api_key=${apiKey}`
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('THIS  IS  PRODUCTS  API  ')
})

//  get  product details
app.get('/products/:productId',async(req,res)=>{
    const {productId}=req.params
    try {
        const response= await request(`${BaseUrl}&url=https://www.amazon.com/dp/${productId}`)
        res.json(response)
    } catch (error) {
        res.json(error)
    }
})
app.listen(PORT,()=>{
    console.log(`Server running  at port ${PORT}&autoparse=true`)
})
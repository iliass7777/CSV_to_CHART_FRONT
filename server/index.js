const fastify=require('fastify')({logger:true});
require('dotenv').config();


fastify.get('/',(req,res)=>{
    res.send('Hello World');
});
fastify.post('/api/test',(req,res)=>{
    return {message:'Hello'};

})
fastify.listen({port:process.env.PORT || 3000},(err,address)=>{
    if(err) throw err;
    console.log(`Server is running on ${address}`);
});



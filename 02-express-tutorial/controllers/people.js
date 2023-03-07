const {people} = require('../data')


const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({sucess:false,msg:"Please provide name value"})
    }
    res.status(201).json({sucess:true,person:name})
}

const createPostmanPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).send({success:false,msg:"Please Provide something"})
    }
    res.status(201).json({sucess:true,data:[...people,name]})
    
}

const updatePerson = (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find(person => person.id === Number(id))
    if(!person){
        return res.status(404).send({success:false,msg:`no person with id ${id}`})
    }

    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    }) 
    res.status(200).send({success:true,data:newPeople})

}

const deletePerson = (req,res)=>{
    const {name} = req.body

    const person = people.find(person => person.id === Number(req.params.id))
    if(!person){
        return res.status(404).send({success:false,msg:`no person with id ${req.params.id}`})
    }

    const newPeople = people.filter((person)=>person.id !== Number(req.params.id))   
    
    return res.status(200).send({success:true,data:newPeople})

}

module.exports= {getPeople,createPerson,createPostmanPerson,updatePerson,deletePerson}
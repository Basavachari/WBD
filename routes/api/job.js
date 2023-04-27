const express = require('express')
const Job = require('../../models/Job')
const auth = require('../../middleware/auth')
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const { createClient } = require('redis');
const client = createClient({
    password: 'gWKSd8PNDtG7tw5ZWD1hJ6Oq3c3wRpXw',
    socket: {
        host: 'redis-12017.c263.us-east-1-2.ec2.cloud.redislabs.com',
        port: 12017
    }
});//connect to express router
const router = express.Router();
(async () => {
    await client.connect();
})();

client.on('connect', () => console.log('::> Redis Client Connected'));
client.on('error', (err) => console.log('<:: Redis Client Error', err));
//GET api/posts
//Test route
//public route
router.post('/addjob',[auth], async (req, res) => {
    const {
        jobName,
        price,
        country,
        experience,
        category,
        skills,
        jobType,
        description
    } = req.body;
    // console.log(req.user);
    try {
        //create new job
        const jobFields = {};
        jobFields.user = req.user.id;
        if (jobName) jobFields.jobName = jobName;
        if (price) jobFields.price = price;
        if (country) jobFields.country = country;
        if (experience) jobFields.experience = experience;
        if (category) jobFields.category = category;
        if (skills) jobFields.skills = skills.split(',').map(skill => skill.trim());
        if (jobType) jobFields.jobType = jobType;
        if (description) jobFields.description = description;

        // console.log("this is jobFields")
        //create new job
        const newJob = new Job(jobFields);
        //save job
        const job = await newJob.save();
        res.json(job);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('!!post error in creating the job database!!!');
    }
});

router.get('/getjob/:job_id', async (req, res) => {
    try {
        const job = await Job.findOne({_id:req.params.job_id}).populate('user',['username'])
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.json(job);
    }
    catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server Error');
    }
});

//@route POST api/job
//@access Private

router.get('/getjobbyuser',auth,  async (req, res) => {
    try {
    
        const job = await Job.find({'user':req.user.id}).populate({
            path:'proposal',
            select:'biduser bidprice biddescription',
            populate:{
                path:'biduser',
                select:'username',
                model:'user'
            }
        })
        // for(let i=0;i<job.length;i++){
        //     // for(let j = 0;j<job[i].proposal.length;j++){
        //         job[i].proposal[j].populate('biduser')
        //     // }
        // }

        if (!job) { 
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.json(job);
    }
    catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server Error');
    }
});



router.post('/updatejob', [auth], async (req, res) => {
    const {
        jobid,
        proposal
    }=req.body;
    console.log(jobid)
    console.log(proposal)

    try {
        const job = Job.findOneAndUpdate(
            {_id:jobid},{$push:{proposal:proposal}},{new:true}
        );
        console.log("chariiiiiii");
        
        res.json({msg:"success"});
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// Get the jobs which are not owned by him

router.get('/getjobs', auth,async (req, res) => {
    console.log(req.user.id)
   
    const jobsData=await client.get(`jobs`)
    if(jobsData){
        return res.json(JSON.parse(jobsData))
    }
    try {
        const jobs = await Job.find({user:{$ne:req.user.id}});
        // client.set(`jobs`,JSON.stringify(jobs))
        // Set the value of a key with an expiration time of 10 seconds
client.set(`jobs`, JSON.stringify(jobs), (error, reply) => {
    if (error) {
      console.error(error);
    } else {
      console.log(reply);
      
      // Set an expiration time of 10 seconds for the key
      client.expire(`jobs`, 10, (error, reply) => {
        if (error) {
          console.error(error);
        } else {
          console.log(reply);
        }
      });
    }
  });
        res.json(jobs);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
const data = [
    {
        jobid: 1,
        ownerid:1,
        name : "Web Design",
        desc : "this job should be able to increase redux speed, optimization and accuracy in aimLabs",
        skills: "HTML, CSS, Javascript, React, Node, Express, MongoDB",
        price: "500",
        category: "Web Development",
        bids: [
            {userid : 1,bidid:1, name: "nitish", price: "500", days: "5", desc: "I can do this job" },
            {userid : 2,bidid:2, name: "satish", price: "1000", days: "5", desc: "I can do this job" },
            {userid : 1,bidid:3, name: "nitish", price: "700", days: "5", desc: "I can do this job" },
        ]

    },
    {
        jobid: 2,
        ownerid:1,
        name : "Logo Design",
        desc : "hello job should be able to increase redux speed, optimization and accuracy in aimLabs",
        skills: "HTML, CSS, Javascript, React, Node, Express, MongoDB",
        price: "500",
        category: "Web Development",
        bids: [
            { userid : 1, bidid:1, name: "nitish", price: "1400", days: "5", desc: "I can do this job" },
            { userid : 2, bidid:2, name: "satish", price: "1000", days: "5", desc: "I can do this job" },
            
        ]

    }
]

export default data;
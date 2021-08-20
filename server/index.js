const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune',(req,res)=>{
  const fortune = [ "A hunch is creativity trying to tell you something.","Don’t just think, act!","Get your mind set…confidence will lead you on.","Good to begin well, better to end well.","Miles are covered one step at a time",
  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune)
});

app.get('/api/lucky',(req,res)=>{
  let luckyCont = []
  let randomNumbers = Math.floor(Math.random()* 777) + 1 
  luckyCont.push(randomNumbers)

  res.status(200).send(luckyCont)
});

//I wasted too much time trying to get other things to work didn't even try to finish this part
app.get("/api/people/?search=r2", (req, res) => {
  
  res.status(200).send(rd)

})


app.listen(4000, () => console.log("Server running on 4000"));

// app.post('/api/users/',(req,res)=>{
  //   let users = []
  //   const {name} = req.body
  //   const {email} = req.body
  //   let userObj = {
    //     name: name.value,
    //     email: email.value
    //   }
    //   users.push(userObj)
    //   console.log(userObj)
    //   res.status(200)
    // })
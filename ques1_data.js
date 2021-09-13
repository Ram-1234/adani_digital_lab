const awards = [

    {

    name: 'James Peebles',

    category: 'Physics',

    research: 'Theoretical discoveries in physical cosmology',

    year: 2019,

  },

  {

    name: 'Michel Mayor',

    category: 'Physics',

    research: 'Discovery of an exoplanet orbiting a solar-type star',

    year: 2019,

  },

  {

    name: 'Didier Queloz',

    category: 'Physics',

    research: 'Discovery of an exoplanet orbiting a solar-type star',

    year: 2019,

  },

  {

    name: 'John B. Goodenough',

    category: 'Chemistry',

    research: 'Development of lithium-ion batteries',

    year: 2019,

  },

  {

    name: 'M. Stanley Whittingham',

    category: 'Chemistry',

    research: 'Development of lithium-ion batteries',

    year: 2019,

  },

  {

    name: 'Akira Yoshino',

    category: 'Chemistry',

    research: 'Development of lithium-ion batteries',

    year: 2019,

  },

  {

    name: 'Arthur Ashkin',

    category: 'Physics',

    research: 'Optical tweezers and their application to biological systems',

    year: 2018,

  },

  {

    name: 'Gerard Mourou',

    category: 'Physics',

    research: 'Method of generating high-intensity, ultra-short optical pulses',

    year: 2018,

  },

  {

    name: 'Donna Strickland',

    category: 'Physics',

    research: 'Method of generating high-intensity, ultra-short optical pulses',

    year: 2018,

  },

  {

    name: 'Frances H. Arnold',

    category: 'Chemistry',

    research: 'Directed evolution of enzymes',

    year: 2018,

  },

  {

    name: 'George P. Smith',

    category: 'Chemistry',

    research: 'Phage display of peptides and antibodies.',

    year: 2018,

  },

  {

    name: 'Sir Gregory P. Winter',

    category: 'Chemistry',

    research: 'Phage display of peptides and antibodies.',

    year: 2018,

  },

];


function prize(data){
   let prize=data.map((item)=>{
     return {category:`${item.category}`,year:`${item.year}`,winners:[{name:`${item.name}`,share:`${item.name==='James Peebles'? 0.5:0.25 }`}]}
   })
   return prize;
}

let result=prize(awards)
console.log(result);

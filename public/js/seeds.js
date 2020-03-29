var parks = [
    {
      name: "Zilker Park",
      lat: 30.1549,
      lon:  97.4636
    },
    {
      name: "Hemisfair Park",
      lat: 29.4198,
      lon: 98.486
    }
  ];
  
  //seed button for parks to facilitate easier initial deployment on heroku and elsewhere
  $("#parkSeeds").click(function(){
    $.get("/api/park/", result => {
      console.log(result);
      if(!result.length){ //a check to make sure you haven't already clicked the button and double seeded the table
        console.log("Park Seeds being added");
        parks.forEach( park => {
          $.post("/api/park/seeds",{
            name: park.name,
            lat: park.lat,
            lon: park.lon
          }).then( response => {
          console.log(response);
          });
        })
      }
    })
  });//end of seed click
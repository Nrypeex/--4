const button = document.getElementById('brew');

let request = new XMLHttpRequest();
request.open("GET", "cofee.json", false);
request.send(null)
let parsed = JSON.parse(request.responseText);


button.addEventListener('click', (event) => {
  
    alert('brewing');
    
    
    let arr = [];

    let ch = document.getElementsByClassName('form-check-input');
    for(let i=0;i<ch.length;i++)
    {
        if(ch[i].checked) 
        arr.push(ch[i].value);
        
    }
   
 
   for(let i=0;i<parsed.length;i++)
   {
        if(arr.toString() == parsed[i].ingredients.toString())
        {
            let res = document.getElementById('name');
            let res1 = document.getElementById('description');
            let res2 = document.getElementById('photo');
            console.log(parsed[i].title);
            console.log(parsed[i].description);
            console.log(parsed[i].id);

            res.textContent = parsed[i].title;
            res1.textContent = parsed[i].description;
            res2.data = parsed[i].image;
        }
            
   }
    
})
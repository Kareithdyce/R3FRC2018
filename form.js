function myFunction(){
    var triggerWords = ['innovate', 'bring in','launch', 'establish','commence', 
    'dedicate','allot', 'assign','commit', 'diverse','distinction', 'divergence', 
    'connect','join', 'associate','affix', ' ally','simplify', 'reduce','shorten', 'disentangle',
    'security', 'collateral','preservation', 'guarantee','expand', 'grow','increase', 'amplify','broaden', 
    'devote', 'marketing', 'creativity', 'leadership', 'design', 'investment', 'imagination', 'ingenuity', 
    'inspiration', 'originality', 'influence', 'vision', 'command', 'initiative', 'contribution', 'venture', 
    'technology', 'telecommunications', 'automations', 'engineer'];
    //Find the buzz words
    //Finds the goals points
    var str = document.getElementById("goals").value;
    str = String(str).toLowerCase();
    var points1 = 0;
    for(let i = 0; i < triggerWords.length; i++){
        let regex = new RegExp(triggerWords[i], 'g');
        if(str.match(regex) != null){
            points1 += str.match(regex).length;
        }
    }
    //Finds the 5 year plan one
    str = document.getElementById("5yearplan").value;
    str = String(str).toLowerCase();
    var points2 = 0;
    for(let i = 0; i < triggerWords.length; i++){
        let regex = new RegExp(triggerWords[i], 'g');
        if(str.match(regex) != null){
            points2 += str.match(regex).length;
        }
    }
    //Finds the long term goal one
    str = document.getElementById("longtermplan").value;
    str = String(str).toLowerCase();
    var points3 = 0;
    for(let i = 0; i < triggerWords.length; i++){
        let regex = new RegExp(triggerWords[i], 'g');
        if(str.match(regex) != null){
            points3 += str.match(regex).length;
        }
    }

    var id  = { CEO : document.getElementById("ceo").value,
                company: document.getElementById("company_name").value,
                years: document.getElementById("years").value,
                online: document.getElementById("online").value, 
                track: document.getElementById("data").value, 
                revenue: document.getElementById("revenue").value, 
                revenue2: document.getElementById("revenue2").value, 
                state: document.getElementById("state").value, 
                industry: document.getElementById("industry").value, 
                goals :points1,
                year5 :points2,
                longplan :points3,
                totalPoints : 0};
    //Calculate points
    id.totalPoints += (id.revenue * .24); 
    id.totalPoints += (10 * (id.revenue - id.revenue2)/id.revenue);
    if(String(id.track) == 'Yes'){
        id.totalPoints += 5;
    }
    else{
        id.totalPoints += 8;
    }   
    
    if(String(id.online) == 'Yes'){
        id.totalPoints += 14;
    }
    else{
        id.totalPoints += 25;
    }   
    
    if(id.points1 >= 4){
        id.totalPoints += 10
    }
    else{
        id.totalPoints++;
    }
    
    if(id.points3 >= 7){
        id.totalPoints+=11;
    }
    else{
        id.totalPoints += 12;
    }

    if(id.points2 >= 6){
        id.totalPoints += 12;
    }
    else{
        id.totalPoints += 2; 
    }

    alert(id.totalPoints);
}
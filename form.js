function myFunction(){
    var triggerWords = ['innovate', 'bring in','launch', 'establish','commence', 
    'dedicate','allot', 'assign','commit', 'diverse','distinction', 'divergence', 
    'connect','join', 'associate','affix', ' ally','simplify', 'reduce','shorten', 'disentangle',
    'security', 'collateral','preservation', 'guarantee','expand', 'grow','increase', 'amplify','broaden', 
    'devote', 'marketing', 'creativity', 'leadership', 'design', 'investment', 'imagination', 'ingenuity', 
    'inspiration', 'originality', 'influence', 'vision', 'command', 'initiative', 'contribution', 'venture', 
    'technology', 'telecommunications', 'automations', 'engineer'];

    var str = document.getElementById("alotWords").value;
    str = String(str).toLowerCase();
    var points = 0;
    for(let i = 0; i < triggerWords.length; i++){
        let regex = new RegExp(triggerWords[i], 'g');
        if(str.match(regex) != null){
            points += str.match(regex).length;
            console.log(str.match(regex));
        }
    }
    var id  = { name: document.getElementById("name").value,
                company: document.getElementById("text1").value,
                years: document.getElementById("text2").value,
                city: document.getElementById("text3").value, 
                buzzWord :points };
    
    console.log(id);
}
const victim = 
    {name: 'one',
    strength: 15
    }

const attacker = 
    {name: 'two',
    strength: '10'
    }
//victimStrength = 15;
//attackerStrength = 30;

function battle(victimStrength, attackerStrength){
if (victim.strength === attacker.strength) {
    console.log("Dead");
}
else if (victim.strength < attacker.strength) {
    console.log("Also dead");
}
else {
    console.log("Alive");
}
};

//console.log(victim, attacker);
battle(20, 15);
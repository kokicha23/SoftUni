class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];

    }
    registerParticipant(name, condition, money) {
        let conditionValue = this.priceForTheCamp[condition];
        if (!conditionValue) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        let foundParticipant = this.listOfParticipants.find((x) => x.name === name);
        if (foundParticipant) {
            return `The ${name} is already registered at the camp.`;
        }
        if (conditionValue > money) {
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        })
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {
        let foundParticipant = this.listOfParticipants.find((x) => x.name === name);
        if (!foundParticipant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        let indexOFFoundParticipat = this.listOfParticipants.indexOf(foundParticipant);
        this.listOfParticipants.splice(indexOFFoundParticipat, 1);
        return `The ${name} removed successfully.`;
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let foundParticipant1 = this.listOfParticipants.find((x) => x.name === participant1);
        let foundParticipant2 = this.listOfParticipants.find((x) => x.name === participant2);
        if (typeOfGame === "WaterBalloonFights") {
            if (!foundParticipant1 || !foundParticipant2) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (foundParticipant1.condition !== foundParticipant2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            let participant1Power = foundParticipant1.power;
            let participant2Power = foundParticipant2.power;
            if (participant1Power > participant2Power) {
                foundParticipant1.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
                
            } else if (participant2Power > participant1Power) {
                foundParticipant2.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            }
            return `There is no winner.`;
        } else if (typeOfGame === 'Battleship') {
            if (!foundParticipant1) {
                throw new Error(`Invalid entered name/s.`);
            } else {
                foundParticipant1.power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`;
            }

        }

    }
    toString () {
        let resultArr=[];
        resultArr.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        let sortedByWins=this.listOfParticipants.sort((a,b)=>b.wins-a.wins);
        sortedByWins.forEach((x)=>resultArr.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`))

        return resultArr.join('\n');
    }
    
}



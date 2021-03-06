/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
     constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
//Calculate Tree Density(forumla: number of trees/park area)
       calculateDensity() {
        const density = this.numTrees / this.areaPark;
        console.log(`${this.name} has a tree density of ${this.numTrees} in a radius of ${this.areaPark}km(s).`);
        }
    }

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

    
const allParks = [new Park('Green Park', 1987, 300, 0.3),
                  new Park('national Park', 1940, 550, 0.6),
                  new Park('Central Park', 1900, 1, 1100)];

const allStreets = [new Street('Ocean Avenue', 1993, 1, 4),
                    new Street('Redland Street', 1970, 2.7, 2),
                    new Street('Bristol Street', 1980, 0.5),
                    new Street('Lake Street', 1960, 3, 5)];

function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [ sum, sum / arr.length ];
}

function reportParks(p) {
     
    console.log(`-----------PARKS REPORT-----------`);
    //Density
    p.forEach(el => el.calculateDensity());
    
    //Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [ totalAge, avgAge ] = calc(ages);
    console.log(`Our ${p.length} parks have a average of ${avgAge} years, and also have a total of${totalAge} years.`);
    
    //More than a 1000 trees
    
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
    console.log(`-----------STREETS REPORT-----------`);
    
    //Total and average length of towns streets
    const [ totalLength, avgLength ] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength}km, with an average length of ${avgLength}km.`);
    
    //Classify sizes
    s.forEach(el => el.classifyStreet());
}
reportParks(allParks);
reportStreets(allStreets);

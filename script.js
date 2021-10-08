// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
function pAequorFactory(specimenNum, dna) {
  let obj = {
    specimenNum,
    dna,
    mutate() {
      let a = Math.floor(Math.random() * 15);
      let b = this.dna[a];
      //console.log(this.dna)
      let c = returnRandBase();
      while (c === b) {
        c = returnRandBase();
      }
      this.dna[a] = c;
      //console.log(this.dna)
      return this.dna;
    },
    compareDNA(f) {
      let e = 0;
      for (let k = 0; k < 15; k++) {
        if (f.dna[k] == this.dna[k]) {
          e++;
        }
      }
      let g = Number.parseFloat((e / 15) * 100).toFixed(2);
      //console.log(`specimen #${this.specimenNum} and specimen #${f.specimenNum} have ${g}% DNA in common`)
      return `${g}% DNA in common`;
    },
    willLikelySurvive() {
      let l = 0;
      for (let m = 0; m < 15; m++) {
        if (this.dna[m] == "C" || this.dna[m] == "G") {
          l++;
        }
      }
      let n = Number.parseFloat((l / 15) * 100).toFixed(2);
      if (n >= 60) {
        this.willLikelySurvive = n;
        return true;
      } else {
        this.willLikelySurvive = n;
        return false;
      }
    },
    complementStrand() {
      let q = [];
      for (let r = 0; r < 15; r++) {
        if (this.dna[r] == "A") {
          q.push("T");
        } else if (this.dna[r] == "T") {
          q.push("A");
        } else if (this.dna[r] == "C") {
          q.push("G");
        } else if (this.dna[r] == "G") {
          q.push("C");
        }
      }
      this.complementStrand = q;
      return q;
    },
  };
  return obj;
}

function thirtypAequor() {
  let p = [];
  for (let o = 1; o <= 30; o++) {
    /////////******** */
    let obj1;
    do {
      obj1 = pAequorFactory(o, mockUpStrand());
    } while (obj1.willLikelySurvive() == false);
    p.push(obj1);
  }
  return p;
}
function mostRelated(arr1) {
  let arr2 = [];
  for (ele1 of arr1) {
    for (ele2 of arr1) {
      let compare = ele2.compareDNA(ele1);
      if (ele1.specimenNum !== ele2.specimenNum) {
        arr2.push({
          specimenNum1: ele1.specimenNum,
          specimenNum2: ele2.specimenNum,
          compareDNA: compare,
        });
      }
    }
  }
  let arr3 = arr2.sort((a, b) => {
    return b.compareDNA - a.compareDNA;
  });
  return arr3[0];
}

/*
let x=pAequorFactory(1,mockUpStrand())
//console.log(x.dna)
let y=pAequorFactory(2,mockUpStrand())
//console.log(y.dna)
//console.log(x.compareDNA(y))
//console.log(y.willLikelySurvive())
//console.log(x.complementStrand())

let z=pAequor(5)
//console.log(z)
//console.log(mostRelated(z))
*/

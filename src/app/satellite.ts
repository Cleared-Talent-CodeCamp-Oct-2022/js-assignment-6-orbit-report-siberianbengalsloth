export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		return true;
   }
// this method should return true IF you call it on a satellite object that has a type of 'space debris' 
// ex) somesatteliteObj.isSpaceDebris() would return if somesatellite.type === 'space debris'
}

// TODO 3a: fix isSpaceDebris check

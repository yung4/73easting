class Unit {
    constructor() {
        this.country = "NULL";
        this.corp = "NULL";
        this.division = "NULL";
        this.brigade = "NULL";
        this.battalion = "NULL";
        this.unitCode = "NULL";
        this.unitType = "NULL";
        this.path = [];
        this.comments = "NULL";
    }

    constructor(country, corp, division, brigade, battalion, unitCode, unitType, path, comments) {
        this.country = country;
        this.corp = corp;
        this.division = division;
        this.brigade = brigade;
        this.battalion = battalion;
        this.unitCode = unitCode;
        this.unitType = unitType;
        this.path = path;
        this.comments = comments;
    }

    updatePath(data) {
        if (!Array.isArray(data)) {
            return null;
        }

        //assumes data is in [[lat1, lon1], [lat2, lon2]] format
        this.path = data;
    }

    appendPath(coord) {
        if (!Array.isArray(coord)) {
            return;
        }

        //coord needs to be in [lat, lon] format
        this.path.push(coord);
    }
}
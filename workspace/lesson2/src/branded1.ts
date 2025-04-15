
type Metric = number & {__brand:'Meter'}
type Meter = number & {__brand:'American'}

type UserID = number & {__brand: 'UID'};
type OrderID = number & {__brand : 'ADMIN'};


let fiveMeters: Metric = 5 as Metric;

let tenKms: Meter = 10 as Meter;

function calculateDistance(mtrs:Metric) {
    // some stuff   
}

// calculateDistance(tenKms); // fails
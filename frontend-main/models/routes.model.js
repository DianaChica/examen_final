const mongoose = require('mongoose')


var routerSchema = new mongoose.Schema({
    FuelTypeCode: { type: String, required: ' This field is required', },
    StationName: { type: String, required: ' This field is required', },
    StreetAddress: { type: String, required: ' This field is required', },
    City: { type: String, required: ' This field is required', },
    State: { type: String, required: ' This field is required', },
    Zip:{ type: Number, required: ' This field is required', },
    StatusCode: { type: String, required: ' This field is required', },
    GroupsWithAccessCode: { type: String, required: ' This field is required', },
    AccessDaysTime :{ type: String, required: ' This field is required', },
    EVLevel2EVSENum:{ type: String, required: ' This field is required', },
    EVDCFastCount:{ type: String, required: ' This field is required', },
    EVNetwork:{ type: String, required: ' This field is required', },
    GeocodeStatus:{ type: String, required: ' This field is required', },
    Latitude:{ type: String, required: ' This field is required', },
    Longitude:{ type: String, required: ' This field is required', },
    DateLastConfirmed:{ type: String, required: ' This field is required', },
    Id:{ type: String, required: ' This field is required', },
    UpdatedAt:{ type: String, required: ' This field is required', },
    OwnerTypeCode:{ type: String, required: ' This field is required', },
    OpenDate:{ type: String, required: ' This field is required', },
    EVConnectorTypes:{ type: String, required: ' This field is required', },
    Country:{ type: String, required: ' This field is required', },
});

mongoose.model("Routes", routerSchema);
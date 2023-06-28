import mongoose from 'mongoose';


const RequestStatSchema = new mongoose.Schema({
    requestId: String,
    equipmentId: String,
    totalNumberofRequests: Number,
    yearlyRequestsTotal: Number,
    year: Number,
    monthlyData: [{
        month: String,
        totalRequests: Number,
        totalEquipmentDown: Number,
    }],
    dailyData: [{
        date: String,
        totalRequests: Number,
        totalEquipmentDown: Number,
    }]  
},
{ timestamps: true }
);

const RequestStat = mongoose.model('RequestStat', RequestStatSchema);

export default RequestStat;
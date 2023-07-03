import mongoose from 'mongoose';


const maintenanceRequestSchema = new mongoose.Schema({
    userId: String,
    equipment: {
        type: [mongoose.Types.ObjectId],
        of: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    description: String,
    priority: { type: String, enum: ['Urgent', 'Not Urgent'], default: 'Urgent' }
},
{ timestamps: true }
);

const MaintenanceRequest= mongoose.model('MaintenanceRequest', maintenanceRequestSchema);

export default MaintenanceRequest;
import mongoose from 'mongoose';


const EquipmentStatSchema = new mongoose.Schema({
    equipmentId: String,
    totalNumber: Number,

    
    name: {
        type: String,
        required: true['Please provide name of equipment'],
        trim:true,
        maxlength: 100
    },
    make: String,
    model: String,
    serialNumber: {
        type: String,
        required: true['Please provide a serial number for this equipment'],
        trim:true,
        maxlength: 100
    },
    location: {
        type: String,
        enum: {
            values: [
            'Reception',
            'Cashier',
            'Medical Records',
            'Finance Office',
            'COO',
            'OT 01',
            'OT 02',
            'OT CORRIDOR',
            'IVF THEATRE',
            'Lounge',
            'CSSD',
            'PACU',
            'MMD STORES',
            'PRE-OP',
            'Hospital Corridors',
            'Wards',
            'Nurse Station 01',
            'Nurse Station 02',
            'Conference Room',
            'HR Office',
            'Server Room'
        ],
        message: '{VALUE} is not a location within the Hospital',
    },
        // enum: [
        //     'Reception',
        //     'Cashier',
        //     'Medical Records',
        //     'Finance Office',
        //     'COO',
        //     'OT 01',
        //     'OT 02',
        //     'OT CORRIDOR',
        //     'IVF THEATRE',
        //     'Lounge',
        //     'CSSD',
        //     'PACU',
        //     'MMD STORES',
        //     'PRE-OP',
        //     'Hospital Corridors',
        //     'Wards',
        //     'Nurse Station 01',
        //     'Nurse Station 02',
        //     'Conference Room',
        //     'HR Office',
        //     'Server Room'
        // ]
    },
    status: { type: String, enum: ['Available', 'In Use', 'Under Maintenance'], default: 'Available' },
    //assignedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},
{ timestamps: true }
);

const EquipmentStat = mongoose.model('EquipmentStat', EquipmentStatSchema);

export default EquipmentStat;
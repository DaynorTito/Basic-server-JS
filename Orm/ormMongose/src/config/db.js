import mongose from "mongoose";
export const initDb = async () => {
    try {
        await mongose.connect('mongodb://localhost:27017/labWeek2');
        console.log('Connected to database succesfully..')
    } catch (error) {
        console.error(error);
    }
};




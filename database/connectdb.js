
import mongoose from "mongoose";


try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Conectado ')
} catch (error) {
    console.log('error de coneccion'+error)
}
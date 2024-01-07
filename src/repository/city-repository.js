const { City } = require('../models/index');

class  CityRepository {
    async createCity({ name }){
        try {
            const city = await City.create({ name });
            return city;
        } catch(error) {
            console.log("Something went wrong in Repository layer.");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch(error) {
            console.log("Something went wrong in Repository layer.");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch(error) {
            console.log("Something went wrong in Repository layer.");
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in Repository layer.");
            throw {error};
        }
    }

    async updateCity(cityId , data) {
        try {
            // The below approach will also work but will not return updates object
            // const city = await City.update(data,{
            //     where: {
            //         id: cityId
            //     }
            // } );
            //for getting updated data in mysql we have used the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in Repository layer.");
            throw {error};
        }
    }

}
module.exports = CityRepository;
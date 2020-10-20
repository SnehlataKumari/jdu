import { Model } from "mongoose";

export class DBService {
  constructor(private model: Model<any>) {

  }

  findAll(where={}) {
    return this.model.find(where).sort('-_id');
  }

  delete(query){
    return this.model.remove(query);
  }

  create(userObject) {
    return this.model.create(userObject);
  }

  findByIdAndDelete(userId) {
    return this.model.findByIdAndDelete(userId);
  }

  findByIdAndUpdate(userId, userObject, options = { new: true }) {
    return this.model.findByIdAndUpdate(userId, userObject, options);
  }

  findById(id) {
    return this.model.findById(id);
  }

  findOne(query) {
    return this.model.findOne(query);
  }

  find(query={}) {
    return this.model.find(query);
  }

  insertMany(values) {
    return this.model.insertMany(values);
  }

  async update(model, updateObject) {
    return this.findByIdAndUpdate(model._id, updateObject);
  }
}
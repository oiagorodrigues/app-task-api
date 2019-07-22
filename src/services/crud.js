function CrudService(model) {
  this.model = model
}

CrudService.prototype.list = async function() {
  try {
    const docs = await this.model.find().select('-__v');
    return Promise.resolve({ data: docs });
  } catch (err) {
    return Promise.reject(err) ;
  }
}

CrudService.prototype.insert = async function(data) {
  try {
    const doc = await this.model.create(data);
    return Promise.resolve({ data: doc._id });
  } catch (err) {
    return Promise.reject(err) ;
  }
}

CrudService.prototype.get = async function(id) {
  try {
    const doc = await this.model.findById(id).select('-__v');
    return Promise.resolve({ data: doc });
  } catch(err) {
    return Promise.reject(err);
  }
}

CrudService.prototype.update = async function(id, data) {
  try {
    await this.model.findByIdAndUpdate(id, { $set: data });
    const doc = await this.model.findById(id).select('-__v');
    return Promise.resolve({ data: doc });
  } catch(err) {
    return Promise.reject(err);
  }
}

CrudService.prototype.delete = async function(id) {
  try {
    const result = await this.model.findByIdAndRemove(id);
    return Promise.resolve({ data: result });
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = CrudService;

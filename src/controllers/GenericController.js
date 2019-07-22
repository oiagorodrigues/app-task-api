const CrudService = require('../services/crud')

function GenericController(model) {
  this.service = new CrudService(model);

  this.index = async (req, res) => {
    try {
      const result = await this.service.list()
      return res.json(result);
    } catch (err) {
      return res.status(204).json(err);
    }
  }
  
  this.store = async (req, res) => {
    try {
      const result = await this.service.insert(req.body)
      return res.json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  }

  this.get = async (req, res) => {
    try {
      const result = await this.service.get(req.params.id)
      return res.json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  }

  this.put = async (req, res) => {
    try {
      const result = await this.service.update(req.params.id, req.body)
      return res.json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  }

  this.delete = async (req, res) => {
    try {
      const result = await this.service.delete(req.params.id)
      return res.json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  }
}

module.exports = GenericController;

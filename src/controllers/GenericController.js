const CrudService = require('../services/crud')

function GenericController(model) {
  this.service = new CrudService(model);

  this.index = async (req, res) => {
    try {
      const result = await this.service.list();

      return res.json({
        ...result,
        length: result.data.length,
      });

    } catch (err) {
      return res.status(404).json({ status: 404, message: err.message });
    }
  }
  
  this.store = async (req, res) => {
    try {
      const id = await this.service.insert(req.body);
      return res.json(id);
    } catch (err) {
      return res.status(422).json(err);
    }
  }

  this.get = async (req, res) => {
    try {
      const result = await this.service.get(req.params.id);

      if (!result.data) {
        return res.json({});
      }

      return res.json(result);
    } catch (err) {
      return res.status(404).json({ status: 404, message: err.message });
    }
  }

  this.put = async (req, res) => {
    try {
      const result = await this.service.update(req.params.id, req.body);

      if (!result.data) {
        return res.status(204).json({});
      }

      return res.json(result);
    } catch (err) {
      return res.status(404).json({ status: 404, message: err.message });
    }
  }

  this.delete = async (req, res) => {
    try {
      const result = await this.service.delete(req.params.id);

      if (!result.data) {
        return res.status(204).json({});
      }

      return res.json(200);
    } catch (err) {
      return res.status(404).json({ status: 404, message: err.message });
    }
  }
}

module.exports = GenericController;

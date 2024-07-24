const Data = require('../models/Data');

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find({ user: req.user._id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createData = async (req, res) => {
  const { title, description } = req.body;
  try {
    const data = new Data({
      title,
      description,
      user: req.user._id,
    });
    const createdData = await data.save();
    res.status(201).json(createdData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateData = async (req, res) => {
  const { title, description } = req.body;
  try {
    const data = await Data.findById(req.params.id);

    if (data) {
      data.title = title;
      data.description = description;

      const updatedData = await data.save();
      res.json(updatedData);
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);

    if (data) {
      await data.remove();
      res.json({ message: 'Data removed' });
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

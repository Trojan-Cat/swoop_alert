const Marker = require("../models/markers-model");

createMarker = (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a marker"
    });
  }

  const marker = new Marker(body);

  if (!marker) {
    return res.status(400).json({ success: false, error: err });
  }

  marker
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: marker._id,
        message: "Marker created!"
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: "Marker not created!"
      });
    });
};

updateMarker = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update"
    });
  }

  Marker.findOne({ _id: req.params.id }, (err, marker) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Marker not found!"
      });
    }
    marker.lat = body.lat;
    marker.lng = body.lng;
    marker
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: marker._id,
          message: "Marker updated!"
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: "marker not updated!"
        });
      });
  });
};

deleteMarker = async (req, res) => {
  await Marker.findOneAndDelete({ _id: req.params.id }, (err, marker) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!marker) {
      return res
        .status(404)
        .json({ success: false, error: `marker not found` });
    }

    return res.status(200).json({ success: true, data: marker });
  }).catch(err => console.log(err));
};

getMarkerById = async (req, res) => {
  await Marker.findOne({ _id: req.params.id }, (err, marker) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!marker) {
      return res
        .status(404)
        .json({ success: false, error: `marker not found` });
    }
    return res.status(200).json({ success: true, data: marker });
  }).catch(err => console.log(err));
};

getMarker = async (req, res) => {
  await Marker.find({}, (err, marker) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!marker.length) {
      return res
        .status(404)
        .json({ success: false, error: `marker not found` });
    }
    return res.status(200).json({ success: true, data: marker });
  }).catch(err => console.log(err));
};

module.exports = {
  createMarker,
  updateMarker,
  deleteMarker,
  getMarker,
  getMarkerById
};

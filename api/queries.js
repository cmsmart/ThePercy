var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://webuser2:webuser2@localhost:5432/percy2018';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getPosAll: getPosAll,
  getEventList: getEventList,
  getPosByEvent: getPosByEvent,
  getPosByMusher: getPosByMusher
};



function getPosAll(req, res, next) {
  db.any('select * from percy.vw_pos_stats')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL positions'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getEventList(req, res, next) {
  db.any('SELECT year, name, event_id FROM percy.events ORDER BY year, name;')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved event list'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getPosByEvent(req, res, next) {
  var eventID = parseInt(req.params.id);
  var msg = 'Retrieved ALL positions for event '.eventID
  db.any(`SELECT
            event_id,
            musher_id::varchar,
            name,
            bib_no
            run_dist,
            REPLACE((date_part('epoch', run_time)*INTERVAL '1 second')::varchar,':','.') run_time_str,
            ROUND((extract('epoch' FROM run_time)/3600)::numeric,2)::real hours
            FROM percy.vw_pos_stats where event_id = $1`,
    eventID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: msg
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getPosByMusher(req, res, next) {
  var eventID = parseInt(req.params.id);
  var msg = 'Retrieved ALL positions for musher '.eventID
  db.any(`SELECT
            event_id,
            musher_id::varchar,
            name,
            bib_no,            
            run_dist,
            REPLACE((date_part('epoch', run_time)*INTERVAL '1 second')::varchar,':','.') run_time_str,
            ROUND((extract('epoch' FROM run_time)/3600)::numeric,2)::real hours
            FROM percy.vw_pos_stats where musher_id = $1`,
    eventID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: msg
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
